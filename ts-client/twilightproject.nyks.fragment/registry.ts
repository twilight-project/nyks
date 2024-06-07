import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAcceptSigners } from "./types/nyks/fragment/tx";
import { MsgSignerApplication } from "./types/nyks/fragment/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.fragment.MsgAcceptSigners", MsgAcceptSigners],
    ["/twilightproject.nyks.fragment.MsgSignerApplication", MsgSignerApplication],
    
];

export { msgTypes }