import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgConfirmBtcWithdraw } from "./types/nyks/bridge/tx";
import { MsgSweepProposal } from "./types/nyks/bridge/tx";
import { MsgRegisterJudge } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxFinal } from "./types/nyks/bridge/tx";
import { MsgWithdrawRequest } from "./types/nyks/bridge/tx";
import { MsgRegisterBtcDepositAddress } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcDeposit } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxSigned } from "./types/nyks/bridge/tx";
import { MsgRegisterReserveAddress } from "./types/nyks/bridge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw", MsgConfirmBtcWithdraw],
    ["/twilightproject.nyks.bridge.MsgSweepProposal", MsgSweepProposal],
    ["/twilightproject.nyks.bridge.MsgRegisterJudge", MsgRegisterJudge],
    ["/twilightproject.nyks.bridge.MsgWithdrawTxFinal", MsgWithdrawTxFinal],
    ["/twilightproject.nyks.bridge.MsgWithdrawRequest", MsgWithdrawRequest],
    ["/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress", MsgRegisterBtcDepositAddress],
    ["/twilightproject.nyks.bridge.MsgConfirmBtcDeposit", MsgConfirmBtcDeposit],
    ["/twilightproject.nyks.bridge.MsgWithdrawTxSigned", MsgWithdrawTxSigned],
    ["/twilightproject.nyks.bridge.MsgRegisterReserveAddress", MsgRegisterReserveAddress],
    
];

export { msgTypes }