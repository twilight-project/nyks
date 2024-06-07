import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgMintBurnTradingBtc } from "./types/nyks/zkos/tx";
import { MsgTransferTx } from "./types/nyks/zkos/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.zkos.MsgMintBurnTradingBtc", MsgMintBurnTradingBtc],
    ["/twilightproject.nyks.zkos.MsgTransferTx", MsgTransferTx],
    
];

export { msgTypes }