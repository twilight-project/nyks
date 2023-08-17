import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSignRefund } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxFinal } from "./types/nyks/bridge/tx";
import { MsgRegisterJudge } from "./types/nyks/bridge/tx";
import { MsgRegisterReserveAddress } from "./types/nyks/bridge/tx";
import { MsgRegisterBtcDepositAddress } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcDeposit } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcWithdraw } from "./types/nyks/bridge/tx";
import { MsgWithdrawTxSigned } from "./types/nyks/bridge/tx";
import { MsgSweepProposal } from "./types/nyks/bridge/tx";
import { MsgSignSweep } from "./types/nyks/bridge/tx";
import { MsgUnsignedTxRefund } from "./types/nyks/bridge/tx";
import { MsgUnsignedTxSweep } from "./types/nyks/bridge/tx";
import { MsgWithdrawBtcRequest } from "./types/nyks/bridge/tx";
import { MsgProposeRefundHash } from "./types/nyks/bridge/tx";
import { MsgProposeSweepAddress } from "./types/nyks/bridge/tx";
import { MsgBroadcastTxSweep } from "./types/nyks/bridge/tx";
import { MsgBroadcastTxRefund } from "./types/nyks/bridge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.bridge.MsgSignRefund", MsgSignRefund],
    ["/twilightproject.nyks.bridge.MsgWithdrawTxFinal", MsgWithdrawTxFinal],
    ["/twilightproject.nyks.bridge.MsgRegisterJudge", MsgRegisterJudge],
    ["/twilightproject.nyks.bridge.MsgRegisterReserveAddress", MsgRegisterReserveAddress],
    ["/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress", MsgRegisterBtcDepositAddress],
    ["/twilightproject.nyks.bridge.MsgConfirmBtcDeposit", MsgConfirmBtcDeposit],
    ["/twilightproject.nyks.bridge.MsgConfirmBtcWithdraw", MsgConfirmBtcWithdraw],
    ["/twilightproject.nyks.bridge.MsgWithdrawTxSigned", MsgWithdrawTxSigned],
    ["/twilightproject.nyks.bridge.MsgSweepProposal", MsgSweepProposal],
    ["/twilightproject.nyks.bridge.MsgSignSweep", MsgSignSweep],
    ["/twilightproject.nyks.bridge.MsgUnsignedTxRefund", MsgUnsignedTxRefund],
    ["/twilightproject.nyks.bridge.MsgUnsignedTxSweep", MsgUnsignedTxSweep],
    ["/twilightproject.nyks.bridge.MsgWithdrawBtcRequest", MsgWithdrawBtcRequest],
    ["/twilightproject.nyks.bridge.MsgProposeRefundHash", MsgProposeRefundHash],
    ["/twilightproject.nyks.bridge.MsgProposeSweepAddress", MsgProposeSweepAddress],
    ["/twilightproject.nyks.bridge.MsgBroadcastTxSweep", MsgBroadcastTxSweep],
    ["/twilightproject.nyks.bridge.MsgBroadcastTxRefund", MsgBroadcastTxRefund],
    
];

export { msgTypes }