/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.volt";

export interface MsgSignerApplication {
  fragmentId: number;
  applicationFee: number;
  feeBips: number;
  btcPubKey: string;
  signerAddress: string;
}

export interface MsgSignerApplicationResponse {
}

export interface MsgAcceptSigners {
  fragmentId: number;
  signerInfos: SignerInfo[];
  judgeAddress: string;
}

export interface MsgAcceptSignersResponse {
}

export interface SignerInfo {
  signerAddress: string;
  SignerFeeBips: number;
}

export interface Fragment {
  FragmentId: number;
  FragmentStatus: boolean;
  JudgeAddress: string;
  JudgeStatus: boolean;
  Signers: FragmentSigners[];
  SignerApplicationFee: number;
  Threshold: number;
  FeePool: number;
  FragmentFeeBips: number;
  arbitraryData: string;
  ReserveIds: number[];
}

export interface FragmentSigners {
  FragmentID: number;
  SignerAddress: string;
  SignerStatus: boolean;
  SignerBtcPublicKey: string;
  SignerApplicationFee: number;
  SignerFeeBips: number;
}

function createBaseMsgSignerApplication(): MsgSignerApplication {
  return { fragmentId: 0, applicationFee: 0, feeBips: 0, btcPubKey: "", signerAddress: "" };
}

export const MsgSignerApplication = {
  encode(message: MsgSignerApplication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fragmentId !== 0) {
      writer.uint32(8).uint64(message.fragmentId);
    }
    if (message.applicationFee !== 0) {
      writer.uint32(16).uint64(message.applicationFee);
    }
    if (message.feeBips !== 0) {
      writer.uint32(24).uint64(message.feeBips);
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
          message.fragmentId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.applicationFee = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.feeBips = longToNumber(reader.uint64() as Long);
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
      feeBips: isSet(object.feeBips) ? Number(object.feeBips) : 0,
      btcPubKey: isSet(object.btcPubKey) ? String(object.btcPubKey) : "",
      signerAddress: isSet(object.signerAddress) ? String(object.signerAddress) : "",
    };
  },

  toJSON(message: MsgSignerApplication): unknown {
    const obj: any = {};
    message.fragmentId !== undefined && (obj.fragmentId = Math.round(message.fragmentId));
    message.applicationFee !== undefined && (obj.applicationFee = Math.round(message.applicationFee));
    message.feeBips !== undefined && (obj.feeBips = Math.round(message.feeBips));
    message.btcPubKey !== undefined && (obj.btcPubKey = message.btcPubKey);
    message.signerAddress !== undefined && (obj.signerAddress = message.signerAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignerApplication>, I>>(object: I): MsgSignerApplication {
    const message = createBaseMsgSignerApplication();
    message.fragmentId = object.fragmentId ?? 0;
    message.applicationFee = object.applicationFee ?? 0;
    message.feeBips = object.feeBips ?? 0;
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
  return { fragmentId: 0, signerInfos: [], judgeAddress: "" };
}

export const MsgAcceptSigners = {
  encode(message: MsgAcceptSigners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fragmentId !== 0) {
      writer.uint32(8).uint64(message.fragmentId);
    }
    for (const v of message.signerInfos) {
      SignerInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.judgeAddress !== "") {
      writer.uint32(26).string(message.judgeAddress);
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
          message.fragmentId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.signerInfos.push(SignerInfo.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgAcceptSigners {
    return {
      fragmentId: isSet(object.fragmentId) ? Number(object.fragmentId) : 0,
      signerInfos: Array.isArray(object?.signerInfos) ? object.signerInfos.map((e: any) => SignerInfo.fromJSON(e)) : [],
      judgeAddress: isSet(object.judgeAddress) ? String(object.judgeAddress) : "",
    };
  },

  toJSON(message: MsgAcceptSigners): unknown {
    const obj: any = {};
    message.fragmentId !== undefined && (obj.fragmentId = Math.round(message.fragmentId));
    if (message.signerInfos) {
      obj.signerInfos = message.signerInfos.map((e) => e ? SignerInfo.toJSON(e) : undefined);
    } else {
      obj.signerInfos = [];
    }
    message.judgeAddress !== undefined && (obj.judgeAddress = message.judgeAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAcceptSigners>, I>>(object: I): MsgAcceptSigners {
    const message = createBaseMsgAcceptSigners();
    message.fragmentId = object.fragmentId ?? 0;
    message.signerInfos = object.signerInfos?.map((e) => SignerInfo.fromPartial(e)) || [];
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

function createBaseSignerInfo(): SignerInfo {
  return { signerAddress: "", SignerFeeBips: 0 };
}

export const SignerInfo = {
  encode(message: SignerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signerAddress !== "") {
      writer.uint32(10).string(message.signerAddress);
    }
    if (message.SignerFeeBips !== 0) {
      writer.uint32(16).uint32(message.SignerFeeBips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signerAddress = reader.string();
          break;
        case 2:
          message.SignerFeeBips = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignerInfo {
    return {
      signerAddress: isSet(object.signerAddress) ? String(object.signerAddress) : "",
      SignerFeeBips: isSet(object.SignerFeeBips) ? Number(object.SignerFeeBips) : 0,
    };
  },

  toJSON(message: SignerInfo): unknown {
    const obj: any = {};
    message.signerAddress !== undefined && (obj.signerAddress = message.signerAddress);
    message.SignerFeeBips !== undefined && (obj.SignerFeeBips = Math.round(message.SignerFeeBips));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignerInfo>, I>>(object: I): SignerInfo {
    const message = createBaseSignerInfo();
    message.signerAddress = object.signerAddress ?? "";
    message.SignerFeeBips = object.SignerFeeBips ?? 0;
    return message;
  },
};

function createBaseFragment(): Fragment {
  return {
    FragmentId: 0,
    FragmentStatus: false,
    JudgeAddress: "",
    JudgeStatus: false,
    Signers: [],
    SignerApplicationFee: 0,
    Threshold: 0,
    FeePool: 0,
    FragmentFeeBips: 0,
    arbitraryData: "",
    ReserveIds: [],
  };
}

export const Fragment = {
  encode(message: Fragment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.FragmentId !== 0) {
      writer.uint32(8).uint64(message.FragmentId);
    }
    if (message.FragmentStatus === true) {
      writer.uint32(16).bool(message.FragmentStatus);
    }
    if (message.JudgeAddress !== "") {
      writer.uint32(26).string(message.JudgeAddress);
    }
    if (message.JudgeStatus === true) {
      writer.uint32(32).bool(message.JudgeStatus);
    }
    for (const v of message.Signers) {
      FragmentSigners.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.SignerApplicationFee !== 0) {
      writer.uint32(48).uint64(message.SignerApplicationFee);
    }
    if (message.Threshold !== 0) {
      writer.uint32(56).uint32(message.Threshold);
    }
    if (message.FeePool !== 0) {
      writer.uint32(64).uint64(message.FeePool);
    }
    if (message.FragmentFeeBips !== 0) {
      writer.uint32(72).uint32(message.FragmentFeeBips);
    }
    if (message.arbitraryData !== "") {
      writer.uint32(82).string(message.arbitraryData);
    }
    writer.uint32(90).fork();
    for (const v of message.ReserveIds) {
      writer.uint64(v);
    }
    writer.ldelim();
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
          message.FragmentId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.FragmentStatus = reader.bool();
          break;
        case 3:
          message.JudgeAddress = reader.string();
          break;
        case 4:
          message.JudgeStatus = reader.bool();
          break;
        case 5:
          message.Signers.push(FragmentSigners.decode(reader, reader.uint32()));
          break;
        case 6:
          message.SignerApplicationFee = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.Threshold = reader.uint32();
          break;
        case 8:
          message.FeePool = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.FragmentFeeBips = reader.uint32();
          break;
        case 10:
          message.arbitraryData = reader.string();
          break;
        case 11:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ReserveIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.ReserveIds.push(longToNumber(reader.uint64() as Long));
          }
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
      FragmentId: isSet(object.FragmentId) ? Number(object.FragmentId) : 0,
      FragmentStatus: isSet(object.FragmentStatus) ? Boolean(object.FragmentStatus) : false,
      JudgeAddress: isSet(object.JudgeAddress) ? String(object.JudgeAddress) : "",
      JudgeStatus: isSet(object.JudgeStatus) ? Boolean(object.JudgeStatus) : false,
      Signers: Array.isArray(object?.Signers) ? object.Signers.map((e: any) => FragmentSigners.fromJSON(e)) : [],
      SignerApplicationFee: isSet(object.SignerApplicationFee) ? Number(object.SignerApplicationFee) : 0,
      Threshold: isSet(object.Threshold) ? Number(object.Threshold) : 0,
      FeePool: isSet(object.FeePool) ? Number(object.FeePool) : 0,
      FragmentFeeBips: isSet(object.FragmentFeeBips) ? Number(object.FragmentFeeBips) : 0,
      arbitraryData: isSet(object.arbitraryData) ? String(object.arbitraryData) : "",
      ReserveIds: Array.isArray(object?.ReserveIds) ? object.ReserveIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: Fragment): unknown {
    const obj: any = {};
    message.FragmentId !== undefined && (obj.FragmentId = Math.round(message.FragmentId));
    message.FragmentStatus !== undefined && (obj.FragmentStatus = message.FragmentStatus);
    message.JudgeAddress !== undefined && (obj.JudgeAddress = message.JudgeAddress);
    message.JudgeStatus !== undefined && (obj.JudgeStatus = message.JudgeStatus);
    if (message.Signers) {
      obj.Signers = message.Signers.map((e) => e ? FragmentSigners.toJSON(e) : undefined);
    } else {
      obj.Signers = [];
    }
    message.SignerApplicationFee !== undefined && (obj.SignerApplicationFee = Math.round(message.SignerApplicationFee));
    message.Threshold !== undefined && (obj.Threshold = Math.round(message.Threshold));
    message.FeePool !== undefined && (obj.FeePool = Math.round(message.FeePool));
    message.FragmentFeeBips !== undefined && (obj.FragmentFeeBips = Math.round(message.FragmentFeeBips));
    message.arbitraryData !== undefined && (obj.arbitraryData = message.arbitraryData);
    if (message.ReserveIds) {
      obj.ReserveIds = message.ReserveIds.map((e) => Math.round(e));
    } else {
      obj.ReserveIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fragment>, I>>(object: I): Fragment {
    const message = createBaseFragment();
    message.FragmentId = object.FragmentId ?? 0;
    message.FragmentStatus = object.FragmentStatus ?? false;
    message.JudgeAddress = object.JudgeAddress ?? "";
    message.JudgeStatus = object.JudgeStatus ?? false;
    message.Signers = object.Signers?.map((e) => FragmentSigners.fromPartial(e)) || [];
    message.SignerApplicationFee = object.SignerApplicationFee ?? 0;
    message.Threshold = object.Threshold ?? 0;
    message.FeePool = object.FeePool ?? 0;
    message.FragmentFeeBips = object.FragmentFeeBips ?? 0;
    message.arbitraryData = object.arbitraryData ?? "";
    message.ReserveIds = object.ReserveIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseFragmentSigners(): FragmentSigners {
  return {
    FragmentID: 0,
    SignerAddress: "",
    SignerStatus: false,
    SignerBtcPublicKey: "",
    SignerApplicationFee: 0,
    SignerFeeBips: 0,
  };
}

export const FragmentSigners = {
  encode(message: FragmentSigners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.FragmentID !== 0) {
      writer.uint32(8).uint64(message.FragmentID);
    }
    if (message.SignerAddress !== "") {
      writer.uint32(18).string(message.SignerAddress);
    }
    if (message.SignerStatus === true) {
      writer.uint32(24).bool(message.SignerStatus);
    }
    if (message.SignerBtcPublicKey !== "") {
      writer.uint32(34).string(message.SignerBtcPublicKey);
    }
    if (message.SignerApplicationFee !== 0) {
      writer.uint32(40).uint32(message.SignerApplicationFee);
    }
    if (message.SignerFeeBips !== 0) {
      writer.uint32(48).uint32(message.SignerFeeBips);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FragmentSigners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFragmentSigners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.FragmentID = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.SignerAddress = reader.string();
          break;
        case 3:
          message.SignerStatus = reader.bool();
          break;
        case 4:
          message.SignerBtcPublicKey = reader.string();
          break;
        case 5:
          message.SignerApplicationFee = reader.uint32();
          break;
        case 6:
          message.SignerFeeBips = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FragmentSigners {
    return {
      FragmentID: isSet(object.FragmentID) ? Number(object.FragmentID) : 0,
      SignerAddress: isSet(object.SignerAddress) ? String(object.SignerAddress) : "",
      SignerStatus: isSet(object.SignerStatus) ? Boolean(object.SignerStatus) : false,
      SignerBtcPublicKey: isSet(object.SignerBtcPublicKey) ? String(object.SignerBtcPublicKey) : "",
      SignerApplicationFee: isSet(object.SignerApplicationFee) ? Number(object.SignerApplicationFee) : 0,
      SignerFeeBips: isSet(object.SignerFeeBips) ? Number(object.SignerFeeBips) : 0,
    };
  },

  toJSON(message: FragmentSigners): unknown {
    const obj: any = {};
    message.FragmentID !== undefined && (obj.FragmentID = Math.round(message.FragmentID));
    message.SignerAddress !== undefined && (obj.SignerAddress = message.SignerAddress);
    message.SignerStatus !== undefined && (obj.SignerStatus = message.SignerStatus);
    message.SignerBtcPublicKey !== undefined && (obj.SignerBtcPublicKey = message.SignerBtcPublicKey);
    message.SignerApplicationFee !== undefined && (obj.SignerApplicationFee = Math.round(message.SignerApplicationFee));
    message.SignerFeeBips !== undefined && (obj.SignerFeeBips = Math.round(message.SignerFeeBips));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FragmentSigners>, I>>(object: I): FragmentSigners {
    const message = createBaseFragmentSigners();
    message.FragmentID = object.FragmentID ?? 0;
    message.SignerAddress = object.SignerAddress ?? "";
    message.SignerStatus = object.SignerStatus ?? false;
    message.SignerBtcPublicKey = object.SignerBtcPublicKey ?? "";
    message.SignerApplicationFee = object.SignerApplicationFee ?? 0;
    message.SignerFeeBips = object.SignerFeeBips ?? 0;
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
