/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.bridge";

export interface EventRegisterBtcDepositAddress {
  message: string;
  depositAddress: string;
}

export interface EventRegisterReserveAddress {
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
  reserveId: number;
  roundId: number;
  signerPublicKey: string;
  refundSignature: string[];
  btcOracleAddress: string;
}

export interface EventSignSweep {
  message: string;
  reserveId: number;
  roundId: number;
  signerPublicKey: string;
  sweepSignature: string[];
  btcOracleAddress: string;
}

export interface EventBroadcastTxSweep {
  message: string;
  reserveId: number;
  roundId: number;
  signedSweepTx: string;
  judgeAddress: string;
}

export interface EventBroadcastTxRefund {
  message: string;
  reserveId: number;
  roundId: number;
  signedRefundTx: string;
  judgeAddress: string;
}

export interface EventProposeRefundHash {
  message: string;
  refundHash: string;
  judgeAddress: string;
}

export interface EventUnsignedTxSweep {
  message: string;
  txId: string;
  reserveId: number;
  roundId: number;
  unsignedSweepTx: string;
  judgeAddress: string;
}

export interface EventUnsignedTxRefund {
  message: string;
  reserveId: number;
  roundId: number;
  unsignedRefundTx: string;
  judgeAddress: string;
}

export interface EventProposeSweepAddress {
  message: string;
  btcAddress: string;
  btcScript: string;
  reserveId: number;
  judgeAddress: string;
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

function createBaseEventRegisterReserveAddress(): EventRegisterReserveAddress {
  return { message: "", reserveScript: "" };
}

export const EventRegisterReserveAddress = {
  encode(message: EventRegisterReserveAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveScript !== "") {
      writer.uint32(18).string(message.reserveScript);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRegisterReserveAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRegisterReserveAddress();
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

  fromJSON(object: any): EventRegisterReserveAddress {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveScript: isSet(object.reserveScript) ? String(object.reserveScript) : "",
    };
  },

  toJSON(message: EventRegisterReserveAddress): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveScript !== undefined && (obj.reserveScript = message.reserveScript);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRegisterReserveAddress>, I>>(object: I): EventRegisterReserveAddress {
    const message = createBaseEventRegisterReserveAddress();
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
  return { message: "", reserveId: 0, roundId: 0, signerPublicKey: "", refundSignature: [], btcOracleAddress: "" };
}

export const EventSignRefund = {
  encode(message: EventSignRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveId !== 0) {
      writer.uint32(16).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(24).uint64(message.roundId);
    }
    if (message.signerPublicKey !== "") {
      writer.uint32(34).string(message.signerPublicKey);
    }
    for (const v of message.refundSignature) {
      writer.uint32(42).string(v!);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(50).string(message.btcOracleAddress);
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
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.signerPublicKey = reader.string();
          break;
        case 5:
          message.refundSignature.push(reader.string());
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

  fromJSON(object: any): EventSignRefund {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      signerPublicKey: isSet(object.signerPublicKey) ? String(object.signerPublicKey) : "",
      refundSignature: Array.isArray(object?.refundSignature) ? object.refundSignature.map((e: any) => String(e)) : [],
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
    };
  },

  toJSON(message: EventSignRefund): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.signerPublicKey !== undefined && (obj.signerPublicKey = message.signerPublicKey);
    if (message.refundSignature) {
      obj.refundSignature = message.refundSignature.map((e) => e);
    } else {
      obj.refundSignature = [];
    }
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSignRefund>, I>>(object: I): EventSignRefund {
    const message = createBaseEventSignRefund();
    message.message = object.message ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.signerPublicKey = object.signerPublicKey ?? "";
    message.refundSignature = object.refundSignature?.map((e) => e) || [];
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
};

function createBaseEventSignSweep(): EventSignSweep {
  return { message: "", reserveId: 0, roundId: 0, signerPublicKey: "", sweepSignature: [], btcOracleAddress: "" };
}

export const EventSignSweep = {
  encode(message: EventSignSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveId !== 0) {
      writer.uint32(16).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(24).uint64(message.roundId);
    }
    if (message.signerPublicKey !== "") {
      writer.uint32(34).string(message.signerPublicKey);
    }
    for (const v of message.sweepSignature) {
      writer.uint32(42).string(v!);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(50).string(message.btcOracleAddress);
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
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.signerPublicKey = reader.string();
          break;
        case 5:
          message.sweepSignature.push(reader.string());
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

  fromJSON(object: any): EventSignSweep {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      signerPublicKey: isSet(object.signerPublicKey) ? String(object.signerPublicKey) : "",
      sweepSignature: Array.isArray(object?.sweepSignature) ? object.sweepSignature.map((e: any) => String(e)) : [],
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
    };
  },

  toJSON(message: EventSignSweep): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.signerPublicKey !== undefined && (obj.signerPublicKey = message.signerPublicKey);
    if (message.sweepSignature) {
      obj.sweepSignature = message.sweepSignature.map((e) => e);
    } else {
      obj.sweepSignature = [];
    }
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSignSweep>, I>>(object: I): EventSignSweep {
    const message = createBaseEventSignSweep();
    message.message = object.message ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.signerPublicKey = object.signerPublicKey ?? "";
    message.sweepSignature = object.sweepSignature?.map((e) => e) || [];
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
};

function createBaseEventBroadcastTxSweep(): EventBroadcastTxSweep {
  return { message: "", reserveId: 0, roundId: 0, signedSweepTx: "", judgeAddress: "" };
}

export const EventBroadcastTxSweep = {
  encode(message: EventBroadcastTxSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveId !== 0) {
      writer.uint32(16).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(24).uint64(message.roundId);
    }
    if (message.signedSweepTx !== "") {
      writer.uint32(34).string(message.signedSweepTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(42).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBroadcastTxSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBroadcastTxSweep();
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
        case 4:
          message.signedSweepTx = reader.string();
          break;
        case 5:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBroadcastTxSweep {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      signedSweepTx: isSet(object.signedSweepTx) ? String(object.signedSweepTx) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: EventBroadcastTxSweep): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.signedSweepTx !== undefined && (obj.signedSweepTx = message.signedSweepTx);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBroadcastTxSweep>, I>>(object: I): EventBroadcastTxSweep {
    const message = createBaseEventBroadcastTxSweep();
    message.message = object.message ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.signedSweepTx = object.signedSweepTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseEventBroadcastTxRefund(): EventBroadcastTxRefund {
  return { message: "", reserveId: 0, roundId: 0, signedRefundTx: "", judgeAddress: "" };
}

export const EventBroadcastTxRefund = {
  encode(message: EventBroadcastTxRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveId !== 0) {
      writer.uint32(16).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(24).uint64(message.roundId);
    }
    if (message.signedRefundTx !== "") {
      writer.uint32(34).string(message.signedRefundTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(42).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBroadcastTxRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBroadcastTxRefund();
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
        case 4:
          message.signedRefundTx = reader.string();
          break;
        case 5:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBroadcastTxRefund {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      signedRefundTx: isSet(object.signedRefundTx) ? String(object.signedRefundTx) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: EventBroadcastTxRefund): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.signedRefundTx !== undefined && (obj.signedRefundTx = message.signedRefundTx);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBroadcastTxRefund>, I>>(object: I): EventBroadcastTxRefund {
    const message = createBaseEventBroadcastTxRefund();
    message.message = object.message ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.signedRefundTx = object.signedRefundTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseEventProposeRefundHash(): EventProposeRefundHash {
  return { message: "", refundHash: "", judgeAddress: "" };
}

export const EventProposeRefundHash = {
  encode(message: EventProposeRefundHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.refundHash !== "") {
      writer.uint32(18).string(message.refundHash);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(26).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProposeRefundHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposeRefundHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.refundHash = reader.string();
          break;
        case 3:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventProposeRefundHash {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      refundHash: isSet(object.refundHash) ? String(object.refundHash) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: EventProposeRefundHash): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.refundHash !== undefined && (obj.refundHash = message.refundHash);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventProposeRefundHash>, I>>(object: I): EventProposeRefundHash {
    const message = createBaseEventProposeRefundHash();
    message.message = object.message ?? "";
    message.refundHash = object.refundHash ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseEventUnsignedTxSweep(): EventUnsignedTxSweep {
  return { message: "", txId: "", reserveId: 0, roundId: 0, unsignedSweepTx: "", judgeAddress: "" };
}

export const EventUnsignedTxSweep = {
  encode(message: EventUnsignedTxSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.reserveId !== 0) {
      writer.uint32(24).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(32).uint64(message.roundId);
    }
    if (message.unsignedSweepTx !== "") {
      writer.uint32(42).string(message.unsignedSweepTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(50).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnsignedTxSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnsignedTxSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.txId = reader.string();
          break;
        case 3:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.unsignedSweepTx = reader.string();
          break;
        case 6:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUnsignedTxSweep {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      txId: isSet(object.txId) ? String(object.txId) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      unsignedSweepTx: isSet(object.unsignedSweepTx) ? String(object.unsignedSweepTx) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: EventUnsignedTxSweep): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.txId !== undefined && (obj.txId = message.txId);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.unsignedSweepTx !== undefined && (obj.unsignedSweepTx = message.unsignedSweepTx);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUnsignedTxSweep>, I>>(object: I): EventUnsignedTxSweep {
    const message = createBaseEventUnsignedTxSweep();
    message.message = object.message ?? "";
    message.txId = object.txId ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.unsignedSweepTx = object.unsignedSweepTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseEventUnsignedTxRefund(): EventUnsignedTxRefund {
  return { message: "", reserveId: 0, roundId: 0, unsignedRefundTx: "", judgeAddress: "" };
}

export const EventUnsignedTxRefund = {
  encode(message: EventUnsignedTxRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveId !== 0) {
      writer.uint32(16).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(24).uint64(message.roundId);
    }
    if (message.unsignedRefundTx !== "") {
      writer.uint32(34).string(message.unsignedRefundTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(42).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUnsignedTxRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnsignedTxRefund();
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
        case 4:
          message.unsignedRefundTx = reader.string();
          break;
        case 5:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUnsignedTxRefund {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      unsignedRefundTx: isSet(object.unsignedRefundTx) ? String(object.unsignedRefundTx) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: EventUnsignedTxRefund): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.unsignedRefundTx !== undefined && (obj.unsignedRefundTx = message.unsignedRefundTx);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUnsignedTxRefund>, I>>(object: I): EventUnsignedTxRefund {
    const message = createBaseEventUnsignedTxRefund();
    message.message = object.message ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.unsignedRefundTx = object.unsignedRefundTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseEventProposeSweepAddress(): EventProposeSweepAddress {
  return { message: "", btcAddress: "", btcScript: "", reserveId: 0, judgeAddress: "" };
}

export const EventProposeSweepAddress = {
  encode(message: EventProposeSweepAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.btcAddress !== "") {
      writer.uint32(18).string(message.btcAddress);
    }
    if (message.btcScript !== "") {
      writer.uint32(26).string(message.btcScript);
    }
    if (message.reserveId !== 0) {
      writer.uint32(32).uint64(message.reserveId);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(42).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProposeSweepAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposeSweepAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.btcAddress = reader.string();
          break;
        case 3:
          message.btcScript = reader.string();
          break;
        case 4:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventProposeSweepAddress {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      btcAddress: isSet(object.btcAddress) ? String(object.btcAddress) : "",
      btcScript: isSet(object.btcScript) ? String(object.btcScript) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: EventProposeSweepAddress): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.btcAddress !== undefined && (obj.btcAddress = message.btcAddress);
    message.btcScript !== undefined && (obj.btcScript = message.btcScript);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventProposeSweepAddress>, I>>(object: I): EventProposeSweepAddress {
    const message = createBaseEventProposeSweepAddress();
    message.message = object.message ?? "";
    message.btcAddress = object.btcAddress ?? "";
    message.btcScript = object.btcScript ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.judgeAddress = object.judgeAddress ?? "";
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
