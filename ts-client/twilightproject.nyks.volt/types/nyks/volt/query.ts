/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ClearingAccount } from "./clearing";
import { Params } from "./params";
import { BtcReserve } from "./reserve";

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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of BtcReserve items. */
  BtcReserve(request: QueryBtcReserveRequest): Promise<QueryBtcReserveResponse>;
  /** Queries a list of ClearingAccount items. */
  ClearingAccount(request: QueryClearingAccountRequest): Promise<QueryClearingAccountResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.BtcReserve = this.BtcReserve.bind(this);
    this.ClearingAccount = this.ClearingAccount.bind(this);
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
