/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IContractDeployerInterface extends utils.Interface {
  functions: {
    "deployInstance(address,bytes,bytes,bytes32,uint256,string)": FunctionFragment;
    "deployInstanceProxy(address,address,bytes,bytes32,uint256,string)": FunctionFragment;
    "getContractDeployer(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deployInstance"
      | "deployInstanceProxy"
      | "getContractDeployer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployInstance",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployInstanceProxy",
    values: [string, string, BytesLike, BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractDeployer",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployInstanceProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractDeployer",
    data: BytesLike
  ): Result;

  events: {
    "ContractDeployed(address,address,address)": EventFragment;
    "Paused(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
}

export interface ContractDeployedEventObject {
  deployer: string;
  publisher: string;
  deployedContract: string;
}
export type ContractDeployedEvent = TypedEvent<
  [string, string, string],
  ContractDeployedEventObject
>;

export type ContractDeployedEventFilter =
  TypedEventFilter<ContractDeployedEvent>;

export interface PausedEventObject {
  isPaused: boolean;
}
export type PausedEvent = TypedEvent<[boolean], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface IContractDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IContractDeployerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deployInstance(
      publisher: string,
      contractBytecode: BytesLike,
      constructorArgs: BytesLike,
      salt: BytesLike,
      value: BigNumberish,
      publishMetadataUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployInstanceProxy(
      publisher: string,
      implementation: string,
      initializeData: BytesLike,
      salt: BytesLike,
      value: BigNumberish,
      publishMetadataUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getContractDeployer(
      _contract: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  deployInstance(
    publisher: string,
    contractBytecode: BytesLike,
    constructorArgs: BytesLike,
    salt: BytesLike,
    value: BigNumberish,
    publishMetadataUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployInstanceProxy(
    publisher: string,
    implementation: string,
    initializeData: BytesLike,
    salt: BytesLike,
    value: BigNumberish,
    publishMetadataUri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getContractDeployer(
    _contract: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    deployInstance(
      publisher: string,
      contractBytecode: BytesLike,
      constructorArgs: BytesLike,
      salt: BytesLike,
      value: BigNumberish,
      publishMetadataUri: string,
      overrides?: CallOverrides
    ): Promise<string>;

    deployInstanceProxy(
      publisher: string,
      implementation: string,
      initializeData: BytesLike,
      salt: BytesLike,
      value: BigNumberish,
      publishMetadataUri: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getContractDeployer(
      _contract: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "ContractDeployed(address,address,address)"(
      deployer?: string | null,
      publisher?: string | null,
      deployedContract?: null
    ): ContractDeployedEventFilter;
    ContractDeployed(
      deployer?: string | null,
      publisher?: string | null,
      deployedContract?: null
    ): ContractDeployedEventFilter;

    "Paused(bool)"(isPaused?: null): PausedEventFilter;
    Paused(isPaused?: null): PausedEventFilter;
  };

  estimateGas: {
    deployInstance(
      publisher: string,
      contractBytecode: BytesLike,
      constructorArgs: BytesLike,
      salt: BytesLike,
      value: BigNumberish,
      publishMetadataUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployInstanceProxy(
      publisher: string,
      implementation: string,
      initializeData: BytesLike,
      salt: BytesLike,
      value: BigNumberish,
      publishMetadataUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getContractDeployer(
      _contract: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployInstance(
      publisher: string,
      contractBytecode: BytesLike,
      constructorArgs: BytesLike,
      salt: BytesLike,
      value: BigNumberish,
      publishMetadataUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployInstanceProxy(
      publisher: string,
      implementation: string,
      initializeData: BytesLike,
      salt: BytesLike,
      value: BigNumberish,
      publishMetadataUri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getContractDeployer(
      _contract: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
