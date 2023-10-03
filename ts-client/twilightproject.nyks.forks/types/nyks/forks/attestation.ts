/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "twilightproject.nyks.forks";

export enum ProposalType {
  PROPOSAL_TYPE_BTC_CHAINTIP = 0,
  PROPOSAL_TYPE_BTC_DEPOSIT = 1,
  PROPOSAL_TYPE_SWEEP_PROPOSAL = 2,
  PROPOSAL_TYPE_CONFIRM_WITHDRAW = 3,
  UNRECOGNIZED = -1,
}

export function proposalTypeFromJSON(object: any): ProposalType {
  switch (object) {
    case 0:
    case "PROPOSAL_TYPE_BTC_CHAINTIP":
      return ProposalType.PROPOSAL_TYPE_BTC_CHAINTIP;
    case 1:
    case "PROPOSAL_TYPE_BTC_DEPOSIT":
      return ProposalType.PROPOSAL_TYPE_BTC_DEPOSIT;
    case 2:
    case "PROPOSAL_TYPE_SWEEP_PROPOSAL":
      return ProposalType.PROPOSAL_TYPE_SWEEP_PROPOSAL;
    case 3:
    case "PROPOSAL_TYPE_CONFIRM_WITHDRAW":
      return ProposalType.PROPOSAL_TYPE_CONFIRM_WITHDRAW;
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
    case ProposalType.PROPOSAL_TYPE_BTC_DEPOSIT:
      return "PROPOSAL_TYPE_BTC_DEPOSIT";
    case ProposalType.PROPOSAL_TYPE_SWEEP_PROPOSAL:
      return "PROPOSAL_TYPE_SWEEP_PROPOSAL";
    case ProposalType.PROPOSAL_TYPE_CONFIRM_WITHDRAW:
      return "PROPOSAL_TYPE_CONFIRM_WITHDRAW";
    case ProposalType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
  attestationType: string;
  attestationId: string;
}

function createBaseAttestation(): Attestation {
  return { observed: false, votes: [], height: 0, proposal: undefined };
}

export const Attestation = {
  encode(message: Attestation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Attestation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation();
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
    return {
      observed: isSet(object.observed) ? Boolean(object.observed) : false,
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => String(e)) : [],
      height: isSet(object.height) ? Number(object.height) : 0,
      proposal: isSet(object.proposal) ? Any.fromJSON(object.proposal) : undefined,
    };
  },

  toJSON(message: Attestation): unknown {
    const obj: any = {};
    message.observed !== undefined && (obj.observed = message.observed);
    if (message.votes) {
      obj.votes = message.votes.map((e) => e);
    } else {
      obj.votes = [];
    }
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.proposal !== undefined && (obj.proposal = message.proposal ? Any.toJSON(message.proposal) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attestation>, I>>(object: I): Attestation {
    const message = createBaseAttestation();
    message.observed = object.observed ?? false;
    message.votes = object.votes?.map((e) => e) || [];
    message.height = object.height ?? 0;
    message.proposal = (object.proposal !== undefined && object.proposal !== null)
      ? Any.fromPartial(object.proposal)
      : undefined;
    return message;
  },
};

function createBaseEventObservation(): EventObservation {
  return { attestationType: "", attestationId: "" };
}

export const EventObservation = {
  encode(message: EventObservation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attestationType !== "") {
      writer.uint32(10).string(message.attestationType);
    }
    if (message.attestationId !== "") {
      writer.uint32(18).string(message.attestationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventObservation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventObservation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestationType = reader.string();
          break;
        case 2:
          message.attestationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventObservation {
    return {
      attestationType: isSet(object.attestationType) ? String(object.attestationType) : "",
      attestationId: isSet(object.attestationId) ? String(object.attestationId) : "",
    };
  },

  toJSON(message: EventObservation): unknown {
    const obj: any = {};
    message.attestationType !== undefined && (obj.attestationType = message.attestationType);
    message.attestationId !== undefined && (obj.attestationId = message.attestationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventObservation>, I>>(object: I): EventObservation {
    const message = createBaseEventObservation();
    message.attestationType = object.attestationType ?? "";
    message.attestationId = object.attestationId ?? "";
    return message;
  },
};

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
