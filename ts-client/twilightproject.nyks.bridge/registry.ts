import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterJudge } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxSigned } from "./types/nyks/bridge/tx";
import { MsgSignRefund } from "./types/nyks/bridge/tx";
import { MsgWithdrawBtcRequest } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcWithdraw } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcDeposit } from "./types/nyks/bridge/tx";
import { MsgSignSweep } from "./types/nyks/bridge/tx";
import { MsgBroadcastRefund } from "./types/nyks/bridge/tx";
import { MsgRegisterBtcDepositAddress } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxFinal } from "./types/nyks/bridge/tx";
import { MsgSweepProposal } from "./types/nyks/bridge/tx";
import { MsgRegisterReserveAddress } from "./types/nyks/bridge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.bridge.MsgRegisterJudge", MsgRegisterJudge],
    ["/twilightproject.nyks.bridge.MsgWithdrawTxSigned", MsgWithdrawTxSigned],
    ["/twilightproject.nyks.bridge.MsgSignRefund", MsgSignRefund],
    ["/twilightproject.nyks.bridge.MsgWithdrawBtcRequest", MsgWithdrawBtcRequest],
    ["/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw", MsgConfirmBtcWithdraw],
    ["/twilightproject.nyks.bridge.MsgConfirmBtcDeposit", MsgConfirmBtcDeposit],
    ["/twilightproject.nyks.bridge.MsgSignSweep", MsgSignSweep],
    ["/twilightproject.nyks.bridge.MsgBroadcastRefund", MsgBroadcastRefund],
    ["/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress", MsgRegisterBtcDepositAddress],
    ["/twilightproject.nyks.bridge.MsgWithdrawTxFinal", MsgWithdrawTxFinal],
    ["/twilightproject.nyks.bridge.MsgSweepProposal", MsgSweepProposal],
    ["/twilightproject.nyks.bridge.MsgRegisterReserveAddress", MsgRegisterReserveAddress],
    
];

export { msgTypes }