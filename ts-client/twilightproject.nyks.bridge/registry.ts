import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgWithdrawTxSigned } from "./types/nyks/bridge/tx";
import { MsgRegisterJudge } from "./types/nyks/bridge/tx";
import { MsgRegisterReserveAddress } from "./types/nyks/bridge/tx";
import { MsgSweepProposal } from "./types/nyks/bridge/tx";
import { MsgConfirmBtcDeposit } from "./types/nyks/bridge/tx";
import { MsgRegisterBtcDepositAddress } from "./types/nyks/bridge/tx";
import { MsgWithdrawRequest } from "./types/nyks/bridge/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/twilightproject.nyks.bridge.MsgWithdrawTxSigned", MsgWithdrawTxSigned],
    ["/twilightproject.nyks.bridge.MsgRegisterJudge", MsgRegisterJudge],
    ["/twilightproject.nyks.bridge.MsgRegisterReserveAddress", MsgRegisterReserveAddress],
    ["/twilightproject.nyks.bridge.MsgSweepProposal", MsgSweepProposal],
    ["/twilightproject.nyks.bridge.MsgConfirmBtcDeposit", MsgConfirmBtcDeposit],
    ["/twilightproject.nyks.bridge.MsgRegisterBtcDepositAddress", MsgRegisterBtcDepositAddress],
    ["/twilightproject.nyks.bridge.MsgWithdrawRequest", MsgWithdrawRequest],
    
];

export { msgTypes }