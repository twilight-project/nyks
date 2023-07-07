/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Attestation } from "./attestation";
import { Params } from "./params";
import { MsgSetDelegateAddresses } from "./tx";

export const protobufPackage = "twilightproject.nyks.forks";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'.
 */
export interface QueryAttestationsRequest {
  /** limit defines how many attestations to limit in the response. */
  limit: number;
  /**
   * order_by provides ordering of atteststions by nonce in the response. Either
   * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
   * 'asc'.
   */
  orderBy: string;
  /** proposal_type allows filtering attestations by proposal type */
  proposalType: string;
  /** height allows filtering attestations by block height */
  height: number;
}

export interface QueryAttestationsResponse {
  attestations: Attestation[];
}

export interface QueryDelegateKeysByBtcOracleAddressRequest {
  btcOracleAddress: string;
}

export interface QueryDelegateKeysByBtcOracleAddressResponse {
  validatorAddress: string;
  btcPublicKey: string;
}

export interface QueryDelegateKeysAllRequest {
}

export interface QueryDelegateKeysAllResponse {
  addresses: MsgSetDelegateAddresses[];
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

function createBaseQueryAttestationsRequest(): QueryAttestationsRequest {
  return { limit: 0, orderBy: "", proposalType: "", height: 0 };
}

export const QueryAttestationsRequest = {
  encode(message: QueryAttestationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.orderBy !== "") {
      writer.uint32(18).string(message.orderBy);
    }
    if (message.proposalType !== "") {
      writer.uint32(26).string(message.proposalType);
    }
    if (message.height !== 0) {
      writer.uint32(32).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.orderBy = reader.string();
          break;
        case 3:
          message.proposalType = reader.string();
          break;
        case 4:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsRequest {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      orderBy: isSet(object.orderBy) ? String(object.orderBy) : "",
      proposalType: isSet(object.proposalType) ? String(object.proposalType) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: QueryAttestationsRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    message.proposalType !== undefined && (obj.proposalType = message.proposalType);
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAttestationsRequest>, I>>(object: I): QueryAttestationsRequest {
    const message = createBaseQueryAttestationsRequest();
    message.limit = object.limit ?? 0;
    message.orderBy = object.orderBy ?? "";
    message.proposalType = object.proposalType ?? "";
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseQueryAttestationsResponse(): QueryAttestationsResponse {
  return { attestations: [] };
}

export const QueryAttestationsResponse = {
  encode(message: QueryAttestationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestations.push(Attestation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsResponse {
    return {
      attestations: Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => Attestation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAttestationsResponse): unknown {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map((e) => e ? Attestation.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAttestationsResponse>, I>>(object: I): QueryAttestationsResponse {
    const message = createBaseQueryAttestationsResponse();
    message.attestations = object.attestations?.map((e) => Attestation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryDelegateKeysByBtcOracleAddressRequest(): QueryDelegateKeysByBtcOracleAddressRequest {
  return { btcOracleAddress: "" };
}

export const QueryDelegateKeysByBtcOracleAddressRequest = {
  encode(message: QueryDelegateKeysByBtcOracleAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.btcOracleAddress !== "") {
      writer.uint32(10).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByBtcOracleAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByBtcOracleAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegateKeysByBtcOracleAddressRequest {
    return { btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "" };
  },

  toJSON(message: QueryDelegateKeysByBtcOracleAddressRequest): unknown {
    const obj: any = {};
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeysByBtcOracleAddressRequest>, I>>(
    object: I,
  ): QueryDelegateKeysByBtcOracleAddressRequest {
    const message = createBaseQueryDelegateKeysByBtcOracleAddressRequest();
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
};

function createBaseQueryDelegateKeysByBtcOracleAddressResponse(): QueryDelegateKeysByBtcOracleAddressResponse {
  return { validatorAddress: "", btcPublicKey: "" };
}

export const QueryDelegateKeysByBtcOracleAddressResponse = {
  encode(message: QueryDelegateKeysByBtcOracleAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.btcPublicKey !== "") {
      writer.uint32(18).string(message.btcPublicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByBtcOracleAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByBtcOracleAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.btcPublicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegateKeysByBtcOracleAddressResponse {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      btcPublicKey: isSet(object.btcPublicKey) ? String(object.btcPublicKey) : "",
    };
  },

  toJSON(message: QueryDelegateKeysByBtcOracleAddressResponse): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.btcPublicKey !== undefined && (obj.btcPublicKey = message.btcPublicKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeysByBtcOracleAddressResponse>, I>>(
    object: I,
  ): QueryDelegateKeysByBtcOracleAddressResponse {
    const message = createBaseQueryDelegateKeysByBtcOracleAddressResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.btcPublicKey = object.btcPublicKey ?? "";
    return message;
  },
};

function createBaseQueryDelegateKeysAllRequest(): QueryDelegateKeysAllRequest {
  return {};
}

export const QueryDelegateKeysAllRequest = {
  encode(_: QueryDelegateKeysAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysAllRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysAllRequest();
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

  fromJSON(_: any): QueryDelegateKeysAllRequest {
    return {};
  },

  toJSON(_: QueryDelegateKeysAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeysAllRequest>, I>>(_: I): QueryDelegateKeysAllRequest {
    const message = createBaseQueryDelegateKeysAllRequest();
    return message;
  },
};

function createBaseQueryDelegateKeysAllResponse(): QueryDelegateKeysAllResponse {
  return { addresses: [] };
}

export const QueryDelegateKeysAllResponse = {
  encode(message: QueryDelegateKeysAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      MsgSetDelegateAddresses.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(MsgSetDelegateAddresses.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegateKeysAllResponse {
    return {
      addresses: Array.isArray(object?.addresses)
        ? object.addresses.map((e: any) => MsgSetDelegateAddresses.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryDelegateKeysAllResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e ? MsgSetDelegateAddresses.toJSON(e) : undefined);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegateKeysAllResponse>, I>>(object: I): QueryDelegateKeysAllResponse {
    const message = createBaseQueryDelegateKeysAllResponse();
    message.addresses = object.addresses?.map((e) => MsgSetDelegateAddresses.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Attestations items. */
  GetAttestations(request: QueryAttestationsRequest): Promise<QueryAttestationsResponse>;
  /** Queries a list of DelegateKeysByBtcOracleAddress items. */
  DelegateKeysByBtcOracleAddress(
    request: QueryDelegateKeysByBtcOracleAddressRequest,
  ): Promise<QueryDelegateKeysByBtcOracleAddressResponse>;
  /** Queries a list of DelegateKeysAll items. */
  DelegateKeysAll(request: QueryDelegateKeysAllRequest): Promise<QueryDelegateKeysAllResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.GetAttestations = this.GetAttestations.bind(this);
    this.DelegateKeysByBtcOracleAddress = this.DelegateKeysByBtcOracleAddress.bind(this);
    this.DelegateKeysAll = this.DelegateKeysAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.forks.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  GetAttestations(request: QueryAttestationsRequest): Promise<QueryAttestationsResponse> {
    const data = QueryAttestationsRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.forks.Query", "GetAttestations", data);
    return promise.then((data) => QueryAttestationsResponse.decode(new _m0.Reader(data)));
  }

  DelegateKeysByBtcOracleAddress(
    request: QueryDelegateKeysByBtcOracleAddressRequest,
  ): Promise<QueryDelegateKeysByBtcOracleAddressResponse> {
    const data = QueryDelegateKeysByBtcOracleAddressRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.forks.Query", "DelegateKeysByBtcOracleAddress", data);
    return promise.then((data) => QueryDelegateKeysByBtcOracleAddressResponse.decode(new _m0.Reader(data)));
  }

  DelegateKeysAll(request: QueryDelegateKeysAllRequest): Promise<QueryDelegateKeysAllResponse> {
    const data = QueryDelegateKeysAllRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.forks.Query", "DelegateKeysAll", data);
    return promise.then((data) => QueryDelegateKeysAllResponse.decode(new _m0.Reader(data)));
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
