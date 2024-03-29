/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BtcDepositAddress } from "../volt/deposit";
import { BtcWithdrawRequestInternal } from "../volt/withdraw";
import { Params } from "./params";
import {
  MsgBroadcastTxRefund,
  MsgBroadcastTxSweep,
  MsgProposeRefundHash,
  MsgProposeSweepAddress,
  MsgRegisterJudge,
  MsgRegisterReserveAddress,
  MsgSignRefund,
  MsgSignSweep,
  MsgUnsignedTxRefund,
  MsgUnsignedTxSweep,
} from "./tx";

export const protobufPackage = "twilightproject.nyks.bridge";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryRegisteredBtcDepositAddressesRequest {
}

export interface QueryRegisteredBtcDepositAddressesResponse {
  addresses: BtcDepositAddress[];
}

export interface QueryRegisteredReserveAddressesRequest {
}

export interface QueryRegisteredReserveAddressesResponse {
  addresses: MsgRegisterReserveAddress[];
}

export interface QueryRegisteredBtcDepositAddressRequest {
  depositAddress: string;
}

export interface QueryRegisteredBtcDepositAddressResponse {
  depositAddress: string;
  twilightDepositAddress: string;
}

export interface QueryRegisteredBtcDepositAddressByTwilightAddressRequest {
  twilightDepositAddress: string;
}

export interface QueryRegisteredBtcDepositAddressByTwilightAddressResponse {
  depositAddress: string;
  twilightDepositAddress: string;
}

/** this line is used by starport scaffolding # 3 */
export interface QueryRegisteredJudgeAddressByValidatorAddressRequest {
  validatorAddress: string;
}

export interface QueryRegisteredJudgeAddressByValidatorAddressResponse {
  creator: string;
  judgeAddress: string;
  validatorAddress: string;
}

export interface QueryRegisteredJudgesRequest {
}

export interface QueryRegisteredJudgesResponse {
  Judges: MsgRegisterJudge[];
}

export interface QueryWithdrawBtcRequestAllRequest {
}

export interface QueryWithdrawBtcRequestAllResponse {
  withdrawRequest: BtcWithdrawRequestInternal[];
}

export interface QueryProposeRefundHashAllRequest {
}

export interface QueryProposeRefundHashAllResponse {
  proposeRefundHashMsg: MsgProposeRefundHash[];
}

/**
 * Sweep Queries
 * 1. ProposeSweepAddress
 */
export interface QueryProposeSweepAddressRequest {
  reserveId: number;
  roundId: number;
}

export interface QueryProposeSweepAddressResponse {
  proposeSweepAddressMsg: MsgProposeSweepAddress | undefined;
}

export interface QueryProposeSweepAddressesAllRequest {
  limit: number;
}

export interface QueryProposeSweepAddressesAllResponse {
  proposeSweepAddressMsgs: MsgProposeSweepAddress[];
}

/** 2. UnsignedTxSweep */
export interface QueryUnsignedTxSweepRequest {
  reserveId: number;
  roundId: number;
}

export interface QueryUnsignedTxSweepResponse {
  unsignedTxSweepMsg: MsgUnsignedTxSweep | undefined;
}

export interface QueryUnsignedTxSweepAllRequest {
  limit: number;
}

export interface QueryUnsignedTxSweepAllResponse {
  unsignedTxSweepMsgs: MsgUnsignedTxSweep[];
}

/** 3. UnsignedTxRefund */
export interface QueryUnsignedTxRefundRequest {
  reserveId: number;
  roundId: number;
}

export interface QueryUnsignedTxRefundResponse {
  unsignedTxRefundMsg: MsgUnsignedTxRefund | undefined;
}

export interface QueryUnsignedTxRefundAllRequest {
  limit: number;
}

export interface QueryUnsignedTxRefundAllResponse {
  unsignedTxRefundMsgs: MsgUnsignedTxRefund[];
}

/** 4. SignRefund */
export interface QuerySignRefundRequest {
  reserveId: number;
  roundId: number;
}

export interface QuerySignRefundResponse {
  signRefundMsg: MsgSignRefund[];
}

export interface QuerySignRefundAllRequest {
}

export interface QuerySignRefundAllResponse {
  signRefundMsg: MsgSignRefund[];
}

/** 5. SignSweep */
export interface QuerySignSweepRequest {
  reserveId: number;
  roundId: number;
}

export interface QuerySignSweepResponse {
  signSweepMsg: MsgSignSweep[];
}

export interface QuerySignSweepAllRequest {
}

export interface QuerySignSweepAllResponse {
  signSweepMsg: MsgSignSweep[];
}

/** 6. BroadcastTxRefund */
export interface QueryBroadcastTxRefundRequest {
  reserveId: number;
  roundId: number;
}

export interface QueryBroadcastTxRefundResponse {
  broadcastRefundMsg: MsgBroadcastTxRefund | undefined;
}

export interface QueryBroadcastTxRefundAllRequest {
}

export interface QueryBroadcastTxRefundAllResponse {
  BroadcastTxRefundMsg: MsgBroadcastTxRefund[];
}

/** 7. BroadcastTxSweep */
export interface QueryBroadcastTxSweepRequest {
  reserveId: number;
  roundId: number;
}

export interface QueryBroadcastTxSweepResponse {
  broadcastSweepMsg: MsgBroadcastTxSweep | undefined;
}

export interface QueryBroadcastTxSweepAllRequest {
}

export interface QueryBroadcastTxSweepAllResponse {
  BroadcastTxSweepMsg: MsgBroadcastTxSweep[];
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryRegisteredBtcDepositAddressesRequest(): QueryRegisteredBtcDepositAddressesRequest {
  return {};
}

export const QueryRegisteredBtcDepositAddressesRequest = {
  encode(_: QueryRegisteredBtcDepositAddressesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredBtcDepositAddressesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredBtcDepositAddressesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryRegisteredBtcDepositAddressesRequest {
    return {};
  },

  toJSON(_: QueryRegisteredBtcDepositAddressesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredBtcDepositAddressesRequest>, I>>(
    _: I,
  ): QueryRegisteredBtcDepositAddressesRequest {
    const message = createBaseQueryRegisteredBtcDepositAddressesRequest();
    return message;
  },
};

function createBaseQueryRegisteredBtcDepositAddressesResponse(): QueryRegisteredBtcDepositAddressesResponse {
  return { addresses: [] };
}

export const QueryRegisteredBtcDepositAddressesResponse = {
  encode(message: QueryRegisteredBtcDepositAddressesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      BtcDepositAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredBtcDepositAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredBtcDepositAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(BtcDepositAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredBtcDepositAddressesResponse {
    return {
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => BtcDepositAddress.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryRegisteredBtcDepositAddressesResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e ? BtcDepositAddress.toJSON(e) : undefined);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredBtcDepositAddressesResponse>, I>>(
    object: I,
  ): QueryRegisteredBtcDepositAddressesResponse {
    const message = createBaseQueryRegisteredBtcDepositAddressesResponse();
    message.addresses = object.addresses?.map((e) => BtcDepositAddress.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRegisteredReserveAddressesRequest(): QueryRegisteredReserveAddressesRequest {
  return {};
}

export const QueryRegisteredReserveAddressesRequest = {
  encode(_: QueryRegisteredReserveAddressesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredReserveAddressesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredReserveAddressesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryRegisteredReserveAddressesRequest {
    return {};
  },

  toJSON(_: QueryRegisteredReserveAddressesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredReserveAddressesRequest>, I>>(
    _: I,
  ): QueryRegisteredReserveAddressesRequest {
    const message = createBaseQueryRegisteredReserveAddressesRequest();
    return message;
  },
};

function createBaseQueryRegisteredReserveAddressesResponse(): QueryRegisteredReserveAddressesResponse {
  return { addresses: [] };
}

export const QueryRegisteredReserveAddressesResponse = {
  encode(message: QueryRegisteredReserveAddressesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      MsgRegisterReserveAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredReserveAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredReserveAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(MsgRegisterReserveAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredReserveAddressesResponse {
    return {
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => MsgRegisterReserveAddress.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryRegisteredReserveAddressesResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e ? MsgRegisterReserveAddress.toJSON(e) : undefined);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredReserveAddressesResponse>, I>>(
    object: I,
  ): QueryRegisteredReserveAddressesResponse {
    const message = createBaseQueryRegisteredReserveAddressesResponse();
    message.addresses = object.addresses?.map((e) => MsgRegisterReserveAddress.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRegisteredBtcDepositAddressRequest(): QueryRegisteredBtcDepositAddressRequest {
  return { depositAddress: "" };
}

export const QueryRegisteredBtcDepositAddressRequest = {
  encode(message: QueryRegisteredBtcDepositAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredBtcDepositAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredBtcDepositAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredBtcDepositAddressRequest {
    return { depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "" };
  },

  toJSON(message: QueryRegisteredBtcDepositAddressRequest): unknown {
    const obj: any = {};
    message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredBtcDepositAddressRequest>, I>>(
    object: I,
  ): QueryRegisteredBtcDepositAddressRequest {
    const message = createBaseQueryRegisteredBtcDepositAddressRequest();
    message.depositAddress = object.depositAddress ?? "";
    return message;
  },
};

function createBaseQueryRegisteredBtcDepositAddressResponse(): QueryRegisteredBtcDepositAddressResponse {
  return { depositAddress: "", twilightDepositAddress: "" };
}

export const QueryRegisteredBtcDepositAddressResponse = {
  encode(message: QueryRegisteredBtcDepositAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(18).string(message.twilightDepositAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredBtcDepositAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredBtcDepositAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAddress = reader.string();
          break;
        case 2:
          message.twilightDepositAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredBtcDepositAddressResponse {
    return {
      depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "",
      twilightDepositAddress: isSet(object.twilightDepositAddress) ? String(object.twilightDepositAddress) : "",
    };
  },

  toJSON(message: QueryRegisteredBtcDepositAddressResponse): unknown {
    const obj: any = {};
    message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress);
    message.twilightDepositAddress !== undefined && (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredBtcDepositAddressResponse>, I>>(
    object: I,
  ): QueryRegisteredBtcDepositAddressResponse {
    const message = createBaseQueryRegisteredBtcDepositAddressResponse();
    message.depositAddress = object.depositAddress ?? "";
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
    return message;
  },
};

function createBaseQueryRegisteredBtcDepositAddressByTwilightAddressRequest(): QueryRegisteredBtcDepositAddressByTwilightAddressRequest {
  return { twilightDepositAddress: "" };
}

export const QueryRegisteredBtcDepositAddressByTwilightAddressRequest = {
  encode(
    message: QueryRegisteredBtcDepositAddressByTwilightAddressRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.twilightDepositAddress !== "") {
      writer.uint32(10).string(message.twilightDepositAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredBtcDepositAddressByTwilightAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredBtcDepositAddressByTwilightAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.twilightDepositAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredBtcDepositAddressByTwilightAddressRequest {
    return {
      twilightDepositAddress: isSet(object.twilightDepositAddress) ? String(object.twilightDepositAddress) : "",
    };
  },

  toJSON(message: QueryRegisteredBtcDepositAddressByTwilightAddressRequest): unknown {
    const obj: any = {};
    message.twilightDepositAddress !== undefined && (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredBtcDepositAddressByTwilightAddressRequest>, I>>(
    object: I,
  ): QueryRegisteredBtcDepositAddressByTwilightAddressRequest {
    const message = createBaseQueryRegisteredBtcDepositAddressByTwilightAddressRequest();
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
    return message;
  },
};

function createBaseQueryRegisteredBtcDepositAddressByTwilightAddressResponse(): QueryRegisteredBtcDepositAddressByTwilightAddressResponse {
  return { depositAddress: "", twilightDepositAddress: "" };
}

export const QueryRegisteredBtcDepositAddressByTwilightAddressResponse = {
  encode(
    message: QueryRegisteredBtcDepositAddressByTwilightAddressResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(18).string(message.twilightDepositAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredBtcDepositAddressByTwilightAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredBtcDepositAddressByTwilightAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAddress = reader.string();
          break;
        case 2:
          message.twilightDepositAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredBtcDepositAddressByTwilightAddressResponse {
    return {
      depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "",
      twilightDepositAddress: isSet(object.twilightDepositAddress) ? String(object.twilightDepositAddress) : "",
    };
  },

  toJSON(message: QueryRegisteredBtcDepositAddressByTwilightAddressResponse): unknown {
    const obj: any = {};
    message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress);
    message.twilightDepositAddress !== undefined && (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredBtcDepositAddressByTwilightAddressResponse>, I>>(
    object: I,
  ): QueryRegisteredBtcDepositAddressByTwilightAddressResponse {
    const message = createBaseQueryRegisteredBtcDepositAddressByTwilightAddressResponse();
    message.depositAddress = object.depositAddress ?? "";
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
    return message;
  },
};

function createBaseQueryRegisteredJudgeAddressByValidatorAddressRequest(): QueryRegisteredJudgeAddressByValidatorAddressRequest {
  return { validatorAddress: "" };
}

export const QueryRegisteredJudgeAddressByValidatorAddressRequest = {
  encode(
    message: QueryRegisteredJudgeAddressByValidatorAddressRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredJudgeAddressByValidatorAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredJudgeAddressByValidatorAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredJudgeAddressByValidatorAddressRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryRegisteredJudgeAddressByValidatorAddressRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredJudgeAddressByValidatorAddressRequest>, I>>(
    object: I,
  ): QueryRegisteredJudgeAddressByValidatorAddressRequest {
    const message = createBaseQueryRegisteredJudgeAddressByValidatorAddressRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryRegisteredJudgeAddressByValidatorAddressResponse(): QueryRegisteredJudgeAddressByValidatorAddressResponse {
  return { creator: "", judgeAddress: "", validatorAddress: "" };
}

export const QueryRegisteredJudgeAddressByValidatorAddressResponse = {
  encode(
    message: QueryRegisteredJudgeAddressByValidatorAddressResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(26).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredJudgeAddressByValidatorAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredJudgeAddressByValidatorAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.judgeAddress = reader.string();
          break;
        case 3:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredJudgeAddressByValidatorAddressResponse {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
    };
  },

  toJSON(message: QueryRegisteredJudgeAddressByValidatorAddressResponse): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredJudgeAddressByValidatorAddressResponse>, I>>(
    object: I,
  ): QueryRegisteredJudgeAddressByValidatorAddressResponse {
    const message = createBaseQueryRegisteredJudgeAddressByValidatorAddressResponse();
    message.creator = object.creator ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryRegisteredJudgesRequest(): QueryRegisteredJudgesRequest {
  return {};
}

export const QueryRegisteredJudgesRequest = {
  encode(_: QueryRegisteredJudgesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredJudgesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredJudgesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryRegisteredJudgesRequest {
    return {};
  },

  toJSON(_: QueryRegisteredJudgesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredJudgesRequest>, I>>(_: I): QueryRegisteredJudgesRequest {
    const message = createBaseQueryRegisteredJudgesRequest();
    return message;
  },
};

function createBaseQueryRegisteredJudgesResponse(): QueryRegisteredJudgesResponse {
  return { Judges: [] };
}

export const QueryRegisteredJudgesResponse = {
  encode(message: QueryRegisteredJudgesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Judges) {
      MsgRegisterJudge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredJudgesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredJudgesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Judges.push(MsgRegisterJudge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredJudgesResponse {
    return { Judges: Array.isArray(object?.Judges) ? object.Judges.map((e: any) => MsgRegisterJudge.fromJSON(e)) : [] };
  },

  toJSON(message: QueryRegisteredJudgesResponse): unknown {
    const obj: any = {};
    if (message.Judges) {
      obj.Judges = message.Judges.map((e) => e ? MsgRegisterJudge.toJSON(e) : undefined);
    } else {
      obj.Judges = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredJudgesResponse>, I>>(
    object: I,
  ): QueryRegisteredJudgesResponse {
    const message = createBaseQueryRegisteredJudgesResponse();
    message.Judges = object.Judges?.map((e) => MsgRegisterJudge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryWithdrawBtcRequestAllRequest(): QueryWithdrawBtcRequestAllRequest {
  return {};
}

export const QueryWithdrawBtcRequestAllRequest = {
  encode(_: QueryWithdrawBtcRequestAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawBtcRequestAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawBtcRequestAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryWithdrawBtcRequestAllRequest {
    return {};
  },

  toJSON(_: QueryWithdrawBtcRequestAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawBtcRequestAllRequest>, I>>(
    _: I,
  ): QueryWithdrawBtcRequestAllRequest {
    const message = createBaseQueryWithdrawBtcRequestAllRequest();
    return message;
  },
};

function createBaseQueryWithdrawBtcRequestAllResponse(): QueryWithdrawBtcRequestAllResponse {
  return { withdrawRequest: [] };
}

export const QueryWithdrawBtcRequestAllResponse = {
  encode(message: QueryWithdrawBtcRequestAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawRequest) {
      BtcWithdrawRequestInternal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawBtcRequestAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawBtcRequestAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawRequest.push(BtcWithdrawRequestInternal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryWithdrawBtcRequestAllResponse {
    return {
      withdrawRequest: Array.isArray(object?.withdrawRequest)
        ? object.withdrawRequest.map((e: any) => BtcWithdrawRequestInternal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryWithdrawBtcRequestAllResponse): unknown {
    const obj: any = {};
    if (message.withdrawRequest) {
      obj.withdrawRequest = message.withdrawRequest.map((e) => e ? BtcWithdrawRequestInternal.toJSON(e) : undefined);
    } else {
      obj.withdrawRequest = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawBtcRequestAllResponse>, I>>(
    object: I,
  ): QueryWithdrawBtcRequestAllResponse {
    const message = createBaseQueryWithdrawBtcRequestAllResponse();
    message.withdrawRequest = object.withdrawRequest?.map((e) => BtcWithdrawRequestInternal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryProposeRefundHashAllRequest(): QueryProposeRefundHashAllRequest {
  return {};
}

export const QueryProposeRefundHashAllRequest = {
  encode(_: QueryProposeRefundHashAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposeRefundHashAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposeRefundHashAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryProposeRefundHashAllRequest {
    return {};
  },

  toJSON(_: QueryProposeRefundHashAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposeRefundHashAllRequest>, I>>(
    _: I,
  ): QueryProposeRefundHashAllRequest {
    const message = createBaseQueryProposeRefundHashAllRequest();
    return message;
  },
};

function createBaseQueryProposeRefundHashAllResponse(): QueryProposeRefundHashAllResponse {
  return { proposeRefundHashMsg: [] };
}

export const QueryProposeRefundHashAllResponse = {
  encode(message: QueryProposeRefundHashAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposeRefundHashMsg) {
      MsgProposeRefundHash.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposeRefundHashAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposeRefundHashAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposeRefundHashMsg.push(MsgProposeRefundHash.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposeRefundHashAllResponse {
    return {
      proposeRefundHashMsg: Array.isArray(object?.proposeRefundHashMsg)
        ? object.proposeRefundHashMsg.map((e: any) => MsgProposeRefundHash.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryProposeRefundHashAllResponse): unknown {
    const obj: any = {};
    if (message.proposeRefundHashMsg) {
      obj.proposeRefundHashMsg = message.proposeRefundHashMsg.map((e) =>
        e ? MsgProposeRefundHash.toJSON(e) : undefined
      );
    } else {
      obj.proposeRefundHashMsg = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposeRefundHashAllResponse>, I>>(
    object: I,
  ): QueryProposeRefundHashAllResponse {
    const message = createBaseQueryProposeRefundHashAllResponse();
    message.proposeRefundHashMsg = object.proposeRefundHashMsg?.map((e) => MsgProposeRefundHash.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryProposeSweepAddressRequest(): QueryProposeSweepAddressRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QueryProposeSweepAddressRequest = {
  encode(message: QueryProposeSweepAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposeSweepAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposeSweepAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposeSweepAddressRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QueryProposeSweepAddressRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposeSweepAddressRequest>, I>>(
    object: I,
  ): QueryProposeSweepAddressRequest {
    const message = createBaseQueryProposeSweepAddressRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQueryProposeSweepAddressResponse(): QueryProposeSweepAddressResponse {
  return { proposeSweepAddressMsg: undefined };
}

export const QueryProposeSweepAddressResponse = {
  encode(message: QueryProposeSweepAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposeSweepAddressMsg !== undefined) {
      MsgProposeSweepAddress.encode(message.proposeSweepAddressMsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposeSweepAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposeSweepAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposeSweepAddressMsg = MsgProposeSweepAddress.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposeSweepAddressResponse {
    return {
      proposeSweepAddressMsg: isSet(object.proposeSweepAddressMsg)
        ? MsgProposeSweepAddress.fromJSON(object.proposeSweepAddressMsg)
        : undefined,
    };
  },

  toJSON(message: QueryProposeSweepAddressResponse): unknown {
    const obj: any = {};
    message.proposeSweepAddressMsg !== undefined && (obj.proposeSweepAddressMsg = message.proposeSweepAddressMsg
      ? MsgProposeSweepAddress.toJSON(message.proposeSweepAddressMsg)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposeSweepAddressResponse>, I>>(
    object: I,
  ): QueryProposeSweepAddressResponse {
    const message = createBaseQueryProposeSweepAddressResponse();
    message.proposeSweepAddressMsg =
      (object.proposeSweepAddressMsg !== undefined && object.proposeSweepAddressMsg !== null)
        ? MsgProposeSweepAddress.fromPartial(object.proposeSweepAddressMsg)
        : undefined;
    return message;
  },
};

function createBaseQueryProposeSweepAddressesAllRequest(): QueryProposeSweepAddressesAllRequest {
  return { limit: 0 };
}

export const QueryProposeSweepAddressesAllRequest = {
  encode(message: QueryProposeSweepAddressesAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposeSweepAddressesAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposeSweepAddressesAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposeSweepAddressesAllRequest {
    return { limit: isSet(object.limit) ? Number(object.limit) : 0 };
  },

  toJSON(message: QueryProposeSweepAddressesAllRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposeSweepAddressesAllRequest>, I>>(
    object: I,
  ): QueryProposeSweepAddressesAllRequest {
    const message = createBaseQueryProposeSweepAddressesAllRequest();
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseQueryProposeSweepAddressesAllResponse(): QueryProposeSweepAddressesAllResponse {
  return { proposeSweepAddressMsgs: [] };
}

export const QueryProposeSweepAddressesAllResponse = {
  encode(message: QueryProposeSweepAddressesAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposeSweepAddressMsgs) {
      MsgProposeSweepAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposeSweepAddressesAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposeSweepAddressesAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposeSweepAddressMsgs.push(MsgProposeSweepAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposeSweepAddressesAllResponse {
    return {
      proposeSweepAddressMsgs: Array.isArray(object?.proposeSweepAddressMsgs)
        ? object.proposeSweepAddressMsgs.map((e: any) => MsgProposeSweepAddress.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryProposeSweepAddressesAllResponse): unknown {
    const obj: any = {};
    if (message.proposeSweepAddressMsgs) {
      obj.proposeSweepAddressMsgs = message.proposeSweepAddressMsgs.map((e) =>
        e ? MsgProposeSweepAddress.toJSON(e) : undefined
      );
    } else {
      obj.proposeSweepAddressMsgs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposeSweepAddressesAllResponse>, I>>(
    object: I,
  ): QueryProposeSweepAddressesAllResponse {
    const message = createBaseQueryProposeSweepAddressesAllResponse();
    message.proposeSweepAddressMsgs = object.proposeSweepAddressMsgs?.map((e) => MsgProposeSweepAddress.fromPartial(e))
      || [];
    return message;
  },
};

function createBaseQueryUnsignedTxSweepRequest(): QueryUnsignedTxSweepRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QueryUnsignedTxSweepRequest = {
  encode(message: QueryUnsignedTxSweepRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsignedTxSweepRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnsignedTxSweepRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnsignedTxSweepRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QueryUnsignedTxSweepRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnsignedTxSweepRequest>, I>>(object: I): QueryUnsignedTxSweepRequest {
    const message = createBaseQueryUnsignedTxSweepRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQueryUnsignedTxSweepResponse(): QueryUnsignedTxSweepResponse {
  return { unsignedTxSweepMsg: undefined };
}

export const QueryUnsignedTxSweepResponse = {
  encode(message: QueryUnsignedTxSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unsignedTxSweepMsg !== undefined) {
      MsgUnsignedTxSweep.encode(message.unsignedTxSweepMsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsignedTxSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnsignedTxSweepResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unsignedTxSweepMsg = MsgUnsignedTxSweep.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnsignedTxSweepResponse {
    return {
      unsignedTxSweepMsg: isSet(object.unsignedTxSweepMsg)
        ? MsgUnsignedTxSweep.fromJSON(object.unsignedTxSweepMsg)
        : undefined,
    };
  },

  toJSON(message: QueryUnsignedTxSweepResponse): unknown {
    const obj: any = {};
    message.unsignedTxSweepMsg !== undefined && (obj.unsignedTxSweepMsg = message.unsignedTxSweepMsg
      ? MsgUnsignedTxSweep.toJSON(message.unsignedTxSweepMsg)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnsignedTxSweepResponse>, I>>(object: I): QueryUnsignedTxSweepResponse {
    const message = createBaseQueryUnsignedTxSweepResponse();
    message.unsignedTxSweepMsg = (object.unsignedTxSweepMsg !== undefined && object.unsignedTxSweepMsg !== null)
      ? MsgUnsignedTxSweep.fromPartial(object.unsignedTxSweepMsg)
      : undefined;
    return message;
  },
};

function createBaseQueryUnsignedTxSweepAllRequest(): QueryUnsignedTxSweepAllRequest {
  return { limit: 0 };
}

export const QueryUnsignedTxSweepAllRequest = {
  encode(message: QueryUnsignedTxSweepAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsignedTxSweepAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnsignedTxSweepAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnsignedTxSweepAllRequest {
    return { limit: isSet(object.limit) ? Number(object.limit) : 0 };
  },

  toJSON(message: QueryUnsignedTxSweepAllRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnsignedTxSweepAllRequest>, I>>(
    object: I,
  ): QueryUnsignedTxSweepAllRequest {
    const message = createBaseQueryUnsignedTxSweepAllRequest();
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseQueryUnsignedTxSweepAllResponse(): QueryUnsignedTxSweepAllResponse {
  return { unsignedTxSweepMsgs: [] };
}

export const QueryUnsignedTxSweepAllResponse = {
  encode(message: QueryUnsignedTxSweepAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unsignedTxSweepMsgs) {
      MsgUnsignedTxSweep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsignedTxSweepAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnsignedTxSweepAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unsignedTxSweepMsgs.push(MsgUnsignedTxSweep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnsignedTxSweepAllResponse {
    return {
      unsignedTxSweepMsgs: Array.isArray(object?.unsignedTxSweepMsgs)
        ? object.unsignedTxSweepMsgs.map((e: any) => MsgUnsignedTxSweep.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryUnsignedTxSweepAllResponse): unknown {
    const obj: any = {};
    if (message.unsignedTxSweepMsgs) {
      obj.unsignedTxSweepMsgs = message.unsignedTxSweepMsgs.map((e) => e ? MsgUnsignedTxSweep.toJSON(e) : undefined);
    } else {
      obj.unsignedTxSweepMsgs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnsignedTxSweepAllResponse>, I>>(
    object: I,
  ): QueryUnsignedTxSweepAllResponse {
    const message = createBaseQueryUnsignedTxSweepAllResponse();
    message.unsignedTxSweepMsgs = object.unsignedTxSweepMsgs?.map((e) => MsgUnsignedTxSweep.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryUnsignedTxRefundRequest(): QueryUnsignedTxRefundRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QueryUnsignedTxRefundRequest = {
  encode(message: QueryUnsignedTxRefundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsignedTxRefundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnsignedTxRefundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnsignedTxRefundRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QueryUnsignedTxRefundRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnsignedTxRefundRequest>, I>>(object: I): QueryUnsignedTxRefundRequest {
    const message = createBaseQueryUnsignedTxRefundRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQueryUnsignedTxRefundResponse(): QueryUnsignedTxRefundResponse {
  return { unsignedTxRefundMsg: undefined };
}

export const QueryUnsignedTxRefundResponse = {
  encode(message: QueryUnsignedTxRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unsignedTxRefundMsg !== undefined) {
      MsgUnsignedTxRefund.encode(message.unsignedTxRefundMsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsignedTxRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnsignedTxRefundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unsignedTxRefundMsg = MsgUnsignedTxRefund.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnsignedTxRefundResponse {
    return {
      unsignedTxRefundMsg: isSet(object.unsignedTxRefundMsg)
        ? MsgUnsignedTxRefund.fromJSON(object.unsignedTxRefundMsg)
        : undefined,
    };
  },

  toJSON(message: QueryUnsignedTxRefundResponse): unknown {
    const obj: any = {};
    message.unsignedTxRefundMsg !== undefined && (obj.unsignedTxRefundMsg = message.unsignedTxRefundMsg
      ? MsgUnsignedTxRefund.toJSON(message.unsignedTxRefundMsg)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnsignedTxRefundResponse>, I>>(
    object: I,
  ): QueryUnsignedTxRefundResponse {
    const message = createBaseQueryUnsignedTxRefundResponse();
    message.unsignedTxRefundMsg = (object.unsignedTxRefundMsg !== undefined && object.unsignedTxRefundMsg !== null)
      ? MsgUnsignedTxRefund.fromPartial(object.unsignedTxRefundMsg)
      : undefined;
    return message;
  },
};

function createBaseQueryUnsignedTxRefundAllRequest(): QueryUnsignedTxRefundAllRequest {
  return { limit: 0 };
}

export const QueryUnsignedTxRefundAllRequest = {
  encode(message: QueryUnsignedTxRefundAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsignedTxRefundAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnsignedTxRefundAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnsignedTxRefundAllRequest {
    return { limit: isSet(object.limit) ? Number(object.limit) : 0 };
  },

  toJSON(message: QueryUnsignedTxRefundAllRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnsignedTxRefundAllRequest>, I>>(
    object: I,
  ): QueryUnsignedTxRefundAllRequest {
    const message = createBaseQueryUnsignedTxRefundAllRequest();
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseQueryUnsignedTxRefundAllResponse(): QueryUnsignedTxRefundAllResponse {
  return { unsignedTxRefundMsgs: [] };
}

export const QueryUnsignedTxRefundAllResponse = {
  encode(message: QueryUnsignedTxRefundAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unsignedTxRefundMsgs) {
      MsgUnsignedTxRefund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnsignedTxRefundAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnsignedTxRefundAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unsignedTxRefundMsgs.push(MsgUnsignedTxRefund.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUnsignedTxRefundAllResponse {
    return {
      unsignedTxRefundMsgs: Array.isArray(object?.unsignedTxRefundMsgs)
        ? object.unsignedTxRefundMsgs.map((e: any) => MsgUnsignedTxRefund.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryUnsignedTxRefundAllResponse): unknown {
    const obj: any = {};
    if (message.unsignedTxRefundMsgs) {
      obj.unsignedTxRefundMsgs = message.unsignedTxRefundMsgs.map((e) => e ? MsgUnsignedTxRefund.toJSON(e) : undefined);
    } else {
      obj.unsignedTxRefundMsgs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnsignedTxRefundAllResponse>, I>>(
    object: I,
  ): QueryUnsignedTxRefundAllResponse {
    const message = createBaseQueryUnsignedTxRefundAllResponse();
    message.unsignedTxRefundMsgs = object.unsignedTxRefundMsgs?.map((e) => MsgUnsignedTxRefund.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySignRefundRequest(): QuerySignRefundRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QuerySignRefundRequest = {
  encode(message: QuerySignRefundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignRefundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignRefundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignRefundRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QuerySignRefundRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignRefundRequest>, I>>(object: I): QuerySignRefundRequest {
    const message = createBaseQuerySignRefundRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQuerySignRefundResponse(): QuerySignRefundResponse {
  return { signRefundMsg: [] };
}

export const QuerySignRefundResponse = {
  encode(message: QuerySignRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signRefundMsg) {
      MsgSignRefund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignRefundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signRefundMsg.push(MsgSignRefund.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignRefundResponse {
    return {
      signRefundMsg: Array.isArray(object?.signRefundMsg)
        ? object.signRefundMsg.map((e: any) => MsgSignRefund.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySignRefundResponse): unknown {
    const obj: any = {};
    if (message.signRefundMsg) {
      obj.signRefundMsg = message.signRefundMsg.map((e) => e ? MsgSignRefund.toJSON(e) : undefined);
    } else {
      obj.signRefundMsg = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignRefundResponse>, I>>(object: I): QuerySignRefundResponse {
    const message = createBaseQuerySignRefundResponse();
    message.signRefundMsg = object.signRefundMsg?.map((e) => MsgSignRefund.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySignRefundAllRequest(): QuerySignRefundAllRequest {
  return {};
}

export const QuerySignRefundAllRequest = {
  encode(_: QuerySignRefundAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignRefundAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignRefundAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QuerySignRefundAllRequest {
    return {};
  },

  toJSON(_: QuerySignRefundAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignRefundAllRequest>, I>>(_: I): QuerySignRefundAllRequest {
    const message = createBaseQuerySignRefundAllRequest();
    return message;
  },
};

function createBaseQuerySignRefundAllResponse(): QuerySignRefundAllResponse {
  return { signRefundMsg: [] };
}

export const QuerySignRefundAllResponse = {
  encode(message: QuerySignRefundAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signRefundMsg) {
      MsgSignRefund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignRefundAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignRefundAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signRefundMsg.push(MsgSignRefund.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignRefundAllResponse {
    return {
      signRefundMsg: Array.isArray(object?.signRefundMsg)
        ? object.signRefundMsg.map((e: any) => MsgSignRefund.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySignRefundAllResponse): unknown {
    const obj: any = {};
    if (message.signRefundMsg) {
      obj.signRefundMsg = message.signRefundMsg.map((e) => e ? MsgSignRefund.toJSON(e) : undefined);
    } else {
      obj.signRefundMsg = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignRefundAllResponse>, I>>(object: I): QuerySignRefundAllResponse {
    const message = createBaseQuerySignRefundAllResponse();
    message.signRefundMsg = object.signRefundMsg?.map((e) => MsgSignRefund.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySignSweepRequest(): QuerySignSweepRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QuerySignSweepRequest = {
  encode(message: QuerySignSweepRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignSweepRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignSweepRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignSweepRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QuerySignSweepRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignSweepRequest>, I>>(object: I): QuerySignSweepRequest {
    const message = createBaseQuerySignSweepRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQuerySignSweepResponse(): QuerySignSweepResponse {
  return { signSweepMsg: [] };
}

export const QuerySignSweepResponse = {
  encode(message: QuerySignSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signSweepMsg) {
      MsgSignSweep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignSweepResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signSweepMsg.push(MsgSignSweep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignSweepResponse {
    return {
      signSweepMsg: Array.isArray(object?.signSweepMsg)
        ? object.signSweepMsg.map((e: any) => MsgSignSweep.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySignSweepResponse): unknown {
    const obj: any = {};
    if (message.signSweepMsg) {
      obj.signSweepMsg = message.signSweepMsg.map((e) => e ? MsgSignSweep.toJSON(e) : undefined);
    } else {
      obj.signSweepMsg = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignSweepResponse>, I>>(object: I): QuerySignSweepResponse {
    const message = createBaseQuerySignSweepResponse();
    message.signSweepMsg = object.signSweepMsg?.map((e) => MsgSignSweep.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySignSweepAllRequest(): QuerySignSweepAllRequest {
  return {};
}

export const QuerySignSweepAllRequest = {
  encode(_: QuerySignSweepAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignSweepAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignSweepAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QuerySignSweepAllRequest {
    return {};
  },

  toJSON(_: QuerySignSweepAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignSweepAllRequest>, I>>(_: I): QuerySignSweepAllRequest {
    const message = createBaseQuerySignSweepAllRequest();
    return message;
  },
};

function createBaseQuerySignSweepAllResponse(): QuerySignSweepAllResponse {
  return { signSweepMsg: [] };
}

export const QuerySignSweepAllResponse = {
  encode(message: QuerySignSweepAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.signSweepMsg) {
      MsgSignSweep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignSweepAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySignSweepAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signSweepMsg.push(MsgSignSweep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignSweepAllResponse {
    return {
      signSweepMsg: Array.isArray(object?.signSweepMsg)
        ? object.signSweepMsg.map((e: any) => MsgSignSweep.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySignSweepAllResponse): unknown {
    const obj: any = {};
    if (message.signSweepMsg) {
      obj.signSweepMsg = message.signSweepMsg.map((e) => e ? MsgSignSweep.toJSON(e) : undefined);
    } else {
      obj.signSweepMsg = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignSweepAllResponse>, I>>(object: I): QuerySignSweepAllResponse {
    const message = createBaseQuerySignSweepAllResponse();
    message.signSweepMsg = object.signSweepMsg?.map((e) => MsgSignSweep.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBroadcastTxRefundRequest(): QueryBroadcastTxRefundRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QueryBroadcastTxRefundRequest = {
  encode(message: QueryBroadcastTxRefundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastTxRefundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastTxRefundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBroadcastTxRefundRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QueryBroadcastTxRefundRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastTxRefundRequest>, I>>(
    object: I,
  ): QueryBroadcastTxRefundRequest {
    const message = createBaseQueryBroadcastTxRefundRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQueryBroadcastTxRefundResponse(): QueryBroadcastTxRefundResponse {
  return { broadcastRefundMsg: undefined };
}

export const QueryBroadcastTxRefundResponse = {
  encode(message: QueryBroadcastTxRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastRefundMsg !== undefined) {
      MsgBroadcastTxRefund.encode(message.broadcastRefundMsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastTxRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastTxRefundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastRefundMsg = MsgBroadcastTxRefund.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBroadcastTxRefundResponse {
    return {
      broadcastRefundMsg: isSet(object.broadcastRefundMsg)
        ? MsgBroadcastTxRefund.fromJSON(object.broadcastRefundMsg)
        : undefined,
    };
  },

  toJSON(message: QueryBroadcastTxRefundResponse): unknown {
    const obj: any = {};
    message.broadcastRefundMsg !== undefined && (obj.broadcastRefundMsg = message.broadcastRefundMsg
      ? MsgBroadcastTxRefund.toJSON(message.broadcastRefundMsg)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastTxRefundResponse>, I>>(
    object: I,
  ): QueryBroadcastTxRefundResponse {
    const message = createBaseQueryBroadcastTxRefundResponse();
    message.broadcastRefundMsg = (object.broadcastRefundMsg !== undefined && object.broadcastRefundMsg !== null)
      ? MsgBroadcastTxRefund.fromPartial(object.broadcastRefundMsg)
      : undefined;
    return message;
  },
};

function createBaseQueryBroadcastTxRefundAllRequest(): QueryBroadcastTxRefundAllRequest {
  return {};
}

export const QueryBroadcastTxRefundAllRequest = {
  encode(_: QueryBroadcastTxRefundAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastTxRefundAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastTxRefundAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryBroadcastTxRefundAllRequest {
    return {};
  },

  toJSON(_: QueryBroadcastTxRefundAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastTxRefundAllRequest>, I>>(
    _: I,
  ): QueryBroadcastTxRefundAllRequest {
    const message = createBaseQueryBroadcastTxRefundAllRequest();
    return message;
  },
};

function createBaseQueryBroadcastTxRefundAllResponse(): QueryBroadcastTxRefundAllResponse {
  return { BroadcastTxRefundMsg: [] };
}

export const QueryBroadcastTxRefundAllResponse = {
  encode(message: QueryBroadcastTxRefundAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.BroadcastTxRefundMsg) {
      MsgBroadcastTxRefund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastTxRefundAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastTxRefundAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BroadcastTxRefundMsg.push(MsgBroadcastTxRefund.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBroadcastTxRefundAllResponse {
    return {
      BroadcastTxRefundMsg: Array.isArray(object?.BroadcastTxRefundMsg)
        ? object.BroadcastTxRefundMsg.map((e: any) => MsgBroadcastTxRefund.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBroadcastTxRefundAllResponse): unknown {
    const obj: any = {};
    if (message.BroadcastTxRefundMsg) {
      obj.BroadcastTxRefundMsg = message.BroadcastTxRefundMsg.map((e) =>
        e ? MsgBroadcastTxRefund.toJSON(e) : undefined
      );
    } else {
      obj.BroadcastTxRefundMsg = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastTxRefundAllResponse>, I>>(
    object: I,
  ): QueryBroadcastTxRefundAllResponse {
    const message = createBaseQueryBroadcastTxRefundAllResponse();
    message.BroadcastTxRefundMsg = object.BroadcastTxRefundMsg?.map((e) => MsgBroadcastTxRefund.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBroadcastTxSweepRequest(): QueryBroadcastTxSweepRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QueryBroadcastTxSweepRequest = {
  encode(message: QueryBroadcastTxSweepRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastTxSweepRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastTxSweepRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBroadcastTxSweepRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QueryBroadcastTxSweepRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastTxSweepRequest>, I>>(object: I): QueryBroadcastTxSweepRequest {
    const message = createBaseQueryBroadcastTxSweepRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQueryBroadcastTxSweepResponse(): QueryBroadcastTxSweepResponse {
  return { broadcastSweepMsg: undefined };
}

export const QueryBroadcastTxSweepResponse = {
  encode(message: QueryBroadcastTxSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.broadcastSweepMsg !== undefined) {
      MsgBroadcastTxSweep.encode(message.broadcastSweepMsg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastTxSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastTxSweepResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastSweepMsg = MsgBroadcastTxSweep.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBroadcastTxSweepResponse {
    return {
      broadcastSweepMsg: isSet(object.broadcastSweepMsg)
        ? MsgBroadcastTxSweep.fromJSON(object.broadcastSweepMsg)
        : undefined,
    };
  },

  toJSON(message: QueryBroadcastTxSweepResponse): unknown {
    const obj: any = {};
    message.broadcastSweepMsg !== undefined && (obj.broadcastSweepMsg = message.broadcastSweepMsg
      ? MsgBroadcastTxSweep.toJSON(message.broadcastSweepMsg)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastTxSweepResponse>, I>>(
    object: I,
  ): QueryBroadcastTxSweepResponse {
    const message = createBaseQueryBroadcastTxSweepResponse();
    message.broadcastSweepMsg = (object.broadcastSweepMsg !== undefined && object.broadcastSweepMsg !== null)
      ? MsgBroadcastTxSweep.fromPartial(object.broadcastSweepMsg)
      : undefined;
    return message;
  },
};

function createBaseQueryBroadcastTxSweepAllRequest(): QueryBroadcastTxSweepAllRequest {
  return {};
}

export const QueryBroadcastTxSweepAllRequest = {
  encode(_: QueryBroadcastTxSweepAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastTxSweepAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastTxSweepAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryBroadcastTxSweepAllRequest {
    return {};
  },

  toJSON(_: QueryBroadcastTxSweepAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastTxSweepAllRequest>, I>>(_: I): QueryBroadcastTxSweepAllRequest {
    const message = createBaseQueryBroadcastTxSweepAllRequest();
    return message;
  },
};

function createBaseQueryBroadcastTxSweepAllResponse(): QueryBroadcastTxSweepAllResponse {
  return { BroadcastTxSweepMsg: [] };
}

export const QueryBroadcastTxSweepAllResponse = {
  encode(message: QueryBroadcastTxSweepAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.BroadcastTxSweepMsg) {
      MsgBroadcastTxSweep.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastTxSweepAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastTxSweepAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BroadcastTxSweepMsg.push(MsgBroadcastTxSweep.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBroadcastTxSweepAllResponse {
    return {
      BroadcastTxSweepMsg: Array.isArray(object?.BroadcastTxSweepMsg)
        ? object.BroadcastTxSweepMsg.map((e: any) => MsgBroadcastTxSweep.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBroadcastTxSweepAllResponse): unknown {
    const obj: any = {};
    if (message.BroadcastTxSweepMsg) {
      obj.BroadcastTxSweepMsg = message.BroadcastTxSweepMsg.map((e) => e ? MsgBroadcastTxSweep.toJSON(e) : undefined);
    } else {
      obj.BroadcastTxSweepMsg = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastTxSweepAllResponse>, I>>(
    object: I,
  ): QueryBroadcastTxSweepAllResponse {
    const message = createBaseQueryBroadcastTxSweepAllResponse();
    message.BroadcastTxSweepMsg = object.BroadcastTxSweepMsg?.map((e) => MsgBroadcastTxSweep.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of RegisteredBtcDepositAddresses items. */
  RegisteredBtcDepositAddresses(
    request: QueryRegisteredBtcDepositAddressesRequest,
  ): Promise<QueryRegisteredBtcDepositAddressesResponse>;
  /** Queries a list of RegisteredReserveAddresses items. */
  RegisteredReserveAddresses(
    request: QueryRegisteredReserveAddressesRequest,
  ): Promise<QueryRegisteredReserveAddressesResponse>;
  /** Queries a list of RegisteredBtcDepositAddress items. */
  RegisteredBtcDepositAddress(
    request: QueryRegisteredBtcDepositAddressRequest,
  ): Promise<QueryRegisteredBtcDepositAddressResponse>;
  /** Queries a list of RegisteredBtcDepositAddressByTwilightAddress items. */
  RegisteredBtcDepositAddressByTwilightAddress(
    request: QueryRegisteredBtcDepositAddressByTwilightAddressRequest,
  ): Promise<QueryRegisteredBtcDepositAddressByTwilightAddressResponse>;
  /** Queries a list of RegisteredJudgeAddressByValidatorAddress items. */
  RegisteredJudgeAddressByValidatorAddress(
    request: QueryRegisteredJudgeAddressByValidatorAddressRequest,
  ): Promise<QueryRegisteredJudgeAddressByValidatorAddressResponse>;
  /** Queries a list of RegisteredJudges items. */
  RegisteredJudges(request: QueryRegisteredJudgesRequest): Promise<QueryRegisteredJudgesResponse>;
  /** Queries a list of WithdrawBtcRequestAll items. */
  WithdrawBtcRequestAll(request: QueryWithdrawBtcRequestAllRequest): Promise<QueryWithdrawBtcRequestAllResponse>;
  /** Queries a list of SignRefundAll items. */
  SignRefundAll(request: QuerySignRefundAllRequest): Promise<QuerySignRefundAllResponse>;
  /** Queries a list of SignSweepAll items. */
  SignSweepAll(request: QuerySignSweepAllRequest): Promise<QuerySignSweepAllResponse>;
  /** Queries a list of BroadcastTxSweepAll items. */
  BroadcastTxSweepAll(request: QueryBroadcastTxSweepAllRequest): Promise<QueryBroadcastTxSweepAllResponse>;
  /** Queries a list of ProposeRefundHashAll items. */
  ProposeRefundHashAll(request: QueryProposeRefundHashAllRequest): Promise<QueryProposeRefundHashAllResponse>;
  /** Queries a list of UnsignedTxSweep items. */
  UnsignedTxSweep(request: QueryUnsignedTxSweepRequest): Promise<QueryUnsignedTxSweepResponse>;
  /** Queries a list of UnsignedTxRefund items. */
  UnsignedTxRefund(request: QueryUnsignedTxRefundRequest): Promise<QueryUnsignedTxRefundResponse>;
  /** Queries a list of UnsignedTxSweepAll items. */
  UnsignedTxSweepAll(request: QueryUnsignedTxSweepAllRequest): Promise<QueryUnsignedTxSweepAllResponse>;
  /** Queries a list of UnsignedTxRefundAll items. */
  UnsignedTxRefundAll(request: QueryUnsignedTxRefundAllRequest): Promise<QueryUnsignedTxRefundAllResponse>;
  /** Queries a list of BroadcastTxRefundAll items. */
  BroadcastTxRefundAll(request: QueryBroadcastTxRefundAllRequest): Promise<QueryBroadcastTxRefundAllResponse>;
  /** Queries a list of ProposeSweepAddress items. */
  ProposeSweepAddress(request: QueryProposeSweepAddressRequest): Promise<QueryProposeSweepAddressResponse>;
  /** Queries a list of ProposeSweepAddressesAll items. */
  ProposeSweepAddressesAll(
    request: QueryProposeSweepAddressesAllRequest,
  ): Promise<QueryProposeSweepAddressesAllResponse>;
  /** Queries a list of SignRefund items. */
  SignRefund(request: QuerySignRefundRequest): Promise<QuerySignRefundResponse>;
  /** Queries a list of SignSweep items. */
  SignSweep(request: QuerySignSweepRequest): Promise<QuerySignSweepResponse>;
  /** Queries a list of BroadcastTxRefund items. */
  BroadcastTxRefund(request: QueryBroadcastTxRefundRequest): Promise<QueryBroadcastTxRefundResponse>;
  /** Queries a list of BroadcastTxSweep items. */
  BroadcastTxSweep(request: QueryBroadcastTxSweepRequest): Promise<QueryBroadcastTxSweepResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.RegisteredBtcDepositAddresses = this.RegisteredBtcDepositAddresses.bind(this);
    this.RegisteredReserveAddresses = this.RegisteredReserveAddresses.bind(this);
    this.RegisteredBtcDepositAddress = this.RegisteredBtcDepositAddress.bind(this);
    this.RegisteredBtcDepositAddressByTwilightAddress = this.RegisteredBtcDepositAddressByTwilightAddress.bind(this);
    this.RegisteredJudgeAddressByValidatorAddress = this.RegisteredJudgeAddressByValidatorAddress.bind(this);
    this.RegisteredJudges = this.RegisteredJudges.bind(this);
    this.WithdrawBtcRequestAll = this.WithdrawBtcRequestAll.bind(this);
    this.SignRefundAll = this.SignRefundAll.bind(this);
    this.SignSweepAll = this.SignSweepAll.bind(this);
    this.BroadcastTxSweepAll = this.BroadcastTxSweepAll.bind(this);
    this.ProposeRefundHashAll = this.ProposeRefundHashAll.bind(this);
    this.UnsignedTxSweep = this.UnsignedTxSweep.bind(this);
    this.UnsignedTxRefund = this.UnsignedTxRefund.bind(this);
    this.UnsignedTxSweepAll = this.UnsignedTxSweepAll.bind(this);
    this.UnsignedTxRefundAll = this.UnsignedTxRefundAll.bind(this);
    this.BroadcastTxRefundAll = this.BroadcastTxRefundAll.bind(this);
    this.ProposeSweepAddress = this.ProposeSweepAddress.bind(this);
    this.ProposeSweepAddressesAll = this.ProposeSweepAddressesAll.bind(this);
    this.SignRefund = this.SignRefund.bind(this);
    this.SignSweep = this.SignSweep.bind(this);
    this.BroadcastTxRefund = this.BroadcastTxRefund.bind(this);
    this.BroadcastTxSweep = this.BroadcastTxSweep.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  RegisteredBtcDepositAddresses(
    request: QueryRegisteredBtcDepositAddressesRequest,
  ): Promise<QueryRegisteredBtcDepositAddressesResponse> {
    const data = QueryRegisteredBtcDepositAddressesRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "RegisteredBtcDepositAddresses", data);
    return promise.then((data) => QueryRegisteredBtcDepositAddressesResponse.decode(new _m0.Reader(data)));
  }

  RegisteredReserveAddresses(
    request: QueryRegisteredReserveAddressesRequest,
  ): Promise<QueryRegisteredReserveAddressesResponse> {
    const data = QueryRegisteredReserveAddressesRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "RegisteredReserveAddresses", data);
    return promise.then((data) => QueryRegisteredReserveAddressesResponse.decode(new _m0.Reader(data)));
  }

  RegisteredBtcDepositAddress(
    request: QueryRegisteredBtcDepositAddressRequest,
  ): Promise<QueryRegisteredBtcDepositAddressResponse> {
    const data = QueryRegisteredBtcDepositAddressRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "RegisteredBtcDepositAddress", data);
    return promise.then((data) => QueryRegisteredBtcDepositAddressResponse.decode(new _m0.Reader(data)));
  }

  RegisteredBtcDepositAddressByTwilightAddress(
    request: QueryRegisteredBtcDepositAddressByTwilightAddressRequest,
  ): Promise<QueryRegisteredBtcDepositAddressByTwilightAddressResponse> {
    const data = QueryRegisteredBtcDepositAddressByTwilightAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Query",
      "RegisteredBtcDepositAddressByTwilightAddress",
      data,
    );
    return promise.then((data) =>
      QueryRegisteredBtcDepositAddressByTwilightAddressResponse.decode(new _m0.Reader(data))
    );
  }

  RegisteredJudgeAddressByValidatorAddress(
    request: QueryRegisteredJudgeAddressByValidatorAddressRequest,
  ): Promise<QueryRegisteredJudgeAddressByValidatorAddressResponse> {
    const data = QueryRegisteredJudgeAddressByValidatorAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Query",
      "RegisteredJudgeAddressByValidatorAddress",
      data,
    );
    return promise.then((data) => QueryRegisteredJudgeAddressByValidatorAddressResponse.decode(new _m0.Reader(data)));
  }

  RegisteredJudges(request: QueryRegisteredJudgesRequest): Promise<QueryRegisteredJudgesResponse> {
    const data = QueryRegisteredJudgesRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "RegisteredJudges", data);
    return promise.then((data) => QueryRegisteredJudgesResponse.decode(new _m0.Reader(data)));
  }

  WithdrawBtcRequestAll(request: QueryWithdrawBtcRequestAllRequest): Promise<QueryWithdrawBtcRequestAllResponse> {
    const data = QueryWithdrawBtcRequestAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "WithdrawBtcRequestAll", data);
    return promise.then((data) => QueryWithdrawBtcRequestAllResponse.decode(new _m0.Reader(data)));
  }

  SignRefundAll(request: QuerySignRefundAllRequest): Promise<QuerySignRefundAllResponse> {
    const data = QuerySignRefundAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "SignRefundAll", data);
    return promise.then((data) => QuerySignRefundAllResponse.decode(new _m0.Reader(data)));
  }

  SignSweepAll(request: QuerySignSweepAllRequest): Promise<QuerySignSweepAllResponse> {
    const data = QuerySignSweepAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "SignSweepAll", data);
    return promise.then((data) => QuerySignSweepAllResponse.decode(new _m0.Reader(data)));
  }

  BroadcastTxSweepAll(request: QueryBroadcastTxSweepAllRequest): Promise<QueryBroadcastTxSweepAllResponse> {
    const data = QueryBroadcastTxSweepAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "BroadcastTxSweepAll", data);
    return promise.then((data) => QueryBroadcastTxSweepAllResponse.decode(new _m0.Reader(data)));
  }

  ProposeRefundHashAll(request: QueryProposeRefundHashAllRequest): Promise<QueryProposeRefundHashAllResponse> {
    const data = QueryProposeRefundHashAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "ProposeRefundHashAll", data);
    return promise.then((data) => QueryProposeRefundHashAllResponse.decode(new _m0.Reader(data)));
  }

  UnsignedTxSweep(request: QueryUnsignedTxSweepRequest): Promise<QueryUnsignedTxSweepResponse> {
    const data = QueryUnsignedTxSweepRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "UnsignedTxSweep", data);
    return promise.then((data) => QueryUnsignedTxSweepResponse.decode(new _m0.Reader(data)));
  }

  UnsignedTxRefund(request: QueryUnsignedTxRefundRequest): Promise<QueryUnsignedTxRefundResponse> {
    const data = QueryUnsignedTxRefundRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "UnsignedTxRefund", data);
    return promise.then((data) => QueryUnsignedTxRefundResponse.decode(new _m0.Reader(data)));
  }

  UnsignedTxSweepAll(request: QueryUnsignedTxSweepAllRequest): Promise<QueryUnsignedTxSweepAllResponse> {
    const data = QueryUnsignedTxSweepAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "UnsignedTxSweepAll", data);
    return promise.then((data) => QueryUnsignedTxSweepAllResponse.decode(new _m0.Reader(data)));
  }

  UnsignedTxRefundAll(request: QueryUnsignedTxRefundAllRequest): Promise<QueryUnsignedTxRefundAllResponse> {
    const data = QueryUnsignedTxRefundAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "UnsignedTxRefundAll", data);
    return promise.then((data) => QueryUnsignedTxRefundAllResponse.decode(new _m0.Reader(data)));
  }

  BroadcastTxRefundAll(request: QueryBroadcastTxRefundAllRequest): Promise<QueryBroadcastTxRefundAllResponse> {
    const data = QueryBroadcastTxRefundAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "BroadcastTxRefundAll", data);
    return promise.then((data) => QueryBroadcastTxRefundAllResponse.decode(new _m0.Reader(data)));
  }

  ProposeSweepAddress(request: QueryProposeSweepAddressRequest): Promise<QueryProposeSweepAddressResponse> {
    const data = QueryProposeSweepAddressRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "ProposeSweepAddress", data);
    return promise.then((data) => QueryProposeSweepAddressResponse.decode(new _m0.Reader(data)));
  }

  ProposeSweepAddressesAll(
    request: QueryProposeSweepAddressesAllRequest,
  ): Promise<QueryProposeSweepAddressesAllResponse> {
    const data = QueryProposeSweepAddressesAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "ProposeSweepAddressesAll", data);
    return promise.then((data) => QueryProposeSweepAddressesAllResponse.decode(new _m0.Reader(data)));
  }

  SignRefund(request: QuerySignRefundRequest): Promise<QuerySignRefundResponse> {
    const data = QuerySignRefundRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "SignRefund", data);
    return promise.then((data) => QuerySignRefundResponse.decode(new _m0.Reader(data)));
  }

  SignSweep(request: QuerySignSweepRequest): Promise<QuerySignSweepResponse> {
    const data = QuerySignSweepRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "SignSweep", data);
    return promise.then((data) => QuerySignSweepResponse.decode(new _m0.Reader(data)));
  }

  BroadcastTxRefund(request: QueryBroadcastTxRefundRequest): Promise<QueryBroadcastTxRefundResponse> {
    const data = QueryBroadcastTxRefundRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "BroadcastTxRefund", data);
    return promise.then((data) => QueryBroadcastTxRefundResponse.decode(new _m0.Reader(data)));
  }

  BroadcastTxSweep(request: QueryBroadcastTxSweepRequest): Promise<QueryBroadcastTxSweepResponse> {
    const data = QueryBroadcastTxSweepRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "BroadcastTxSweep", data);
    return promise.then((data) => QueryBroadcastTxSweepResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
