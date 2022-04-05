/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface RevertCollectModuleInterface extends utils.Interface {
  functions: {
    "initializePublicationCollectModule(uint256,uint256,bytes)": FunctionFragment;
    "processCollect(uint256,address,uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initializePublicationCollectModule",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "processCollect",
    values: [BigNumberish, string, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "initializePublicationCollectModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processCollect",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RevertCollectModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RevertCollectModuleInterface;

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
    initializePublicationCollectModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    processCollect(
      referrerProfileId: BigNumberish,
      collector: string,
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  initializePublicationCollectModule(
    profileId: BigNumberish,
    pubId: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  processCollect(
    referrerProfileId: BigNumberish,
    collector: string,
    profileId: BigNumberish,
    pubId: BigNumberish,
    data: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    initializePublicationCollectModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    processCollect(
      referrerProfileId: BigNumberish,
      collector: string,
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    initializePublicationCollectModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processCollect(
      referrerProfileId: BigNumberish,
      collector: string,
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initializePublicationCollectModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processCollect(
      referrerProfileId: BigNumberish,
      collector: string,
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}