/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  DropSinglePhase1155,
  DropSinglePhase1155Interface,
} from "../DropSinglePhase1155";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "startTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxClaimableSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyClaimed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantityLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "waitTimeInSecondsBetweenClaims",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "pricePerToken",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct IClaimCondition.ClaimCondition",
        name: "condition",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "resetEligibility",
        type: "bool",
      },
    ],
    name: "ClaimConditionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantityClaimed",
        type: "uint256",
      },
    ],
    name: "TokensClaimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_pricePerToken",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "proof",
            type: "bytes32[]",
          },
          {
            internalType: "uint256",
            name: "maxQuantityInAllowlist",
            type: "uint256",
          },
        ],
        internalType: "struct IDropSinglePhase1155.AllowlistProof",
        name: "_allowlistProof",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimCondition",
    outputs: [
      {
        internalType: "uint256",
        name: "startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxClaimableSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "supplyClaimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "quantityLimitPerTransaction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "waitTimeInSecondsBetweenClaims",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "pricePerToken",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
    ],
    name: "getClaimTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "lastClaimedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextValidClaimTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "startTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxClaimableSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "supplyClaimed",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "quantityLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "waitTimeInSecondsBetweenClaims",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "pricePerToken",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        internalType: "struct IClaimCondition.ClaimCondition",
        name: "_condition",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "_resetClaimEligibility",
        type: "bool",
      },
    ],
    name: "setClaimConditions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_pricePerToken",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "verifyMaxQuantityPerTransaction",
        type: "bool",
      },
    ],
    name: "verifyClaim",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "proof",
            type: "bytes32[]",
          },
          {
            internalType: "uint256",
            name: "maxQuantityInAllowlist",
            type: "uint256",
          },
        ],
        internalType: "struct IDropSinglePhase1155.AllowlistProof",
        name: "_allowlistProof",
        type: "tuple",
      },
    ],
    name: "verifyClaimMerkleProof",
    outputs: [
      {
        internalType: "bool",
        name: "validMerkleProof",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "merkleProofIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class DropSinglePhase1155__factory {
  static readonly abi = _abi;
  static createInterface(): DropSinglePhase1155Interface {
    return new utils.Interface(_abi) as DropSinglePhase1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DropSinglePhase1155 {
    return new Contract(address, _abi, signerOrProvider) as DropSinglePhase1155;
  }
}
