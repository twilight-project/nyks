/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.bridge";

export interface EventRegisterBtcDepositAddress {
  message: string;
  depositAddress: string;
}

export interface EventRegisterReserveScript {
  message: string;
  reserveScript: string;
}

export interface EventRegisterJudgeAddress {
  message: string;
  judgeAddress: string;
  validatorAddress: string;
}

export interface EventWithdrawBtcRequest {
  message: string;
  twilightAddress: string;
  reserveAddress: string;
  withdrawAddress: string;
  withdrawAmount: number;
}

export interface EventSignRefund {
  message: string;
  reserveAddress: string;
  signerAddress: string;
  refundSignature: string;
  btcOracleAddress: string;
}

export interface EventSignSweep {
  message: string;
  reserveAddress: string;
  signerAddress: string;
  sweepSignature: string;
  btcOracleAddress: string;
}

function createBaseEventRegisterBtcDepositAddress(): EventRegisterBtcDepositAddress {
  return { message: "", depositAddress: "" };
}

export const EventRegisterBtcDepositAddress = {
  encode(message: EventRegisterBtcDepositAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.depositAddress !== "") {
      writer.uint32(18).string(message.depositAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterBtcDepositAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterBtcDepositAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.depositAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRegisterBtcDepositAddress {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "",
    };
  },

  toJSON(message: EventRegisterBtcDepositAddress): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRegisterBtcDepositAddress>, I>>(
    object: I,
  ): EventRegisterBtcDepositAddress {
    const message = createBaseEventRegisterBtcDepositAddress();
    message.message = object.message ?? "";
    message.depositAddress = object.depositAddress ?? "";
    return message;
  },
};

function createBaseEventRegisterReserveScript(): EventRegisterReserveScript {
  return { message: "", reserveScript: "" };
}

export const EventRegisterReserveScript = {
  encode(message: EventRegisterReserveScript, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveScript !== "") {
      writer.uint32(18).string(message.reserveScript);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterReserveScript {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterReserveScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.reserveScript = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRegisterReserveScript {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveScript: isSet(object.reserveScript) ? String(object.reserveScript) : "",
    };
  },

  toJSON(message: EventRegisterReserveScript): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveScript !== undefined && (obj.reserveScript = message.reserveScript);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRegisterReserveScript>, I>>(object: I): EventRegisterReserveScript {
    const message = createBaseEventRegisterReserveScript();
    message.message = object.message ?? "";
    message.reserveScript = object.reserveScript ?? "";
    return message;
  },
};

function createBaseEventRegisterJudgeAddress(): EventRegisterJudgeAddress {
  return { message: "", judgeAddress: "", validatorAddress: "" };
}

export const EventRegisterJudgeAddress = {
  encode(message: EventRegisterJudgeAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(26).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterJudgeAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterJudgeAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.judgeAddress = reader.string();
          break;
        case 3:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRegisterJudgeAddress {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
    };
  },

  toJSON(message: EventRegisterJudgeAddress): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRegisterJudgeAddress>, I>>(object: I): EventRegisterJudgeAddress {
    const message = createBaseEventRegisterJudgeAddress();
    message.message = object.message ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseEventWithdrawBtcRequest(): EventWithdrawBtcRequest {
  return { message: "", twilightAddress: "", reserveAddress: "", withdrawAddress: "", withdrawAmount: 0 };
}

export const EventWithdrawBtcRequest = {
  encode(message: EventWithdrawBtcRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.twilightAddress !== "") {
      writer.uint32(18).string(message.twilightAddress);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(26).string(message.reserveAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(34).string(message.withdrawAddress);
    }
    if (message.withdrawAmount !== 0) {
      writer.uint32(40).uint64(message.withdrawAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdrawBtcRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawBtcRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.twilightAddress = reader.string();
          break;
        case 3:
          message.reserveAddress = reader.string();
          break;
        case 4:
          message.withdrawAddress = reader.string();
          break;
        case 5:
          message.withdrawAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdrawBtcRequest {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      twilightAddress: isSet(object.twilightAddress) ? String(object.twilightAddress) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
      withdrawAmount: isSet(object.withdrawAmount) ? Number(object.withdrawAmount) : 0,
    };
  },

  toJSON(message: EventWithdrawBtcRequest): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.twilightAddress !== undefined && (obj.twilightAddress = message.twilightAddress);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    message.withdrawAmount !== undefined && (obj.withdrawAmount = Math.round(message.withdrawAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdrawBtcRequest>, I>>(object: I): EventWithdrawBtcRequest {
    const message = createBaseEventWithdrawBtcRequest();
    message.message = object.message ?? "";
    message.twilightAddress = object.twilightAddress ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.withdrawAmount = object.withdrawAmount ?? 0;
    return message;
  },
};

function createBaseEventSignRefund(): EventSignRefund {
  return { message: "", reserveAddress: "", signerAddress: "", refundSignature: "", btcOracleAddress: "" };
}

export const EventSignRefund = {
  encode(message: EventSignRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    if (message.signerAddress !== "") {
      writer.uint32(26).string(message.signerAddress);
    }
    if (message.refundSignature !== "") {
      writer.uint32(34).string(message.refundSignature);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(42).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSignRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSignRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
          break;
        case 3:
          message.signerAddress = reader.string();
          break;
        case 4:
          message.refundSignature = reader.string();
          break;
        case 5:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSignRefund {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      signerAddress: isSet(object.signerAddress) ? String(object.signerAddress) : "",
      refundSignature: isSet(object.refundSignature) ? String(object.refundSignature) : "",
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
    };
  },

  toJSON(message: EventSignRefund): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.signerAddress !== undefined && (obj.signerAddress = message.signerAddress);
    message.refundSignature !== undefined && (obj.refundSignature = message.refundSignature);
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSignRefund>, I>>(object: I): EventSignRefund {
    const message = createBaseEventSignRefund();
    message.message = object.message ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.signerAddress = object.signerAddress ?? "";
    message.refundSignature = object.refundSignature ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
};

function createBaseEventSignSweep(): EventSignSweep {
  return { message: "", reserveAddress: "", signerAddress: "", sweepSignature: "", btcOracleAddress: "" };
}

export const EventSignSweep = {
  encode(message: EventSignSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    if (message.signerAddress !== "") {
      writer.uint32(26).string(message.signerAddress);
    }
    if (message.sweepSignature !== "") {
      writer.uint32(34).string(message.sweepSignature);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(42).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSignSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSignSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
          break;
        case 3:
          message.signerAddress = reader.string();
          break;
        case 4:
          message.sweepSignature = reader.string();
          break;
        case 5:
          message.btcOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSignSweep {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      signerAddress: isSet(object.signerAddress) ? String(object.signerAddress) : "",
      sweepSignature: isSet(object.sweepSignature) ? String(object.sweepSignature) : "",
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
    };
  },

  toJSON(message: EventSignSweep): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.signerAddress !== undefined && (obj.signerAddress = message.signerAddress);
    message.sweepSignature !== undefined && (obj.sweepSignature = message.sweepSignature);
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSignSweep>, I>>(object: I): EventSignSweep {
    const message = createBaseEventSignSweep();
    message.message = object.message ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.signerAddress = object.signerAddress ?? "";
    message.sweepSignature = object.sweepSignature ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
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
