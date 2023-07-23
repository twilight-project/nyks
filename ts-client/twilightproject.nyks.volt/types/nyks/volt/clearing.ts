/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

export interface IndividualTwilightReserveAccountBalance {
  ReserveId: number;
  Amount: number;
}

export interface QQAccount {
  nonce: number;
  depositAccount: string;
  withdrawAccount: string;
}

/** ClearingAccount is used to keep a mapping of how a user's addresses and its reserve account balances */
export interface ClearingAccount {
  TwilightAddress: string;
  BtcDepositAddress: string;
  BtcWithdrawAddress: string;
  QQAccounts: QQAccount[];
  ReserveAccountBalances: IndividualTwilightReserveAccountBalance[];
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

function createBaseQQAccount(): QQAccount {
  return { nonce: 0, depositAccount: "", withdrawAccount: "" };
}

export const QQAccount = {
  encode(message: QQAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.depositAccount !== "") {
      writer.uint32(18).string(message.depositAccount);
    }
    if (message.withdrawAccount !== "") {
      writer.uint32(26).string(message.withdrawAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QQAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQQAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.depositAccount = reader.string();
          break;
        case 3:
          message.withdrawAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QQAccount {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      depositAccount: isSet(object.depositAccount) ? String(object.depositAccount) : "",
      withdrawAccount: isSet(object.withdrawAccount) ? String(object.withdrawAccount) : "",
    };
  },

  toJSON(message: QQAccount): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.depositAccount !== undefined && (obj.depositAccount = message.depositAccount);
    message.withdrawAccount !== undefined && (obj.withdrawAccount = message.withdrawAccount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QQAccount>, I>>(object: I): QQAccount {
    const message = createBaseQQAccount();
    message.nonce = object.nonce ?? 0;
    message.depositAccount = object.depositAccount ?? "";
    message.withdrawAccount = object.withdrawAccount ?? "";
    return message;
  },
};

function createBaseClearingAccount(): ClearingAccount {
  return {
    TwilightAddress: "",
    BtcDepositAddress: "",
    BtcWithdrawAddress: "",
    QQAccounts: [],
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
    if (message.BtcWithdrawAddress !== "") {
      writer.uint32(26).string(message.BtcWithdrawAddress);
    }
    for (const v of message.QQAccounts) {
      QQAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.ReserveAccountBalances) {
      IndividualTwilightReserveAccountBalance.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.BtcWithdrawAddress = reader.string();
          break;
        case 4:
          message.QQAccounts.push(QQAccount.decode(reader, reader.uint32()));
          break;
        case 5:
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
      BtcWithdrawAddress: isSet(object.BtcWithdrawAddress) ? String(object.BtcWithdrawAddress) : "",
      QQAccounts: Array.isArray(object?.QQAccounts) ? object.QQAccounts.map((e: any) => QQAccount.fromJSON(e)) : [],
      ReserveAccountBalances: Array.isArray(object?.ReserveAccountBalances)
        ? object.ReserveAccountBalances.map((e: any) => IndividualTwilightReserveAccountBalance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClearingAccount): unknown {
    const obj: any = {};
    message.TwilightAddress !== undefined && (obj.TwilightAddress = message.TwilightAddress);
    message.BtcDepositAddress !== undefined && (obj.BtcDepositAddress = message.BtcDepositAddress);
    message.BtcWithdrawAddress !== undefined && (obj.BtcWithdrawAddress = message.BtcWithdrawAddress);
    if (message.QQAccounts) {
      obj.QQAccounts = message.QQAccounts.map((e) => e ? QQAccount.toJSON(e) : undefined);
    } else {
      obj.QQAccounts = [];
    }
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
    message.BtcWithdrawAddress = object.BtcWithdrawAddress ?? "";
    message.QQAccounts = object.QQAccounts?.map((e) => QQAccount.fromPartial(e)) || [];
    message.ReserveAccountBalances =
      object.ReserveAccountBalances?.map((e) => IndividualTwilightReserveAccountBalance.fromPartial(e)) || [];
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
