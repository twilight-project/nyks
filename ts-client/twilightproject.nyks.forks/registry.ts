import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSeenBtcChainTip } from "./types/nyks/forks/tx";
import { MsgSetDelegateAddresses } from "./types/nyks/forks/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.forks.MsgSeenBtcChainTip", MsgSeenBtcChainTip],
    ["/twilightproject.nyks.forks.MsgSetDelegateAddresses", MsgSetDelegateAddresses],
    
];

export { msgTypes }