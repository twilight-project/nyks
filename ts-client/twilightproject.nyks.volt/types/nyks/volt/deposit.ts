/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

export interface BtcDepositAddress {
  btcDepositAddress: string;
  btcSatoshiTestAmount: number;
  /** make it constant through gov proposal */
  twilightStakingAmount: number;
  twilightAddress: string;
  isConfirmed: boolean;
  CreationTwilightBlockHeight: number;
}

function createBaseBtcDepositAddress(): BtcDepositAddress {
  return {
    btcDepositAddress: "",
    btcSatoshiTestAmount: 0,
    twilightStakingAmount: 0,
    twilightAddress: "",
    isConfirmed: false,
    CreationTwilightBlockHeight: 0,
  };
}

export const BtcDepositAddress = {
  encode(message: BtcDepositAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.btcDepositAddress !== "") {
      writer.uint32(10).string(message.btcDepositAddress);
    }
    if (message.btcSatoshiTestAmount !== 0) {
      writer.uint32(16).uint64(message.btcSatoshiTestAmount);
    }
    if (message.twilightStakingAmount !== 0) {
      writer.uint32(24).uint64(message.twilightStakingAmount);
    }
    if (message.twilightAddress !== "") {
      writer.uint32(34).string(message.twilightAddress);
    }
    if (message.isConfirmed === true) {
      writer.uint32(40).bool(message.isConfirmed);
    }
    if (message.CreationTwilightBlockHeight !== 0) {
      writer.uint32(48).int64(message.CreationTwilightBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BtcDepositAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBtcDepositAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.btcDepositAddress = reader.string();
          break;
        case 2:
          message.btcSatoshiTestAmount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.twilightStakingAmount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.twilightAddress = reader.string();
          break;
        case 5:
          message.isConfirmed = reader.bool();
          break;
        case 6:
          message.CreationTwilightBlockHeight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BtcDepositAddress {
    return {
      btcDepositAddress: isSet(object.btcDepositAddress) ? String(object.btcDepositAddress) : "",
      btcSatoshiTestAmount: isSet(object.btcSatoshiTestAmount) ? Number(object.btcSatoshiTestAmount) : 0,
      twilightStakingAmount: isSet(object.twilightStakingAmount) ? Number(object.twilightStakingAmount) : 0,
      twilightAddress: isSet(object.twilightAddress) ? String(object.twilightAddress) : "",
      isConfirmed: isSet(object.isConfirmed) ? Boolean(object.isConfirmed) : false,
      CreationTwilightBlockHeight: isSet(object.CreationTwilightBlockHeight)
        ? Number(object.CreationTwilightBlockHeight)
        : 0,
    };
  },

  toJSON(message: BtcDepositAddress): unknown {
    const obj: any = {};
    message.btcDepositAddress !== undefined && (obj.btcDepositAddress = message.btcDepositAddress);
    message.btcSatoshiTestAmount !== undefined && (obj.btcSatoshiTestAmount = Math.round(message.btcSatoshiTestAmount));
    message.twilightStakingAmount !== undefined
      && (obj.twilightStakingAmount = Math.round(message.twilightStakingAmount));
    message.twilightAddress !== undefined && (obj.twilightAddress = message.twilightAddress);
    message.isConfirmed !== undefined && (obj.isConfirmed = message.isConfirmed);
    message.CreationTwilightBlockHeight !== undefined
      && (obj.CreationTwilightBlockHeight = Math.round(message.CreationTwilightBlockHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BtcDepositAddress>, I>>(object: I): BtcDepositAddress {
    const message = createBaseBtcDepositAddress();
    message.btcDepositAddress = object.btcDepositAddress ?? "";
    message.btcSatoshiTestAmount = object.btcSatoshiTestAmount ?? 0;
    message.twilightStakingAmount = object.twilightStakingAmount ?? 0;
    message.twilightAddress = object.twilightAddress ?? "";
    message.isConfirmed = object.isConfirmed ?? false;
    message.CreationTwilightBlockHeight = object.CreationTwilightBlockHeight ?? 0;
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
