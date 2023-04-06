/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IndividualTwilightReserveAccount } from "../volt/reserve";

export const protobufPackage = "twilightproject.nyks.bridge";

export interface MsgConfirmBtcDeposit {
  depositAddress: string;
  depositAmount: number;
  height: number;
  hash: string;
  twilightDepositAddress: string;
  reserveAddress: string;
  oracleAddress: string;
}

export interface MsgConfirmBtcDepositResponse {
  twilightDepositAddress: string;
}

export interface MsgRegisterBtcDepositAddress {
  depositAddress: string;
  twilightDepositAddress: string;
}

export interface MsgRegisterBtcDepositAddressResponse {
}

export interface MsgRegisterReserveAddress {
  reserveScript: string;
  reserveAddress: string;
  judgeAddress: string;
}

export interface MsgRegisterReserveAddressResponse {
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

export interface MsgSweepProposal {
  creator: string;
  reserveId: number;
  reserveAddress: string;
  judgeAddress: string;
  btcRelayCapacityValue: number;
  totalValue: number;
  privatePoolValue: number;
  publicValue: number;
  feePool: number;
  individualTwilightReserveAccount: IndividualTwilightReserveAccount[];
  btcRefundTx: string;
  btcSweepTx: string;
}

export interface MsgSweepProposalResponse {
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

export interface MsgConfirmBtcWithdraw {
  creator: string;
  validatorAddress: string;
  txHash: string;
}

export interface MsgConfirmBtcWithdrawResponse {
}

export interface MsgSignRefund {
  creator: string;
  reserveAddress: string;
  signerAddress: string;
  refundSignature: string;
  sweepSignature: string;
}

export interface MsgSignRefundResponse {
}

export interface MsgBroadcastRefund {
  creator: string;
  judgeAddress: string;
  signedRefundTx: string;
  signedSweepTx: string;
}

export interface MsgBroadcastRefundResponse {
}

function createBaseMsgConfirmBtcDeposit(): MsgConfirmBtcDeposit {
  return {
    depositAddress: "",
    depositAmount: 0,
    height: 0,
    hash: "",
    twilightDepositAddress: "",
    reserveAddress: "",
    oracleAddress: "",
  };
}

export const MsgConfirmBtcDeposit = {
  encode(message: MsgConfirmBtcDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
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
    if (message.reserveAddress !== "") {
      writer.uint32(50).string(message.reserveAddress);
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
          message.depositAddress = reader.string();
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
        case 6:
          message.reserveAddress = reader.string();
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
      depositAddress: isSet(object.depositAddress) ? String(object.depositAddress) : "",
      depositAmount: isSet(object.depositAmount) ? Number(object.depositAmount) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      hash: isSet(object.hash) ? String(object.hash) : "",
      twilightDepositAddress: isSet(object.twilightDepositAddress) ? String(object.twilightDepositAddress) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : "",
    };
  },

  toJSON(message: MsgConfirmBtcDeposit): unknown {
    const obj: any = {};
    message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress);
    message.depositAmount !== undefined && (obj.depositAmount = Math.round(message.depositAmount));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.hash !== undefined && (obj.hash = message.hash);
    message.twilightDepositAddress !== undefined && (obj.twilightDepositAddress = message.twilightDepositAddress);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBtcDeposit>, I>>(object: I): MsgConfirmBtcDeposit {
    const message = createBaseMsgConfirmBtcDeposit();
    message.depositAddress = object.depositAddress ?? "";
    message.depositAmount = object.depositAmount ?? 0;
    message.height = object.height ?? 0;
    message.hash = object.hash ?? "";
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
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
  return { depositAddress: "", twilightDepositAddress: "" };
}

export const MsgRegisterBtcDepositAddress = {
  encode(message: MsgRegisterBtcDepositAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddress !== "") {
      writer.uint32(10).string(message.depositAddress);
    }
    if (message.twilightDepositAddress !== "") {
      writer.uint32(18).string(message.twilightDepositAddress);
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
    };
  },

  toJSON(message: MsgRegisterBtcDepositAddress): unknown {
    const obj: any = {};
    message.depositAddress !== undefined && (obj.depositAddress = message.depositAddress);
    message.twilightDepositAddress !== undefined && (obj.twilightDepositAddress = message.twilightDepositAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterBtcDepositAddress>, I>>(object: I): MsgRegisterBtcDepositAddress {
    const message = createBaseMsgRegisterBtcDepositAddress();
    message.depositAddress = object.depositAddress ?? "";
    message.twilightDepositAddress = object.twilightDepositAddress ?? "";
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
  return { reserveAddress: "" };
}

export const MsgRegisterReserveAddressResponse = {
  encode(message: MsgRegisterReserveAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reserveAddress !== "") {
      writer.uint32(10).string(message.reserveAddress);
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
    return { reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "" };
  },

  toJSON(message: MsgRegisterReserveAddressResponse): unknown {
    const obj: any = {};
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRegisterReserveAddressResponse>, I>>(
    object: I,
  ): MsgRegisterReserveAddressResponse {
    const message = createBaseMsgRegisterReserveAddressResponse();
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

function createBaseMsgSweepProposal(): MsgSweepProposal {
  return {
    creator: "",
    reserveId: 0,
    reserveAddress: "",
    judgeAddress: "",
    btcRelayCapacityValue: 0,
    totalValue: 0,
    privatePoolValue: 0,
    publicValue: 0,
    feePool: 0,
    individualTwilightReserveAccount: [],
    btcRefundTx: "",
    btcSweepTx: "",
  };
}

export const MsgSweepProposal = {
  encode(message: MsgSweepProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reserveId !== 0) {
      writer.uint32(16).uint64(message.reserveId);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(26).string(message.reserveAddress);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    if (message.btcRelayCapacityValue !== 0) {
      writer.uint32(40).uint64(message.btcRelayCapacityValue);
    }
    if (message.totalValue !== 0) {
      writer.uint32(48).uint64(message.totalValue);
    }
    if (message.privatePoolValue !== 0) {
      writer.uint32(56).uint64(message.privatePoolValue);
    }
    if (message.publicValue !== 0) {
      writer.uint32(64).uint64(message.publicValue);
    }
    if (message.feePool !== 0) {
      writer.uint32(72).uint64(message.feePool);
    }
    for (const v of message.individualTwilightReserveAccount) {
      IndividualTwilightReserveAccount.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.btcRefundTx !== "") {
      writer.uint32(90).string(message.btcRefundTx);
    }
    if (message.btcSweepTx !== "") {
      writer.uint32(98).string(message.btcSweepTx);
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
          message.creator = reader.string();
          break;
        case 2:
          message.reserveId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.reserveAddress = reader.string();
          break;
        case 4:
          message.judgeAddress = reader.string();
          break;
        case 5:
          message.btcRelayCapacityValue = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.totalValue = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.privatePoolValue = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.publicValue = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.feePool = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.individualTwilightReserveAccount.push(
            IndividualTwilightReserveAccount.decode(reader, reader.uint32()),
          );
          break;
        case 11:
          message.btcRefundTx = reader.string();
          break;
        case 12:
          message.btcSweepTx = reader.string();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
      btcRelayCapacityValue: isSet(object.btcRelayCapacityValue) ? Number(object.btcRelayCapacityValue) : 0,
      totalValue: isSet(object.totalValue) ? Number(object.totalValue) : 0,
      privatePoolValue: isSet(object.privatePoolValue) ? Number(object.privatePoolValue) : 0,
      publicValue: isSet(object.publicValue) ? Number(object.publicValue) : 0,
      feePool: isSet(object.feePool) ? Number(object.feePool) : 0,
      individualTwilightReserveAccount: Array.isArray(object?.individualTwilightReserveAccount)
        ? object.individualTwilightReserveAccount.map((e: any) => IndividualTwilightReserveAccount.fromJSON(e))
        : [],
      btcRefundTx: isSet(object.btcRefundTx) ? String(object.btcRefundTx) : "",
      btcSweepTx: isSet(object.btcSweepTx) ? String(object.btcSweepTx) : "",
    };
  },

  toJSON(message: MsgSweepProposal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    message.btcRelayCapacityValue !== undefined
      && (obj.btcRelayCapacityValue = Math.round(message.btcRelayCapacityValue));
    message.totalValue !== undefined && (obj.totalValue = Math.round(message.totalValue));
    message.privatePoolValue !== undefined && (obj.privatePoolValue = Math.round(message.privatePoolValue));
    message.publicValue !== undefined && (obj.publicValue = Math.round(message.publicValue));
    message.feePool !== undefined && (obj.feePool = Math.round(message.feePool));
    if (message.individualTwilightReserveAccount) {
      obj.individualTwilightReserveAccount = message.individualTwilightReserveAccount.map((e) =>
        e ? IndividualTwilightReserveAccount.toJSON(e) : undefined
      );
    } else {
      obj.individualTwilightReserveAccount = [];
    }
    message.btcRefundTx !== undefined && (obj.btcRefundTx = message.btcRefundTx);
    message.btcSweepTx !== undefined && (obj.btcSweepTx = message.btcSweepTx);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSweepProposal>, I>>(object: I): MsgSweepProposal {
    const message = createBaseMsgSweepProposal();
    message.creator = object.creator ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.reserveAddress = object.reserveAddress ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.btcRelayCapacityValue = object.btcRelayCapacityValue ?? 0;
    message.totalValue = object.totalValue ?? 0;
    message.privatePoolValue = object.privatePoolValue ?? 0;
    message.publicValue = object.publicValue ?? 0;
    message.feePool = object.feePool ?? 0;
    message.individualTwilightReserveAccount =
      object.individualTwilightReserveAccount?.map((e) => IndividualTwilightReserveAccount.fromPartial(e)) || [];
    message.btcRefundTx = object.btcRefundTx ?? "";
    message.btcSweepTx = object.btcSweepTx ?? "";
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

function createBaseMsgConfirmBtcWithdraw(): MsgConfirmBtcWithdraw {
  return { creator: "", validatorAddress: "", txHash: "" };
}

export const MsgConfirmBtcWithdraw = {
  encode(message: MsgConfirmBtcWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
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
          message.creator = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.txHash = reader.string();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
    };
  },

  toJSON(message: MsgConfirmBtcWithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBtcWithdraw>, I>>(object: I): MsgConfirmBtcWithdraw {
    const message = createBaseMsgConfirmBtcWithdraw();
    message.creator = object.creator ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.txHash = object.txHash ?? "";
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

function createBaseMsgSignRefund(): MsgSignRefund {
  return { creator: "", reserveAddress: "", signerAddress: "", refundSignature: "", sweepSignature: "" };
}

export const MsgSignRefund = {
  encode(message: MsgSignRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    if (message.sweepSignature !== "") {
      writer.uint32(42).string(message.sweepSignature);
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
          message.creator = reader.string();
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
          message.sweepSignature = reader.string();
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
      creator: isSet(object.creator) ? String(object.creator) : "",
      reserveAddress: isSet(object.reserveAddress) ? String(object.reserveAddress) : "",
      signerAddress: isSet(object.signerAddress) ? String(object.signerAddress) : "",
      refundSignature: isSet(object.refundSignature) ? String(object.refundSignature) : "",
      sweepSignature: isSet(object.sweepSignature) ? String(object.sweepSignature) : "",
    };
  },

  toJSON(message: MsgSignRefund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.signerAddress !== undefined && (obj.signerAddress = message.signerAddress);
    message.refundSignature !== undefined && (obj.refundSignature = message.refundSignature);
    message.sweepSignature !== undefined && (obj.sweepSignature = message.sweepSignature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignRefund>, I>>(object: I): MsgSignRefund {
    const message = createBaseMsgSignRefund();
    message.creator = object.creator ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.signerAddress = object.signerAddress ?? "";
    message.refundSignature = object.refundSignature ?? "";
    message.sweepSignature = object.sweepSignature ?? "";
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

function createBaseMsgBroadcastRefund(): MsgBroadcastRefund {
  return { creator: "", judgeAddress: "", signedRefundTx: "", signedSweepTx: "" };
}

export const MsgBroadcastRefund = {
  encode(message: MsgBroadcastRefund, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(18).string(message.judgeAddress);
    }
    if (message.signedRefundTx !== "") {
      writer.uint32(26).string(message.signedRefundTx);
    }
    if (message.signedSweepTx !== "") {
      writer.uint32(34).string(message.signedSweepTx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastRefund {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastRefund();
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
          message.signedRefundTx = reader.string();
          break;
        case 4:
          message.signedSweepTx = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBroadcastRefund {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
      signedRefundTx: isSet(object.signedRefundTx) ? String(object.signedRefundTx) : "",
      signedSweepTx: isSet(object.signedSweepTx) ? String(object.signedSweepTx) : "",
    };
  },

  toJSON(message: MsgBroadcastRefund): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    message.signedRefundTx !== undefined && (obj.signedRefundTx = message.signedRefundTx);
    message.signedSweepTx !== undefined && (obj.signedSweepTx = message.signedSweepTx);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBroadcastRefund>, I>>(object: I): MsgBroadcastRefund {
    const message = createBaseMsgBroadcastRefund();
    message.creator = object.creator ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    message.signedRefundTx = object.signedRefundTx ?? "";
    message.signedSweepTx = object.signedSweepTx ?? "";
    return message;
  },
};

function createBaseMsgBroadcastRefundResponse(): MsgBroadcastRefundResponse {
  return {};
}

export const MsgBroadcastRefundResponse = {
  encode(_: MsgBroadcastRefundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBroadcastRefundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBroadcastRefundResponse();
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

  fromJSON(_: any): MsgBroadcastRefundResponse {
    return {};
  },

  toJSON(_: MsgBroadcastRefundResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBroadcastRefundResponse>, I>>(_: I): MsgBroadcastRefundResponse {
    const message = createBaseMsgBroadcastRefundResponse();
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
  ConfirmBtcWithdraw(request: MsgConfirmBtcWithdraw): Promise<MsgConfirmBtcWithdrawResponse>;
  SignRefund(request: MsgSignRefund): Promise<MsgSignRefundResponse>;
  BroadcastRefund(request: MsgBroadcastRefund): Promise<MsgBroadcastRefundResponse>;
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
    this.ConfirmBtcWithdraw = this.ConfirmBtcWithdraw.bind(this);
    this.SignRefund = this.SignRefund.bind(this);
    this.BroadcastRefund = this.BroadcastRefund.bind(this);
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

  ConfirmBtcWithdraw(request: MsgConfirmBtcWithdraw): Promise<MsgConfirmBtcWithdrawResponse> {
    const data = MsgConfirmBtcWithdraw.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "ConfirmBtcWithdraw", data);
    return promise.then((data) => MsgConfirmBtcWithdrawResponse.decode(new _m0.Reader(data)));
  }

  SignRefund(request: MsgSignRefund): Promise<MsgSignRefundResponse> {
    const data = MsgSignRefund.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "SignRefund", data);
    return promise.then((data) => MsgSignRefundResponse.decode(new _m0.Reader(data)));
  }

  BroadcastRefund(request: MsgBroadcastRefund): Promise<MsgBroadcastRefundResponse> {
    const data = MsgBroadcastRefund.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "BroadcastRefund", data);
    return promise.then((data) => MsgBroadcastRefundResponse.decode(new _m0.Reader(data)));
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
