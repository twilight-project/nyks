import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgBroadcastRefund } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcDeposit } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxFinal } from "./types/nyks/bridge/tx";
import { MsgSignRefund } from "./types/nyks/bridge/tx";
import { MsgWithdrawBtcRequest } from "./types/nyks/bridge/tx";
import { MsgSignSweep } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxSigned } from "./types/nyks/bridge/tx";
import { MsgRegisterJudge } from "./types/nyks/bridge/tx";
import { MsgProposeRefundHash } from "./types/nyks/bridge/tx";
import { MsgSweepProposal } from "./types/nyks/bridge/tx";
import { MsgConfirmWithdraw } from "./types/nyks/bridge/tx";
import { MsgRegisterReserveAddress } from "./types/nyks/bridge/tx";
import { MsgRegisterBtcDepositAddress } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcWithdraw } from "./types/nyks/bridge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.bridge.MsgBroadcastRefund", MsgBroadcastRefund],
    ["/twilightproject.nyks.bridge.MsgConfirmBtcDeposit", MsgConfirmBtcDeposit],
    ["/twilightproject.nyks.bridge.MsgWithdrawTxFinal", MsgWithdrawTxFinal],
    ["/twilightproject.nyks.bridge.MsgSignRefund", MsgSignRefund],
    ["/twilightproject.nyks.bridge.MsgWithdrawBtcRequest", MsgWithdrawBtcRequest],
    ["/twilightproject.nyks.bridge.MsgSignSweep", MsgSignSweep],
    ["/twilightproject.nyks.bridge.MsgWithdrawTxSigned", MsgWithdrawTxSigned],
    ["/twilightproject.nyks.bridge.MsgRegisterJudge", MsgRegisterJudge],
    ["/twilightproject.nyks.bridge.MsgProposeRefundHash", MsgProposeRefundHash],
    ["/twilightproject.nyks.bridge.MsgSweepProposal", MsgSweepProposal],
    ["/twilightproject.nyks.bridge.MsgConfirmWithdraw", MsgConfirmWithdraw],
    ["/twilightproject.nyks.bridge.MsgRegisterReserveAddress", MsgRegisterReserveAddress],
    ["/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress", MsgRegisterBtcDepositAddress],
    ["/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw", MsgConfirmBtcWithdraw],
    
];

export { msgTypes }