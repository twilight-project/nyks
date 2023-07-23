/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { MsgTransferTx } from "./tx";

export const protobufPackage = "twilightproject.nyks.zkos";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryTransferTxRequest {
  txId: string;
}

export interface QueryTransferTxResponse {
  TransferTx: MsgTransferTx | undefined;
}

export interface QueryMintOrBurnTradingBtcRequest {
  twilightAddress: string;
}

export interface QueryMintOrBurnTradingBtcResponse {
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

function createBaseQueryTransferTxRequest(): QueryTransferTxRequest {
  return { txId: "" };
}

export const QueryTransferTxRequest = {
  encode(message: QueryTransferTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTransferTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTransferTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTransferTxRequest {
    return { txId: isSet(object.txId) ? String(object.txId) : "" };
  },

  toJSON(message: QueryTransferTxRequest): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTransferTxRequest>, I>>(object: I): QueryTransferTxRequest {
    const message = createBaseQueryTransferTxRequest();
    message.txId = object.txId ?? "";
    return message;
  },
};

function createBaseQueryTransferTxResponse(): QueryTransferTxResponse {
  return { TransferTx: undefined };
}

export const QueryTransferTxResponse = {
  encode(message: QueryTransferTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TransferTx !== undefined) {
      MsgTransferTx.encode(message.TransferTx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTransferTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTransferTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TransferTx = MsgTransferTx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTransferTxResponse {
    return { TransferTx: isSet(object.TransferTx) ? MsgTransferTx.fromJSON(object.TransferTx) : undefined };
  },

  toJSON(message: QueryTransferTxResponse): unknown {
    const obj: any = {};
    message.TransferTx !== undefined
      && (obj.TransferTx = message.TransferTx ? MsgTransferTx.toJSON(message.TransferTx) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTransferTxResponse>, I>>(object: I): QueryTransferTxResponse {
    const message = createBaseQueryTransferTxResponse();
    message.TransferTx = (object.TransferTx !== undefined && object.TransferTx !== null)
      ? MsgTransferTx.fromPartial(object.TransferTx)
      : undefined;
    return message;
  },
};

function createBaseQueryMintOrBurnTradingBtcRequest(): QueryMintOrBurnTradingBtcRequest {
  return { twilightAddress: "" };
}

export const QueryMintOrBurnTradingBtcRequest = {
  encode(message: QueryMintOrBurnTradingBtcRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.twilightAddress !== "") {
      writer.uint32(10).string(message.twilightAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintOrBurnTradingBtcRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintOrBurnTradingBtcRequest();
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

  fromJSON(object: any): QueryMintOrBurnTradingBtcRequest {
    return { twilightAddress: isSet(object.twilightAddress) ? String(object.twilightAddress) : "" };
  },

  toJSON(message: QueryMintOrBurnTradingBtcRequest): unknown {
    const obj: any = {};
    message.twilightAddress !== undefined && (obj.twilightAddress = message.twilightAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintOrBurnTradingBtcRequest>, I>>(
    object: I,
  ): QueryMintOrBurnTradingBtcRequest {
    const message = createBaseQueryMintOrBurnTradingBtcRequest();
    message.twilightAddress = object.twilightAddress ?? "";
    return message;
  },
};

function createBaseQueryMintOrBurnTradingBtcResponse(): QueryMintOrBurnTradingBtcResponse {
  return {};
}

export const QueryMintOrBurnTradingBtcResponse = {
  encode(_: QueryMintOrBurnTradingBtcResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMintOrBurnTradingBtcResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintOrBurnTradingBtcResponse();
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

  fromJSON(_: any): QueryMintOrBurnTradingBtcResponse {
    return {};
  },

  toJSON(_: QueryMintOrBurnTradingBtcResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintOrBurnTradingBtcResponse>, I>>(
    _: I,
  ): QueryMintOrBurnTradingBtcResponse {
    const message = createBaseQueryMintOrBurnTradingBtcResponse();
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of TransferTx items. */
  TransferTx(request: QueryTransferTxRequest): Promise<QueryTransferTxResponse>;
  /** Queries a list of MintOrBurnTradingBtc items. */
  MintOrBurnTradingBtc(request: QueryMintOrBurnTradingBtcRequest): Promise<QueryMintOrBurnTradingBtcResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.TransferTx = this.TransferTx.bind(this);
    this.MintOrBurnTradingBtc = this.MintOrBurnTradingBtc.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.zkos.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  TransferTx(request: QueryTransferTxRequest): Promise<QueryTransferTxResponse> {
    const data = QueryTransferTxRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.zkos.Query", "TransferTx", data);
    return promise.then((data) => QueryTransferTxResponse.decode(new _m0.Reader(data)));
  }

  MintOrBurnTradingBtc(request: QueryMintOrBurnTradingBtcRequest): Promise<QueryMintOrBurnTradingBtcResponse> {
    const data = QueryMintOrBurnTradingBtcRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.zkos.Query", "MintOrBurnTradingBtc", data);
    return promise.then((data) => QueryMintOrBurnTradingBtcResponse.decode(new _m0.Reader(data)));
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
