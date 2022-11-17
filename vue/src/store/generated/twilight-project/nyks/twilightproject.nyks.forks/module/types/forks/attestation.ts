/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Any } from "../google/protobuf/any";

export const protobufPackage = "twilightproject.nyks.forks";

export enum ProposalType {
  PROPOSAL_TYPE_BTC_CHAINTIP = 0,
  UNRECOGNIZED = -1,
}

export function proposalTypeFromJSON(object: any): ProposalType {
  switch (object) {
    case 0:
    case "PROPOSAL_TYPE_BTC_CHAINTIP":
      return ProposalType.PROPOSAL_TYPE_BTC_CHAINTIP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalType.UNRECOGNIZED;
  }
}

export function proposalTypeToJSON(object: ProposalType): string {
  switch (object) {
    case ProposalType.PROPOSAL_TYPE_BTC_CHAINTIP:
      return "PROPOSAL_TYPE_BTC_CHAINTIP";
    default:
      return "UNKNOWN";
  }
}

/**
 * Attestation is an aggregate of `proposals` that eventually becomes `observed` by
 * all orchestrators
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the state machine
 *
 * The actual content of the proposals is passed in with the transaction making the proposal
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the proposal
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface Attestation {
  observed: boolean;
  votes: string[];
  height: number;
  proposal: Any | undefined;
}

export interface EventObservation {
  attestation_type: string;
  attestation_id: string;
}

const baseAttestation: object = { observed: false, votes: "", height: 0 };

export const Attestation = {
  encode(message: Attestation, writer: Writer = Writer.create()): Writer {
    if (message.observed === true) {
      writer.uint32(8).bool(message.observed);
    }
    for (const v of message.votes) {
      writer.uint32(18).string(v!);
    }
    if (message.height !== 0) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.proposal !== undefined) {
      Any.encode(message.proposal, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Attestation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAttestation } as Attestation;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.observed = reader.bool();
          break;
        case 2:
          message.votes.push(reader.string());
          break;
        case 3:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.proposal = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Attestation {
    const message = { ...baseAttestation } as Attestation;
    message.votes = [];
    if (object.observed !== undefined && object.observed !== null) {
      message.observed = Boolean(object.observed);
    } else {
      message.observed = false;
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(String(e));
      }
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Any.fromJSON(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },

  toJSON(message: Attestation): unknown {
    const obj: any = {};
    message.observed !== undefined && (obj.observed = message.observed);
    if (message.votes) {
      obj.votes = message.votes.map((e) => e);
    } else {
      obj.votes = [];
    }
    message.height !== undefined && (obj.height = message.height);
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Any.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Attestation>): Attestation {
    const message = { ...baseAttestation } as Attestation;
    message.votes = [];
    if (object.observed !== undefined && object.observed !== null) {
      message.observed = object.observed;
    } else {
      message.observed = false;
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(e);
      }
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Any.fromPartial(object.proposal);
    } else {
      message.proposal = undefined;
    }
    return message;
  },
};

const baseEventObservation: object = {
  attestation_type: "",
  attestation_id: "",
};

export const EventObservation = {
  encode(message: EventObservation, writer: Writer = Writer.create()): Writer {
    if (message.attestation_type !== "") {
      writer.uint32(10).string(message.attestation_type);
    }
    if (message.attestation_id !== "") {
      writer.uint32(18).string(message.attestation_id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventObservation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventObservation } as EventObservation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestation_type = reader.string();
          break;
        case 2:
          message.attestation_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventObservation {
    const message = { ...baseEventObservation } as EventObservation;
    if (
      object.attestation_type !== undefined &&
      object.attestation_type !== null
    ) {
      message.attestation_type = String(object.attestation_type);
    } else {
      message.attestation_type = "";
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestation_id = String(object.attestation_id);
    } else {
      message.attestation_id = "";
    }
    return message;
  },

  toJSON(message: EventObservation): unknown {
    const obj: any = {};
    message.attestation_type !== undefined &&
      (obj.attestation_type = message.attestation_type);
    message.attestation_id !== undefined &&
      (obj.attestation_id = message.attestation_id);
    return obj;
  },

  fromPartial(object: DeepPartial<EventObservation>): EventObservation {
    const message = { ...baseEventObservation } as EventObservation;
    if (
      object.attestation_type !== undefined &&
      object.attestation_type !== null
    ) {
      message.attestation_type = object.attestation_type;
    } else {
      message.attestation_type = "";
    }
    if (object.attestation_id !== undefined && object.attestation_id !== null) {
      message.attestation_id = object.attestation_id;
    } else {
      message.attestation_id = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
