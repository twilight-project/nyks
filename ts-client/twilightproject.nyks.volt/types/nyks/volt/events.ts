/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

export interface EventReserveWithdrawSnapshot {
  message: string;
  reserveId: number;
  roundId: number;
}

export interface EventRefundTxSnapshot {
  message: string;
  reserveId: number;
  roundId: number;
}

function createBaseEventReserveWithdrawSnapshot(): EventReserveWithdrawSnapshot {
  return { message: "", reserveId: 0, roundId: 0 };
}

export const EventReserveWithdrawSnapshot = {
  encode(message: EventReserveWithdrawSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveId !== 0) {
      writer.uint32(16).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(24).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventReserveWithdrawSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventReserveWithdrawSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventReserveWithdrawSnapshot {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: EventReserveWithdrawSnapshot): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventReserveWithdrawSnapshot>, I>>(object: I): EventReserveWithdrawSnapshot {
    const message = createBaseEventReserveWithdrawSnapshot();
    message.message = object.message ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    return message;
  },
};

function createBaseEventRefundTxSnapshot(): EventRefundTxSnapshot {
  return { message: "", reserveId: 0, roundId: 0 };
}

export const EventRefundTxSnapshot = {
  encode(message: EventRefundTxSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveId !== 0) {
      writer.uint32(16).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(24).uint64(message.roundId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRefundTxSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRefundTxSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRefundTxSnapshot {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
    };
  },

  toJSON(message: EventRefundTxSnapshot): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRefundTxSnapshot>, I>>(object: I): EventRefundTxSnapshot {
    const message = createBaseEventRefundTxSnapshot();
    message.message = object.message ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
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
