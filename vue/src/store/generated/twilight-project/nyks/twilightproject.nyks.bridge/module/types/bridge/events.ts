/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.bridge";

export interface EventRegisterBtcDepositAddress {
  message: string;
  depositAddress: string;
}

export interface EventRegisterReserveScript {
  message: string;
  reserveScript: string;
}

const baseEventRegisterBtcDepositAddress: object = {
  message: "",
  depositAddress: "",
};

export const EventRegisterBtcDepositAddress = {
  encode(
    message: EventRegisterBtcDepositAddress,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.depositAddress !== "") {
      writer.uint32(18).string(message.depositAddress);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventRegisterBtcDepositAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventRegisterBtcDepositAddress,
    } as EventRegisterBtcDepositAddress;
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
    const message = {
      ...baseEventRegisterBtcDepositAddress,
    } as EventRegisterBtcDepositAddress;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = String(object.depositAddress);
    } else {
      message.depositAddress = "";
    }
    return message;
  },

  toJSON(message: EventRegisterBtcDepositAddress): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.depositAddress !== undefined &&
      (obj.depositAddress = message.depositAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventRegisterBtcDepositAddress>
  ): EventRegisterBtcDepositAddress {
    const message = {
      ...baseEventRegisterBtcDepositAddress,
    } as EventRegisterBtcDepositAddress;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.depositAddress !== undefined && object.depositAddress !== null) {
      message.depositAddress = object.depositAddress;
    } else {
      message.depositAddress = "";
    }
    return message;
  },
};

const baseEventRegisterReserveScript: object = {
  message: "",
  reserveScript: "",
};

export const EventRegisterReserveScript = {
  encode(
    message: EventRegisterReserveScript,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.reserveScript !== "") {
      writer.uint32(18).string(message.reserveScript);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventRegisterReserveScript {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventRegisterReserveScript,
    } as EventRegisterReserveScript;
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
    const message = {
      ...baseEventRegisterReserveScript,
    } as EventRegisterReserveScript;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.reserveScript !== undefined && object.reserveScript !== null) {
      message.reserveScript = String(object.reserveScript);
    } else {
      message.reserveScript = "";
    }
    return message;
  },

  toJSON(message: EventRegisterReserveScript): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.reserveScript !== undefined &&
      (obj.reserveScript = message.reserveScript);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventRegisterReserveScript>
  ): EventRegisterReserveScript {
    const message = {
      ...baseEventRegisterReserveScript,
    } as EventRegisterReserveScript;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.reserveScript !== undefined && object.reserveScript !== null) {
      message.reserveScript = object.reserveScript;
    } else {
      message.reserveScript = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
