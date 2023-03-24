/* eslint-disable */
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
