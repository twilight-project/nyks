/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.bootstrap";

export interface MsgCreateValidatorWrapper {
  creator: string;
  createValidator: string;
  zkOracleAddress: string;
  btcOracleAddress: string;
}

export interface MsgCreateValidatorWrapperResponse {
}

function createBaseMsgCreateValidatorWrapper(): MsgCreateValidatorWrapper {
  return { creator: "", createValidator: "", zkOracleAddress: "", btcOracleAddress: "" };
}

export const MsgCreateValidatorWrapper = {
  encode(message: MsgCreateValidatorWrapper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createValidator !== "") {
      writer.uint32(18).string(message.createValidator);
    }
    if (message.zkOracleAddress !== "") {
      writer.uint32(26).string(message.zkOracleAddress);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(34).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorWrapper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorWrapper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.createValidator = reader.string();
          break;
        case 3:
          message.zkOracleAddress = reader.string();
          break;
        case 4:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidatorWrapper {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      createValidator: isSet(object.createValidator) ? String(object.createValidator) : "",
      zkOracleAddress: isSet(object.zkOracleAddress) ? String(object.zkOracleAddress) : "",
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
    };
  },

  toJSON(message: MsgCreateValidatorWrapper): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createValidator !== undefined && (obj.createValidator = message.createValidator);
    message.zkOracleAddress !== undefined && (obj.zkOracleAddress = message.zkOracleAddress);
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidatorWrapper>, I>>(object: I): MsgCreateValidatorWrapper {
    const message = createBaseMsgCreateValidatorWrapper();
    message.creator = object.creator ?? "";
    message.createValidator = object.createValidator ?? "";
    message.zkOracleAddress = object.zkOracleAddress ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
};

function createBaseMsgCreateValidatorWrapperResponse(): MsgCreateValidatorWrapperResponse {
  return {};
}

export const MsgCreateValidatorWrapperResponse = {
  encode(_: MsgCreateValidatorWrapperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorWrapperResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorWrapperResponse();
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

  fromJSON(_: any): MsgCreateValidatorWrapperResponse {
    return {};
  },

  toJSON(_: MsgCreateValidatorWrapperResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidatorWrapperResponse>, I>>(
    _: I,
  ): MsgCreateValidatorWrapperResponse {
    const message = createBaseMsgCreateValidatorWrapperResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateValidatorWrapper(request: MsgCreateValidatorWrapper): Promise<MsgCreateValidatorWrapperResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateValidatorWrapper = this.CreateValidatorWrapper.bind(this);
  }
  CreateValidatorWrapper(request: MsgCreateValidatorWrapper): Promise<MsgCreateValidatorWrapperResponse> {
    const data = MsgCreateValidatorWrapper.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bootstrap.Msg", "CreateValidatorWrapper", data);
    return promise.then((data) => MsgCreateValidatorWrapperResponse.decode(new _m0.Reader(data)));
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
