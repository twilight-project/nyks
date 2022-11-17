/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "twilightproject.nyks.bridge";

export interface MsgMsgConfirmBtcDeposit {
  depositAddress: string;
  depositAmount: number;
  inputAddress: string;
  blockHeight: number;
  blockHash: string;
  twilightDepositAddress: string;
  btcOracleAddress: string;
}

export interface MsgMsgConfirmBtcDepositResponse {
  twilightDepositAddress: string;
}

export interface MsgRegisterDepositAddress {
  depositAddress: string;
  depositAmount: number;
  addressScript: string;
  twilightDepositAddress: string;
}

export interface MsgRegisterDepositAddressResponse {}

const baseMsgMsgConfirmBtcDeposit: object = {
  depositAddress: "",
  depositAmount: 0,
  inputAddress: "",
  blockHeight: 0,
  blockHash: "",
  twilightDepositAddress: "",
  btcOracleAddress: "",
};

export const MsgMsgConfirmBtcDeposit = {
  encode(
    message: MsgMsgConfirmBtcDeposit,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    if (message.depositAmount !== 0) {
      writer.uint32(16).uint64(message.depositAmount);
    }
    if (message.inputAddress !== "") {
      writer.uint32(26).string(message.inputAddress);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(32).uint64(message.blockHeight);
    }
    if (message.blockHash !== "") {
      writer.uint32(42).string(message.blockHash);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(50).string(message.twilightDepositAddress);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(58).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMsgConfirmBtcDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMsgConfirmBtcDeposit,
    } as MsgMsgConfirmBtcDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAddress = reader.string();
          break;
        case 2:
          message.depositAmount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.inputAddress = reader.string();
          break;
        case 4:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.blockHash = reader.string();
          break;
        case 6:
          message.twilightDepositAddress = reader.string();
          break;
        case 7:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMsgConfirmBtcDeposit {
    const message = {
      ...baseMsgMsgConfirmBtcDeposit,
    } as MsgMsgConfirmBtcDeposit;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = String(object.depositAddress);
    } else {
      message.depositAddress = "";
    }
    if (object.depositAmount !== undefined && object.depositAmount !== null) {
      message.depositAmount = Number(object.depositAmount);
    } else {
      message.depositAmount = 0;
    }
    if (object.inputAddress !== undefined && object.inputAddress !== null) {
      message.inputAddress = String(object.inputAddress);
    } else {
      message.inputAddress = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    if (object.blockHash !== undefined && object.blockHash !== null) {
      message.blockHash = String(object.blockHash);
    } else {
      message.blockHash = "";
    }
    if (
      object.twilightDepositAddress !== undefined &&
      object.twilightDepositAddress !== null
    ) {
      message.twilightDepositAddress = String(object.twilightDepositAddress);
    } else {
      message.twilightDepositAddress = "";
    }
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

  toJSON(message: MsgMsgConfirmBtcDeposit): unknown {
    const obj: any = {};
    message.depositAddress !== undefined &&
      (obj.depositAddress = message.depositAddress);
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount);
    message.inputAddress !== undefined &&
      (obj.inputAddress = message.inputAddress);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.twilightDepositAddress !== undefined &&
      (obj.twilightDepositAddress = message.twilightDepositAddress);
    message.btcOracleAddress !== undefined &&
      (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMsgConfirmBtcDeposit>
  ): MsgMsgConfirmBtcDeposit {
    const message = {
      ...baseMsgMsgConfirmBtcDeposit,
    } as MsgMsgConfirmBtcDeposit;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = object.depositAddress;
    } else {
      message.depositAddress = "";
    }
    if (object.depositAmount !== undefined && object.depositAmount !== null) {
      message.depositAmount = object.depositAmount;
    } else {
      message.depositAmount = 0;
    }
    if (object.inputAddress !== undefined && object.inputAddress !== null) {
      message.inputAddress = object.inputAddress;
    } else {
      message.inputAddress = "";
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    if (object.blockHash !== undefined && object.blockHash !== null) {
      message.blockHash = object.blockHash;
    } else {
      message.blockHash = "";
    }
    if (
      object.twilightDepositAddress !== undefined &&
      object.twilightDepositAddress !== null
    ) {
      message.twilightDepositAddress = object.twilightDepositAddress;
    } else {
      message.twilightDepositAddress = "";
    }
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

const baseMsgMsgConfirmBtcDepositResponse: object = {
  twilightDepositAddress: "",
};

export const MsgMsgConfirmBtcDepositResponse = {
  encode(
    message: MsgMsgConfirmBtcDepositResponse,
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
  ): MsgMsgConfirmBtcDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMsgConfirmBtcDepositResponse,
    } as MsgMsgConfirmBtcDepositResponse;
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

  fromJSON(object: any): MsgMsgConfirmBtcDepositResponse {
    const message = {
      ...baseMsgMsgConfirmBtcDepositResponse,
    } as MsgMsgConfirmBtcDepositResponse;
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

  toJSON(message: MsgMsgConfirmBtcDepositResponse): unknown {
    const obj: any = {};
    message.twilightDepositAddress !== undefined &&
      (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMsgConfirmBtcDepositResponse>
  ): MsgMsgConfirmBtcDepositResponse {
    const message = {
      ...baseMsgMsgConfirmBtcDepositResponse,
    } as MsgMsgConfirmBtcDepositResponse;
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

const baseMsgRegisterDepositAddress: object = {
  depositAddress: "",
  depositAmount: 0,
  addressScript: "",
  twilightDepositAddress: "",
};

export const MsgRegisterDepositAddress = {
  encode(
    message: MsgRegisterDepositAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    if (message.depositAmount !== 0) {
      writer.uint32(16).uint64(message.depositAmount);
    }
    if (message.addressScript !== "") {
      writer.uint32(26).string(message.addressScript);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(34).string(message.twilightDepositAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterDepositAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterDepositAddress,
    } as MsgRegisterDepositAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAddress = reader.string();
          break;
        case 2:
          message.depositAmount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.addressScript = reader.string();
          break;
        case 4:
          message.twilightDepositAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterDepositAddress {
    const message = {
      ...baseMsgRegisterDepositAddress,
    } as MsgRegisterDepositAddress;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = String(object.depositAddress);
    } else {
      message.depositAddress = "";
    }
    if (object.depositAmount !== undefined && object.depositAmount !== null) {
      message.depositAmount = Number(object.depositAmount);
    } else {
      message.depositAmount = 0;
    }
    if (object.addressScript !== undefined && object.addressScript !== null) {
      message.addressScript = String(object.addressScript);
    } else {
      message.addressScript = "";
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

  toJSON(message: MsgRegisterDepositAddress): unknown {
    const obj: any = {};
    message.depositAddress !== undefined &&
      (obj.depositAddress = message.depositAddress);
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount);
    message.addressScript !== undefined &&
      (obj.addressScript = message.addressScript);
    message.twilightDepositAddress !== undefined &&
      (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterDepositAddress>
  ): MsgRegisterDepositAddress {
    const message = {
      ...baseMsgRegisterDepositAddress,
    } as MsgRegisterDepositAddress;
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = object.depositAddress;
    } else {
      message.depositAddress = "";
    }
    if (object.depositAmount !== undefined && object.depositAmount !== null) {
      message.depositAmount = object.depositAmount;
    } else {
      message.depositAmount = 0;
    }
    if (object.addressScript !== undefined && object.addressScript !== null) {
      message.addressScript = object.addressScript;
    } else {
      message.addressScript = "";
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

const baseMsgRegisterDepositAddressResponse: object = {};

export const MsgRegisterDepositAddressResponse = {
  encode(
    _: MsgRegisterDepositAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterDepositAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterDepositAddressResponse,
    } as MsgRegisterDepositAddressResponse;
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

  fromJSON(_: any): MsgRegisterDepositAddressResponse {
    const message = {
      ...baseMsgRegisterDepositAddressResponse,
    } as MsgRegisterDepositAddressResponse;
    return message;
  },

  toJSON(_: MsgRegisterDepositAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterDepositAddressResponse>
  ): MsgRegisterDepositAddressResponse {
    const message = {
      ...baseMsgRegisterDepositAddressResponse,
    } as MsgRegisterDepositAddressResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  MsgConfirmBtcDeposit(
    request: MsgMsgConfirmBtcDeposit
  ): Promise<MsgMsgConfirmBtcDepositResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RegisterDepositAddress(
    request: MsgRegisterDepositAddress
  ): Promise<MsgRegisterDepositAddressResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  MsgConfirmBtcDeposit(
    request: MsgMsgConfirmBtcDeposit
  ): Promise<MsgMsgConfirmBtcDepositResponse> {
    const data = MsgMsgConfirmBtcDeposit.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Msg",
      "MsgConfirmBtcDeposit",
      data
    );
    return promise.then((data) =>
      MsgMsgConfirmBtcDepositResponse.decode(new Reader(data))
    );
  }

  RegisterDepositAddress(
    request: MsgRegisterDepositAddress
  ): Promise<MsgRegisterDepositAddressResponse> {
    const data = MsgRegisterDepositAddress.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Msg",
      "RegisterDepositAddress",
      data
    );
    return promise.then((data) =>
      MsgRegisterDepositAddressResponse.decode(new Reader(data))
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
