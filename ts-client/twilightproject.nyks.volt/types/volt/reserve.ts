/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

/**
 * IndividualTwilightReserveAccount is used to keep a mapping of how much btc an individual
 * twilight address has in the reserve
 */
export interface IndividualTwilightReserveAccount {
  TwilightAddress: string;
  BtcValue: number;
}

/**
 * BtcReserve is a mapping of a validator address to a reserve ID
 * It holds other values in the reserve struct such as total
 * value, private pool value, public pool value, and the btc relay capacity value
 */
export interface BtcReserve {
  ReserveId: number;
  ReserveAddress: string;
  ValidatorAddress: string;
  BtcRelayCapacityValue: number;
  TotalValue: number;
  PrivatePoolValue: number;
  PublicValue: number;
  FeePool: number;
  IndividualTwilightReserveAccount: IndividualTwilightReserveAccount[];
}

function createBaseIndividualTwilightReserveAccount(): IndividualTwilightReserveAccount {
  return { TwilightAddress: "", BtcValue: 0 };
}

export const IndividualTwilightReserveAccount = {
  encode(message: IndividualTwilightReserveAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TwilightAddress !== "") {
      writer.uint32(10).string(message.TwilightAddress);
    }
    if (message.BtcValue !== 0) {
      writer.uint32(16).uint64(message.BtcValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndividualTwilightReserveAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndividualTwilightReserveAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TwilightAddress = reader.string();
          break;
        case 2:
          message.BtcValue = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndividualTwilightReserveAccount {
    return {
      TwilightAddress: isSet(object.TwilightAddress) ? String(object.TwilightAddress) : "",
      BtcValue: isSet(object.BtcValue) ? Number(object.BtcValue) : 0,
    };
  },

  toJSON(message: IndividualTwilightReserveAccount): unknown {
    const obj: any = {};
    message.TwilightAddress !== undefined && (obj.TwilightAddress = message.TwilightAddress);
    message.BtcValue !== undefined && (obj.BtcValue = Math.round(message.BtcValue));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IndividualTwilightReserveAccount>, I>>(
    object: I,
  ): IndividualTwilightReserveAccount {
    const message = createBaseIndividualTwilightReserveAccount();
    message.TwilightAddress = object.TwilightAddress ?? "";
    message.BtcValue = object.BtcValue ?? 0;
    return message;
  },
};

function createBaseBtcReserve(): BtcReserve {
  return {
    ReserveId: 0,
    ReserveAddress: "",
    ValidatorAddress: "",
    BtcRelayCapacityValue: 0,
    TotalValue: 0,
    PrivatePoolValue: 0,
    PublicValue: 0,
    FeePool: 0,
    IndividualTwilightReserveAccount: [],
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
    if (message.ValidatorAddress !== "") {
      writer.uint32(26).string(message.ValidatorAddress);
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
    for (const v of message.IndividualTwilightReserveAccount) {
      IndividualTwilightReserveAccount.encode(v!, writer.uint32(74).fork()).ldelim();
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
          message.ValidatorAddress = reader.string();
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
        case 9:
          message.IndividualTwilightReserveAccount.push(
            IndividualTwilightReserveAccount.decode(reader, reader.uint32()),
          );
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
      ValidatorAddress: isSet(object.ValidatorAddress) ? String(object.ValidatorAddress) : "",
      BtcRelayCapacityValue: isSet(object.BtcRelayCapacityValue) ? Number(object.BtcRelayCapacityValue) : 0,
      TotalValue: isSet(object.TotalValue) ? Number(object.TotalValue) : 0,
      PrivatePoolValue: isSet(object.PrivatePoolValue) ? Number(object.PrivatePoolValue) : 0,
      PublicValue: isSet(object.PublicValue) ? Number(object.PublicValue) : 0,
      FeePool: isSet(object.FeePool) ? Number(object.FeePool) : 0,
      IndividualTwilightReserveAccount: Array.isArray(object?.IndividualTwilightReserveAccount)
        ? object.IndividualTwilightReserveAccount.map((e: any) => IndividualTwilightReserveAccount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BtcReserve): unknown {
    const obj: any = {};
    message.ReserveId !== undefined && (obj.ReserveId = Math.round(message.ReserveId));
    message.ReserveAddress !== undefined && (obj.ReserveAddress = message.ReserveAddress);
    message.ValidatorAddress !== undefined && (obj.ValidatorAddress = message.ValidatorAddress);
    message.BtcRelayCapacityValue !== undefined
      && (obj.BtcRelayCapacityValue = Math.round(message.BtcRelayCapacityValue));
    message.TotalValue !== undefined && (obj.TotalValue = Math.round(message.TotalValue));
    message.PrivatePoolValue !== undefined && (obj.PrivatePoolValue = Math.round(message.PrivatePoolValue));
    message.PublicValue !== undefined && (obj.PublicValue = Math.round(message.PublicValue));
    message.FeePool !== undefined && (obj.FeePool = Math.round(message.FeePool));
    if (message.IndividualTwilightReserveAccount) {
      obj.IndividualTwilightReserveAccount = message.IndividualTwilightReserveAccount.map((e) =>
        e ? IndividualTwilightReserveAccount.toJSON(e) : undefined
      );
    } else {
      obj.IndividualTwilightReserveAccount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BtcReserve>, I>>(object: I): BtcReserve {
    const message = createBaseBtcReserve();
    message.ReserveId = object.ReserveId ?? 0;
    message.ReserveAddress = object.ReserveAddress ?? "";
    message.ValidatorAddress = object.ValidatorAddress ?? "";
    message.BtcRelayCapacityValue = object.BtcRelayCapacityValue ?? 0;
    message.TotalValue = object.TotalValue ?? 0;
    message.PrivatePoolValue = object.PrivatePoolValue ?? 0;
    message.PublicValue = object.PublicValue ?? 0;
    message.FeePool = object.FeePool ?? 0;
    message.IndividualTwilightReserveAccount =
      object.IndividualTwilightReserveAccount?.map((e) => IndividualTwilightReserveAccount.fromPartial(e)) || [];
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
