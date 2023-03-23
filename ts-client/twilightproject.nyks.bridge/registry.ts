import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterBtcDepositAddress } from "./types/bridge/tx";
import { MsgConfirmBtcDeposit } from "./types/bridge/tx";
import { MsgRegisterReserveAddress } from "./types/bridge/tx";
import { MsgRegisterJudge } from "./types/nyks/bridge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress", MsgRegisterBtcDepositAddress],
    ["/twilightproject.nyks.bridge.MsgConfirmBtcDeposit", MsgConfirmBtcDeposit],
    ["/twilightproject.nyks.bridge.MsgRegisterReserveAddress", MsgRegisterReserveAddress],
    ["/twilightproject.nyks.bridge.MsgRegisterJudge", MsgRegisterJudge],
    
];

export { msgTypes }