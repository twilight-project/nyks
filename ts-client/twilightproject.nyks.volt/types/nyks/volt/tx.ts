/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

export interface MsgSignerApplication {
  creator: string;
  fragmentId: number;
  applicationFee: number;
  btcPubKey: string;
  signerAddress: string;
}

export interface MsgSignerApplicationResponse {
}

export interface MsgAcceptSigners {
  creator: string;
  fragmentId: number;
  signerAddresses: string;
  judgeAddress: string;
}

export interface MsgAcceptSignersResponse {
}

function createBaseMsgSignerApplication(): MsgSignerApplication {
  return { creator: "", fragmentId: 0, applicationFee: 0, btcPubKey: "", signerAddress: "" };
}

export const MsgSignerApplication = {
  encode(message: MsgSignerApplication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fragmentId !== 0) {
      writer.uint32(16).int32(message.fragmentId);
    }
    if (message.applicationFee !== 0) {
      writer.uint32(24).int32(message.applicationFee);
    }
    if (message.btcPubKey !== "") {
      writer.uint32(34).string(message.btcPubKey);
    }
    if (message.signerAddress !== "") {
      writer.uint32(42).string(message.signerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignerApplication {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignerApplication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fragmentId = reader.int32();
          break;
        case 3:
          message.applicationFee = reader.int32();
          break;
        case 4:
          message.btcPubKey = reader.string();
          break;
        case 5:
          message.signerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignerApplication {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fragmentId: isSet(object.fragmentId) ? Number(object.fragmentId) : 0,
      applicationFee: isSet(object.applicationFee) ? Number(object.applicationFee) : 0,
      btcPubKey: isSet(object.btcPubKey) ? String(object.btcPubKey) : "",
      signerAddress: isSet(object.signerAddress) ? String(object.signerAddress) : "",
    };
  },

  toJSON(message: MsgSignerApplication): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fragmentId !== undefined && (obj.fragmentId = Math.round(message.fragmentId));
    message.applicationFee !== undefined && (obj.applicationFee = Math.round(message.applicationFee));
    message.btcPubKey !== undefined && (obj.btcPubKey = message.btcPubKey);
    message.signerAddress !== undefined && (obj.signerAddress = message.signerAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignerApplication>, I>>(object: I): MsgSignerApplication {
    const message = createBaseMsgSignerApplication();
    message.creator = object.creator ?? "";
    message.fragmentId = object.fragmentId ?? 0;
    message.applicationFee = object.applicationFee ?? 0;
    message.btcPubKey = object.btcPubKey ?? "";
    message.signerAddress = object.signerAddress ?? "";
    return message;
  },
};

function createBaseMsgSignerApplicationResponse(): MsgSignerApplicationResponse {
  return {};
}

export const MsgSignerApplicationResponse = {
  encode(_: MsgSignerApplicationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignerApplicationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignerApplicationResponse();
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

  fromJSON(_: any): MsgSignerApplicationResponse {
    return {};
  },

  toJSON(_: MsgSignerApplicationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignerApplicationResponse>, I>>(_: I): MsgSignerApplicationResponse {
    const message = createBaseMsgSignerApplicationResponse();
    return message;
  },
};

function createBaseMsgAcceptSigners(): MsgAcceptSigners {
  return { creator: "", fragmentId: 0, signerAddresses: "", judgeAddress: "" };
}

export const MsgAcceptSigners = {
  encode(message: MsgAcceptSigners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fragmentId !== 0) {
      writer.uint32(16).int32(message.fragmentId);
    }
    if (message.signerAddresses !== "") {
      writer.uint32(26).string(message.signerAddresses);
    }
    if (message.judgeAddress !== "") {
      writer.uint32(34).string(message.judgeAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptSigners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptSigners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fragmentId = reader.int32();
          break;
        case 3:
          message.signerAddresses = reader.string();
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

  fromJSON(object: any): MsgAcceptSigners {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fragmentId: isSet(object.fragmentId) ? Number(object.fragmentId) : 0,
      signerAddresses: isSet(object.signerAddresses) ? String(object.signerAddresses) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgAcceptSigners): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fragmentId !== undefined && (obj.fragmentId = Math.round(message.fragmentId));
    message.signerAddresses !== undefined && (obj.signerAddresses = message.signerAddresses);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcceptSigners>, I>>(object: I): MsgAcceptSigners {
    const message = createBaseMsgAcceptSigners();
    message.creator = object.creator ?? "";
    message.fragmentId = object.fragmentId ?? 0;
    message.signerAddresses = object.signerAddresses ?? "";
    message.judgeAddress = object.judgeAddress ?? "";
    return message;
  },
};

function createBaseMsgAcceptSignersResponse(): MsgAcceptSignersResponse {
  return {};
}

export const MsgAcceptSignersResponse = {
  encode(_: MsgAcceptSignersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcceptSignersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcceptSignersResponse();
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

  fromJSON(_: any): MsgAcceptSignersResponse {
    return {};
  },

  toJSON(_: MsgAcceptSignersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcceptSignersResponse>, I>>(_: I): MsgAcceptSignersResponse {
    const message = createBaseMsgAcceptSignersResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SignerApplication(request: MsgSignerApplication): Promise<MsgSignerApplicationResponse>;
  AcceptSigners(request: MsgAcceptSigners): Promise<MsgAcceptSignersResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SignerApplication = this.SignerApplication.bind(this);
    this.AcceptSigners = this.AcceptSigners.bind(this);
  }
  SignerApplication(request: MsgSignerApplication): Promise<MsgSignerApplicationResponse> {
    const data = MsgSignerApplication.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Msg", "SignerApplication", data);
    return promise.then((data) => MsgSignerApplicationResponse.decode(new _m0.Reader(data)));
  }

  AcceptSigners(request: MsgAcceptSigners): Promise<MsgAcceptSignersResponse> {
    const data = MsgAcceptSigners.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.volt.Msg", "AcceptSigners", data);
    return promise.then((data) => MsgAcceptSignersResponse.decode(new _m0.Reader(data)));
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
