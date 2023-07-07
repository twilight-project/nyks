/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.zkos";

export interface MsgTransferTx {
  txId: string;
  txByteCode: string;
  zkOracleAddress: string;
}

export interface MsgTransferTxResponse {
}

function createBaseMsgTransferTx(): MsgTransferTx {
  return { txId: "", txByteCode: "", zkOracleAddress: "" };
}

export const MsgTransferTx = {
  encode(message: MsgTransferTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }
    if (message.txByteCode !== "") {
      writer.uint32(18).string(message.txByteCode);
    }
    if (message.zkOracleAddress !== "") {
      writer.uint32(26).string(message.zkOracleAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;
        case 2:
          message.txByteCode = reader.string();
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

  fromJSON(object: any): MsgTransferTx {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      txByteCode: isSet(object.txByteCode) ? String(object.txByteCode) : "",
      zkOracleAddress: isSet(object.zkOracleAddress) ? String(object.zkOracleAddress) : "",
    };
  },

  toJSON(message: MsgTransferTx): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    message.txByteCode !== undefined && (obj.txByteCode = message.txByteCode);
    message.zkOracleAddress !== undefined && (obj.zkOracleAddress = message.zkOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferTx>, I>>(object: I): MsgTransferTx {
    const message = createBaseMsgTransferTx();
    message.txId = object.txId ?? "";
    message.txByteCode = object.txByteCode ?? "";
    message.zkOracleAddress = object.zkOracleAddress ?? "";
    return message;
  },
};

function createBaseMsgTransferTxResponse(): MsgTransferTxResponse {
  return {};
}

export const MsgTransferTxResponse = {
  encode(_: MsgTransferTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTxResponse();
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

  fromJSON(_: any): MsgTransferTxResponse {
    return {};
  },

  toJSON(_: MsgTransferTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferTxResponse>, I>>(_: I): MsgTransferTxResponse {
    const message = createBaseMsgTransferTxResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  TransferTx(request: MsgTransferTx): Promise<MsgTransferTxResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TransferTx = this.TransferTx.bind(this);
  }
  TransferTx(request: MsgTransferTx): Promise<MsgTransferTxResponse> {
    const data = MsgTransferTx.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.zkos.Msg", "TransferTx", data);
    return promise.then((data) => MsgTransferTxResponse.decode(new _m0.Reader(data)));
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
