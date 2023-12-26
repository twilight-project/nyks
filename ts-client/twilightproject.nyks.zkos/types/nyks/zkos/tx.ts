/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.zkos";

export interface MsgTransferTx {
  txId: string;
  txByteCode: string;
  txFee: number;
  zkOracleAddress: string;
}

export interface MsgTransferTxResponse {
}

export interface MsgMintBurnTradingBtc {
  mintOrBurn: boolean;
  btcValue: number;
  qqAccount: string;
  encryptScalar: string;
  twilightAddress: string;
}

export interface MsgMintBurnTradingBtcResponse {
}

function createBaseMsgTransferTx(): MsgTransferTx {
  return { txId: "", txByteCode: "", txFee: 0, zkOracleAddress: "" };
}

export const MsgTransferTx = {
  encode(message: MsgTransferTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }
    if (message.txByteCode !== "") {
      writer.uint32(18).string(message.txByteCode);
    }
    if (message.txFee !== 0) {
      writer.uint32(24).uint64(message.txFee);
    }
    if (message.zkOracleAddress !== "") {
      writer.uint32(34).string(message.zkOracleAddress);
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
          message.txFee = longToNumber(reader.uint64() as Long);
          break;
        case 4:
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
      txFee: isSet(object.txFee) ? Number(object.txFee) : 0,
      zkOracleAddress: isSet(object.zkOracleAddress) ? String(object.zkOracleAddress) : "",
    };
  },

  toJSON(message: MsgTransferTx): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    message.txByteCode !== undefined && (obj.txByteCode = message.txByteCode);
    message.txFee !== undefined && (obj.txFee = Math.round(message.txFee));
    message.zkOracleAddress !== undefined && (obj.zkOracleAddress = message.zkOracleAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferTx>, I>>(object: I): MsgTransferTx {
    const message = createBaseMsgTransferTx();
    message.txId = object.txId ?? "";
    message.txByteCode = object.txByteCode ?? "";
    message.txFee = object.txFee ?? 0;
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

function createBaseMsgMintBurnTradingBtc(): MsgMintBurnTradingBtc {
  return { mintOrBurn: false, btcValue: 0, qqAccount: "", encryptScalar: "", twilightAddress: "" };
}

export const MsgMintBurnTradingBtc = {
  encode(message: MsgMintBurnTradingBtc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintOrBurn === true) {
      writer.uint32(8).bool(message.mintOrBurn);
    }
    if (message.btcValue !== 0) {
      writer.uint32(16).uint64(message.btcValue);
    }
    if (message.qqAccount !== "") {
      writer.uint32(26).string(message.qqAccount);
    }
    if (message.encryptScalar !== "") {
      writer.uint32(34).string(message.encryptScalar);
    }
    if (message.twilightAddress !== "") {
      writer.uint32(42).string(message.twilightAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBurnTradingBtc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBurnTradingBtc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintOrBurn = reader.bool();
          break;
        case 2:
          message.btcValue = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.qqAccount = reader.string();
          break;
        case 4:
          message.encryptScalar = reader.string();
          break;
        case 5:
          message.twilightAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintBurnTradingBtc {
    return {
      mintOrBurn: isSet(object.mintOrBurn) ? Boolean(object.mintOrBurn) : false,
      btcValue: isSet(object.btcValue) ? Number(object.btcValue) : 0,
      qqAccount: isSet(object.qqAccount) ? String(object.qqAccount) : "",
      encryptScalar: isSet(object.encryptScalar) ? String(object.encryptScalar) : "",
      twilightAddress: isSet(object.twilightAddress) ? String(object.twilightAddress) : "",
    };
  },

  toJSON(message: MsgMintBurnTradingBtc): unknown {
    const obj: any = {};
    message.mintOrBurn !== undefined && (obj.mintOrBurn = message.mintOrBurn);
    message.btcValue !== undefined && (obj.btcValue = Math.round(message.btcValue));
    message.qqAccount !== undefined && (obj.qqAccount = message.qqAccount);
    message.encryptScalar !== undefined && (obj.encryptScalar = message.encryptScalar);
    message.twilightAddress !== undefined && (obj.twilightAddress = message.twilightAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintBurnTradingBtc>, I>>(object: I): MsgMintBurnTradingBtc {
    const message = createBaseMsgMintBurnTradingBtc();
    message.mintOrBurn = object.mintOrBurn ?? false;
    message.btcValue = object.btcValue ?? 0;
    message.qqAccount = object.qqAccount ?? "";
    message.encryptScalar = object.encryptScalar ?? "";
    message.twilightAddress = object.twilightAddress ?? "";
    return message;
  },
};

function createBaseMsgMintBurnTradingBtcResponse(): MsgMintBurnTradingBtcResponse {
  return {};
}

export const MsgMintBurnTradingBtcResponse = {
  encode(_: MsgMintBurnTradingBtcResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintBurnTradingBtcResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintBurnTradingBtcResponse();
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

  fromJSON(_: any): MsgMintBurnTradingBtcResponse {
    return {};
  },

  toJSON(_: MsgMintBurnTradingBtcResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintBurnTradingBtcResponse>, I>>(_: I): MsgMintBurnTradingBtcResponse {
    const message = createBaseMsgMintBurnTradingBtcResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  TransferTx(request: MsgTransferTx): Promise<MsgTransferTxResponse>;
  MintBurnTradingBtc(request: MsgMintBurnTradingBtc): Promise<MsgMintBurnTradingBtcResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TransferTx = this.TransferTx.bind(this);
    this.MintBurnTradingBtc = this.MintBurnTradingBtc.bind(this);
  }
  TransferTx(request: MsgTransferTx): Promise<MsgTransferTxResponse> {
    const data = MsgTransferTx.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.zkos.Msg", "TransferTx", data);
    return promise.then((data) => MsgTransferTxResponse.decode(new _m0.Reader(data)));
  }

  MintBurnTradingBtc(request: MsgMintBurnTradingBtc): Promise<MsgMintBurnTradingBtcResponse> {
    const data = MsgMintBurnTradingBtc.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.zkos.Msg", "MintBurnTradingBtc", data);
    return promise.then((data) => MsgMintBurnTradingBtcResponse.decode(new _m0.Reader(data)));
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
