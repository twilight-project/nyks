/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

/** Chain creates an internal mapping with identifier and bool confirmed */
export interface BtcWithdrawRequestInternal {
  withdrawIdentifier: number;
  withdrawAddress: string;
  withdrawReserveId: number;
  /** in satoshis */
  withdrawAmount: number;
  twilightAddress: string;
  isConfirmed: boolean;
  CreationTwilightBlockHeight: number;
}

export interface ReserveWithdrawPool {
  ReserveID: number;
  RoundID: number;
  /** Currently being processed */
  processingWithdrawIdentifiers: number[];
  /** Waiting to be processed */
  queuedWithdrawIdentifiers: number[];
  /** Index of the last processed withdraw */
  currentProcessingIndex: number;
}

/** WithdrawRequestSnap is a snapshot of the withdraw request */
export interface WithdrawRequestSnap {
  withdrawIdentifier: number;
  withdrawAddress: string;
  withdrawAmount: number;
}

/** LastReserveWithdrawSnapshot is a snapshot of the last reserve withdraw */
export interface LastReserveWithdrawSnapshot {
  ReserveId: number;
  RoundId: number;
  withdrawRequests: WithdrawRequestSnap[];
  EndBlockerHeightTwilight: number;
}

function createBaseBtcWithdrawRequestInternal(): BtcWithdrawRequestInternal {
  return {
    withdrawIdentifier: 0,
    withdrawAddress: "",
    withdrawReserveId: 0,
    withdrawAmount: 0,
    twilightAddress: "",
    isConfirmed: false,
    CreationTwilightBlockHeight: 0,
  };
}

export const BtcWithdrawRequestInternal = {
  encode(message: BtcWithdrawRequestInternal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawIdentifier !== 0) {
      writer.uint32(8).uint32(message.withdrawIdentifier);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    if (message.withdrawReserveId !== 0) {
      writer.uint32(24).uint64(message.withdrawReserveId);
    }
    if (message.withdrawAmount !== 0) {
      writer.uint32(32).uint64(message.withdrawAmount);
    }
    if (message.twilightAddress !== "") {
      writer.uint32(42).string(message.twilightAddress);
    }
    if (message.isConfirmed === true) {
      writer.uint32(48).bool(message.isConfirmed);
    }
    if (message.CreationTwilightBlockHeight !== 0) {
      writer.uint32(56).int64(message.CreationTwilightBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BtcWithdrawRequestInternal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBtcWithdrawRequestInternal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawIdentifier = reader.uint32();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        case 3:
          message.withdrawReserveId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.withdrawAmount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.twilightAddress = reader.string();
          break;
        case 6:
          message.isConfirmed = reader.bool();
          break;
        case 7:
          message.CreationTwilightBlockHeight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BtcWithdrawRequestInternal {
    return {
      withdrawIdentifier: isSet(object.withdrawIdentifier) ? Number(object.withdrawIdentifier) : 0,
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
      withdrawReserveId: isSet(object.withdrawReserveId) ? Number(object.withdrawReserveId) : 0,
      withdrawAmount: isSet(object.withdrawAmount) ? Number(object.withdrawAmount) : 0,
      twilightAddress: isSet(object.twilightAddress) ? String(object.twilightAddress) : "",
      isConfirmed: isSet(object.isConfirmed) ? Boolean(object.isConfirmed) : false,
      CreationTwilightBlockHeight: isSet(object.CreationTwilightBlockHeight)
        ? Number(object.CreationTwilightBlockHeight)
        : 0,
    };
  },

  toJSON(message: BtcWithdrawRequestInternal): unknown {
    const obj: any = {};
    message.withdrawIdentifier !== undefined && (obj.withdrawIdentifier = Math.round(message.withdrawIdentifier));
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    message.withdrawReserveId !== undefined && (obj.withdrawReserveId = Math.round(message.withdrawReserveId));
    message.withdrawAmount !== undefined && (obj.withdrawAmount = Math.round(message.withdrawAmount));
    message.twilightAddress !== undefined && (obj.twilightAddress = message.twilightAddress);
    message.isConfirmed !== undefined && (obj.isConfirmed = message.isConfirmed);
    message.CreationTwilightBlockHeight !== undefined
      && (obj.CreationTwilightBlockHeight = Math.round(message.CreationTwilightBlockHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BtcWithdrawRequestInternal>, I>>(object: I): BtcWithdrawRequestInternal {
    const message = createBaseBtcWithdrawRequestInternal();
    message.withdrawIdentifier = object.withdrawIdentifier ?? 0;
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.withdrawReserveId = object.withdrawReserveId ?? 0;
    message.withdrawAmount = object.withdrawAmount ?? 0;
    message.twilightAddress = object.twilightAddress ?? "";
    message.isConfirmed = object.isConfirmed ?? false;
    message.CreationTwilightBlockHeight = object.CreationTwilightBlockHeight ?? 0;
    return message;
  },
};

function createBaseReserveWithdrawPool(): ReserveWithdrawPool {
  return {
    ReserveID: 0,
    RoundID: 0,
    processingWithdrawIdentifiers: [],
    queuedWithdrawIdentifiers: [],
    currentProcessingIndex: 0,
  };
}

export const ReserveWithdrawPool = {
  encode(message: ReserveWithdrawPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ReserveID !== 0) {
      writer.uint32(8).uint64(message.ReserveID);
    }
    if (message.RoundID !== 0) {
      writer.uint32(16).uint64(message.RoundID);
    }
    writer.uint32(26).fork();
    for (const v of message.processingWithdrawIdentifiers) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.queuedWithdrawIdentifiers) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.currentProcessingIndex !== 0) {
      writer.uint32(40).uint32(message.currentProcessingIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReserveWithdrawPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReserveWithdrawPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.RoundID = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.processingWithdrawIdentifiers.push(reader.uint32());
            }
          } else {
            message.processingWithdrawIdentifiers.push(reader.uint32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.queuedWithdrawIdentifiers.push(reader.uint32());
            }
          } else {
            message.queuedWithdrawIdentifiers.push(reader.uint32());
          }
          break;
        case 5:
          message.currentProcessingIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReserveWithdrawPool {
    return {
      ReserveID: isSet(object.ReserveID) ? Number(object.ReserveID) : 0,
      RoundID: isSet(object.RoundID) ? Number(object.RoundID) : 0,
      processingWithdrawIdentifiers: Array.isArray(object?.processingWithdrawIdentifiers)
        ? object.processingWithdrawIdentifiers.map((e: any) => Number(e))
        : [],
      queuedWithdrawIdentifiers: Array.isArray(object?.queuedWithdrawIdentifiers)
        ? object.queuedWithdrawIdentifiers.map((e: any) => Number(e))
        : [],
      currentProcessingIndex: isSet(object.currentProcessingIndex) ? Number(object.currentProcessingIndex) : 0,
    };
  },

  toJSON(message: ReserveWithdrawPool): unknown {
    const obj: any = {};
    message.ReserveID !== undefined && (obj.ReserveID = Math.round(message.ReserveID));
    message.RoundID !== undefined && (obj.RoundID = Math.round(message.RoundID));
    if (message.processingWithdrawIdentifiers) {
      obj.processingWithdrawIdentifiers = message.processingWithdrawIdentifiers.map((e) => Math.round(e));
    } else {
      obj.processingWithdrawIdentifiers = [];
    }
    if (message.queuedWithdrawIdentifiers) {
      obj.queuedWithdrawIdentifiers = message.queuedWithdrawIdentifiers.map((e) => Math.round(e));
    } else {
      obj.queuedWithdrawIdentifiers = [];
    }
    message.currentProcessingIndex !== undefined
      && (obj.currentProcessingIndex = Math.round(message.currentProcessingIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReserveWithdrawPool>, I>>(object: I): ReserveWithdrawPool {
    const message = createBaseReserveWithdrawPool();
    message.ReserveID = object.ReserveID ?? 0;
    message.RoundID = object.RoundID ?? 0;
    message.processingWithdrawIdentifiers = object.processingWithdrawIdentifiers?.map((e) => e) || [];
    message.queuedWithdrawIdentifiers = object.queuedWithdrawIdentifiers?.map((e) => e) || [];
    message.currentProcessingIndex = object.currentProcessingIndex ?? 0;
    return message;
  },
};

function createBaseWithdrawRequestSnap(): WithdrawRequestSnap {
  return { withdrawIdentifier: 0, withdrawAddress: "", withdrawAmount: 0 };
}

export const WithdrawRequestSnap = {
  encode(message: WithdrawRequestSnap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawIdentifier !== 0) {
      writer.uint32(8).uint32(message.withdrawIdentifier);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    if (message.withdrawAmount !== 0) {
      writer.uint32(24).uint64(message.withdrawAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawRequestSnap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawRequestSnap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawIdentifier = reader.uint32();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        case 3:
          message.withdrawAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawRequestSnap {
    return {
      withdrawIdentifier: isSet(object.withdrawIdentifier) ? Number(object.withdrawIdentifier) : 0,
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
      withdrawAmount: isSet(object.withdrawAmount) ? Number(object.withdrawAmount) : 0,
    };
  },

  toJSON(message: WithdrawRequestSnap): unknown {
    const obj: any = {};
    message.withdrawIdentifier !== undefined && (obj.withdrawIdentifier = Math.round(message.withdrawIdentifier));
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    message.withdrawAmount !== undefined && (obj.withdrawAmount = Math.round(message.withdrawAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawRequestSnap>, I>>(object: I): WithdrawRequestSnap {
    const message = createBaseWithdrawRequestSnap();
    message.withdrawIdentifier = object.withdrawIdentifier ?? 0;
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.withdrawAmount = object.withdrawAmount ?? 0;
    return message;
  },
};

function createBaseLastReserveWithdrawSnapshot(): LastReserveWithdrawSnapshot {
  return { ReserveId: 0, RoundId: 0, withdrawRequests: [], EndBlockerHeightTwilight: 0 };
}

export const LastReserveWithdrawSnapshot = {
  encode(message: LastReserveWithdrawSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ReserveId !== 0) {
      writer.uint32(8).uint64(message.ReserveId);
    }
    if (message.RoundId !== 0) {
      writer.uint32(16).uint64(message.RoundId);
    }
    for (const v of message.withdrawRequests) {
      WithdrawRequestSnap.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.EndBlockerHeightTwilight !== 0) {
      writer.uint32(32).int64(message.EndBlockerHeightTwilight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastReserveWithdrawSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastReserveWithdrawSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.RoundId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.withdrawRequests.push(WithdrawRequestSnap.decode(reader, reader.uint32()));
          break;
        case 4:
          message.EndBlockerHeightTwilight = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastReserveWithdrawSnapshot {
    return {
      ReserveId: isSet(object.ReserveId) ? Number(object.ReserveId) : 0,
      RoundId: isSet(object.RoundId) ? Number(object.RoundId) : 0,
      withdrawRequests: Array.isArray(object?.withdrawRequests)
        ? object.withdrawRequests.map((e: any) => WithdrawRequestSnap.fromJSON(e))
        : [],
      EndBlockerHeightTwilight: isSet(object.EndBlockerHeightTwilight) ? Number(object.EndBlockerHeightTwilight) : 0,
    };
  },

  toJSON(message: LastReserveWithdrawSnapshot): unknown {
    const obj: any = {};
    message.ReserveId !== undefined && (obj.ReserveId = Math.round(message.ReserveId));
    message.RoundId !== undefined && (obj.RoundId = Math.round(message.RoundId));
    if (message.withdrawRequests) {
      obj.withdrawRequests = message.withdrawRequests.map((e) => e ? WithdrawRequestSnap.toJSON(e) : undefined);
    } else {
      obj.withdrawRequests = [];
    }
    message.EndBlockerHeightTwilight !== undefined
      && (obj.EndBlockerHeightTwilight = Math.round(message.EndBlockerHeightTwilight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastReserveWithdrawSnapshot>, I>>(object: I): LastReserveWithdrawSnapshot {
    const message = createBaseLastReserveWithdrawSnapshot();
    message.ReserveId = object.ReserveId ?? 0;
    message.RoundId = object.RoundId ?? 0;
    message.withdrawRequests = object.withdrawRequests?.map((e) => WithdrawRequestSnap.fromPartial(e)) || [];
    message.EndBlockerHeightTwilight = object.EndBlockerHeightTwilight ?? 0;
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
