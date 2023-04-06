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
export interface MsgWithdrawRequest {
  creator: string;
  twilightAddress: string;
  withdrawAddress: string;
  reserveId: number;
  withdrawAmount: number;
}

export interface MsgWithdrawRequestResponse {
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

function createBaseMsgWithdrawRequest(): MsgWithdrawRequest {
  return { creator: "", twilightAddress: "", withdrawAddress: "", reserveId: 0, withdrawAmount: 0 };
}

export const MsgWithdrawRequest = {
  encode(message: MsgWithdrawRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.twilightAddress !== "") {
      writer.uint32(18).string(message.twilightAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(26).string(message.withdrawAddress);
    }
    if (message.reserveId !== 0) {
      writer.uint32(32).uint64(message.reserveId);
    }
    if (message.withdrawAmount !== 0) {
      writer.uint32(40).uint64(message.withdrawAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.twilightAddress = reader.string();
          break;
        case 3:
          message.withdrawAddress = reader.string();
          break;
        case 4:
          message.reserveId = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgWithdrawRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      twilightAddress: isSet(object.twilightAddress) ? String(object.twilightAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
      reserveId: isSet(object.reserveId) ? Number(object.reserveId) : 0,
      withdrawAmount: isSet(object.withdrawAmount) ? Number(object.withdrawAmount) : 0,
    };
  },

  toJSON(message: MsgWithdrawRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.twilightAddress !== undefined && (obj.twilightAddress = message.twilightAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    message.reserveId !== undefined && (obj.reserveId = Math.round(message.reserveId));
    message.withdrawAmount !== undefined && (obj.withdrawAmount = Math.round(message.withdrawAmount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRequest>, I>>(object: I): MsgWithdrawRequest {
    const message = createBaseMsgWithdrawRequest();
    message.creator = object.creator ?? "";
    message.twilightAddress = object.twilightAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.reserveId = object.reserveId ?? 0;
    message.withdrawAmount = object.withdrawAmount ?? 0;
    return message;
  },
};

function createBaseMsgWithdrawRequestResponse(): MsgWithdrawRequestResponse {
  return {};
}

export const MsgWithdrawRequestResponse = {
  encode(_: MsgWithdrawRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRequestResponse();
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

  fromJSON(_: any): MsgWithdrawRequestResponse {
    return {};
  },

  toJSON(_: MsgWithdrawRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRequestResponse>, I>>(_: I): MsgWithdrawRequestResponse {
    const message = createBaseMsgWithdrawRequestResponse();
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

/** Msg defines the Msg service. */
export interface Msg {
  ConfirmBtcDeposit(request: MsgConfirmBtcDeposit): Promise<MsgConfirmBtcDepositResponse>;
  RegisterBtcDepositAddress(request: MsgRegisterBtcDepositAddress): Promise<MsgRegisterBtcDepositAddressResponse>;
  RegisterReserveAddress(request: MsgRegisterReserveAddress): Promise<MsgRegisterReserveAddressResponse>;
  RegisterJudge(request: MsgRegisterJudge): Promise<MsgRegisterJudgeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  WithdrawRequest(request: MsgWithdrawRequest): Promise<MsgWithdrawRequestResponse>;
  SweepProposal(request: MsgSweepProposal): Promise<MsgSweepProposalResponse>;
  WithdrawTxSigned(request: MsgWithdrawTxSigned): Promise<MsgWithdrawTxSignedResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ConfirmBtcDeposit = this.ConfirmBtcDeposit.bind(this);
    this.RegisterBtcDepositAddress = this.RegisterBtcDepositAddress.bind(this);
    this.RegisterReserveAddress = this.RegisterReserveAddress.bind(this);
    this.RegisterJudge = this.RegisterJudge.bind(this);
    this.WithdrawRequest = this.WithdrawRequest.bind(this);
    this.SweepProposal = this.SweepProposal.bind(this);
    this.WithdrawTxSigned = this.WithdrawTxSigned.bind(this);
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

  WithdrawRequest(request: MsgWithdrawRequest): Promise<MsgWithdrawRequestResponse> {
    const data = MsgWithdrawRequest.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.bridge.Msg", "WithdrawRequest", data);
    return promise.then((data) => MsgWithdrawRequestResponse.decode(new _m0.Reader(data)));
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
