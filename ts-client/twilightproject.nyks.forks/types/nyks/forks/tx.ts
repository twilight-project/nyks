/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.forks";

export interface MsgSetDelegateAddresses {
  validatorAddress: string;
  btcOracleAddress: string;
  btcPublicKey: string;
}

export interface MsgSetDelegateAddressesResponse {
  id: number;
}

export interface MsgSeenBtcChainTip {
  height: number;
  hash: string;
  btcOracleAddress: string;
}

export interface MsgSeenBtcChainTipResponse {
}

function createBaseMsgSetDelegateAddresses(): MsgSetDelegateAddresses {
  return { validatorAddress: "", btcOracleAddress: "", btcPublicKey: "" };
}

export const MsgSetDelegateAddresses = {
  encode(message: MsgSetDelegateAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(26).string(message.btcOracleAddress);
    }
    if (message.btcPublicKey !== "") {
      writer.uint32(34).string(message.btcPublicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDelegateAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDelegateAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.btcOracleAddress = reader.string();
          break;
        case 4:
          message.btcPublicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetDelegateAddresses {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
      btcPublicKey: isSet(object.btcPublicKey) ? String(object.btcPublicKey) : "",
    };
  },

  toJSON(message: MsgSetDelegateAddresses): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    message.btcPublicKey !== undefined && (obj.btcPublicKey = message.btcPublicKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetDelegateAddresses>, I>>(object: I): MsgSetDelegateAddresses {
    const message = createBaseMsgSetDelegateAddresses();
    message.validatorAddress = object.validatorAddress ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    message.btcPublicKey = object.btcPublicKey ?? "";
    return message;
  },
};

function createBaseMsgSetDelegateAddressesResponse(): MsgSetDelegateAddressesResponse {
  return { id: 0 };
}

export const MsgSetDelegateAddressesResponse = {
  encode(message: MsgSetDelegateAddressesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDelegateAddressesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDelegateAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetDelegateAddressesResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgSetDelegateAddressesResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetDelegateAddressesResponse>, I>>(
    object: I,
  ): MsgSetDelegateAddressesResponse {
    const message = createBaseMsgSetDelegateAddressesResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgSeenBtcChainTip(): MsgSeenBtcChainTip {
  return { height: 0, hash: "", btcOracleAddress: "" };
}

export const MsgSeenBtcChainTip = {
  encode(message: MsgSeenBtcChainTip, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(26).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSeenBtcChainTip {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSeenBtcChainTip();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSeenBtcChainTip {
    return {
      height: isSet(object.height) ? Number(object.height) : 0,
      hash: isSet(object.hash) ? String(object.hash) : "",
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
    };
  },

  toJSON(message: MsgSeenBtcChainTip): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.hash !== undefined && (obj.hash = message.hash);
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSeenBtcChainTip>, I>>(object: I): MsgSeenBtcChainTip {
    const message = createBaseMsgSeenBtcChainTip();
    message.height = object.height ?? 0;
    message.hash = object.hash ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
};

function createBaseMsgSeenBtcChainTipResponse(): MsgSeenBtcChainTipResponse {
  return {};
}

export const MsgSeenBtcChainTipResponse = {
  encode(_: MsgSeenBtcChainTipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSeenBtcChainTipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSeenBtcChainTipResponse();
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

  fromJSON(_: any): MsgSeenBtcChainTipResponse {
    return {};
  },

  toJSON(_: MsgSeenBtcChainTipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSeenBtcChainTipResponse>, I>>(_: I): MsgSeenBtcChainTipResponse {
    const message = createBaseMsgSeenBtcChainTipResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SetDelegateAddresses(request: MsgSetDelegateAddresses): Promise<MsgSetDelegateAddressesResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SeenBtcChainTip(request: MsgSeenBtcChainTip): Promise<MsgSeenBtcChainTipResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetDelegateAddresses = this.SetDelegateAddresses.bind(this);
    this.SeenBtcChainTip = this.SeenBtcChainTip.bind(this);
  }
  SetDelegateAddresses(request: MsgSetDelegateAddresses): Promise<MsgSetDelegateAddressesResponse> {
    const data = MsgSetDelegateAddresses.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.forks.Msg", "SetDelegateAddresses", data);
    return promise.then((data) => MsgSetDelegateAddressesResponse.decode(new _m0.Reader(data)));
  }

  SeenBtcChainTip(request: MsgSeenBtcChainTip): Promise<MsgSeenBtcChainTipResponse> {
    const data = MsgSeenBtcChainTip.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.forks.Msg", "SeenBtcChainTip", data);
    return promise.then((data) => MsgSeenBtcChainTipResponse.decode(new _m0.Reader(data)));
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
