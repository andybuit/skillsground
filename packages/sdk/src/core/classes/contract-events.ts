import { ContractWrapper } from "./contract-wrapper";
import { BaseContract, Event, providers } from "ethers";
import { EventType } from "../../constants";
import { ListenerFn } from "eventemitter3";
import { EventFragment } from "@ethersproject/abi";
import { ContractEvent, EventQueryFilter } from "../../types/index";

/**
 * Listen to Contract events in real time
 * @public
 */
export class ContractEvents<TContract extends BaseContract> {
  private contractWrapper;

  constructor(contractWrapper: ContractWrapper<TContract>) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Subscribe to transactions in this contract.
   * @remarks Will emit an "event" object containing the transaction status ('submitted' and 'completed') and hash
   * @example
   * ```javascript
   * contract.events.addTransactionListener((event) => {
   *   console.log(event);
   * }
   * ```
   * @param listener - the callback function that will be called on every transaction
   * @public
   */
  public addTransactionListener(listener: ListenerFn) {
    this.contractWrapper.addListener(EventType.Transaction, listener);
  }

  /**
   * Remove a transaction listener
   * @remarks Remove a listener that was added with addTransactionListener
   * @example
   * ```javascript
   * contract.events.removeTransactionListener((event) => {
   *  console.log(event);
   * }
   * ```
   * @param listener - the callback function to remove
   * @public
   */
  public removeTransactionListener(listener: ListenerFn) {
    this.contractWrapper.off(EventType.Transaction, listener);
  }

  /**
   * Subscribe to contract events
   * @remarks You can add a listener for any contract event to run a function when
   * the event is emitted. For example, if you wanted to listen for a "TokensMinted" event,
   * you could do the following:
   * @example
   * ```javascript
   * contract.events.addEventListener("TokensMinted", (event) => {
   *   console.log(event);
   * });
   * ```
   * @public
   * @param eventName - the event name as defined in the contract
   * @param listener - the callback function that will be called on every new event
   * @returns a function to un-subscribe from the event
   */
  public addEventListener(
    eventName: keyof TContract["filters"] | (string & {}),
    listener: (event: Record<string, any>) => void,
  ) {
    // validates event, throws error if not found
    const event = this.contractWrapper.readContract.interface.getEvent(
      eventName as string,
    );

    const address = this.contractWrapper.readContract.address;
    const filter = { address, topics: [event.name] };

    const wrappedListener = (log: providers.Log) => {
      const parsedLog =
        this.contractWrapper.readContract.interface.parseLog(log);
      listener(
        this.toContractEvent(parsedLog.eventFragment, parsedLog.args, log),
      );
    };

    this.contractWrapper.getProvider().on(filter, wrappedListener);
    return () => {
      this.contractWrapper.getProvider().off(filter, wrappedListener);
    };
  }

  /**
   * Listen to all events emitted from this contract
   *
   * @example
   * ```javascript
   * contract.events.listenToAllEvents((event) => {
   *   console.log(event.eventName) // the name of the emitted event
   *   console.log(event.data) // event payload
   * }
   * ```
   * @public
   * @param listener - the callback function that will be called on every new event
   * @returns A function that can be called to stop listening to events
   */
  public listenToAllEvents(listener: (event: ContractEvent) => void) {
    const address = this.contractWrapper.readContract.address;
    const filter = { address };

    const wrappedListener = (log: providers.Log) => {
      try {
        const parsedLog =
          this.contractWrapper.readContract.interface.parseLog(log);

        listener(
          this.toContractEvent(parsedLog.eventFragment, parsedLog.args, log),
        );
      } catch (e) {
        console.error("Could not parse event:", log, e);
      }
    };

    this.contractWrapper.getProvider().on(filter, wrappedListener);

    return () => {
      this.contractWrapper.getProvider().off(filter, wrappedListener);
    };
  }

  /**
   * Remove an event listener from this contract
   * @remarks Remove a listener that was added with addEventListener
   * @example
   * ```javascript
   * contract.events.removeEventListener("TokensMinted", (event) => {
   *   console.log(event);
   * });
   * ```
   * @public
   * @param eventName - the event name as defined in the contract
   * @param listener - the listener to unregister
   */
  public removeEventListener(
    eventName: keyof TContract["filters"] | (string & {}),
    listener: providers.Listener,
  ) {
    // validates event, throws error if not found
    const event = this.contractWrapper.readContract.interface.getEvent(
      eventName as string,
    );
    this.contractWrapper.readContract.off(event.name as string, listener);
  }

  /**
   * Remove all listeners on this contract
   * @remarks Remove all listeners from a contract
   * @example
   * ```javascript
   * contract.events.removeAllListeners();
   * ```
   * @public
   */
  public removeAllListeners() {
    this.contractWrapper.readContract.removeAllListeners();
    const address = this.contractWrapper.readContract.address;
    const filter = { address };
    this.contractWrapper.getProvider().removeAllListeners(filter);
  }

  /**
   * Get All Events
   * @remarks Get a list of all the events emitted from this contract during the specified time period
   * @example
   * ```javascript
   * // Optionally pass in filters to limit the blocks from which events are retrieved
   * const filters = {
   *   fromBlock: 0,
   *   toBlock: 1000000,
   * }
   * const events = await contract.events.getAllEvents(filters);
   * console.log(events[0].eventName);
   * console.log(events[0].data);
   * ```
   *
   * @param filters - Specify the from and to block numbers to get events for, defaults to all blocks
   * @returns The event objects of the events emitted with event names and data for each event
   */
  public async getAllEvents(
    filters: EventQueryFilter = {
      fromBlock: 0,
      toBlock: "latest",
      order: "desc",
    },
  ): Promise<ContractEvent[]> {
    const events = await this.contractWrapper.readContract.queryFilter(
      {},
      filters.fromBlock,
      filters.toBlock,
    );

    const orderedEvents = events.sort((a, b) => {
      return filters.order === "desc"
        ? b.blockNumber - a.blockNumber
        : a.blockNumber - b.blockNumber;
    });

    return this.parseEvents(orderedEvents);
  }

  /**
   * Get Events
   * @remarks Get a list of the events of a specific type emitted from this contract during the specified time period
   * @example
   * ```javascript
   * // The name of the event to get logs for
   * const eventName = "Transfer";
   * // Optionally pass in filters to limit the blocks from which events are retrieved
   * const filters = {
   *   fromBlock: 0,
   *   toBlock: 1000000,
   * }
   * const events = await contract.events.getEvents(eventName, filters);
   * console.log(events[0].eventName);
   * console.log(events[0].data);
   * ```
   *
   * @param eventName - The name of the event to get logs for
   * @param filters - Specify the from and to block numbers to get events for, defaults to all blocks. @see EventQueryFilter
   * @returns The requested event objects with event data
   */
  public async getEvents(
    eventName: string,
    filters: EventQueryFilter = {
      fromBlock: 0,
      toBlock: "latest",
      order: "desc",
    },
  ): Promise<ContractEvent[]> {
    const event = this.contractWrapper.readContract.interface.getEvent(
      eventName as string,
    );
    const filter = this.contractWrapper.readContract.filters[event.name];

    const events = await this.contractWrapper.readContract.queryFilter(
      filter(),
      filters.fromBlock,
      filters.toBlock,
    );

    const orderedEvents = events.sort((a, b) => {
      return filters.order === "desc"
        ? b.blockNumber - a.blockNumber
        : a.blockNumber - b.blockNumber;
    });

    return this.parseEvents(orderedEvents);
  }

  private parseEvents(events: Event[]): ContractEvent[] {
    return events.map((e) => {
      const transaction = Object.fromEntries(
        Object.entries(e).filter(
          (a) => typeof a[1] !== "function" && a[0] !== "args",
        ),
      ) as providers.Log;
      if (e.args) {
        const entries = Object.entries(e.args);
        const args = entries.slice(entries.length / 2, entries.length);

        const data: Record<string, unknown> = {};
        for (const [key, value] of args) {
          data[key] = value;
        }

        return {
          eventName: e.event || "",
          data,
          transaction,
        };
      }

      return {
        eventName: e.event || "",
        data: {},
        transaction,
      };
    });
  }

  private toContractEvent(
    event: EventFragment,
    args: ReadonlyArray<any>,
    rawLog: providers.Log,
  ): ContractEvent {
    const transaction = Object.fromEntries(
      Object.entries(rawLog).filter(
        (a) => typeof a[1] !== "function" && a[0] !== "args",
      ),
    ) as providers.Log;
    const results: Record<string, unknown> = {};
    event.inputs.forEach((param, index) => {
      if (Array.isArray(args[index])) {
        const obj: Record<string, unknown> = {};
        const components = param.components;
        if (components) {
          const arr = args[index];
          for (let i = 0; i < components.length; i++) {
            const name = components[i].name;
            obj[name] = arr[i];
          }
          results[param.name] = obj;
        }
      } else {
        results[param.name] = args[index];
      }
    });
    return {
      eventName: event.name,
      data: results,
      transaction,
    };
  }
}
