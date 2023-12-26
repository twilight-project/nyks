/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.zkos";

export interface EventTransferTx {
  message: string;
  txId: string;
  zkOracleAddress: string;
}

function createBaseEventTransferTx(): EventTransferTx {
  return { message: "", txId: "", zkOracleAddress: "" };
}

export const EventTransferTx = {
  encode(message: EventTransferTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.zkOracleAddress !== "") {
      writer.uint32(26).string(message.zkOracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferTx();
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
          message.zkOracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventTransferTx {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      txId: isSet(object.txId) ? String(object.txId) : "",
      zkOracleAddress: isSet(object.zkOracleAddress) ? String(object.zkOracleAddress) : "",
    };
  },

  toJSON(message: EventTransferTx): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.txId !== undefined && (obj.txId = message.txId);
    message.zkOracleAddress !== undefined && (obj.zkOracleAddress = message.zkOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTransferTx>, I>>(object: I): EventTransferTx {
    const message = createBaseEventTransferTx();
    message.message = object.message ?? "";
    message.txId = object.txId ?? "";
    message.zkOracleAddress = object.zkOracleAddress ?? "";
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
