import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSetDelegateAddresses } from "./types/nyks/forks/tx";
import { MsgSeenBtcChainTip } from "./types/nyks/forks/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.forks.MsgSetDelegateAddresses", MsgSetDelegateAddresses],
    ["/twilightproject.nyks.forks.MsgSeenBtcChainTip", MsgSeenBtcChainTip],
    
];

export { msgTypes }