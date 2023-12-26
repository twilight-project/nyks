import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgTransferTx } from "./types/nyks/zkos/tx";
import { MsgMintBurnTradingBtc } from "./types/nyks/zkos/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.zkos.MsgTransferTx", MsgTransferTx],
    ["/twilightproject.nyks.zkos.MsgMintBurnTradingBtc", MsgMintBurnTradingBtc],
    
];

export { msgTypes }