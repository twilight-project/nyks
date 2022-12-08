/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "twilightproject.nyks.bridge";

export interface MsgConfirmBtcDeposit {
  depositAddress: string;
  depositAmount: number;
  height: number;
  hash: string;
  twilightDepositAddress: string;
  btcOracleAddress: string;
}

export interface MsgConfirmBtcDepositResponse {
  twilightDepositAddress: string;
}

export interface MsgRegisterBtcDepositAddress {
  depositAddress: string;
  twilightDepositAddress: string;
}

export interface MsgRegisterBtcDepositAddressResponse {}

export interface MsgRegisterReserveAddress {
  reserveScript: string;
  judgeAddress: string;
}

export interface MsgRegisterReserveAddressResponse {
  reserveScript: string;
}

const baseMsgConfirmBtcDeposit: object = {
  depositAddress: "",
  depositAmount: 0,
  height: 0,
  hash: "",
  twilightDepositAddress: "",
  btcOracleAddress: "",
};

export const MsgConfirmBtcDeposit = {
  encode(
    message: MsgConfirmBtcDeposit,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    if (message.depositAmount !== 0) {
      writer.uint32(16).uint64(message.depositAmount);
    }
    if (message.height !== 0) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.hash !== "") {
      writer.uint32(34).string(message.hash);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(42).string(message.twilightDepositAddress);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(50).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgConfirmBtcDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgConfirmBtcDeposit } as MsgConfirmBtcDeposit;
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
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.hash = reader.string();
          break;
        case 5:
          message.twilightDepositAddress = reader.string();
          break;
        case 6:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmBtcDeposit {
    const message = { ...baseMsgConfirmBtcDeposit } as MsgConfirmBtcDeposit;
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

  toJSON(message: MsgConfirmBtcDeposit): unknown {
    const obj: any = {};
    message.depositAddress !== undefined &&
      (obj.depositAddress = message.depositAddress);
    message.depositAmount !== undefined &&
      (obj.depositAmount = message.depositAmount);
    message.height !== undefined && (obj.height = message.height);
    message.hash !== undefined && (obj.hash = message.hash);
    message.twilightDepositAddress !== undefined &&
      (obj.twilightDepositAddress = message.twilightDepositAddress);
    message.btcOracleAddress !== undefined &&
      (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgConfirmBtcDeposit>): MsgConfirmBtcDeposit {
    const message = { ...baseMsgConfirmBtcDeposit } as MsgConfirmBtcDeposit;
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

const baseMsgConfirmBtcDepositResponse: object = { twilightDepositAddress: "" };

export const MsgConfirmBtcDepositResponse = {
  encode(
    message: MsgConfirmBtcDepositResponse,
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
  ): MsgConfirmBtcDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgConfirmBtcDepositResponse,
    } as MsgConfirmBtcDepositResponse;
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

  fromJSON(object: any): MsgConfirmBtcDepositResponse {
    const message = {
      ...baseMsgConfirmBtcDepositResponse,
    } as MsgConfirmBtcDepositResponse;
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

  toJSON(message: MsgConfirmBtcDepositResponse): unknown {
    const obj: any = {};
    message.twilightDepositAddress !== undefined &&
      (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgConfirmBtcDepositResponse>
  ): MsgConfirmBtcDepositResponse {
    const message = {
      ...baseMsgConfirmBtcDepositResponse,
    } as MsgConfirmBtcDepositResponse;
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

const baseMsgRegisterBtcDepositAddress: object = {
  depositAddress: "",
  twilightDepositAddress: "",
};

export const MsgRegisterBtcDepositAddress = {
  encode(
    message: MsgRegisterBtcDepositAddress,
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
  ): MsgRegisterBtcDepositAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterBtcDepositAddress,
    } as MsgRegisterBtcDepositAddress;
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

  fromJSON(object: any): MsgRegisterBtcDepositAddress {
    const message = {
      ...baseMsgRegisterBtcDepositAddress,
    } as MsgRegisterBtcDepositAddress;
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

  toJSON(message: MsgRegisterBtcDepositAddress): unknown {
    const obj: any = {};
    message.depositAddress !== undefined &&
      (obj.depositAddress = message.depositAddress);
    message.twilightDepositAddress !== undefined &&
      (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterBtcDepositAddress>
  ): MsgRegisterBtcDepositAddress {
    const message = {
      ...baseMsgRegisterBtcDepositAddress,
    } as MsgRegisterBtcDepositAddress;
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

const baseMsgRegisterBtcDepositAddressResponse: object = {};

export const MsgRegisterBtcDepositAddressResponse = {
  encode(
    _: MsgRegisterBtcDepositAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterBtcDepositAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterBtcDepositAddressResponse,
    } as MsgRegisterBtcDepositAddressResponse;
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

  fromJSON(_: any): MsgRegisterBtcDepositAddressResponse {
    const message = {
      ...baseMsgRegisterBtcDepositAddressResponse,
    } as MsgRegisterBtcDepositAddressResponse;
    return message;
  },

  toJSON(_: MsgRegisterBtcDepositAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterBtcDepositAddressResponse>
  ): MsgRegisterBtcDepositAddressResponse {
    const message = {
      ...baseMsgRegisterBtcDepositAddressResponse,
    } as MsgRegisterBtcDepositAddressResponse;
    return message;
  },
};

const baseMsgRegisterReserveAddress: object = {
  reserveScript: "",
  judgeAddress: "",
};

export const MsgRegisterReserveAddress = {
  encode(
    message: MsgRegisterReserveAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.reserveScript !== "") {
      writer.uint32(10).string(message.reserveScript);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterReserveAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterReserveAddress,
    } as MsgRegisterReserveAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveScript = reader.string();
          break;
        case 2:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterReserveAddress {
    const message = {
      ...baseMsgRegisterReserveAddress,
    } as MsgRegisterReserveAddress;
    if (object.reserveScript !== undefined && object.reserveScript !== null) {
      message.reserveScript = String(object.reserveScript);
    } else {
      message.reserveScript = "";
    }
    if (object.judgeAddress !== undefined && object.judgeAddress !== null) {
      message.judgeAddress = String(object.judgeAddress);
    } else {
      message.judgeAddress = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterReserveAddress): unknown {
    const obj: any = {};
    message.reserveScript !== undefined &&
      (obj.reserveScript = message.reserveScript);
    message.judgeAddress !== undefined &&
      (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterReserveAddress>
  ): MsgRegisterReserveAddress {
    const message = {
      ...baseMsgRegisterReserveAddress,
    } as MsgRegisterReserveAddress;
    if (object.reserveScript !== undefined && object.reserveScript !== null) {
      message.reserveScript = object.reserveScript;
    } else {
      message.reserveScript = "";
    }
    if (object.judgeAddress !== undefined && object.judgeAddress !== null) {
      message.judgeAddress = object.judgeAddress;
    } else {
      message.judgeAddress = "";
    }
    return message;
  },
};

const baseMsgRegisterReserveAddressResponse: object = { reserveScript: "" };

export const MsgRegisterReserveAddressResponse = {
  encode(
    message: MsgRegisterReserveAddressResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.reserveScript !== "") {
      writer.uint32(10).string(message.reserveScript);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterReserveAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterReserveAddressResponse,
    } as MsgRegisterReserveAddressResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveScript = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterReserveAddressResponse {
    const message = {
      ...baseMsgRegisterReserveAddressResponse,
    } as MsgRegisterReserveAddressResponse;
    if (object.reserveScript !== undefined && object.reserveScript !== null) {
      message.reserveScript = String(object.reserveScript);
    } else {
      message.reserveScript = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterReserveAddressResponse): unknown {
    const obj: any = {};
    message.reserveScript !== undefined &&
      (obj.reserveScript = message.reserveScript);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterReserveAddressResponse>
  ): MsgRegisterReserveAddressResponse {
    const message = {
      ...baseMsgRegisterReserveAddressResponse,
    } as MsgRegisterReserveAddressResponse;
    if (object.reserveScript !== undefined && object.reserveScript !== null) {
      message.reserveScript = object.reserveScript;
    } else {
      message.reserveScript = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  ConfirmBtcDeposit(
    request: MsgConfirmBtcDeposit
  ): Promise<MsgConfirmBtcDepositResponse>;
  RegisterBtcDepositAddress(
    request: MsgRegisterBtcDepositAddress
  ): Promise<MsgRegisterBtcDepositAddressResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RegisterReserveAddress(
    request: MsgRegisterReserveAddress
  ): Promise<MsgRegisterReserveAddressResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ConfirmBtcDeposit(
    request: MsgConfirmBtcDeposit
  ): Promise<MsgConfirmBtcDepositResponse> {
    const data = MsgConfirmBtcDeposit.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Msg",
      "ConfirmBtcDeposit",
      data
    );
    return promise.then((data) =>
      MsgConfirmBtcDepositResponse.decode(new Reader(data))
    );
  }

  RegisterBtcDepositAddress(
    request: MsgRegisterBtcDepositAddress
  ): Promise<MsgRegisterBtcDepositAddressResponse> {
    const data = MsgRegisterBtcDepositAddress.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Msg",
      "RegisterBtcDepositAddress",
      data
    );
    return promise.then((data) =>
      MsgRegisterBtcDepositAddressResponse.decode(new Reader(data))
    );
  }

  RegisterReserveAddress(
    request: MsgRegisterReserveAddress
  ): Promise<MsgRegisterReserveAddressResponse> {
    const data = MsgRegisterReserveAddress.encode(request).finish();
    const promise = this.rpc.request(
      "twilightproject.nyks.bridge.Msg",
      "RegisterReserveAddress",
      data
    );
    return promise.then((data) =>
      MsgRegisterReserveAddressResponse.decode(new Reader(data))
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
