/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "twilightproject.nyks.nyks";

export interface MsgSetDelegateAddresses {
  creator: string;
  validatorAddress: string;
  orchestratorAddress: string;
  btcPublicKey: string;
}

export interface MsgSetDelegateAddressesResponse {
  id: number;
}

export interface MsgSeenBtcChainTip {
  creator: string;
  height: number;
  hash: string;
  orchestratorAddress: string;
}

export interface MsgSeenBtcChainTipResponse {}

const baseMsgSetDelegateAddresses: object = {
  creator: "",
  validatorAddress: "",
  orchestratorAddress: "",
  btcPublicKey: "",
};

export const MsgSetDelegateAddresses = {
  encode(
    message: MsgSetDelegateAddresses,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(26).string(message.orchestratorAddress);
    }
    if (message.btcPublicKey !== "") {
      writer.uint32(34).string(message.btcPublicKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetDelegateAddresses {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetDelegateAddresses,
    } as MsgSetDelegateAddresses;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.orchestratorAddress = reader.string();
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
    const message = {
      ...baseMsgSetDelegateAddresses,
    } as MsgSetDelegateAddresses;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = String(object.orchestratorAddress);
    } else {
      message.orchestratorAddress = "";
    }
    if (object.btcPublicKey !== undefined && object.btcPublicKey !== null) {
      message.btcPublicKey = String(object.btcPublicKey);
    } else {
      message.btcPublicKey = "";
    }
    return message;
  },

  toJSON(message: MsgSetDelegateAddresses): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.orchestratorAddress !== undefined &&
      (obj.orchestratorAddress = message.orchestratorAddress);
    message.btcPublicKey !== undefined &&
      (obj.btcPublicKey = message.btcPublicKey);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetDelegateAddresses>
  ): MsgSetDelegateAddresses {
    const message = {
      ...baseMsgSetDelegateAddresses,
    } as MsgSetDelegateAddresses;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = object.orchestratorAddress;
    } else {
      message.orchestratorAddress = "";
    }
    if (object.btcPublicKey !== undefined && object.btcPublicKey !== null) {
      message.btcPublicKey = object.btcPublicKey;
    } else {
      message.btcPublicKey = "";
    }
    return message;
  },
};

const baseMsgSetDelegateAddressesResponse: object = { id: 0 };

export const MsgSetDelegateAddressesResponse = {
  encode(
    message: MsgSetDelegateAddressesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetDelegateAddressesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetDelegateAddressesResponse,
    } as MsgSetDelegateAddressesResponse;
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
    const message = {
      ...baseMsgSetDelegateAddressesResponse,
    } as MsgSetDelegateAddressesResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgSetDelegateAddressesResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSetDelegateAddressesResponse>
  ): MsgSetDelegateAddressesResponse {
    const message = {
      ...baseMsgSetDelegateAddressesResponse,
    } as MsgSetDelegateAddressesResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgSeenBtcChainTip: object = {
  creator: "",
  height: 0,
  hash: "",
  orchestratorAddress: "",
};

export const MsgSeenBtcChainTip = {
  encode(
    message: MsgSeenBtcChainTip,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(34).string(message.orchestratorAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSeenBtcChainTip {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSeenBtcChainTip } as MsgSeenBtcChainTip;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSeenBtcChainTip {
    const message = { ...baseMsgSeenBtcChainTip } as MsgSeenBtcChainTip;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = String(object.orchestratorAddress);
    } else {
      message.orchestratorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgSeenBtcChainTip): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.height !== undefined && (obj.height = message.height);
    message.hash !== undefined && (obj.hash = message.hash);
    message.orchestratorAddress !== undefined &&
      (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSeenBtcChainTip>): MsgSeenBtcChainTip {
    const message = { ...baseMsgSeenBtcChainTip } as MsgSeenBtcChainTip;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (
      object.orchestratorAddress !== undefined &&
      object.orchestratorAddress !== null
    ) {
      message.orchestratorAddress = object.orchestratorAddress;
    } else {
      message.orchestratorAddress = "";
    }
    return message;
  },
};

const baseMsgSeenBtcChainTipResponse: object = {};

export const MsgSeenBtcChainTipResponse = {
  encode(
    _: MsgSeenBtcChainTipResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSeenBtcChainTipResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSeenBtcChainTipResponse,
    } as MsgSeenBtcChainTipResponse;
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
    const message = {
      ...baseMsgSeenBtcChainTipResponse,
    } as MsgSeenBtcChainTipResponse;
    return message;
  },

  toJSON(_: MsgSeenBtcChainTipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSeenBtcChainTipResponse>
  ): MsgSeenBtcChainTipResponse {
    const message = {
      ...baseMsgSeenBtcChainTipResponse,
    } as MsgSeenBtcChainTipResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SetDelegateAddresses(
    request: MsgSetDelegateAddresses
  ): Promise<MsgSetDelegateAddressesResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SeenBtcChainTip(
    request: MsgSeenBtcChainTip
  ): Promise<MsgSeenBtcChainTipResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SetDelegateAddresses(
    request: MsgSetDelegateAddresses
  ): Promise<MsgSetDelegateAddressesResponse> {
    const data = MsgSetDelegateAddresses.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.nyks.Msg",
      "SetDelegateAddresses",
      data
    );
    return promise.then((data) =>
      MsgSetDelegateAddressesResponse.decode(new Reader(data))
    );
  }

  SeenBtcChainTip(
    request: MsgSeenBtcChainTip
  ): Promise<MsgSeenBtcChainTipResponse> {
    const data = MsgSeenBtcChainTip.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.nyks.Msg",
      "SeenBtcChainTip",
      data
    );
    return promise.then((data) =>
      MsgSeenBtcChainTipResponse.decode(new Reader(data))
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
