/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "twilightproject.nyks.nyks";

export interface EventSetDelegateAddresses {
  message: string;
  address: string;
}

export interface EventProposal {
  message: string;
  proposal_hash: string;
  attestation_id: string;
}

const baseEventSetDelegateAddresses: object = { message: "", address: "" };

export const EventSetDelegateAddresses = {
  encode(
    message: EventSetDelegateAddresses,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EventSetDelegateAddresses {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEventSetDelegateAddresses,
    } as EventSetDelegateAddresses;
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
    const message = {
      ...baseEventSetDelegateAddresses,
    } as EventSetDelegateAddresses;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: EventSetDelegateAddresses): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EventSetDelegateAddresses>
  ): EventSetDelegateAddresses {
    const message = {
      ...baseEventSetDelegateAddresses,
    } as EventSetDelegateAddresses;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseEventProposal: object = {
  message: "",
  proposal_hash: "",
  attestation_id: "",
};

export const EventProposal = {
  encode(message: EventProposal, writer: Writer = Writer.create()): Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.proposal_hash !== "") {
      writer.uint32(18).string(message.proposal_hash);
    }
    if (message.attestation_id !== "") {
      writer.uint32(26).string(message.attestation_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventProposal } as EventProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.proposal_hash = reader.string();
          break;
        case 3:
          message.attestation_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventProposal {
    const message = { ...baseEventProposal } as EventProposal;
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.proposal_hash !== undefined && object.proposal_hash !== null) {
      message.proposal_hash = String(object.proposal_hash);
    } else {
      message.proposal_hash = "";
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestation_id = String(object.attestation_id);
    } else {
      message.attestation_id = "";
    }
    return message;
  },

  toJSON(message: EventProposal): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.proposal_hash !== undefined &&
      (obj.proposal_hash = message.proposal_hash);
    message.attestation_id !== undefined &&
      (obj.attestation_id = message.attestation_id);
    return obj;
  },

  fromPartial(object: DeepPartial<EventProposal>): EventProposal {
    const message = { ...baseEventProposal } as EventProposal;
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.proposal_hash !== undefined && object.proposal_hash !== null) {
      message.proposal_hash = object.proposal_hash;
    } else {
      message.proposal_hash = "";
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestation_id = object.attestation_id;
    } else {
      message.attestation_id = "";
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
