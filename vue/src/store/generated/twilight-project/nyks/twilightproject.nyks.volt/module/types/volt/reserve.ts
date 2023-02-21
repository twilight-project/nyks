/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

export interface BtcReserve {
  ReserveId: number;
  ValidatorAddress: string;
  BtcRelayCapacityValue: number;
  TotalValue: number;
  PrivatePoolValue: number;
  PublicValue: number;
  FeePool: number;
  TwilightAddresses: string[];
}

const baseBtcReserve: object = {
  ReserveId: 0,
  ValidatorAddress: "",
  BtcRelayCapacityValue: 0,
  TotalValue: 0,
  PrivatePoolValue: 0,
  PublicValue: 0,
  FeePool: 0,
  TwilightAddresses: "",
};

export const BtcReserve = {
  encode(message: BtcReserve, writer: Writer = Writer.create()): Writer {
    if (message.ReserveId !== 0) {
      writer.uint32(8).uint64(message.ReserveId);
    }
    if (message.ValidatorAddress !== "") {
      writer.uint32(18).string(message.ValidatorAddress);
    }
    if (message.BtcRelayCapacityValue !== 0) {
      writer.uint32(24).uint64(message.BtcRelayCapacityValue);
    }
    if (message.TotalValue !== 0) {
      writer.uint32(32).uint64(message.TotalValue);
    }
    if (message.PrivatePoolValue !== 0) {
      writer.uint32(40).uint64(message.PrivatePoolValue);
    }
    if (message.PublicValue !== 0) {
      writer.uint32(48).uint64(message.PublicValue);
    }
    if (message.FeePool !== 0) {
      writer.uint32(56).uint64(message.FeePool);
    }
    for (const v of message.TwilightAddresses) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BtcReserve {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBtcReserve } as BtcReserve;
    message.TwilightAddresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.ValidatorAddress = reader.string();
          break;
        case 3:
          message.BtcRelayCapacityValue = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.TotalValue = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.PrivatePoolValue = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.PublicValue = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.FeePool = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.TwilightAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BtcReserve {
    const message = { ...baseBtcReserve } as BtcReserve;
    message.TwilightAddresses = [];
    if (object.ReserveId !== undefined && object.ReserveId !== null) {
      message.ReserveId = Number(object.ReserveId);
    } else {
      message.ReserveId = 0;
    }
    if (
      object.ValidatorAddress !== undefined &&
      object.ValidatorAddress !== null
    ) {
      message.ValidatorAddress = String(object.ValidatorAddress);
    } else {
      message.ValidatorAddress = "";
    }
    if (
      object.BtcRelayCapacityValue !== undefined &&
      object.BtcRelayCapacityValue !== null
    ) {
      message.BtcRelayCapacityValue = Number(object.BtcRelayCapacityValue);
    } else {
      message.BtcRelayCapacityValue = 0;
    }
    if (object.TotalValue !== undefined && object.TotalValue !== null) {
      message.TotalValue = Number(object.TotalValue);
    } else {
      message.TotalValue = 0;
    }
    if (
      object.PrivatePoolValue !== undefined &&
      object.PrivatePoolValue !== null
    ) {
      message.PrivatePoolValue = Number(object.PrivatePoolValue);
    } else {
      message.PrivatePoolValue = 0;
    }
    if (object.PublicValue !== undefined && object.PublicValue !== null) {
      message.PublicValue = Number(object.PublicValue);
    } else {
      message.PublicValue = 0;
    }
    if (object.FeePool !== undefined && object.FeePool !== null) {
      message.FeePool = Number(object.FeePool);
    } else {
      message.FeePool = 0;
    }
    if (
      object.TwilightAddresses !== undefined &&
      object.TwilightAddresses !== null
    ) {
      for (const e of object.TwilightAddresses) {
        message.TwilightAddresses.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: BtcReserve): unknown {
    const obj: any = {};
    message.ReserveId !== undefined && (obj.ReserveId = message.ReserveId);
    message.ValidatorAddress !== undefined &&
      (obj.ValidatorAddress = message.ValidatorAddress);
    message.BtcRelayCapacityValue !== undefined &&
      (obj.BtcRelayCapacityValue = message.BtcRelayCapacityValue);
    message.TotalValue !== undefined && (obj.TotalValue = message.TotalValue);
    message.PrivatePoolValue !== undefined &&
      (obj.PrivatePoolValue = message.PrivatePoolValue);
    message.PublicValue !== undefined &&
      (obj.PublicValue = message.PublicValue);
    message.FeePool !== undefined && (obj.FeePool = message.FeePool);
    if (message.TwilightAddresses) {
      obj.TwilightAddresses = message.TwilightAddresses.map((e) => e);
    } else {
      obj.TwilightAddresses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BtcReserve>): BtcReserve {
    const message = { ...baseBtcReserve } as BtcReserve;
    message.TwilightAddresses = [];
    if (object.ReserveId !== undefined && object.ReserveId !== null) {
      message.ReserveId = object.ReserveId;
    } else {
      message.ReserveId = 0;
    }
    if (
      object.ValidatorAddress !== undefined &&
      object.ValidatorAddress !== null
    ) {
      message.ValidatorAddress = object.ValidatorAddress;
    } else {
      message.ValidatorAddress = "";
    }
    if (
      object.BtcRelayCapacityValue !== undefined &&
      object.BtcRelayCapacityValue !== null
    ) {
      message.BtcRelayCapacityValue = object.BtcRelayCapacityValue;
    } else {
      message.BtcRelayCapacityValue = 0;
    }
    if (object.TotalValue !== undefined && object.TotalValue !== null) {
      message.TotalValue = object.TotalValue;
    } else {
      message.TotalValue = 0;
    }
    if (
      object.PrivatePoolValue !== undefined &&
      object.PrivatePoolValue !== null
    ) {
      message.PrivatePoolValue = object.PrivatePoolValue;
    } else {
      message.PrivatePoolValue = 0;
    }
    if (object.PublicValue !== undefined && object.PublicValue !== null) {
      message.PublicValue = object.PublicValue;
    } else {
      message.PublicValue = 0;
    }
    if (object.FeePool !== undefined && object.FeePool !== null) {
      message.FeePool = object.FeePool;
    } else {
      message.FeePool = 0;
    }
    if (
      object.TwilightAddresses !== undefined &&
      object.TwilightAddresses !== null
    ) {
      for (const e of object.TwilightAddresses) {
        message.TwilightAddresses.push(e);
      }
    }
    return message;
  },
};

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
