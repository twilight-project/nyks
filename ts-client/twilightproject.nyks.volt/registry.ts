import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSignerApplication } from "./types/nyks/volt/tx";
import { MsgAcceptSigners } from "./types/nyks/volt/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.volt.MsgSignerApplication", MsgSignerApplication],
    ["/twilightproject.nyks.volt.MsgAcceptSigners", MsgAcceptSigners],
    
];

export { msgTypes }