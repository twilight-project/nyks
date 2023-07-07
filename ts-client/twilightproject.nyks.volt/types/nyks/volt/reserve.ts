/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

/**
 * BtcReserve is a mapping of a validator address to a reserve ID
 * It holds other values in the reserve struct such as total
 * value, private pool value, public pool value, and the btc relay capacity value
 */
export interface BtcReserve {
  ReserveId: number;
  ReserveAddress: string;
  JudgeAddress: string;
  BtcRelayCapacityValue: number;
  TotalValue: number;
  PrivatePoolValue: number;
  PublicValue: number;
  /** repeated IndividualTwilightReserveAccount IndividualTwilightReserveAccount = 9; */
  FeePool: number;
}

function createBaseBtcReserve(): BtcReserve {
  return {
    ReserveId: 0,
    ReserveAddress: "",
    JudgeAddress: "",
    BtcRelayCapacityValue: 0,
    TotalValue: 0,
    PrivatePoolValue: 0,
    PublicValue: 0,
    FeePool: 0,
  };
}

export const BtcReserve = {
  encode(message: BtcReserve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ReserveId !== 0) {
      writer.uint32(8).uint64(message.ReserveId);
    }
    if (message.ReserveAddress !== "") {
      writer.uint32(18).string(message.ReserveAddress);
    }
    if (message.JudgeAddress !== "") {
      writer.uint32(26).string(message.JudgeAddress);
    }
    if (message.BtcRelayCapacityValue !== 0) {
      writer.uint32(32).uint64(message.BtcRelayCapacityValue);
    }
    if (message.TotalValue !== 0) {
      writer.uint32(40).uint64(message.TotalValue);
    }
    if (message.PrivatePoolValue !== 0) {
      writer.uint32(48).uint64(message.PrivatePoolValue);
    }
    if (message.PublicValue !== 0) {
      writer.uint32(56).uint64(message.PublicValue);
    }
    if (message.FeePool !== 0) {
      writer.uint32(64).uint64(message.FeePool);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BtcReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBtcReserve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.ReserveAddress = reader.string();
          break;
        case 3:
          message.JudgeAddress = reader.string();
          break;
        case 4:
          message.BtcRelayCapacityValue = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.TotalValue = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.PrivatePoolValue = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.PublicValue = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.FeePool = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BtcReserve {
    return {
      ReserveId: isSet(object.ReserveId) ? Number(object.ReserveId) : 0,
      ReserveAddress: isSet(object.ReserveAddress) ? String(object.ReserveAddress) : "",
      JudgeAddress: isSet(object.JudgeAddress) ? String(object.JudgeAddress) : "",
      BtcRelayCapacityValue: isSet(object.BtcRelayCapacityValue) ? Number(object.BtcRelayCapacityValue) : 0,
      TotalValue: isSet(object.TotalValue) ? Number(object.TotalValue) : 0,
      PrivatePoolValue: isSet(object.PrivatePoolValue) ? Number(object.PrivatePoolValue) : 0,
      PublicValue: isSet(object.PublicValue) ? Number(object.PublicValue) : 0,
      FeePool: isSet(object.FeePool) ? Number(object.FeePool) : 0,
    };
  },

  toJSON(message: BtcReserve): unknown {
    const obj: any = {};
    message.ReserveId !== undefined && (obj.ReserveId = Math.round(message.ReserveId));
    message.ReserveAddress !== undefined && (obj.ReserveAddress = message.ReserveAddress);
    message.JudgeAddress !== undefined && (obj.JudgeAddress = message.JudgeAddress);
    message.BtcRelayCapacityValue !== undefined
      && (obj.BtcRelayCapacityValue = Math.round(message.BtcRelayCapacityValue));
    message.TotalValue !== undefined && (obj.TotalValue = Math.round(message.TotalValue));
    message.PrivatePoolValue !== undefined && (obj.PrivatePoolValue = Math.round(message.PrivatePoolValue));
    message.PublicValue !== undefined && (obj.PublicValue = Math.round(message.PublicValue));
    message.FeePool !== undefined && (obj.FeePool = Math.round(message.FeePool));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BtcReserve>, I>>(object: I): BtcReserve {
    const message = createBaseBtcReserve();
    message.ReserveId = object.ReserveId ?? 0;
    message.ReserveAddress = object.ReserveAddress ?? "";
    message.JudgeAddress = object.JudgeAddress ?? "";
    message.BtcRelayCapacityValue = object.BtcRelayCapacityValue ?? 0;
    message.TotalValue = object.TotalValue ?? 0;
    message.PrivatePoolValue = object.PrivatePoolValue ?? 0;
    message.PublicValue = object.PublicValue ?? 0;
    message.FeePool = object.FeePool ?? 0;
    return message;
  },
};

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
