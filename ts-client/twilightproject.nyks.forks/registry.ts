import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSeenBtcChainTip } from "./types/forks/tx";
import { MsgSetDelegateAddresses } from "./types/forks/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.forks.MsgSeenBtcChainTip", MsgSeenBtcChainTip],
    ["/twilightproject.nyks.forks.MsgSetDelegateAddresses", MsgSetDelegateAddresses],
    
];

export { msgTypes }