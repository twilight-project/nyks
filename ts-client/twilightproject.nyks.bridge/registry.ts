import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgConfirmBtcDeposit } from "./types/nyks/bridge/tx";
import { MsgRegisterReserveAddress } from "./types/nyks/bridge/tx";
import { MsgRegisterBtcDepositAddress } from "./types/nyks/bridge/tx";
import { MsgRegisterJudge } from "./types/nyks/bridge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.bridge.MsgConfirmBtcDeposit", MsgConfirmBtcDeposit],
    ["/twilightproject.nyks.bridge.MsgRegisterReserveAddress", MsgRegisterReserveAddress],
    ["/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress", MsgRegisterBtcDepositAddress],
    ["/twilightproject.nyks.bridge.MsgRegisterJudge", MsgRegisterJudge],
    
];

export { msgTypes }