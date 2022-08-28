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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace IClaimCondition {
  export type ClaimConditionStruct = {
    startTimestamp: BigNumberish;
    maxClaimableSupply: BigNumberish;
    supplyClaimed: BigNumberish;
    quantityLimitPerTransaction: BigNumberish;
    waitTimeInSecondsBetweenClaims: BigNumberish;
    merkleRoot: BytesLike;
    pricePerToken: BigNumberish;
    currency: string;
  };

  export type ClaimConditionStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string
  ] & {
    startTimestamp: BigNumber;
    maxClaimableSupply: BigNumber;
    supplyClaimed: BigNumber;
    quantityLimitPerTransaction: BigNumber;
    waitTimeInSecondsBetweenClaims: BigNumber;
    merkleRoot: string;
    pricePerToken: BigNumber;
    currency: string;
  };
}

export declare namespace IDropSinglePhase {
  export type AllowlistProofStruct = {
    proof: BytesLike[];
    maxQuantityInAllowlist: BigNumberish;
  };

  export type AllowlistProofStructOutput = [string[], BigNumber] & {
    proof: string[];
    maxQuantityInAllowlist: BigNumber;
  };
}

export interface IDropSinglePhaseInterface extends utils.Interface {
  functions: {
    "claim(address,uint256,address,uint256,(bytes32[],uint256),bytes)": FunctionFragment;
    "setClaimConditions((uint256,uint256,uint256,uint256,uint256,bytes32,uint256,address),bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "claim" | "setClaimConditions"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claim",
    values: [
      string,
      BigNumberish,
      string,
      BigNumberish,
      IDropSinglePhase.AllowlistProofStruct,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimConditions",
    values: [IClaimCondition.ClaimConditionStruct, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setClaimConditions",
    data: BytesLike
  ): Result;

  events: {
    "ClaimConditionUpdated(tuple,bool)": EventFragment;
    "TokensClaimed(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimConditionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
}

export interface ClaimConditionUpdatedEventObject {
  condition: IClaimCondition.ClaimConditionStructOutput;
  resetEligibility: boolean;
}
export type ClaimConditionUpdatedEvent = TypedEvent<
  [IClaimCondition.ClaimConditionStructOutput, boolean],
  ClaimConditionUpdatedEventObject
>;

export type ClaimConditionUpdatedEventFilter =
  TypedEventFilter<ClaimConditionUpdatedEvent>;

export interface TokensClaimedEventObject {
  claimer: string;
  receiver: string;
  startTokenId: BigNumber;
  quantityClaimed: BigNumber;
}
export type TokensClaimedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokensClaimedEventObject
>;

export type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;

export interface IDropSinglePhase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDropSinglePhaseInterface;

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
    claim(
      receiver: string,
      quantity: BigNumberish,
      currency: string,
      pricePerToken: BigNumberish,
      allowlistProof: IDropSinglePhase.AllowlistProofStruct,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setClaimConditions(
      phase: IClaimCondition.ClaimConditionStruct,
      resetClaimEligibility: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  claim(
    receiver: string,
    quantity: BigNumberish,
    currency: string,
    pricePerToken: BigNumberish,
    allowlistProof: IDropSinglePhase.AllowlistProofStruct,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setClaimConditions(
    phase: IClaimCondition.ClaimConditionStruct,
    resetClaimEligibility: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(
      receiver: string,
      quantity: BigNumberish,
      currency: string,
      pricePerToken: BigNumberish,
      allowlistProof: IDropSinglePhase.AllowlistProofStruct,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimConditions(
      phase: IClaimCondition.ClaimConditionStruct,
      resetClaimEligibility: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ClaimConditionUpdated(tuple,bool)"(
      condition?: null,
      resetEligibility?: null
    ): ClaimConditionUpdatedEventFilter;
    ClaimConditionUpdated(
      condition?: null,
      resetEligibility?: null
    ): ClaimConditionUpdatedEventFilter;

    "TokensClaimed(address,address,uint256,uint256)"(
      claimer?: string | null,
      receiver?: string | null,
      startTokenId?: BigNumberish | null,
      quantityClaimed?: null
    ): TokensClaimedEventFilter;
    TokensClaimed(
      claimer?: string | null,
      receiver?: string | null,
      startTokenId?: BigNumberish | null,
      quantityClaimed?: null
    ): TokensClaimedEventFilter;
  };

  estimateGas: {
    claim(
      receiver: string,
      quantity: BigNumberish,
      currency: string,
      pricePerToken: BigNumberish,
      allowlistProof: IDropSinglePhase.AllowlistProofStruct,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setClaimConditions(
      phase: IClaimCondition.ClaimConditionStruct,
      resetClaimEligibility: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      receiver: string,
      quantity: BigNumberish,
      currency: string,
      pricePerToken: BigNumberish,
      allowlistProof: IDropSinglePhase.AllowlistProofStruct,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setClaimConditions(
      phase: IClaimCondition.ClaimConditionStruct,
      resetClaimEligibility: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
