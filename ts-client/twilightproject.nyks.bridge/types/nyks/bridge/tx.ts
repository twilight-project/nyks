/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.bridge";

export interface MsgConfirmBtcDeposit {
  reserveAddress: string;
  depositAmount: number;
  height: number;
  hash: string;
  twilightDepositAddress: string;
  oracleAddress: string;
}

export interface MsgConfirmBtcDepositResponse {
  twilightDepositAddress: string;
}

export interface MsgRegisterBtcDepositAddress {
  depositAddress: string;
  twilightDepositAddress: string;
  DepositAmount: number;
}

export interface MsgRegisterBtcDepositAddressResponse {
}

export interface MsgRegisterReserveAddress {
  reserveScript: string;
  reserveAddress: string;
  judgeAddress: string;
}

export interface MsgRegisterReserveAddressResponse {
  reserveId: string;
  reserveAddress: string;
}

export interface MsgRegisterJudge {
  creator: string;
  judgeAddress: string;
  validatorAddress: string;
}

export interface MsgRegisterJudgeResponse {
}

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgWithdrawBtcRequest {
  withdrawAddress: string;
  reserveAddress: string;
  withdrawAmount: number;
  twilightAddress: string;
}

export interface MsgWithdrawBtcRequestResponse {
}

export interface MsgWithdrawTxSigned {
  creator: string;
  validatorAddress: string;
  btcTxSigned: string;
}

export interface MsgWithdrawTxSignedResponse {
}

export interface MsgWithdrawTxFinal {
  creator: string;
  judgeAddress: string;
  btcTx: string;
}

export interface MsgWithdrawTxFinalResponse {
}

export interface MsgProposeRefundHash {
  refundHash: string;
  judgeAddress: string;
}

export interface MsgProposeRefundHashResponse {
}

export interface MsgConfirmBtcWithdraw {
  txHash: string;
  height: number;
  hash: string;
  judgeAddress: string;
}

export interface MsgConfirmBtcWithdrawResponse {
}

/**
 * Sweep messages in order
 * 1. MsgProposeSweepAddress
 */
export interface MsgProposeSweepAddress {
  btcAddress: string;
  btcScript: string;
  reserveId: number;
  roundId: number;
  judgeAddress: string;
}

export interface MsgProposeSweepAddressResponse {
}

/** 2. MsgUnsignedTxSweep */
export interface MsgUnsignedTxSweep {
  txId: string;
  btcUnsignedSweepTx: string;
  reserveId: number;
  roundId: number;
  judgeAddress: string;
}

export interface MsgUnsignedTxSweepResponse {
}

/** 3. MsgUnsignedTxRefund */
export interface MsgUnsignedTxRefund {
  reserveId: number;
  roundId: number;
  btcUnsignedRefundTx: string;
  judgeAddress: string;
}

export interface MsgUnsignedTxRefundResponse {
}

/** 4. MsgSignRefund */
export interface MsgSignRefund {
  reserveId: number;
  roundId: number;
  signerPublicKey: string;
  refundSignature: string;
  btcOracleAddress: string;
}

export interface MsgSignRefundResponse {
}

/** 5. MsgSignSweep */
export interface MsgSignSweep {
  reserveId: number;
  roundId: number;
  signerPublicKey: string;
  sweepSignature: string[];
  btcOracleAddress: string;
}

export interface MsgSignSweepResponse {
}

/** 6. MsgBroadcastRefund */
export interface MsgBroadcastTxRefund {
  reserveId: number;
  roundId: number;
  signedRefundTx: string;
  judgeAddress: string;
}

export interface MsgBroadcastTxRefundResponse {
}

/** 7. MsgBroadcastSweep */
export interface MsgBroadcastTxSweep {
  reserveId: number;
  roundId: number;
  signedSweepTx: string;
  judgeAddress: string;
}

export interface MsgBroadcastTxSweepResponse {
}

/** 8. MsgSweepProposal */
export interface MsgSweepProposal {
  reserveId: number;
  newReserveAddress: string;
  judgeAddress: string;
  BtcBlockNumber: number;
  btcRelayCapacityValue: number;
  btcTxHash: string;
  UnlockHeight: number;
  roundId: number;
  withdrawIdentifiers: string[];
}

export interface MsgSweepProposalResponse {
}

function createBaseMsgConfirmBtcDeposit(): MsgConfirmBtcDeposit {
  return { reserveAddress: "", depositAmount: 0, height: 0, hash: "", twilightDepositAddress: "", oracleAddress: "" };
}

export const MsgConfirmBtcDeposit = {
  encode(message: MsgConfirmBtcDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveAddress !== "") {
      writer.uint32(10).string(message.reserveAddress);
    }
    if (message.depositAmount !== 0) {
      writer.uint32(16).uint64(message.depositAmount);
    }
    if (message.height !== 0) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.hash !== "") {
      writer.uint32(34).string(message.hash);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(42).string(message.twilightDepositAddress);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(58).string(message.oracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBtcDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBtcDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveAddress = reader.string();
          break;
        case 2:
          message.depositAmount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.hash = reader.string();
          break;
        case 5:
          message.twilightDepositAddress = reader.string();
          break;
        case 7:
          message.oracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmBtcDeposit {
    return {
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      depositAmount: isSet(object.depositAmount) ? Number(object.depositAmount) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      hash: isSet(object.hash) ? String(object.hash) : "",
      twilightDepositAddress: isSet(object.twilightDepositAddress) ? String(object.twilightDepositAddress) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
    };
  },

  toJSON(message: MsgConfirmBtcDeposit): unknown {
    const obj: any = {};
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.depositAmount !== undefined && (obj.depositAmount = Math.round(message.depositAmount));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.hash !== undefined && (obj.hash = message.hash);
    message.twilightDepositAddress !== undefined && (obj.twilightDepositAddress = message.twilightDepositAddress);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBtcDeposit>, I>>(object: I): MsgConfirmBtcDeposit {
    const message = createBaseMsgConfirmBtcDeposit();
    message.reserveAddress = object.reserveAddress ?? "";
    message.depositAmount = object.depositAmount ?? 0;
    message.height = object.height ?? 0;
    message.hash = object.hash ?? "";
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    return message;
  },
};

function createBaseMsgConfirmBtcDepositResponse(): MsgConfirmBtcDepositResponse {
  return { twilightDepositAddress: "" };
}

export const MsgConfirmBtcDepositResponse = {
  encode(message: MsgConfirmBtcDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.twilightDepositAddress !== "") {
      writer.uint32(10).string(message.twilightDepositAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBtcDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBtcDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.twilightDepositAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmBtcDepositResponse {
    return {
      twilightDepositAddress: isSet(object.twilightDepositAddress) ? String(object.twilightDepositAddress) : "",
    };
  },

  toJSON(message: MsgConfirmBtcDepositResponse): unknown {
    const obj: any = {};
    message.twilightDepositAddress !== undefined && (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBtcDepositResponse>, I>>(object: I): MsgConfirmBtcDepositResponse {
    const message = createBaseMsgConfirmBtcDepositResponse();
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
    return message;
  },
};

function createBaseMsgRegisterBtcDepositAddress(): MsgRegisterBtcDepositAddress {
  return { depositAddress: "", twilightDepositAddress: "", DepositAmount: 0 };
}

export const MsgRegisterBtcDepositAddress = {
  encode(message: MsgRegisterBtcDepositAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(18).string(message.twilightDepositAddress);
    }
    if (message.DepositAmount !== 0) {
      writer.uint32(24).uint64(message.DepositAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterBtcDepositAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBtcDepositAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositAddress = reader.string();
          break;
        case 2:
          message.twilightDepositAddress = reader.string();
          break;
        case 3:
          message.DepositAmount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterBtcDepositAddress {
    return {
      depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "",
      twilightDepositAddress: isSet(object.twilightDepositAddress) ? String(object.twilightDepositAddress) : "",
      DepositAmount: isSet(object.DepositAmount) ? Number(object.DepositAmount) : 0,
    };
  },

  toJSON(message: MsgRegisterBtcDepositAddress): unknown {
    const obj: any = {};
    message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress);
    message.twilightDepositAddress !== undefined && (obj.twilightDepositAddress = message.twilightDepositAddress);
    message.DepositAmount !== undefined && (obj.DepositAmount = Math.round(message.DepositAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterBtcDepositAddress>, I>>(object: I): MsgRegisterBtcDepositAddress {
    const message = createBaseMsgRegisterBtcDepositAddress();
    message.depositAddress = object.depositAddress ?? "";
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
    message.DepositAmount = object.DepositAmount ?? 0;
    return message;
  },
};

function createBaseMsgRegisterBtcDepositAddressResponse(): MsgRegisterBtcDepositAddressResponse {
  return {};
}

export const MsgRegisterBtcDepositAddressResponse = {
  encode(_: MsgRegisterBtcDepositAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterBtcDepositAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterBtcDepositAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterBtcDepositAddressResponse {
    return {};
  },

  toJSON(_: MsgRegisterBtcDepositAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterBtcDepositAddressResponse>, I>>(
    _: I,
  ): MsgRegisterBtcDepositAddressResponse {
    const message = createBaseMsgRegisterBtcDepositAddressResponse();
    return message;
  },
};

function createBaseMsgRegisterReserveAddress(): MsgRegisterReserveAddress {
  return { reserveScript: "", reserveAddress: "", judgeAddress: "" };
}

export const MsgRegisterReserveAddress = {
  encode(message: MsgRegisterReserveAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveScript !== "") {
      writer.uint32(10).string(message.reserveScript);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(26).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterReserveAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterReserveAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveScript = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
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

  fromJSON(object: any): MsgRegisterReserveAddress {
    return {
      reserveScript: isSet(object.reserveScript) ? String(object.reserveScript) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgRegisterReserveAddress): unknown {
    const obj: any = {};
    message.reserveScript !== undefined && (obj.reserveScript = message.reserveScript);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterReserveAddress>, I>>(object: I): MsgRegisterReserveAddress {
    const message = createBaseMsgRegisterReserveAddress();
    message.reserveScript = object.reserveScript ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseMsgRegisterReserveAddressResponse(): MsgRegisterReserveAddressResponse {
  return { reserveId: "", reserveAddress: "" };
}

export const MsgRegisterReserveAddressResponse = {
  encode(message: MsgRegisterReserveAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== "") {
      writer.uint32(10).string(message.reserveId);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterReserveAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterReserveAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterReserveAddressResponse {
    return {
      reserveId: isSet(object.reserveId) ? String(object.reserveId) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
    };
  },

  toJSON(message: MsgRegisterReserveAddressResponse): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = message.reserveId);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterReserveAddressResponse>, I>>(
    object: I,
  ): MsgRegisterReserveAddressResponse {
    const message = createBaseMsgRegisterReserveAddressResponse();
    message.reserveId = object.reserveId ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    return message;
  },
};

function createBaseMsgRegisterJudge(): MsgRegisterJudge {
  return { creator: "", judgeAddress: "", validatorAddress: "" };
}

export const MsgRegisterJudge = {
  encode(message: MsgRegisterJudge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(26).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterJudge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterJudge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromJSON(object: any): MsgRegisterJudge {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
    };
  },

  toJSON(message: MsgRegisterJudge): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterJudge>, I>>(object: I): MsgRegisterJudge {
    const message = createBaseMsgRegisterJudge();
    message.creator = object.creator ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseMsgRegisterJudgeResponse(): MsgRegisterJudgeResponse {
  return {};
}

export const MsgRegisterJudgeResponse = {
  encode(_: MsgRegisterJudgeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterJudgeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterJudgeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterJudgeResponse {
    return {};
  },

  toJSON(_: MsgRegisterJudgeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterJudgeResponse>, I>>(_: I): MsgRegisterJudgeResponse {
    const message = createBaseMsgRegisterJudgeResponse();
    return message;
  },
};

function createBaseMsgWithdrawBtcRequest(): MsgWithdrawBtcRequest {
  return { withdrawAddress: "", reserveAddress: "", withdrawAmount: 0, twilightAddress: "" };
}

export const MsgWithdrawBtcRequest = {
  encode(message: MsgWithdrawBtcRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    if (message.withdrawAmount !== 0) {
      writer.uint32(24).uint64(message.withdrawAmount);
    }
    if (message.twilightAddress !== "") {
      writer.uint32(34).string(message.twilightAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBtcRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBtcRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
          break;
        case 3:
          message.withdrawAmount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.twilightAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawBtcRequest {
    return {
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      withdrawAmount: isSet(object.withdrawAmount) ? Number(object.withdrawAmount) : 0,
      twilightAddress: isSet(object.twilightAddress) ? String(object.twilightAddress) : "",
    };
  },

  toJSON(message: MsgWithdrawBtcRequest): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.withdrawAmount !== undefined && (obj.withdrawAmount = Math.round(message.withdrawAmount));
    message.twilightAddress !== undefined && (obj.twilightAddress = message.twilightAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawBtcRequest>, I>>(object: I): MsgWithdrawBtcRequest {
    const message = createBaseMsgWithdrawBtcRequest();
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.withdrawAmount = object.withdrawAmount ?? 0;
    message.twilightAddress = object.twilightAddress ?? "";
    return message;
  },
};

function createBaseMsgWithdrawBtcRequestResponse(): MsgWithdrawBtcRequestResponse {
  return {};
}

export const MsgWithdrawBtcRequestResponse = {
  encode(_: MsgWithdrawBtcRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawBtcRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawBtcRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawBtcRequestResponse {
    return {};
  },

  toJSON(_: MsgWithdrawBtcRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawBtcRequestResponse>, I>>(_: I): MsgWithdrawBtcRequestResponse {
    const message = createBaseMsgWithdrawBtcRequestResponse();
    return message;
  },
};

function createBaseMsgWithdrawTxSigned(): MsgWithdrawTxSigned {
  return { creator: "", validatorAddress: "", btcTxSigned: "" };
}

export const MsgWithdrawTxSigned = {
  encode(message: MsgWithdrawTxSigned, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.btcTxSigned !== "") {
      writer.uint32(26).string(message.btcTxSigned);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTxSigned {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTxSigned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.btcTxSigned = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawTxSigned {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      btcTxSigned: isSet(object.btcTxSigned) ? String(object.btcTxSigned) : "",
    };
  },

  toJSON(message: MsgWithdrawTxSigned): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.btcTxSigned !== undefined && (obj.btcTxSigned = message.btcTxSigned);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawTxSigned>, I>>(object: I): MsgWithdrawTxSigned {
    const message = createBaseMsgWithdrawTxSigned();
    message.creator = object.creator ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.btcTxSigned = object.btcTxSigned ?? "";
    return message;
  },
};

function createBaseMsgWithdrawTxSignedResponse(): MsgWithdrawTxSignedResponse {
  return {};
}

export const MsgWithdrawTxSignedResponse = {
  encode(_: MsgWithdrawTxSignedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTxSignedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTxSignedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawTxSignedResponse {
    return {};
  },

  toJSON(_: MsgWithdrawTxSignedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawTxSignedResponse>, I>>(_: I): MsgWithdrawTxSignedResponse {
    const message = createBaseMsgWithdrawTxSignedResponse();
    return message;
  },
};

function createBaseMsgWithdrawTxFinal(): MsgWithdrawTxFinal {
  return { creator: "", judgeAddress: "", btcTx: "" };
}

export const MsgWithdrawTxFinal = {
  encode(message: MsgWithdrawTxFinal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    if (message.btcTx !== "") {
      writer.uint32(26).string(message.btcTx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTxFinal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTxFinal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.judgeAddress = reader.string();
          break;
        case 3:
          message.btcTx = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawTxFinal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
      btcTx: isSet(object.btcTx) ? String(object.btcTx) : "",
    };
  },

  toJSON(message: MsgWithdrawTxFinal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    message.btcTx !== undefined && (obj.btcTx = message.btcTx);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawTxFinal>, I>>(object: I): MsgWithdrawTxFinal {
    const message = createBaseMsgWithdrawTxFinal();
    message.creator = object.creator ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.btcTx = object.btcTx ?? "";
    return message;
  },
};

function createBaseMsgWithdrawTxFinalResponse(): MsgWithdrawTxFinalResponse {
  return {};
}

export const MsgWithdrawTxFinalResponse = {
  encode(_: MsgWithdrawTxFinalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTxFinalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTxFinalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawTxFinalResponse {
    return {};
  },

  toJSON(_: MsgWithdrawTxFinalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawTxFinalResponse>, I>>(_: I): MsgWithdrawTxFinalResponse {
    const message = createBaseMsgWithdrawTxFinalResponse();
    return message;
  },
};

function createBaseMsgProposeRefundHash(): MsgProposeRefundHash {
  return { refundHash: "", judgeAddress: "" };
}

export const MsgProposeRefundHash = {
  encode(message: MsgProposeRefundHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refundHash !== "") {
      writer.uint32(10).string(message.refundHash);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeRefundHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeRefundHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refundHash = reader.string();
          break;
        case 2:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgProposeRefundHash {
    return {
      refundHash: isSet(object.refundHash) ? String(object.refundHash) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgProposeRefundHash): unknown {
    const obj: any = {};
    message.refundHash !== undefined && (obj.refundHash = message.refundHash);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProposeRefundHash>, I>>(object: I): MsgProposeRefundHash {
    const message = createBaseMsgProposeRefundHash();
    message.refundHash = object.refundHash ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseMsgProposeRefundHashResponse(): MsgProposeRefundHashResponse {
  return {};
}

export const MsgProposeRefundHashResponse = {
  encode(_: MsgProposeRefundHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeRefundHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeRefundHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgProposeRefundHashResponse {
    return {};
  },

  toJSON(_: MsgProposeRefundHashResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProposeRefundHashResponse>, I>>(_: I): MsgProposeRefundHashResponse {
    const message = createBaseMsgProposeRefundHashResponse();
    return message;
  },
};

function createBaseMsgConfirmBtcWithdraw(): MsgConfirmBtcWithdraw {
  return { txHash: "", height: 0, hash: "", judgeAddress: "" };
}

export const MsgConfirmBtcWithdraw = {
  encode(message: MsgConfirmBtcWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBtcWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBtcWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmBtcWithdraw {
    return {
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
      hash: isSet(object.hash) ? String(object.hash) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgConfirmBtcWithdraw): unknown {
    const obj: any = {};
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.hash !== undefined && (obj.hash = message.hash);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBtcWithdraw>, I>>(object: I): MsgConfirmBtcWithdraw {
    const message = createBaseMsgConfirmBtcWithdraw();
    message.txHash = object.txHash ?? "";
    message.height = object.height ?? 0;
    message.hash = object.hash ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseMsgConfirmBtcWithdrawResponse(): MsgConfirmBtcWithdrawResponse {
  return {};
}

export const MsgConfirmBtcWithdrawResponse = {
  encode(_: MsgConfirmBtcWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBtcWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBtcWithdrawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgConfirmBtcWithdrawResponse {
    return {};
  },

  toJSON(_: MsgConfirmBtcWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBtcWithdrawResponse>, I>>(_: I): MsgConfirmBtcWithdrawResponse {
    const message = createBaseMsgConfirmBtcWithdrawResponse();
    return message;
  },
};

function createBaseMsgProposeSweepAddress(): MsgProposeSweepAddress {
  return { btcAddress: "", btcScript: "", reserveId: 0, roundId: 0, judgeAddress: "" };
}

export const MsgProposeSweepAddress = {
  encode(message: MsgProposeSweepAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.btcAddress !== "") {
      writer.uint32(10).string(message.btcAddress);
    }
    if (message.btcScript !== "") {
      writer.uint32(18).string(message.btcScript);
    }
    if (message.reserveId !== 0) {
      writer.uint32(24).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(32).uint64(message.roundId);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(42).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeSweepAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeSweepAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.btcAddress = reader.string();
          break;
        case 2:
          message.btcScript = reader.string();
          break;
        case 3:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.roundId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgProposeSweepAddress {
    return {
      btcAddress: isSet(object.btcAddress) ? String(object.btcAddress) : "",
      btcScript: isSet(object.btcScript) ? String(object.btcScript) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgProposeSweepAddress): unknown {
    const obj: any = {};
    message.btcAddress !== undefined && (obj.btcAddress = message.btcAddress);
    message.btcScript !== undefined && (obj.btcScript = message.btcScript);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProposeSweepAddress>, I>>(object: I): MsgProposeSweepAddress {
    const message = createBaseMsgProposeSweepAddress();
    message.btcAddress = object.btcAddress ?? "";
    message.btcScript = object.btcScript ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseMsgProposeSweepAddressResponse(): MsgProposeSweepAddressResponse {
  return {};
}

export const MsgProposeSweepAddressResponse = {
  encode(_: MsgProposeSweepAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProposeSweepAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeSweepAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgProposeSweepAddressResponse {
    return {};
  },

  toJSON(_: MsgProposeSweepAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProposeSweepAddressResponse>, I>>(_: I): MsgProposeSweepAddressResponse {
    const message = createBaseMsgProposeSweepAddressResponse();
    return message;
  },
};

function createBaseMsgUnsignedTxSweep(): MsgUnsignedTxSweep {
  return { txId: "", btcUnsignedSweepTx: "", reserveId: 0, roundId: 0, judgeAddress: "" };
}

export const MsgUnsignedTxSweep = {
  encode(message: MsgUnsignedTxSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }
    if (message.btcUnsignedSweepTx !== "") {
      writer.uint32(18).string(message.btcUnsignedSweepTx);
    }
    if (message.reserveId !== 0) {
      writer.uint32(24).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(32).uint64(message.roundId);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(42).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsignedTxSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsignedTxSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;
        case 2:
          message.btcUnsignedSweepTx = reader.string();
          break;
        case 3:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.roundId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgUnsignedTxSweep {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      btcUnsignedSweepTx: isSet(object.btcUnsignedSweepTx) ? String(object.btcUnsignedSweepTx) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgUnsignedTxSweep): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    message.btcUnsignedSweepTx !== undefined && (obj.btcUnsignedSweepTx = message.btcUnsignedSweepTx);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnsignedTxSweep>, I>>(object: I): MsgUnsignedTxSweep {
    const message = createBaseMsgUnsignedTxSweep();
    message.txId = object.txId ?? "";
    message.btcUnsignedSweepTx = object.btcUnsignedSweepTx ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseMsgUnsignedTxSweepResponse(): MsgUnsignedTxSweepResponse {
  return {};
}

export const MsgUnsignedTxSweepResponse = {
  encode(_: MsgUnsignedTxSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsignedTxSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsignedTxSweepResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnsignedTxSweepResponse {
    return {};
  },

  toJSON(_: MsgUnsignedTxSweepResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnsignedTxSweepResponse>, I>>(_: I): MsgUnsignedTxSweepResponse {
    const message = createBaseMsgUnsignedTxSweepResponse();
    return message;
  },
};

function createBaseMsgUnsignedTxRefund(): MsgUnsignedTxRefund {
  return { reserveId: 0, roundId: 0, btcUnsignedRefundTx: "", judgeAddress: "" };
}

export const MsgUnsignedTxRefund = {
  encode(message: MsgUnsignedTxRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.btcUnsignedRefundTx !== "") {
      writer.uint32(26).string(message.btcUnsignedRefundTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsignedTxRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsignedTxRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.btcUnsignedRefundTx = reader.string();
          break;
        case 4:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnsignedTxRefund {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      btcUnsignedRefundTx: isSet(object.btcUnsignedRefundTx) ? String(object.btcUnsignedRefundTx) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgUnsignedTxRefund): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.btcUnsignedRefundTx !== undefined && (obj.btcUnsignedRefundTx = message.btcUnsignedRefundTx);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnsignedTxRefund>, I>>(object: I): MsgUnsignedTxRefund {
    const message = createBaseMsgUnsignedTxRefund();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.btcUnsignedRefundTx = object.btcUnsignedRefundTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseMsgUnsignedTxRefundResponse(): MsgUnsignedTxRefundResponse {
  return {};
}

export const MsgUnsignedTxRefundResponse = {
  encode(_: MsgUnsignedTxRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsignedTxRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnsignedTxRefundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnsignedTxRefundResponse {
    return {};
  },

  toJSON(_: MsgUnsignedTxRefundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnsignedTxRefundResponse>, I>>(_: I): MsgUnsignedTxRefundResponse {
    const message = createBaseMsgUnsignedTxRefundResponse();
    return message;
  },
};

function createBaseMsgSignRefund(): MsgSignRefund {
  return { reserveId: 0, roundId: 0, signerPublicKey: "", refundSignature: "", btcOracleAddress: "" };
}

export const MsgSignRefund = {
  encode(message: MsgSignRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.signerPublicKey !== "") {
      writer.uint32(26).string(message.signerPublicKey);
    }
    if (message.refundSignature !== "") {
      writer.uint32(34).string(message.refundSignature);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(42).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.signerPublicKey = reader.string();
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

  fromJSON(object: any): MsgSignRefund {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      signerPublicKey: isSet(object.signerPublicKey) ? String(object.signerPublicKey) : "",
      refundSignature: isSet(object.refundSignature) ? String(object.refundSignature) : "",
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
    };
  },

  toJSON(message: MsgSignRefund): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.signerPublicKey !== undefined && (obj.signerPublicKey = message.signerPublicKey);
    message.refundSignature !== undefined && (obj.refundSignature = message.refundSignature);
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignRefund>, I>>(object: I): MsgSignRefund {
    const message = createBaseMsgSignRefund();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.signerPublicKey = object.signerPublicKey ?? "";
    message.refundSignature = object.refundSignature ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
};

function createBaseMsgSignRefundResponse(): MsgSignRefundResponse {
  return {};
}

export const MsgSignRefundResponse = {
  encode(_: MsgSignRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignRefundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSignRefundResponse {
    return {};
  },

  toJSON(_: MsgSignRefundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignRefundResponse>, I>>(_: I): MsgSignRefundResponse {
    const message = createBaseMsgSignRefundResponse();
    return message;
  },
};

function createBaseMsgSignSweep(): MsgSignSweep {
  return { reserveId: 0, roundId: 0, signerPublicKey: "", sweepSignature: [], btcOracleAddress: "" };
}

export const MsgSignSweep = {
  encode(message: MsgSignSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.signerPublicKey !== "") {
      writer.uint32(26).string(message.signerPublicKey);
    }
    for (const v of message.sweepSignature) {
      writer.uint32(34).string(v!);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(42).string(message.btcOracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.signerPublicKey = reader.string();
          break;
        case 4:
          message.sweepSignature.push(reader.string());
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

  fromJSON(object: any): MsgSignSweep {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      signerPublicKey: isSet(object.signerPublicKey) ? String(object.signerPublicKey) : "",
      sweepSignature: Array.isArray(object?.sweepSignature) ? object.sweepSignature.map((e: any) => String(e)) : [],
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
    };
  },

  toJSON(message: MsgSignSweep): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<MsgSignSweep>, I>>(object: I): MsgSignSweep {
    const message = createBaseMsgSignSweep();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.signerPublicKey = object.signerPublicKey ?? "";
    message.sweepSignature = object.sweepSignature?.map((e) => e) || [];
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    return message;
  },
};

function createBaseMsgSignSweepResponse(): MsgSignSweepResponse {
  return {};
}

export const MsgSignSweepResponse = {
  encode(_: MsgSignSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignSweepResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSignSweepResponse {
    return {};
  },

  toJSON(_: MsgSignSweepResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignSweepResponse>, I>>(_: I): MsgSignSweepResponse {
    const message = createBaseMsgSignSweepResponse();
    return message;
  },
};

function createBaseMsgBroadcastTxRefund(): MsgBroadcastTxRefund {
  return { reserveId: 0, roundId: 0, signedRefundTx: "", judgeAddress: "" };
}

export const MsgBroadcastTxRefund = {
  encode(message: MsgBroadcastTxRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.signedRefundTx !== "") {
      writer.uint32(26).string(message.signedRefundTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastTxRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastTxRefund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.signedRefundTx = reader.string();
          break;
        case 4:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBroadcastTxRefund {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      signedRefundTx: isSet(object.signedRefundTx) ? String(object.signedRefundTx) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgBroadcastTxRefund): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.signedRefundTx !== undefined && (obj.signedRefundTx = message.signedRefundTx);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBroadcastTxRefund>, I>>(object: I): MsgBroadcastTxRefund {
    const message = createBaseMsgBroadcastTxRefund();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.signedRefundTx = object.signedRefundTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseMsgBroadcastTxRefundResponse(): MsgBroadcastTxRefundResponse {
  return {};
}

export const MsgBroadcastTxRefundResponse = {
  encode(_: MsgBroadcastTxRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastTxRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastTxRefundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBroadcastTxRefundResponse {
    return {};
  },

  toJSON(_: MsgBroadcastTxRefundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBroadcastTxRefundResponse>, I>>(_: I): MsgBroadcastTxRefundResponse {
    const message = createBaseMsgBroadcastTxRefundResponse();
    return message;
  },
};

function createBaseMsgBroadcastTxSweep(): MsgBroadcastTxSweep {
  return { reserveId: 0, roundId: 0, signedSweepTx: "", judgeAddress: "" };
}

export const MsgBroadcastTxSweep = {
  encode(message: MsgBroadcastTxSweep, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.roundId !== 0) {
      writer.uint32(16).uint64(message.roundId);
    }
    if (message.signedSweepTx !== "") {
      writer.uint32(26).string(message.signedSweepTx);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastTxSweep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastTxSweep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.signedSweepTx = reader.string();
          break;
        case 4:
          message.judgeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBroadcastTxSweep {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      signedSweepTx: isSet(object.signedSweepTx) ? String(object.signedSweepTx) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgBroadcastTxSweep): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    message.signedSweepTx !== undefined && (obj.signedSweepTx = message.signedSweepTx);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBroadcastTxSweep>, I>>(object: I): MsgBroadcastTxSweep {
    const message = createBaseMsgBroadcastTxSweep();
    message.reserveId = object.reserveId ?? 0;
    message.roundId = object.roundId ?? 0;
    message.signedSweepTx = object.signedSweepTx ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseMsgBroadcastTxSweepResponse(): MsgBroadcastTxSweepResponse {
  return {};
}

export const MsgBroadcastTxSweepResponse = {
  encode(_: MsgBroadcastTxSweepResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastTxSweepResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastTxSweepResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBroadcastTxSweepResponse {
    return {};
  },

  toJSON(_: MsgBroadcastTxSweepResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBroadcastTxSweepResponse>, I>>(_: I): MsgBroadcastTxSweepResponse {
    const message = createBaseMsgBroadcastTxSweepResponse();
    return message;
  },
};

function createBaseMsgSweepProposal(): MsgSweepProposal {
  return {
    reserveId: 0,
    newReserveAddress: "",
    judgeAddress: "",
    BtcBlockNumber: 0,
    btcRelayCapacityValue: 0,
    btcTxHash: "",
    UnlockHeight: 0,
    roundId: 0,
    withdrawIdentifiers: [],
  };
}

export const MsgSweepProposal = {
  encode(message: MsgSweepProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveId !== 0) {
      writer.uint32(8).uint64(message.reserveId);
    }
    if (message.newReserveAddress !== "") {
      writer.uint32(18).string(message.newReserveAddress);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(26).string(message.judgeAddress);
    }
    if (message.BtcBlockNumber !== 0) {
      writer.uint32(32).uint64(message.BtcBlockNumber);
    }
    if (message.btcRelayCapacityValue !== 0) {
      writer.uint32(40).uint64(message.btcRelayCapacityValue);
    }
    if (message.btcTxHash !== "") {
      writer.uint32(50).string(message.btcTxHash);
    }
    if (message.UnlockHeight !== 0) {
      writer.uint32(56).uint64(message.UnlockHeight);
    }
    if (message.roundId !== 0) {
      writer.uint32(64).uint64(message.roundId);
    }
    for (const v of message.withdrawIdentifiers) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSweepProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSweepProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.newReserveAddress = reader.string();
          break;
        case 3:
          message.judgeAddress = reader.string();
          break;
        case 4:
          message.BtcBlockNumber = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.btcRelayCapacityValue = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.btcTxHash = reader.string();
          break;
        case 7:
          message.UnlockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.roundId = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.withdrawIdentifiers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSweepProposal {
    return {
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      newReserveAddress: isSet(object.newReserveAddress) ? String(object.newReserveAddress) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
      BtcBlockNumber: isSet(object.BtcBlockNumber) ? Number(object.BtcBlockNumber) : 0,
      btcRelayCapacityValue: isSet(object.btcRelayCapacityValue) ? Number(object.btcRelayCapacityValue) : 0,
      btcTxHash: isSet(object.btcTxHash) ? String(object.btcTxHash) : "",
      UnlockHeight: isSet(object.UnlockHeight) ? Number(object.UnlockHeight) : 0,
      roundId: isSet(object.roundId) ? Number(object.roundId) : 0,
      withdrawIdentifiers: Array.isArray(object?.withdrawIdentifiers)
        ? object.withdrawIdentifiers.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgSweepProposal): unknown {
    const obj: any = {};
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.newReserveAddress !== undefined && (obj.newReserveAddress = message.newReserveAddress);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    message.BtcBlockNumber !== undefined && (obj.BtcBlockNumber = Math.round(message.BtcBlockNumber));
    message.btcRelayCapacityValue !== undefined
      && (obj.btcRelayCapacityValue = Math.round(message.btcRelayCapacityValue));
    message.btcTxHash !== undefined && (obj.btcTxHash = message.btcTxHash);
    message.UnlockHeight !== undefined && (obj.UnlockHeight = Math.round(message.UnlockHeight));
    message.roundId !== undefined && (obj.roundId = Math.round(message.roundId));
    if (message.withdrawIdentifiers) {
      obj.withdrawIdentifiers = message.withdrawIdentifiers.map((e) => e);
    } else {
      obj.withdrawIdentifiers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSweepProposal>, I>>(object: I): MsgSweepProposal {
    const message = createBaseMsgSweepProposal();
    message.reserveId = object.reserveId ?? 0;
    message.newReserveAddress = object.newReserveAddress ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.BtcBlockNumber = object.BtcBlockNumber ?? 0;
    message.btcRelayCapacityValue = object.btcRelayCapacityValue ?? 0;
    message.btcTxHash = object.btcTxHash ?? "";
    message.UnlockHeight = object.UnlockHeight ?? 0;
    message.roundId = object.roundId ?? 0;
    message.withdrawIdentifiers = object.withdrawIdentifiers?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgSweepProposalResponse(): MsgSweepProposalResponse {
  return {};
}

export const MsgSweepProposalResponse = {
  encode(_: MsgSweepProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSweepProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSweepProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSweepProposalResponse {
    return {};
  },

  toJSON(_: MsgSweepProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSweepProposalResponse>, I>>(_: I): MsgSweepProposalResponse {
    const message = createBaseMsgSweepProposalResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  ConfirmBtcDeposit(request: MsgConfirmBtcDeposit): Promise<MsgConfirmBtcDepositResponse>;
  RegisterBtcDepositAddress(request: MsgRegisterBtcDepositAddress): Promise<MsgRegisterBtcDepositAddressResponse>;
  RegisterReserveAddress(request: MsgRegisterReserveAddress): Promise<MsgRegisterReserveAddressResponse>;
  RegisterJudge(request: MsgRegisterJudge): Promise<MsgRegisterJudgeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  WithdrawBtcRequest(request: MsgWithdrawBtcRequest): Promise<MsgWithdrawBtcRequestResponse>;
  SweepProposal(request: MsgSweepProposal): Promise<MsgSweepProposalResponse>;
  WithdrawTxSigned(request: MsgWithdrawTxSigned): Promise<MsgWithdrawTxSignedResponse>;
  WithdrawTxFinal(request: MsgWithdrawTxFinal): Promise<MsgWithdrawTxFinalResponse>;
  SignRefund(request: MsgSignRefund): Promise<MsgSignRefundResponse>;
  BroadcastTxSweep(request: MsgBroadcastTxSweep): Promise<MsgBroadcastTxSweepResponse>;
  SignSweep(request: MsgSignSweep): Promise<MsgSignSweepResponse>;
  ProposeRefundHash(request: MsgProposeRefundHash): Promise<MsgProposeRefundHashResponse>;
  ConfirmBtcWithdraw(request: MsgConfirmBtcWithdraw): Promise<MsgConfirmBtcWithdrawResponse>;
  UnsignedTxSweep(request: MsgUnsignedTxSweep): Promise<MsgUnsignedTxSweepResponse>;
  UnsignedTxRefund(request: MsgUnsignedTxRefund): Promise<MsgUnsignedTxRefundResponse>;
  BroadcastTxRefund(request: MsgBroadcastTxRefund): Promise<MsgBroadcastTxRefundResponse>;
  ProposeSweepAddress(request: MsgProposeSweepAddress): Promise<MsgProposeSweepAddressResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ConfirmBtcDeposit = this.ConfirmBtcDeposit.bind(this);
    this.RegisterBtcDepositAddress = this.RegisterBtcDepositAddress.bind(this);
    this.RegisterReserveAddress = this.RegisterReserveAddress.bind(this);
    this.RegisterJudge = this.RegisterJudge.bind(this);
    this.WithdrawBtcRequest = this.WithdrawBtcRequest.bind(this);
    this.SweepProposal = this.SweepProposal.bind(this);
    this.WithdrawTxSigned = this.WithdrawTxSigned.bind(this);
    this.WithdrawTxFinal = this.WithdrawTxFinal.bind(this);
    this.SignRefund = this.SignRefund.bind(this);
    this.BroadcastTxSweep = this.BroadcastTxSweep.bind(this);
    this.SignSweep = this.SignSweep.bind(this);
    this.ProposeRefundHash = this.ProposeRefundHash.bind(this);
    this.ConfirmBtcWithdraw = this.ConfirmBtcWithdraw.bind(this);
    this.UnsignedTxSweep = this.UnsignedTxSweep.bind(this);
    this.UnsignedTxRefund = this.UnsignedTxRefund.bind(this);
    this.BroadcastTxRefund = this.BroadcastTxRefund.bind(this);
    this.ProposeSweepAddress = this.ProposeSweepAddress.bind(this);
  }
  ConfirmBtcDeposit(request: MsgConfirmBtcDeposit): Promise<MsgConfirmBtcDepositResponse> {
    const data = MsgConfirmBtcDeposit.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "ConfirmBtcDeposit", data);
    return promise.then((data) => MsgConfirmBtcDepositResponse.decode(new _m0.Reader(data)));
  }

  RegisterBtcDepositAddress(request: MsgRegisterBtcDepositAddress): Promise<MsgRegisterBtcDepositAddressResponse> {
    const data = MsgRegisterBtcDepositAddress.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "RegisterBtcDepositAddress", data);
    return promise.then((data) => MsgRegisterBtcDepositAddressResponse.decode(new _m0.Reader(data)));
  }

  RegisterReserveAddress(request: MsgRegisterReserveAddress): Promise<MsgRegisterReserveAddressResponse> {
    const data = MsgRegisterReserveAddress.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "RegisterReserveAddress", data);
    return promise.then((data) => MsgRegisterReserveAddressResponse.decode(new _m0.Reader(data)));
  }

  RegisterJudge(request: MsgRegisterJudge): Promise<MsgRegisterJudgeResponse> {
    const data = MsgRegisterJudge.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "RegisterJudge", data);
    return promise.then((data) => MsgRegisterJudgeResponse.decode(new _m0.Reader(data)));
  }

  WithdrawBtcRequest(request: MsgWithdrawBtcRequest): Promise<MsgWithdrawBtcRequestResponse> {
    const data = MsgWithdrawBtcRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "WithdrawBtcRequest", data);
    return promise.then((data) => MsgWithdrawBtcRequestResponse.decode(new _m0.Reader(data)));
  }

  SweepProposal(request: MsgSweepProposal): Promise<MsgSweepProposalResponse> {
    const data = MsgSweepProposal.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "SweepProposal", data);
    return promise.then((data) => MsgSweepProposalResponse.decode(new _m0.Reader(data)));
  }

  WithdrawTxSigned(request: MsgWithdrawTxSigned): Promise<MsgWithdrawTxSignedResponse> {
    const data = MsgWithdrawTxSigned.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "WithdrawTxSigned", data);
    return promise.then((data) => MsgWithdrawTxSignedResponse.decode(new _m0.Reader(data)));
  }

  WithdrawTxFinal(request: MsgWithdrawTxFinal): Promise<MsgWithdrawTxFinalResponse> {
    const data = MsgWithdrawTxFinal.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "WithdrawTxFinal", data);
    return promise.then((data) => MsgWithdrawTxFinalResponse.decode(new _m0.Reader(data)));
  }

  SignRefund(request: MsgSignRefund): Promise<MsgSignRefundResponse> {
    const data = MsgSignRefund.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "SignRefund", data);
    return promise.then((data) => MsgSignRefundResponse.decode(new _m0.Reader(data)));
  }

  BroadcastTxSweep(request: MsgBroadcastTxSweep): Promise<MsgBroadcastTxSweepResponse> {
    const data = MsgBroadcastTxSweep.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "BroadcastTxSweep", data);
    return promise.then((data) => MsgBroadcastTxSweepResponse.decode(new _m0.Reader(data)));
  }

  SignSweep(request: MsgSignSweep): Promise<MsgSignSweepResponse> {
    const data = MsgSignSweep.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "SignSweep", data);
    return promise.then((data) => MsgSignSweepResponse.decode(new _m0.Reader(data)));
  }

  ProposeRefundHash(request: MsgProposeRefundHash): Promise<MsgProposeRefundHashResponse> {
    const data = MsgProposeRefundHash.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "ProposeRefundHash", data);
    return promise.then((data) => MsgProposeRefundHashResponse.decode(new _m0.Reader(data)));
  }

  ConfirmBtcWithdraw(request: MsgConfirmBtcWithdraw): Promise<MsgConfirmBtcWithdrawResponse> {
    const data = MsgConfirmBtcWithdraw.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "ConfirmBtcWithdraw", data);
    return promise.then((data) => MsgConfirmBtcWithdrawResponse.decode(new _m0.Reader(data)));
  }

  UnsignedTxSweep(request: MsgUnsignedTxSweep): Promise<MsgUnsignedTxSweepResponse> {
    const data = MsgUnsignedTxSweep.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "UnsignedTxSweep", data);
    return promise.then((data) => MsgUnsignedTxSweepResponse.decode(new _m0.Reader(data)));
  }

  UnsignedTxRefund(request: MsgUnsignedTxRefund): Promise<MsgUnsignedTxRefundResponse> {
    const data = MsgUnsignedTxRefund.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "UnsignedTxRefund", data);
    return promise.then((data) => MsgUnsignedTxRefundResponse.decode(new _m0.Reader(data)));
  }

  BroadcastTxRefund(request: MsgBroadcastTxRefund): Promise<MsgBroadcastTxRefundResponse> {
    const data = MsgBroadcastTxRefund.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "BroadcastTxRefund", data);
    return promise.then((data) => MsgBroadcastTxRefundResponse.decode(new _m0.Reader(data)));
  }

  ProposeSweepAddress(request: MsgProposeSweepAddress): Promise<MsgProposeSweepAddressResponse> {
    const data = MsgProposeSweepAddress.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "ProposeSweepAddress", data);
    return promise.then((data) => MsgProposeSweepAddressResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
