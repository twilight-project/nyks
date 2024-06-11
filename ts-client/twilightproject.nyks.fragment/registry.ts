import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSignerApplication } from "./types/nyks/fragment/tx";
import { MsgAcceptSigners } from "./types/nyks/fragment/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.fragment.MsgSignerApplication", MsgSignerApplication],
    ["/twilightproject.nyks.fragment.MsgAcceptSigners", MsgAcceptSigners],
    
];

export { msgTypes }