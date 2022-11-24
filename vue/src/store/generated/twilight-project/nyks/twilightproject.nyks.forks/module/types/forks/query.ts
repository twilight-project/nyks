/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../forks/params";
import { Attestation } from "../forks/attestation";

export const protobufPackage = "twilightproject.nyks.forks";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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
  order_by: string;
  /** proposal_type allows filtering attestations by proposal type */
  proposal_type: string;
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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
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
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryAttestationsRequest: object = {
  limit: 0,
  order_by: "",
  proposal_type: "",
  height: 0,
};

export const QueryAttestationsRequest = {
  encode(
    message: QueryAttestationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.order_by !== "") {
      writer.uint32(18).string(message.order_by);
    }
    if (message.proposal_type !== "") {
      writer.uint32(26).string(message.proposal_type);
    }
    if (message.height !== 0) {
      writer.uint32(32).uint64(message.height);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAttestationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAttestationsRequest,
    } as QueryAttestationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.order_by = reader.string();
          break;
        case 3:
          message.proposal_type = reader.string();
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
    const message = {
      ...baseQueryAttestationsRequest,
    } as QueryAttestationsRequest;
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit);
    } else {
      message.limit = 0;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.order_by = String(object.order_by);
    } else {
      message.order_by = "";
    }
    if (object.proposal_type !== undefined && object.proposal_type !== null) {
      message.proposal_type = String(object.proposal_type);
    } else {
      message.proposal_type = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: QueryAttestationsRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = message.limit);
    message.order_by !== undefined && (obj.order_by = message.order_by);
    message.proposal_type !== undefined &&
      (obj.proposal_type = message.proposal_type);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAttestationsRequest>
  ): QueryAttestationsRequest {
    const message = {
      ...baseQueryAttestationsRequest,
    } as QueryAttestationsRequest;
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit;
    } else {
      message.limit = 0;
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.order_by = object.order_by;
    } else {
      message.order_by = "";
    }
    if (object.proposal_type !== undefined && object.proposal_type !== null) {
      message.proposal_type = object.proposal_type;
    } else {
      message.proposal_type = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseQueryAttestationsResponse: object = {};

export const QueryAttestationsResponse = {
  encode(
    message: QueryAttestationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAttestationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAttestationsResponse,
    } as QueryAttestationsResponse;
    message.attestations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestations.push(
            Attestation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsResponse {
    const message = {
      ...baseQueryAttestationsResponse,
    } as QueryAttestationsResponse;
    message.attestations = [];
    if (object.attestations !== undefined && object.attestations !== null) {
      for (const e of object.attestations) {
        message.attestations.push(Attestation.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAttestationsResponse): unknown {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map((e) =>
        e ? Attestation.toJSON(e) : undefined
      );
    } else {
      obj.attestations = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAttestationsResponse>
  ): QueryAttestationsResponse {
    const message = {
      ...baseQueryAttestationsResponse,
    } as QueryAttestationsResponse;
    message.attestations = [];
    if (object.attestations !== undefined && object.attestations !== null) {
      for (const e of object.attestations) {
        message.attestations.push(Attestation.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryDelegateKeysByBtcOracleAddressRequest: object = {
  btcOracleAddress: "",
};

export const QueryDelegateKeysByBtcOracleAddressRequest = {
  encode(
    message: QueryDelegateKeysByBtcOracleAddressRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.btcOracleAddress !== "") {
      writer.uint32(10).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDelegateKeysByBtcOracleAddressRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegateKeysByBtcOracleAddressRequest,
    } as QueryDelegateKeysByBtcOracleAddressRequest;
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
    const message = {
      ...baseQueryDelegateKeysByBtcOracleAddressRequest,
    } as QueryDelegateKeysByBtcOracleAddressRequest;
    if (
      object.btcOracleAddress !== undefined &&
      object.btcOracleAddress !== null
    ) {
      message.btcOracleAddress = String(object.btcOracleAddress);
    } else {
      message.btcOracleAddress = "";
    }
    return message;
  },

  toJSON(message: QueryDelegateKeysByBtcOracleAddressRequest): unknown {
    const obj: any = {};
    message.btcOracleAddress !== undefined &&
      (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegateKeysByBtcOracleAddressRequest>
  ): QueryDelegateKeysByBtcOracleAddressRequest {
    const message = {
      ...baseQueryDelegateKeysByBtcOracleAddressRequest,
    } as QueryDelegateKeysByBtcOracleAddressRequest;
    if (
      object.btcOracleAddress !== undefined &&
      object.btcOracleAddress !== null
    ) {
      message.btcOracleAddress = object.btcOracleAddress;
    } else {
      message.btcOracleAddress = "";
    }
    return message;
  },
};

const baseQueryDelegateKeysByBtcOracleAddressResponse: object = {
  validatorAddress: "",
  btcPublicKey: "",
};

export const QueryDelegateKeysByBtcOracleAddressResponse = {
  encode(
    message: QueryDelegateKeysByBtcOracleAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.btcPublicKey !== "") {
      writer.uint32(18).string(message.btcPublicKey);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDelegateKeysByBtcOracleAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDelegateKeysByBtcOracleAddressResponse,
    } as QueryDelegateKeysByBtcOracleAddressResponse;
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
    const message = {
      ...baseQueryDelegateKeysByBtcOracleAddressResponse,
    } as QueryDelegateKeysByBtcOracleAddressResponse;
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.btcPublicKey !== undefined && object.btcPublicKey !== null) {
      message.btcPublicKey = String(object.btcPublicKey);
    } else {
      message.btcPublicKey = "";
    }
    return message;
  },

  toJSON(message: QueryDelegateKeysByBtcOracleAddressResponse): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.btcPublicKey !== undefined &&
      (obj.btcPublicKey = message.btcPublicKey);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDelegateKeysByBtcOracleAddressResponse>
  ): QueryDelegateKeysByBtcOracleAddressResponse {
    const message = {
      ...baseQueryDelegateKeysByBtcOracleAddressResponse,
    } as QueryDelegateKeysByBtcOracleAddressResponse;
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.btcPublicKey !== undefined && object.btcPublicKey !== null) {
      message.btcPublicKey = object.btcPublicKey;
    } else {
      message.btcPublicKey = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Attestations items. */
  GetAttestations(
    request: QueryAttestationsRequest
  ): Promise<QueryAttestationsResponse>;
  /** Queries a list of DelegateKeysByBtcOracleAddress items. */
  DelegateKeysByBtcOracleAddress(
    request: QueryDelegateKeysByBtcOracleAddressRequest
  ): Promise<QueryDelegateKeysByBtcOracleAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.forks.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  GetAttestations(
    request: QueryAttestationsRequest
  ): Promise<QueryAttestationsResponse> {
    const data = QueryAttestationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.forks.Query",
      "GetAttestations",
      data
    );
    return promise.then((data) =>
      QueryAttestationsResponse.decode(new Reader(data))
    );
  }

  DelegateKeysByBtcOracleAddress(
    request: QueryDelegateKeysByBtcOracleAddressRequest
  ): Promise<QueryDelegateKeysByBtcOracleAddressResponse> {
    const data = QueryDelegateKeysByBtcOracleAddressRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.forks.Query",
      "DelegateKeysByBtcOracleAddress",
      data
    );
    return promise.then((data) =>
      QueryDelegateKeysByBtcOracleAddressResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
