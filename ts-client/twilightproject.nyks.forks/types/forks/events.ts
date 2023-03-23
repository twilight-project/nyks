/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.forks";

export interface EventSetDelegateAddresses {
  message: string;
  address: string;
}

export interface EventProposal {
  message: string;
  proposalHash: string;
  attestationId: string;
}

function createBaseEventSetDelegateAddresses(): EventSetDelegateAddresses {
  return { message: "", address: "" };
}

export const EventSetDelegateAddresses = {
  encode(message: EventSetDelegateAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetDelegateAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetDelegateAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetDelegateAddresses {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: EventSetDelegateAddresses): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetDelegateAddresses>, I>>(object: I): EventSetDelegateAddresses {
    const message = createBaseEventSetDelegateAddresses();
    message.message = object.message ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseEventProposal(): EventProposal {
  return { message: "", proposalHash: "", attestationId: "" };
}

export const EventProposal = {
  encode(message: EventProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.proposalHash !== "") {
      writer.uint32(18).string(message.proposalHash);
    }
    if (message.attestationId !== "") {
      writer.uint32(26).string(message.attestationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.proposalHash = reader.string();
          break;
        case 3:
          message.attestationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventProposal {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      proposalHash: isSet(object.proposalHash) ? String(object.proposalHash) : "",
      attestationId: isSet(object.attestationId) ? String(object.attestationId) : "",
    };
  },

  toJSON(message: EventProposal): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.proposalHash !== undefined && (obj.proposalHash = message.proposalHash);
    message.attestationId !== undefined && (obj.attestationId = message.attestationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventProposal>, I>>(object: I): EventProposal {
    const message = createBaseEventProposal();
    message.message = object.message ?? "";
    message.proposalHash = object.proposalHash ?? "";
    message.attestationId = object.attestationId ?? "";
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
