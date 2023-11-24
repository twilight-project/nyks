/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ClearingAccount, RefundTxSnapshot } from "./clearing";
import { Params } from "./params";
import { BtcReserve } from "./reserve";
import { ReserveWithdrawSnapshot } from "./withdraw";

export const protobufPackage = "twilightproject.nyks.volt";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryBtcReserveRequest {
}

export interface QueryBtcReserveResponse {
  BtcReserves: BtcReserve[];
}

/** this line is used by starport scaffolding # 3 */
export interface QueryClearingAccountRequest {
  twilightAddress: string;
}

export interface QueryClearingAccountResponse {
  ClearingAccount: ClearingAccount | undefined;
}

export interface QueryReserveClearingAccountsAllRequest {
  reserveId: number;
}

export interface QueryReserveClearingAccountsAllResponse {
  ReserveClearingAccountsAll: ClearingAccount[];
}

export interface QueryReserveWithdrawSnapshotRequest {
  reserveId: number;
  roundId: number;
}

export interface QueryReserveWithdrawSnapshotResponse {
  ReserveWithdrawSnapshot: ReserveWithdrawSnapshot | undefined;
}

export interface QueryRefundTxSnapshotRequest {
  reserveId: number;
  roundId: number;
}

export interface QueryRefundTxSnapshotResponse {
  RefundTxSnapshot: RefundTxSnapshot | undefined;
}

export interface QueryBtcWithdrawRequestRequest {
  twilightAddress: string;
}

export interface QueryBtcWithdrawRequestResponse {
}

export interface QueryReserveWithdrawPoolRequest {
  reserveId: number;
  roundId: number;
}

export interface QueryReserveWithdrawPoolResponse {
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

function createBaseQueryBtcReserveRequest(): QueryBtcReserveRequest {
  return {};
}

export const QueryBtcReserveRequest = {
  encode(_: QueryBtcReserveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBtcReserveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBtcReserveRequest();
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

  fromJSON(_: any): QueryBtcReserveRequest {
    return {};
  },

  toJSON(_: QueryBtcReserveRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBtcReserveRequest>, I>>(_: I): QueryBtcReserveRequest {
    const message = createBaseQueryBtcReserveRequest();
    return message;
  },
};

function createBaseQueryBtcReserveResponse(): QueryBtcReserveResponse {
  return { BtcReserves: [] };
}

export const QueryBtcReserveResponse = {
  encode(message: QueryBtcReserveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.BtcReserves) {
      BtcReserve.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBtcReserveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBtcReserveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.BtcReserves.push(BtcReserve.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBtcReserveResponse {
    return {
      BtcReserves: Array.isArray(object?.BtcReserves) ? object.BtcReserves.map((e: any) => BtcReserve.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryBtcReserveResponse): unknown {
    const obj: any = {};
    if (message.BtcReserves) {
      obj.BtcReserves = message.BtcReserves.map((e) => e ? BtcReserve.toJSON(e) : undefined);
    } else {
      obj.BtcReserves = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBtcReserveResponse>, I>>(object: I): QueryBtcReserveResponse {
    const message = createBaseQueryBtcReserveResponse();
    message.BtcReserves = object.BtcReserves?.map((e) => BtcReserve.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryClearingAccountRequest(): QueryClearingAccountRequest {
  return { twilightAddress: "" };
}

export const QueryClearingAccountRequest = {
  encode(message: QueryClearingAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.twilightAddress !== "") {
      writer.uint32(10).string(message.twilightAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClearingAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClearingAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.twilightAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClearingAccountRequest {
    return { twilightAddress: isSet(object.twilightAddress) ? String(object.twilightAddress) : "" };
  },

  toJSON(message: QueryClearingAccountRequest): unknown {
    const obj: any = {};
    message.twilightAddress !== undefined && (obj.twilightAddress = message.twilightAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClearingAccountRequest>, I>>(object: I): QueryClearingAccountRequest {
    const message = createBaseQueryClearingAccountRequest();
    message.twilightAddress = object.twilightAddress ?? "";
    return message;
  },
};

function createBaseQueryClearingAccountResponse(): QueryClearingAccountResponse {
  return { ClearingAccount: undefined };
}

export const QueryClearingAccountResponse = {
  encode(message: QueryClearingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ClearingAccount !== undefined) {
      ClearingAccount.encode(message.ClearingAccount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClearingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClearingAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ClearingAccount = ClearingAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryClearingAccountResponse {
    return {
      ClearingAccount: isSet(object.ClearingAccount) ? ClearingAccount.fromJSON(object.ClearingAccount) : undefined,
    };
  },

  toJSON(message: QueryClearingAccountResponse): unknown {
    const obj: any = {};
    message.ClearingAccount !== undefined
      && (obj.ClearingAccount = message.ClearingAccount ? ClearingAccount.toJSON(message.ClearingAccount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryClearingAccountResponse>, I>>(object: I): QueryClearingAccountResponse {
    const message = createBaseQueryClearingAccountResponse();
    message.ClearingAccount = (object.ClearingAccount !== undefined && object.ClearingAccount !== null)
      ? ClearingAccount.fromPartial(object.ClearingAccount)
      : undefined;
    return message;
  },
};

function createBaseQueryReserveClearingAccountsAllRequest(): QueryReserveClearingAccountsAllRequest {
  return { reserveId: 0 };
}

export const QueryReserveClearingAccountsAllRequest = {
  encode(message: QueryReserveClearingAccountsAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReserveClearingAccountsAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReserveClearingAccountsAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryReserveClearingAccountsAllRequest {
    return { reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0 };
  },

  toJSON(message: QueryReserveClearingAccountsAllRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReserveClearingAccountsAllRequest>, I>>(
    object: I,
  ): QueryReserveClearingAccountsAllRequest {
    const message = createBaseQueryReserveClearingAccountsAllRequest();
    message.reserveId = object.reserveId ?? 0;
    return message;
  },
};

function createBaseQueryReserveClearingAccountsAllResponse(): QueryReserveClearingAccountsAllResponse {
  return { ReserveClearingAccountsAll: [] };
}

export const QueryReserveClearingAccountsAllResponse = {
  encode(message: QueryReserveClearingAccountsAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ReserveClearingAccountsAll) {
      ClearingAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReserveClearingAccountsAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReserveClearingAccountsAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveClearingAccountsAll.push(ClearingAccount.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryReserveClearingAccountsAllResponse {
    return {
      ReserveClearingAccountsAll: Array.isArray(object?.ReserveClearingAccountsAll)
        ? object.ReserveClearingAccountsAll.map((e: any) => ClearingAccount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryReserveClearingAccountsAllResponse): unknown {
    const obj: any = {};
    if (message.ReserveClearingAccountsAll) {
      obj.ReserveClearingAccountsAll = message.ReserveClearingAccountsAll.map((e) =>
        e ? ClearingAccount.toJSON(e) : undefined
      );
    } else {
      obj.ReserveClearingAccountsAll = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReserveClearingAccountsAllResponse>, I>>(
    object: I,
  ): QueryReserveClearingAccountsAllResponse {
    const message = createBaseQueryReserveClearingAccountsAllResponse();
    message.ReserveClearingAccountsAll = object.ReserveClearingAccountsAll?.map((e) => ClearingAccount.fromPartial(e))
      || [];
    return message;
  },
};

function createBaseQueryReserveWithdrawSnapshotRequest(): QueryReserveWithdrawSnapshotRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QueryReserveWithdrawSnapshotRequest = {
  encode(message: QueryReserveWithdrawSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReserveWithdrawSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReserveWithdrawSnapshotRequest();
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

  fromJSON(object: any): QueryReserveWithdrawSnapshotRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QueryReserveWithdrawSnapshotRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReserveWithdrawSnapshotRequest>, I>>(
    object: I,
  ): QueryReserveWithdrawSnapshotRequest {
    const message = createBaseQueryReserveWithdrawSnapshotRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQueryReserveWithdrawSnapshotResponse(): QueryReserveWithdrawSnapshotResponse {
  return { ReserveWithdrawSnapshot: undefined };
}

export const QueryReserveWithdrawSnapshotResponse = {
  encode(message: QueryReserveWithdrawSnapshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ReserveWithdrawSnapshot !== undefined) {
      ReserveWithdrawSnapshot.encode(message.ReserveWithdrawSnapshot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReserveWithdrawSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReserveWithdrawSnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveWithdrawSnapshot = ReserveWithdrawSnapshot.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryReserveWithdrawSnapshotResponse {
    return {
      ReserveWithdrawSnapshot: isSet(object.ReserveWithdrawSnapshot)
        ? ReserveWithdrawSnapshot.fromJSON(object.ReserveWithdrawSnapshot)
        : undefined,
    };
  },

  toJSON(message: QueryReserveWithdrawSnapshotResponse): unknown {
    const obj: any = {};
    message.ReserveWithdrawSnapshot !== undefined && (obj.ReserveWithdrawSnapshot = message.ReserveWithdrawSnapshot
      ? ReserveWithdrawSnapshot.toJSON(message.ReserveWithdrawSnapshot)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReserveWithdrawSnapshotResponse>, I>>(
    object: I,
  ): QueryReserveWithdrawSnapshotResponse {
    const message = createBaseQueryReserveWithdrawSnapshotResponse();
    message.ReserveWithdrawSnapshot =
      (object.ReserveWithdrawSnapshot !== undefined && object.ReserveWithdrawSnapshot !== null)
        ? ReserveWithdrawSnapshot.fromPartial(object.ReserveWithdrawSnapshot)
        : undefined;
    return message;
  },
};

function createBaseQueryRefundTxSnapshotRequest(): QueryRefundTxSnapshotRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QueryRefundTxSnapshotRequest = {
  encode(message: QueryRefundTxSnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRefundTxSnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRefundTxSnapshotRequest();
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

  fromJSON(object: any): QueryRefundTxSnapshotRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QueryRefundTxSnapshotRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRefundTxSnapshotRequest>, I>>(object: I): QueryRefundTxSnapshotRequest {
    const message = createBaseQueryRefundTxSnapshotRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQueryRefundTxSnapshotResponse(): QueryRefundTxSnapshotResponse {
  return { RefundTxSnapshot: undefined };
}

export const QueryRefundTxSnapshotResponse = {
  encode(message: QueryRefundTxSnapshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RefundTxSnapshot !== undefined) {
      RefundTxSnapshot.encode(message.RefundTxSnapshot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRefundTxSnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRefundTxSnapshotResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.RefundTxSnapshot = RefundTxSnapshot.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRefundTxSnapshotResponse {
    return {
      RefundTxSnapshot: isSet(object.RefundTxSnapshot) ? RefundTxSnapshot.fromJSON(object.RefundTxSnapshot) : undefined,
    };
  },

  toJSON(message: QueryRefundTxSnapshotResponse): unknown {
    const obj: any = {};
    message.RefundTxSnapshot !== undefined && (obj.RefundTxSnapshot = message.RefundTxSnapshot
      ? RefundTxSnapshot.toJSON(message.RefundTxSnapshot)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRefundTxSnapshotResponse>, I>>(
    object: I,
  ): QueryRefundTxSnapshotResponse {
    const message = createBaseQueryRefundTxSnapshotResponse();
    message.RefundTxSnapshot = (object.RefundTxSnapshot !== undefined && object.RefundTxSnapshot !== null)
      ? RefundTxSnapshot.fromPartial(object.RefundTxSnapshot)
      : undefined;
    return message;
  },
};

function createBaseQueryBtcWithdrawRequestRequest(): QueryBtcWithdrawRequestRequest {
  return { twilightAddress: "" };
}

export const QueryBtcWithdrawRequestRequest = {
  encode(message: QueryBtcWithdrawRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.twilightAddress !== "") {
      writer.uint32(10).string(message.twilightAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBtcWithdrawRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBtcWithdrawRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.twilightAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBtcWithdrawRequestRequest {
    return { twilightAddress: isSet(object.twilightAddress) ? String(object.twilightAddress) : "" };
  },

  toJSON(message: QueryBtcWithdrawRequestRequest): unknown {
    const obj: any = {};
    message.twilightAddress !== undefined && (obj.twilightAddress = message.twilightAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBtcWithdrawRequestRequest>, I>>(
    object: I,
  ): QueryBtcWithdrawRequestRequest {
    const message = createBaseQueryBtcWithdrawRequestRequest();
    message.twilightAddress = object.twilightAddress ?? "";
    return message;
  },
};

function createBaseQueryBtcWithdrawRequestResponse(): QueryBtcWithdrawRequestResponse {
  return {};
}

export const QueryBtcWithdrawRequestResponse = {
  encode(_: QueryBtcWithdrawRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBtcWithdrawRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBtcWithdrawRequestResponse();
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

  fromJSON(_: any): QueryBtcWithdrawRequestResponse {
    return {};
  },

  toJSON(_: QueryBtcWithdrawRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBtcWithdrawRequestResponse>, I>>(_: I): QueryBtcWithdrawRequestResponse {
    const message = createBaseQueryBtcWithdrawRequestResponse();
    return message;
  },
};

function createBaseQueryReserveWithdrawPoolRequest(): QueryReserveWithdrawPoolRequest {
  return { reserveId: 0, roundId: 0 };
}

export const QueryReserveWithdrawPoolRequest = {
  encode(message: QueryReserveWithdrawPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).int32(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).int32(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReserveWithdrawPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReserveWithdrawPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = reader.int32();
          break;
        case 2:
          message.roundId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryReserveWithdrawPoolRequest {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: QueryReserveWithdrawPoolRequest): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReserveWithdrawPoolRequest>, I>>(
    object: I,
  ): QueryReserveWithdrawPoolRequest {
    const message = createBaseQueryReserveWithdrawPoolRequest();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseQueryReserveWithdrawPoolResponse(): QueryReserveWithdrawPoolResponse {
  return {};
}

export const QueryReserveWithdrawPoolResponse = {
  encode(_: QueryReserveWithdrawPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReserveWithdrawPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReserveWithdrawPoolResponse();
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

  fromJSON(_: any): QueryReserveWithdrawPoolResponse {
    return {};
  },

  toJSON(_: QueryReserveWithdrawPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryReserveWithdrawPoolResponse>, I>>(
    _: I,
  ): QueryReserveWithdrawPoolResponse {
    const message = createBaseQueryReserveWithdrawPoolResponse();
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of BtcReserve items. */
  BtcReserve(request: QueryBtcReserveRequest): Promise<QueryBtcReserveResponse>;
  /** Queries a list of ClearingAccount items. */
  ClearingAccount(request: QueryClearingAccountRequest): Promise<QueryClearingAccountResponse>;
  /** Queries a list of ReserveClearingAccountsAll items. */
  ReserveClearingAccountsAll(
    request: QueryReserveClearingAccountsAllRequest,
  ): Promise<QueryReserveClearingAccountsAllResponse>;
  /** Queries a list of ReserveWithdrawSnapshot items. */
  ReserveWithdrawSnapshot(request: QueryReserveWithdrawSnapshotRequest): Promise<QueryReserveWithdrawSnapshotResponse>;
  /** Queries a list of RefundTxSnapshot items. */
  RefundTxSnapshot(request: QueryRefundTxSnapshotRequest): Promise<QueryRefundTxSnapshotResponse>;
  /** Queries a list of BtcWithdrawRequest items. */
  BtcWithdrawRequest(request: QueryBtcWithdrawRequestRequest): Promise<QueryBtcWithdrawRequestResponse>;
  /** Queries a list of ReserveWithdrawPool items. */
  ReserveWithdrawPool(request: QueryReserveWithdrawPoolRequest): Promise<QueryReserveWithdrawPoolResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.BtcReserve = this.BtcReserve.bind(this);
    this.ClearingAccount = this.ClearingAccount.bind(this);
    this.ReserveClearingAccountsAll = this.ReserveClearingAccountsAll.bind(this);
    this.ReserveWithdrawSnapshot = this.ReserveWithdrawSnapshot.bind(this);
    this.RefundTxSnapshot = this.RefundTxSnapshot.bind(this);
    this.BtcWithdrawRequest = this.BtcWithdrawRequest.bind(this);
    this.ReserveWithdrawPool = this.ReserveWithdrawPool.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  BtcReserve(request: QueryBtcReserveRequest): Promise<QueryBtcReserveResponse> {
    const data = QueryBtcReserveRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Query", "BtcReserve", data);
    return promise.then((data) => QueryBtcReserveResponse.decode(new _m0.Reader(data)));
  }

  ClearingAccount(request: QueryClearingAccountRequest): Promise<QueryClearingAccountResponse> {
    const data = QueryClearingAccountRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Query", "ClearingAccount", data);
    return promise.then((data) => QueryClearingAccountResponse.decode(new _m0.Reader(data)));
  }

  ReserveClearingAccountsAll(
    request: QueryReserveClearingAccountsAllRequest,
  ): Promise<QueryReserveClearingAccountsAllResponse> {
    const data = QueryReserveClearingAccountsAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Query", "ReserveClearingAccountsAll", data);
    return promise.then((data) => QueryReserveClearingAccountsAllResponse.decode(new _m0.Reader(data)));
  }

  ReserveWithdrawSnapshot(request: QueryReserveWithdrawSnapshotRequest): Promise<QueryReserveWithdrawSnapshotResponse> {
    const data = QueryReserveWithdrawSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Query", "ReserveWithdrawSnapshot", data);
    return promise.then((data) => QueryReserveWithdrawSnapshotResponse.decode(new _m0.Reader(data)));
  }

  RefundTxSnapshot(request: QueryRefundTxSnapshotRequest): Promise<QueryRefundTxSnapshotResponse> {
    const data = QueryRefundTxSnapshotRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Query", "RefundTxSnapshot", data);
    return promise.then((data) => QueryRefundTxSnapshotResponse.decode(new _m0.Reader(data)));
  }

  BtcWithdrawRequest(request: QueryBtcWithdrawRequestRequest): Promise<QueryBtcWithdrawRequestResponse> {
    const data = QueryBtcWithdrawRequestRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Query", "BtcWithdrawRequest", data);
    return promise.then((data) => QueryBtcWithdrawRequestResponse.decode(new _m0.Reader(data)));
  }

  ReserveWithdrawPool(request: QueryReserveWithdrawPoolRequest): Promise<QueryReserveWithdrawPoolResponse> {
    const data = QueryReserveWithdrawPoolRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Query", "ReserveWithdrawPool", data);
    return promise.then((data) => QueryReserveWithdrawPoolResponse.decode(new _m0.Reader(data)));
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
