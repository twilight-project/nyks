/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BtcReserve } from "../volt/reserve";

export const protobufPackage = "twilightproject.nyks.fragment";

export interface MsgSignerApplication {
  fragmentId: number;
  applicationFee: number;
  btcPubKey: string;
  signerAddress: string;
}

export interface MsgSignerApplicationResponse {
}

export interface MsgAcceptSigners {
  fragmentId: number;
  signerAddresses: string;
  judgeAddress: string;
}

export interface MsgAcceptSignersResponse {
}

export interface Fragment {
  FragmentID: string;
  FragmentStatus: boolean;
  JudgeAddress: string;
  JudgeStatus: string;
  Signers: fragmentSigners[];
  FeePool: number;
  Reserves: BtcReserve[];
}

export interface fragmentSigners {
  fragmentID: string;
  signerAddress: string;
  signerStatus: string;
  signerBtcPublicKey: string;
  signerApplicationFee: number;
}

function createBaseMsgSignerApplication(): MsgSignerApplication {
  return { fragmentId: 0, applicationFee: 0, btcPubKey: "", signerAddress: "" };
}

export const MsgSignerApplication = {
  encode(message: MsgSignerApplication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fragmentId !== 0) {
      writer.uint32(16).uint64(message.fragmentId);
    }
    if (message.applicationFee !== 0) {
      writer.uint32(24).uint64(message.applicationFee);
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
        case 2:
          message.fragmentId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.applicationFee = longToNumber(reader.uint64() as Long);
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
      fragmentId: isSet(object.fragmentId) ? Number(object.fragmentId) : 0,
      applicationFee: isSet(object.applicationFee) ? Number(object.applicationFee) : 0,
      btcPubKey: isSet(object.btcPubKey) ? String(object.btcPubKey) : "",
      signerAddress: isSet(object.signerAddress) ? String(object.signerAddress) : "",
    };
  },

  toJSON(message: MsgSignerApplication): unknown {
    const obj: any = {};
    message.fragmentId !== undefined && (obj.fragmentId = Math.round(message.fragmentId));
    message.applicationFee !== undefined && (obj.applicationFee = Math.round(message.applicationFee));
    message.btcPubKey !== undefined && (obj.btcPubKey = message.btcPubKey);
    message.signerAddress !== undefined && (obj.signerAddress = message.signerAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignerApplication>, I>>(object: I): MsgSignerApplication {
    const message = createBaseMsgSignerApplication();
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
  return { fragmentId: 0, signerAddresses: "", judgeAddress: "" };
}

export const MsgAcceptSigners = {
  encode(message: MsgAcceptSigners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      fragmentId: isSet(object.fragmentId) ? Number(object.fragmentId) : 0,
      signerAddresses: isSet(object.signerAddresses) ? String(object.signerAddresses) : "",
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgAcceptSigners): unknown {
    const obj: any = {};
    message.fragmentId !== undefined && (obj.fragmentId = Math.round(message.fragmentId));
    message.signerAddresses !== undefined && (obj.signerAddresses = message.signerAddresses);
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcceptSigners>, I>>(object: I): MsgAcceptSigners {
    const message = createBaseMsgAcceptSigners();
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

function createBaseFragment(): Fragment {
  return {
    FragmentID: "",
    FragmentStatus: false,
    JudgeAddress: "",
    JudgeStatus: "",
    Signers: [],
    FeePool: 0,
    Reserves: [],
  };
}

export const Fragment = {
  encode(message: Fragment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.FragmentID !== "") {
      writer.uint32(10).string(message.FragmentID);
    }
    if (message.FragmentStatus === true) {
      writer.uint32(16).bool(message.FragmentStatus);
    }
    if (message.JudgeAddress !== "") {
      writer.uint32(26).string(message.JudgeAddress);
    }
    if (message.JudgeStatus !== "") {
      writer.uint32(34).string(message.JudgeStatus);
    }
    for (const v of message.Signers) {
      fragmentSigners.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.FeePool !== 0) {
      writer.uint32(48).uint64(message.FeePool);
    }
    for (const v of message.Reserves) {
      BtcReserve.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fragment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFragment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FragmentID = reader.string();
          break;
        case 2:
          message.FragmentStatus = reader.bool();
          break;
        case 3:
          message.JudgeAddress = reader.string();
          break;
        case 4:
          message.JudgeStatus = reader.string();
          break;
        case 5:
          message.Signers.push(fragmentSigners.decode(reader, reader.uint32()));
          break;
        case 6:
          message.FeePool = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.Reserves.push(BtcReserve.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fragment {
    return {
      FragmentID: isSet(object.FragmentID) ? String(object.FragmentID) : "",
      FragmentStatus: isSet(object.FragmentStatus) ? Boolean(object.FragmentStatus) : false,
      JudgeAddress: isSet(object.JudgeAddress) ? String(object.JudgeAddress) : "",
      JudgeStatus: isSet(object.JudgeStatus) ? String(object.JudgeStatus) : "",
      Signers: Array.isArray(object?.Signers) ? object.Signers.map((e: any) => fragmentSigners.fromJSON(e)) : [],
      FeePool: isSet(object.FeePool) ? Number(object.FeePool) : 0,
      Reserves: Array.isArray(object?.Reserves) ? object.Reserves.map((e: any) => BtcReserve.fromJSON(e)) : [],
    };
  },

  toJSON(message: Fragment): unknown {
    const obj: any = {};
    message.FragmentID !== undefined && (obj.FragmentID = message.FragmentID);
    message.FragmentStatus !== undefined && (obj.FragmentStatus = message.FragmentStatus);
    message.JudgeAddress !== undefined && (obj.JudgeAddress = message.JudgeAddress);
    message.JudgeStatus !== undefined && (obj.JudgeStatus = message.JudgeStatus);
    if (message.Signers) {
      obj.Signers = message.Signers.map((e) => e ? fragmentSigners.toJSON(e) : undefined);
    } else {
      obj.Signers = [];
    }
    message.FeePool !== undefined && (obj.FeePool = Math.round(message.FeePool));
    if (message.Reserves) {
      obj.Reserves = message.Reserves.map((e) => e ? BtcReserve.toJSON(e) : undefined);
    } else {
      obj.Reserves = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fragment>, I>>(object: I): Fragment {
    const message = createBaseFragment();
    message.FragmentID = object.FragmentID ?? "";
    message.FragmentStatus = object.FragmentStatus ?? false;
    message.JudgeAddress = object.JudgeAddress ?? "";
    message.JudgeStatus = object.JudgeStatus ?? "";
    message.Signers = object.Signers?.map((e) => fragmentSigners.fromPartial(e)) || [];
    message.FeePool = object.FeePool ?? 0;
    message.Reserves = object.Reserves?.map((e) => BtcReserve.fromPartial(e)) || [];
    return message;
  },
};

function createBasefragmentSigners(): fragmentSigners {
  return { fragmentID: "", signerAddress: "", signerStatus: "", signerBtcPublicKey: "", signerApplicationFee: 0 };
}

export const fragmentSigners = {
  encode(message: fragmentSigners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fragmentID !== "") {
      writer.uint32(10).string(message.fragmentID);
    }
    if (message.signerAddress !== "") {
      writer.uint32(18).string(message.signerAddress);
    }
    if (message.signerStatus !== "") {
      writer.uint32(26).string(message.signerStatus);
    }
    if (message.signerBtcPublicKey !== "") {
      writer.uint32(34).string(message.signerBtcPublicKey);
    }
    if (message.signerApplicationFee !== 0) {
      writer.uint32(40).uint32(message.signerApplicationFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): fragmentSigners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasefragmentSigners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fragmentID = reader.string();
          break;
        case 2:
          message.signerAddress = reader.string();
          break;
        case 3:
          message.signerStatus = reader.string();
          break;
        case 4:
          message.signerBtcPublicKey = reader.string();
          break;
        case 5:
          message.signerApplicationFee = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): fragmentSigners {
    return {
      fragmentID: isSet(object.fragmentID) ? String(object.fragmentID) : "",
      signerAddress: isSet(object.signerAddress) ? String(object.signerAddress) : "",
      signerStatus: isSet(object.signerStatus) ? String(object.signerStatus) : "",
      signerBtcPublicKey: isSet(object.signerBtcPublicKey) ? String(object.signerBtcPublicKey) : "",
      signerApplicationFee: isSet(object.signerApplicationFee) ? Number(object.signerApplicationFee) : 0,
    };
  },

  toJSON(message: fragmentSigners): unknown {
    const obj: any = {};
    message.fragmentID !== undefined && (obj.fragmentID = message.fragmentID);
    message.signerAddress !== undefined && (obj.signerAddress = message.signerAddress);
    message.signerStatus !== undefined && (obj.signerStatus = message.signerStatus);
    message.signerBtcPublicKey !== undefined && (obj.signerBtcPublicKey = message.signerBtcPublicKey);
    message.signerApplicationFee !== undefined && (obj.signerApplicationFee = Math.round(message.signerApplicationFee));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<fragmentSigners>, I>>(object: I): fragmentSigners {
    const message = createBasefragmentSigners();
    message.fragmentID = object.fragmentID ?? "";
    message.signerAddress = object.signerAddress ?? "";
    message.signerStatus = object.signerStatus ?? "";
    message.signerBtcPublicKey = object.signerBtcPublicKey ?? "";
    message.signerApplicationFee = object.signerApplicationFee ?? 0;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
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
    const promise = this.rpc.request("twilightproject.nyks.fragment.Msg", "SignerApplication", data);
    return promise.then((data) => MsgSignerApplicationResponse.decode(new _m0.Reader(data)));
  }

  AcceptSigners(request: MsgAcceptSigners): Promise<MsgAcceptSignersResponse> {
    const data = MsgAcceptSigners.encode(request).finish();
    const promise = this.rpc.request("twilightproject.nyks.fragment.Msg", "AcceptSigners", data);
    return promise.then((data) => MsgAcceptSignersResponse.decode(new _m0.Reader(data)));
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
