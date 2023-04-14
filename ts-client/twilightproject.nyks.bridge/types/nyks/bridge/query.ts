/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import {
  MsgBroadcastRefund,
  MsgRegisterBtcDepositAddress,
  MsgRegisterJudge,
  MsgRegisterReserveAddress,
  MsgSignRefund,
  MsgSignSweep,
  MsgWithdrawBtcRequest,
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
  addresses: MsgRegisterBtcDepositAddress[];
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
  withdrawRequest: MsgWithdrawBtcRequest[];
}

export interface QuerySignRefundAllRequest {
}

export interface QuerySignRefundAllResponse {
  signRefundMsg: MsgSignRefund[];
}

export interface QuerySignSweepAllRequest {
}

export interface QuerySignSweepAllResponse {
  signSweepMsg: MsgSignSweep[];
}

export interface QueryBroadcastRefundAllRequest {
}

export interface QueryBroadcastRefundAllResponse {
  broadcastRefundMsg: MsgBroadcastRefund[];
}

export interface QueryProposeRefundHashAllRequest {
}

export interface QueryProposeRefundHashAllResponse {
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
      MsgRegisterBtcDepositAddress.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.addresses.push(MsgRegisterBtcDepositAddress.decode(reader, reader.uint32()));
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
        ? object.addresses.map((e: any) => MsgRegisterBtcDepositAddress.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryRegisteredBtcDepositAddressesResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e ? MsgRegisterBtcDepositAddress.toJSON(e) : undefined);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRegisteredBtcDepositAddressesResponse>, I>>(
    object: I,
  ): QueryRegisteredBtcDepositAddressesResponse {
    const message = createBaseQueryRegisteredBtcDepositAddressesResponse();
    message.addresses = object.addresses?.map((e) => MsgRegisterBtcDepositAddress.fromPartial(e)) || [];
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
      MsgWithdrawBtcRequest.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.withdrawRequest.push(MsgWithdrawBtcRequest.decode(reader, reader.uint32()));
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
        ? object.withdrawRequest.map((e: any) => MsgWithdrawBtcRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryWithdrawBtcRequestAllResponse): unknown {
    const obj: any = {};
    if (message.withdrawRequest) {
      obj.withdrawRequest = message.withdrawRequest.map((e) => e ? MsgWithdrawBtcRequest.toJSON(e) : undefined);
    } else {
      obj.withdrawRequest = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryWithdrawBtcRequestAllResponse>, I>>(
    object: I,
  ): QueryWithdrawBtcRequestAllResponse {
    const message = createBaseQueryWithdrawBtcRequestAllResponse();
    message.withdrawRequest = object.withdrawRequest?.map((e) => MsgWithdrawBtcRequest.fromPartial(e)) || [];
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

function createBaseQueryBroadcastRefundAllRequest(): QueryBroadcastRefundAllRequest {
  return {};
}

export const QueryBroadcastRefundAllRequest = {
  encode(_: QueryBroadcastRefundAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastRefundAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastRefundAllRequest();
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

  fromJSON(_: any): QueryBroadcastRefundAllRequest {
    return {};
  },

  toJSON(_: QueryBroadcastRefundAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastRefundAllRequest>, I>>(_: I): QueryBroadcastRefundAllRequest {
    const message = createBaseQueryBroadcastRefundAllRequest();
    return message;
  },
};

function createBaseQueryBroadcastRefundAllResponse(): QueryBroadcastRefundAllResponse {
  return { broadcastRefundMsg: [] };
}

export const QueryBroadcastRefundAllResponse = {
  encode(message: QueryBroadcastRefundAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.broadcastRefundMsg) {
      MsgBroadcastRefund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBroadcastRefundAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBroadcastRefundAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.broadcastRefundMsg.push(MsgBroadcastRefund.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBroadcastRefundAllResponse {
    return {
      broadcastRefundMsg: Array.isArray(object?.broadcastRefundMsg)
        ? object.broadcastRefundMsg.map((e: any) => MsgBroadcastRefund.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBroadcastRefundAllResponse): unknown {
    const obj: any = {};
    if (message.broadcastRefundMsg) {
      obj.broadcastRefundMsg = message.broadcastRefundMsg.map((e) => e ? MsgBroadcastRefund.toJSON(e) : undefined);
    } else {
      obj.broadcastRefundMsg = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBroadcastRefundAllResponse>, I>>(
    object: I,
  ): QueryBroadcastRefundAllResponse {
    const message = createBaseQueryBroadcastRefundAllResponse();
    message.broadcastRefundMsg = object.broadcastRefundMsg?.map((e) => MsgBroadcastRefund.fromPartial(e)) || [];
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
  return {};
}

export const QueryProposeRefundHashAllResponse = {
  encode(_: QueryProposeRefundHashAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposeRefundHashAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposeRefundHashAllResponse();
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

  fromJSON(_: any): QueryProposeRefundHashAllResponse {
    return {};
  },

  toJSON(_: QueryProposeRefundHashAllResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposeRefundHashAllResponse>, I>>(
    _: I,
  ): QueryProposeRefundHashAllResponse {
    const message = createBaseQueryProposeRefundHashAllResponse();
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
  /** Queries a list of BroadcastRefundAll items. */
  BroadcastRefundAll(request: QueryBroadcastRefundAllRequest): Promise<QueryBroadcastRefundAllResponse>;
  /** Queries a list of ProposeRefundHashAll items. */
  ProposeRefundHashAll(request: QueryProposeRefundHashAllRequest): Promise<QueryProposeRefundHashAllResponse>;
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
    this.BroadcastRefundAll = this.BroadcastRefundAll.bind(this);
    this.ProposeRefundHashAll = this.ProposeRefundHashAll.bind(this);
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

  BroadcastRefundAll(request: QueryBroadcastRefundAllRequest): Promise<QueryBroadcastRefundAllResponse> {
    const data = QueryBroadcastRefundAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "BroadcastRefundAll", data);
    return promise.then((data) => QueryBroadcastRefundAllResponse.decode(new _m0.Reader(data)));
  }

  ProposeRefundHashAll(request: QueryProposeRefundHashAllRequest): Promise<QueryProposeRefundHashAllResponse> {
    const data = QueryProposeRefundHashAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Query", "ProposeRefundHashAll", data);
    return promise.then((data) => QueryProposeRefundHashAllResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
