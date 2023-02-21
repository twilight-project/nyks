/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../volt/params";
import { BtcReserve } from "../volt/reserve";

export const protobufPackage = "twilightproject.nyks.volt";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryBtcReserveRequest {}

export interface QueryBtcReserveResponse {
  BtcReserves: BtcReserve[];
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

const baseQueryBtcReserveRequest: object = {};

export const QueryBtcReserveRequest = {
  encode(_: QueryBtcReserveRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBtcReserveRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBtcReserveRequest } as QueryBtcReserveRequest;
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
    const message = { ...baseQueryBtcReserveRequest } as QueryBtcReserveRequest;
    return message;
  },

  toJSON(_: QueryBtcReserveRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBtcReserveRequest>): QueryBtcReserveRequest {
    const message = { ...baseQueryBtcReserveRequest } as QueryBtcReserveRequest;
    return message;
  },
};

const baseQueryBtcReserveResponse: object = {};

export const QueryBtcReserveResponse = {
  encode(
    message: QueryBtcReserveResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.BtcReserves) {
      BtcReserve.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBtcReserveResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBtcReserveResponse,
    } as QueryBtcReserveResponse;
    message.BtcReserves = [];
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
    const message = {
      ...baseQueryBtcReserveResponse,
    } as QueryBtcReserveResponse;
    message.BtcReserves = [];
    if (object.BtcReserves !== undefined && object.BtcReserves !== null) {
      for (const e of object.BtcReserves) {
        message.BtcReserves.push(BtcReserve.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryBtcReserveResponse): unknown {
    const obj: any = {};
    if (message.BtcReserves) {
      obj.BtcReserves = message.BtcReserves.map((e) =>
        e ? BtcReserve.toJSON(e) : undefined
      );
    } else {
      obj.BtcReserves = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBtcReserveResponse>
  ): QueryBtcReserveResponse {
    const message = {
      ...baseQueryBtcReserveResponse,
    } as QueryBtcReserveResponse;
    message.BtcReserves = [];
    if (object.BtcReserves !== undefined && object.BtcReserves !== null) {
      for (const e of object.BtcReserves) {
        message.BtcReserves.push(BtcReserve.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of BtcReserve items. */
  BtcReserve(request: QueryBtcReserveRequest): Promise<QueryBtcReserveResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.volt.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  BtcReserve(
    request: QueryBtcReserveRequest
  ): Promise<QueryBtcReserveResponse> {
    const data = QueryBtcReserveRequest.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.volt.Query",
      "BtcReserve",
      data
    );
    return promise.then((data) =>
      QueryBtcReserveResponse.decode(new Reader(data))
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
