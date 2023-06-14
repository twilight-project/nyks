/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../bridge/params";
import {
  MsgRegisterBtcDepositAddress,
  MsgRegisterReserveAddress,
} from "../bridge/tx";

export const protobufPackage = "twilightproject.nyks.bridge";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryRegisteredBtcDepositAddressesRequest {}

export interface QueryRegisteredBtcDepositAddressesResponse {
  addresses: MsgRegisterBtcDepositAddress[];
}

export interface QueryRegisteredReserveScriptsRequest {}

export interface QueryRegisteredReserveScriptsResponse {
  scripts: MsgRegisterReserveAddress[];
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

const baseQueryRegisteredBtcDepositAddressesRequest: object = {};

export const QueryRegisteredBtcDepositAddressesRequest = {
  encode(
    _: QueryRegisteredBtcDepositAddressesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredBtcDepositAddressesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRegisteredBtcDepositAddressesRequest,
    } as QueryRegisteredBtcDepositAddressesRequest;
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
    const message = {
      ...baseQueryRegisteredBtcDepositAddressesRequest,
    } as QueryRegisteredBtcDepositAddressesRequest;
    return message;
  },

  toJSON(_: QueryRegisteredBtcDepositAddressesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryRegisteredBtcDepositAddressesRequest>
  ): QueryRegisteredBtcDepositAddressesRequest {
    const message = {
      ...baseQueryRegisteredBtcDepositAddressesRequest,
    } as QueryRegisteredBtcDepositAddressesRequest;
    return message;
  },
};

const baseQueryRegisteredBtcDepositAddressesResponse: object = {};

export const QueryRegisteredBtcDepositAddressesResponse = {
  encode(
    message: QueryRegisteredBtcDepositAddressesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.addresses) {
      MsgRegisterBtcDepositAddress.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredBtcDepositAddressesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRegisteredBtcDepositAddressesResponse,
    } as QueryRegisteredBtcDepositAddressesResponse;
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(
            MsgRegisterBtcDepositAddress.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredBtcDepositAddressesResponse {
    const message = {
      ...baseQueryRegisteredBtcDepositAddressesResponse,
    } as QueryRegisteredBtcDepositAddressesResponse;
    message.addresses = [];
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(MsgRegisterBtcDepositAddress.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryRegisteredBtcDepositAddressesResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) =>
        e ? MsgRegisterBtcDepositAddress.toJSON(e) : undefined
      );
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRegisteredBtcDepositAddressesResponse>
  ): QueryRegisteredBtcDepositAddressesResponse {
    const message = {
      ...baseQueryRegisteredBtcDepositAddressesResponse,
    } as QueryRegisteredBtcDepositAddressesResponse;
    message.addresses = [];
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(MsgRegisterBtcDepositAddress.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryRegisteredReserveScriptsRequest: object = {};

export const QueryRegisteredReserveScriptsRequest = {
  encode(
    _: QueryRegisteredReserveScriptsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredReserveScriptsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRegisteredReserveScriptsRequest,
    } as QueryRegisteredReserveScriptsRequest;
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

  fromJSON(_: any): QueryRegisteredReserveScriptsRequest {
    const message = {
      ...baseQueryRegisteredReserveScriptsRequest,
    } as QueryRegisteredReserveScriptsRequest;
    return message;
  },

  toJSON(_: QueryRegisteredReserveScriptsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryRegisteredReserveScriptsRequest>
  ): QueryRegisteredReserveScriptsRequest {
    const message = {
      ...baseQueryRegisteredReserveScriptsRequest,
    } as QueryRegisteredReserveScriptsRequest;
    return message;
  },
};

const baseQueryRegisteredReserveScriptsResponse: object = {};

export const QueryRegisteredReserveScriptsResponse = {
  encode(
    message: QueryRegisteredReserveScriptsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.scripts) {
      MsgRegisterReserveAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredReserveScriptsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRegisteredReserveScriptsResponse,
    } as QueryRegisteredReserveScriptsResponse;
    message.scripts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scripts.push(
            MsgRegisterReserveAddress.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRegisteredReserveScriptsResponse {
    const message = {
      ...baseQueryRegisteredReserveScriptsResponse,
    } as QueryRegisteredReserveScriptsResponse;
    message.scripts = [];
    if (object.scripts !== undefined && object.scripts !== null) {
      for (const e of object.scripts) {
        message.scripts.push(MsgRegisterReserveAddress.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryRegisteredReserveScriptsResponse): unknown {
    const obj: any = {};
    if (message.scripts) {
      obj.scripts = message.scripts.map((e) =>
        e ? MsgRegisterReserveAddress.toJSON(e) : undefined
      );
    } else {
      obj.scripts = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRegisteredReserveScriptsResponse>
  ): QueryRegisteredReserveScriptsResponse {
    const message = {
      ...baseQueryRegisteredReserveScriptsResponse,
    } as QueryRegisteredReserveScriptsResponse;
    message.scripts = [];
    if (object.scripts !== undefined && object.scripts !== null) {
      for (const e of object.scripts) {
        message.scripts.push(MsgRegisterReserveAddress.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryRegisteredBtcDepositAddressRequest: object = {
  depositAddress: "",
};

export const QueryRegisteredBtcDepositAddressRequest = {
  encode(
    message: QueryRegisteredBtcDepositAddressRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredBtcDepositAddressRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRegisteredBtcDepositAddressRequest,
    } as QueryRegisteredBtcDepositAddressRequest;
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
    const message = {
      ...baseQueryRegisteredBtcDepositAddressRequest,
    } as QueryRegisteredBtcDepositAddressRequest;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = String(object.depositAddress);
    } else {
      message.depositAddress = "";
    }
    return message;
  },

  toJSON(message: QueryRegisteredBtcDepositAddressRequest): unknown {
    const obj: any = {};
    message.depositAddress !== undefined &&
      (obj.depositAddress = message.depositAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRegisteredBtcDepositAddressRequest>
  ): QueryRegisteredBtcDepositAddressRequest {
    const message = {
      ...baseQueryRegisteredBtcDepositAddressRequest,
    } as QueryRegisteredBtcDepositAddressRequest;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = object.depositAddress;
    } else {
      message.depositAddress = "";
    }
    return message;
  },
};

const baseQueryRegisteredBtcDepositAddressResponse: object = {
  depositAddress: "",
  twilightDepositAddress: "",
};

export const QueryRegisteredBtcDepositAddressResponse = {
  encode(
    message: QueryRegisteredBtcDepositAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(18).string(message.twilightDepositAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredBtcDepositAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRegisteredBtcDepositAddressResponse,
    } as QueryRegisteredBtcDepositAddressResponse;
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
    const message = {
      ...baseQueryRegisteredBtcDepositAddressResponse,
    } as QueryRegisteredBtcDepositAddressResponse;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = String(object.depositAddress);
    } else {
      message.depositAddress = "";
    }
    if (
      object.twilightDepositAddress !== undefined &&
      object.twilightDepositAddress !== null
    ) {
      message.twilightDepositAddress = String(object.twilightDepositAddress);
    } else {
      message.twilightDepositAddress = "";
    }
    return message;
  },

  toJSON(message: QueryRegisteredBtcDepositAddressResponse): unknown {
    const obj: any = {};
    message.depositAddress !== undefined &&
      (obj.depositAddress = message.depositAddress);
    message.twilightDepositAddress !== undefined &&
      (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRegisteredBtcDepositAddressResponse>
  ): QueryRegisteredBtcDepositAddressResponse {
    const message = {
      ...baseQueryRegisteredBtcDepositAddressResponse,
    } as QueryRegisteredBtcDepositAddressResponse;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = object.depositAddress;
    } else {
      message.depositAddress = "";
    }
    if (
      object.twilightDepositAddress !== undefined &&
      object.twilightDepositAddress !== null
    ) {
      message.twilightDepositAddress = object.twilightDepositAddress;
    } else {
      message.twilightDepositAddress = "";
    }
    return message;
  },
};

const baseQueryRegisteredBtcDepositAddressByTwilightAddressRequest: object = {
  twilightDepositAddress: "",
};

export const QueryRegisteredBtcDepositAddressByTwilightAddressRequest = {
  encode(
    message: QueryRegisteredBtcDepositAddressByTwilightAddressRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.twilightDepositAddress !== "") {
      writer.uint32(10).string(message.twilightDepositAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredBtcDepositAddressByTwilightAddressRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRegisteredBtcDepositAddressByTwilightAddressRequest,
    } as QueryRegisteredBtcDepositAddressByTwilightAddressRequest;
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

  fromJSON(
    object: any
  ): QueryRegisteredBtcDepositAddressByTwilightAddressRequest {
    const message = {
      ...baseQueryRegisteredBtcDepositAddressByTwilightAddressRequest,
    } as QueryRegisteredBtcDepositAddressByTwilightAddressRequest;
    if (
      object.twilightDepositAddress !== undefined &&
      object.twilightDepositAddress !== null
    ) {
      message.twilightDepositAddress = String(object.twilightDepositAddress);
    } else {
      message.twilightDepositAddress = "";
    }
    return message;
  },

  toJSON(
    message: QueryRegisteredBtcDepositAddressByTwilightAddressRequest
  ): unknown {
    const obj: any = {};
    message.twilightDepositAddress !== undefined &&
      (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRegisteredBtcDepositAddressByTwilightAddressRequest>
  ): QueryRegisteredBtcDepositAddressByTwilightAddressRequest {
    const message = {
      ...baseQueryRegisteredBtcDepositAddressByTwilightAddressRequest,
    } as QueryRegisteredBtcDepositAddressByTwilightAddressRequest;
    if (
      object.twilightDepositAddress !== undefined &&
      object.twilightDepositAddress !== null
    ) {
      message.twilightDepositAddress = object.twilightDepositAddress;
    } else {
      message.twilightDepositAddress = "";
    }
    return message;
  },
};

const baseQueryRegisteredBtcDepositAddressByTwilightAddressResponse: object = {
  depositAddress: "",
  twilightDepositAddress: "",
};

export const QueryRegisteredBtcDepositAddressByTwilightAddressResponse = {
  encode(
    message: QueryRegisteredBtcDepositAddressByTwilightAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(18).string(message.twilightDepositAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredBtcDepositAddressByTwilightAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryRegisteredBtcDepositAddressByTwilightAddressResponse,
    } as QueryRegisteredBtcDepositAddressByTwilightAddressResponse;
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

  fromJSON(
    object: any
  ): QueryRegisteredBtcDepositAddressByTwilightAddressResponse {
    const message = {
      ...baseQueryRegisteredBtcDepositAddressByTwilightAddressResponse,
    } as QueryRegisteredBtcDepositAddressByTwilightAddressResponse;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = String(object.depositAddress);
    } else {
      message.depositAddress = "";
    }
    if (
      object.twilightDepositAddress !== undefined &&
      object.twilightDepositAddress !== null
    ) {
      message.twilightDepositAddress = String(object.twilightDepositAddress);
    } else {
      message.twilightDepositAddress = "";
    }
    return message;
  },

  toJSON(
    message: QueryRegisteredBtcDepositAddressByTwilightAddressResponse
  ): unknown {
    const obj: any = {};
    message.depositAddress !== undefined &&
      (obj.depositAddress = message.depositAddress);
    message.twilightDepositAddress !== undefined &&
      (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryRegisteredBtcDepositAddressByTwilightAddressResponse>
  ): QueryRegisteredBtcDepositAddressByTwilightAddressResponse {
    const message = {
      ...baseQueryRegisteredBtcDepositAddressByTwilightAddressResponse,
    } as QueryRegisteredBtcDepositAddressByTwilightAddressResponse;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = object.depositAddress;
    } else {
      message.depositAddress = "";
    }
    if (
      object.twilightDepositAddress !== undefined &&
      object.twilightDepositAddress !== null
    ) {
      message.twilightDepositAddress = object.twilightDepositAddress;
    } else {
      message.twilightDepositAddress = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of RegisteredBtcDepositAddresses items. */
  RegisteredBtcDepositAddresses(
    request: QueryRegisteredBtcDepositAddressesRequest
  ): Promise<QueryRegisteredBtcDepositAddressesResponse>;
  /** Queries a list of RegisteredReserveScripts items. */
  RegisteredReserveScripts(
    request: QueryRegisteredReserveScriptsRequest
  ): Promise<QueryRegisteredReserveScriptsResponse>;
  /** Queries a list of RegisteredBtcDepositAddress items. */
  RegisteredBtcDepositAddress(
    request: QueryRegisteredBtcDepositAddressRequest
  ): Promise<QueryRegisteredBtcDepositAddressResponse>;
  /** Queries a list of RegisteredBtcDepositAddressByTwilightAddress items. */
  RegisteredBtcDepositAddressByTwilightAddress(
    request: QueryRegisteredBtcDepositAddressByTwilightAddressRequest
  ): Promise<QueryRegisteredBtcDepositAddressByTwilightAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  RegisteredBtcDepositAddresses(
    request: QueryRegisteredBtcDepositAddressesRequest
  ): Promise<QueryRegisteredBtcDepositAddressesResponse> {
    const data = QueryRegisteredBtcDepositAddressesRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Query",
      "RegisteredBtcDepositAddresses",
      data
    );
    return promise.then((data) =>
      QueryRegisteredBtcDepositAddressesResponse.decode(new Reader(data))
    );
  }

  RegisteredReserveScripts(
    request: QueryRegisteredReserveScriptsRequest
  ): Promise<QueryRegisteredReserveScriptsResponse> {
    const data = QueryRegisteredReserveScriptsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Query",
      "RegisteredReserveScripts",
      data
    );
    return promise.then((data) =>
      QueryRegisteredReserveScriptsResponse.decode(new Reader(data))
    );
  }

  RegisteredBtcDepositAddress(
    request: QueryRegisteredBtcDepositAddressRequest
  ): Promise<QueryRegisteredBtcDepositAddressResponse> {
    const data = QueryRegisteredBtcDepositAddressRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Query",
      "RegisteredBtcDepositAddress",
      data
    );
    return promise.then((data) =>
      QueryRegisteredBtcDepositAddressResponse.decode(new Reader(data))
    );
  }

  RegisteredBtcDepositAddressByTwilightAddress(
    request: QueryRegisteredBtcDepositAddressByTwilightAddressRequest
  ): Promise<QueryRegisteredBtcDepositAddressByTwilightAddressResponse> {
    const data = QueryRegisteredBtcDepositAddressByTwilightAddressRequest.encode(
      request
    ).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Query",
      "RegisteredBtcDepositAddressByTwilightAddress",
      data
    );
    return promise.then((data) =>
      QueryRegisteredBtcDepositAddressByTwilightAddressResponse.decode(
        new Reader(data)
      )
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
