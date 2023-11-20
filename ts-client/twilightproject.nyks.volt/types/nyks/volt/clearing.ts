/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

export interface IndividualTwilightReserveAccountBalance {
  ReserveId: number;
  Amount: number;
}

/** ClearingAccount is used to keep a mapping of how a user's addresses and its reserve account balances */
export interface ClearingAccount {
  TwilightAddress: string;
  BtcDepositAddress: string;
  BtcDepositAddressIdentifier: number;
  BtcWithdrawAddress: string;
  BtcWithdrawAddressIdentifier: number;
  ReserveAccountBalances: IndividualTwilightReserveAccountBalance[];
}

/** RefundTxSnap is used to keep a mapping of the last refund transaction for a reserve */
export interface RefundTxAccountSnap {
  Amount: number;
  BtcDepositAddress: string;
  BtcDepositAddressIdentifier: number;
}

/** LastRefundTxSnapshot is a snapshot of the last refund for this reserve id */
export interface LastRefundTxSnapshot {
  ReserveId: number;
  RoundId: number;
  refundAccounts: RefundTxAccountSnap[];
  EndBlockerHeightTwilight: number;
}

function createBaseIndividualTwilightReserveAccountBalance(): IndividualTwilightReserveAccountBalance {
  return { ReserveId: 0, Amount: 0 };
}

export const IndividualTwilightReserveAccountBalance = {
  encode(message: IndividualTwilightReserveAccountBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ReserveId !== 0) {
      writer.uint32(8).uint64(message.ReserveId);
    }
    if (message.Amount !== 0) {
      writer.uint32(16).uint64(message.Amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndividualTwilightReserveAccountBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndividualTwilightReserveAccountBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ReserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.Amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndividualTwilightReserveAccountBalance {
    return {
      ReserveId: isSet(object.ReserveId) ? Number(object.ReserveId) : 0,
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
    };
  },

  toJSON(message: IndividualTwilightReserveAccountBalance): unknown {
    const obj: any = {};
    message.ReserveId !== undefined && (obj.ReserveId = Math.round(message.ReserveId));
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IndividualTwilightReserveAccountBalance>, I>>(
    object: I,
  ): IndividualTwilightReserveAccountBalance {
    const message = createBaseIndividualTwilightReserveAccountBalance();
    message.ReserveId = object.ReserveId ?? 0;
    message.Amount = object.Amount ?? 0;
    return message;
  },
};

function createBaseClearingAccount(): ClearingAccount {
  return {
    TwilightAddress: "",
    BtcDepositAddress: "",
    BtcDepositAddressIdentifier: 0,
    BtcWithdrawAddress: "",
    BtcWithdrawAddressIdentifier: 0,
    ReserveAccountBalances: [],
  };
}

export const ClearingAccount = {
  encode(message: ClearingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TwilightAddress !== "") {
      writer.uint32(10).string(message.TwilightAddress);
    }
    if (message.BtcDepositAddress !== "") {
      writer.uint32(18).string(message.BtcDepositAddress);
    }
    if (message.BtcDepositAddressIdentifier !== 0) {
      writer.uint32(24).uint32(message.BtcDepositAddressIdentifier);
    }
    if (message.BtcWithdrawAddress !== "") {
      writer.uint32(34).string(message.BtcWithdrawAddress);
    }
    if (message.BtcWithdrawAddressIdentifier !== 0) {
      writer.uint32(40).uint32(message.BtcWithdrawAddressIdentifier);
    }
    for (const v of message.ReserveAccountBalances) {
      IndividualTwilightReserveAccountBalance.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TwilightAddress = reader.string();
          break;
        case 2:
          message.BtcDepositAddress = reader.string();
          break;
        case 3:
          message.BtcDepositAddressIdentifier = reader.uint32();
          break;
        case 4:
          message.BtcWithdrawAddress = reader.string();
          break;
        case 5:
          message.BtcWithdrawAddressIdentifier = reader.uint32();
          break;
        case 6:
          message.ReserveAccountBalances.push(IndividualTwilightReserveAccountBalance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClearingAccount {
    return {
      TwilightAddress: isSet(object.TwilightAddress) ? String(object.TwilightAddress) : "",
      BtcDepositAddress: isSet(object.BtcDepositAddress) ? String(object.BtcDepositAddress) : "",
      BtcDepositAddressIdentifier: isSet(object.BtcDepositAddressIdentifier)
        ? Number(object.BtcDepositAddressIdentifier)
        : 0,
      BtcWithdrawAddress: isSet(object.BtcWithdrawAddress) ? String(object.BtcWithdrawAddress) : "",
      BtcWithdrawAddressIdentifier: isSet(object.BtcWithdrawAddressIdentifier)
        ? Number(object.BtcWithdrawAddressIdentifier)
        : 0,
      ReserveAccountBalances: Array.isArray(object?.ReserveAccountBalances)
        ? object.ReserveAccountBalances.map((e: any) => IndividualTwilightReserveAccountBalance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClearingAccount): unknown {
    const obj: any = {};
    message.TwilightAddress !== undefined && (obj.TwilightAddress = message.TwilightAddress);
    message.BtcDepositAddress !== undefined && (obj.BtcDepositAddress = message.BtcDepositAddress);
    message.BtcDepositAddressIdentifier !== undefined
      && (obj.BtcDepositAddressIdentifier = Math.round(message.BtcDepositAddressIdentifier));
    message.BtcWithdrawAddress !== undefined && (obj.BtcWithdrawAddress = message.BtcWithdrawAddress);
    message.BtcWithdrawAddressIdentifier !== undefined
      && (obj.BtcWithdrawAddressIdentifier = Math.round(message.BtcWithdrawAddressIdentifier));
    if (message.ReserveAccountBalances) {
      obj.ReserveAccountBalances = message.ReserveAccountBalances.map((e) =>
        e ? IndividualTwilightReserveAccountBalance.toJSON(e) : undefined
      );
    } else {
      obj.ReserveAccountBalances = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClearingAccount>, I>>(object: I): ClearingAccount {
    const message = createBaseClearingAccount();
    message.TwilightAddress = object.TwilightAddress ?? "";
    message.BtcDepositAddress = object.BtcDepositAddress ?? "";
    message.BtcDepositAddressIdentifier = object.BtcDepositAddressIdentifier ?? 0;
    message.BtcWithdrawAddress = object.BtcWithdrawAddress ?? "";
    message.BtcWithdrawAddressIdentifier = object.BtcWithdrawAddressIdentifier ?? 0;
    message.ReserveAccountBalances =
      object.ReserveAccountBalances?.map((e) => IndividualTwilightReserveAccountBalance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRefundTxAccountSnap(): RefundTxAccountSnap {
  return { Amount: 0, BtcDepositAddress: "", BtcDepositAddressIdentifier: 0 };
}

export const RefundTxAccountSnap = {
  encode(message: RefundTxAccountSnap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Amount !== 0) {
      writer.uint32(8).uint64(message.Amount);
    }
    if (message.BtcDepositAddress !== "") {
      writer.uint32(18).string(message.BtcDepositAddress);
    }
    if (message.BtcDepositAddressIdentifier !== 0) {
      writer.uint32(24).uint32(message.BtcDepositAddressIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefundTxAccountSnap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefundTxAccountSnap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Amount = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.BtcDepositAddress = reader.string();
          break;
        case 3:
          message.BtcDepositAddressIdentifier = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RefundTxAccountSnap {
    return {
      Amount: isSet(object.Amount) ? Number(object.Amount) : 0,
      BtcDepositAddress: isSet(object.BtcDepositAddress) ? String(object.BtcDepositAddress) : "",
      BtcDepositAddressIdentifier: isSet(object.BtcDepositAddressIdentifier)
        ? Number(object.BtcDepositAddressIdentifier)
        : 0,
    };
  },

  toJSON(message: RefundTxAccountSnap): unknown {
    const obj: any = {};
    message.Amount !== undefined && (obj.Amount = Math.round(message.Amount));
    message.BtcDepositAddress !== undefined && (obj.BtcDepositAddress = message.BtcDepositAddress);
    message.BtcDepositAddressIdentifier !== undefined
      && (obj.BtcDepositAddressIdentifier = Math.round(message.BtcDepositAddressIdentifier));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RefundTxAccountSnap>, I>>(object: I): RefundTxAccountSnap {
    const message = createBaseRefundTxAccountSnap();
    message.Amount = object.Amount ?? 0;
    message.BtcDepositAddress = object.BtcDepositAddress ?? "";
    message.BtcDepositAddressIdentifier = object.BtcDepositAddressIdentifier ?? 0;
    return message;
  },
};

function createBaseLastRefundTxSnapshot(): LastRefundTxSnapshot {
  return { ReserveId: 0, RoundId: 0, refundAccounts: [], EndBlockerHeightTwilight: 0 };
}

export const LastRefundTxSnapshot = {
  encode(message: LastRefundTxSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ReserveId !== 0) {
      writer.uint32(8).uint64(message.ReserveId);
    }
    if (message.RoundId !== 0) {
      writer.uint32(16).uint64(message.RoundId);
    }
    for (const v of message.refundAccounts) {
      RefundTxAccountSnap.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.EndBlockerHeightTwilight !== 0) {
      writer.uint32(32).int64(message.EndBlockerHeightTwilight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastRefundTxSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastRefundTxSnapshot();
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
          message.refundAccounts.push(RefundTxAccountSnap.decode(reader, reader.uint32()));
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

  fromJSON(object: any): LastRefundTxSnapshot {
    return {
      ReserveId: isSet(object.ReserveId) ? Number(object.ReserveId) : 0,
      RoundId: isSet(object.RoundId) ? Number(object.RoundId) : 0,
      refundAccounts: Array.isArray(object?.refundAccounts)
        ? object.refundAccounts.map((e: any) => RefundTxAccountSnap.fromJSON(e))
        : [],
      EndBlockerHeightTwilight: isSet(object.EndBlockerHeightTwilight) ? Number(object.EndBlockerHeightTwilight) : 0,
    };
  },

  toJSON(message: LastRefundTxSnapshot): unknown {
    const obj: any = {};
    message.ReserveId !== undefined && (obj.ReserveId = Math.round(message.ReserveId));
    message.RoundId !== undefined && (obj.RoundId = Math.round(message.RoundId));
    if (message.refundAccounts) {
      obj.refundAccounts = message.refundAccounts.map((e) => e ? RefundTxAccountSnap.toJSON(e) : undefined);
    } else {
      obj.refundAccounts = [];
    }
    message.EndBlockerHeightTwilight !== undefined
      && (obj.EndBlockerHeightTwilight = Math.round(message.EndBlockerHeightTwilight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastRefundTxSnapshot>, I>>(object: I): LastRefundTxSnapshot {
    const message = createBaseLastRefundTxSnapshot();
    message.ReserveId = object.ReserveId ?? 0;
    message.RoundId = object.RoundId ?? 0;
    message.refundAccounts = object.refundAccounts?.map((e) => RefundTxAccountSnap.fromPartial(e)) || [];
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
