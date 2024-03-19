/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.fragment";

/** Existing Messages */
export interface MsgRegisterReserveAddress {
  reserveScript: string;
  reserveAddress: string;
  judgeAddress: string;
}

export interface MsgRegisterJudge {
  creator: string;
  judgeAddress: string;
  validatorAddress: string;
}

export interface MsgSetDelegateAddresses {
  validatorAddress: string;
  btcOracleAddress: string;
  btcPublicKey: string;
}

/** Combined Oracles */
export interface RegisterOracleAddresses {
  creator: string;
  zkOracleAddress: string;
  validatorAddress: string;
  btcOracleAddress: string;
  btcPublicKey: string;
}

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

function createBaseMsgSetDelegateAddresses(): MsgSetDelegateAddresses {
  return { validatorAddress: "", btcOracleAddress: "", btcPublicKey: "" };
}

export const MsgSetDelegateAddresses = {
  encode(message: MsgSetDelegateAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(26).string(message.btcOracleAddress);
    }
    if (message.btcPublicKey !== "") {
      writer.uint32(34).string(message.btcPublicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetDelegateAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDelegateAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.btcOracleAddress = reader.string();
          break;
        case 4:
          message.btcPublicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetDelegateAddresses {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
      btcPublicKey: isSet(object.btcPublicKey) ? String(object.btcPublicKey) : "",
    };
  },

  toJSON(message: MsgSetDelegateAddresses): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    message.btcPublicKey !== undefined && (obj.btcPublicKey = message.btcPublicKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetDelegateAddresses>, I>>(object: I): MsgSetDelegateAddresses {
    const message = createBaseMsgSetDelegateAddresses();
    message.validatorAddress = object.validatorAddress ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    message.btcPublicKey = object.btcPublicKey ?? "";
    return message;
  },
};

function createBaseRegisterOracleAddresses(): RegisterOracleAddresses {
  return { creator: "", zkOracleAddress: "", validatorAddress: "", btcOracleAddress: "", btcPublicKey: "" };
}

export const RegisterOracleAddresses = {
  encode(message: RegisterOracleAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.zkOracleAddress !== "") {
      writer.uint32(18).string(message.zkOracleAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(26).string(message.validatorAddress);
    }
    if (message.btcOracleAddress !== "") {
      writer.uint32(34).string(message.btcOracleAddress);
    }
    if (message.btcPublicKey !== "") {
      writer.uint32(42).string(message.btcPublicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterOracleAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterOracleAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.zkOracleAddress = reader.string();
          break;
        case 3:
          message.validatorAddress = reader.string();
          break;
        case 4:
          message.btcOracleAddress = reader.string();
          break;
        case 5:
          message.btcPublicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterOracleAddresses {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      zkOracleAddress: isSet(object.zkOracleAddress) ? String(object.zkOracleAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      btcOracleAddress: isSet(object.btcOracleAddress) ? String(object.btcOracleAddress) : "",
      btcPublicKey: isSet(object.btcPublicKey) ? String(object.btcPublicKey) : "",
    };
  },

  toJSON(message: RegisterOracleAddresses): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.zkOracleAddress !== undefined && (obj.zkOracleAddress = message.zkOracleAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.btcOracleAddress !== undefined && (obj.btcOracleAddress = message.btcOracleAddress);
    message.btcPublicKey !== undefined && (obj.btcPublicKey = message.btcPublicKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterOracleAddresses>, I>>(object: I): RegisterOracleAddresses {
    const message = createBaseRegisterOracleAddresses();
    message.creator = object.creator ?? "";
    message.zkOracleAddress = object.zkOracleAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.btcOracleAddress = object.btcOracleAddress ?? "";
    message.btcPublicKey = object.btcPublicKey ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
