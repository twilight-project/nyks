/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BridgeMsgBroadcastTxRefund {
  /** @format uint64 */
  reserveId?: string;

  /** @format uint64 */
  roundId?: string;
  signedRefundTx?: string;
  judgeAddress?: string;
}

export type BridgeMsgBroadcastTxRefundResponse = object;

export interface BridgeMsgBroadcastTxSweep {
  /** @format uint64 */
  reserveId?: string;

  /** @format uint64 */
  roundId?: string;
  signedSweepTx?: string;
  judgeAddress?: string;
}

export type BridgeMsgBroadcastTxSweepResponse = object;

export interface BridgeMsgConfirmBtcDepositResponse {
  twilightDepositAddress?: string;
}

export type BridgeMsgConfirmBtcWithdrawResponse = object;

export interface BridgeMsgProposeRefundHash {
  refundHash?: string;
  judgeAddress?: string;
}

export type BridgeMsgProposeRefundHashResponse = object;

export interface BridgeMsgProposeSweepAddress {
  btcAddress?: string;
  btcScript?: string;

  /** @format uint64 */
  reserveId?: string;

  /** @format uint64 */
  roundId?: string;
  judgeAddress?: string;
}

export type BridgeMsgProposeSweepAddressResponse = object;

export type BridgeMsgRegisterBtcDepositAddressResponse = object;

export interface BridgeMsgRegisterJudge {
  creator?: string;
  judgeAddress?: string;
  validatorAddress?: string;
}

export type BridgeMsgRegisterJudgeResponse = object;

export interface BridgeMsgRegisterReserveAddress {
  reserveScript?: string;
  reserveAddress?: string;
  judgeAddress?: string;
}

export interface BridgeMsgRegisterReserveAddressResponse {
  reserveId?: string;
  reserveAddress?: string;
}

export interface BridgeMsgSignRefund {
  /** @format uint64 */
  reserveId?: string;

  /** @format uint64 */
  roundId?: string;
  signerPublicKey?: string;
  refundSignature?: string[];
  btcOracleAddress?: string;
}

export type BridgeMsgSignRefundResponse = object;

export interface BridgeMsgSignSweep {
  /** @format uint64 */
  reserveId?: string;

  /** @format uint64 */
  roundId?: string;
  signerPublicKey?: string;
  sweepSignature?: string[];
  btcOracleAddress?: string;
}

export type BridgeMsgSignSweepResponse = object;

export type BridgeMsgSweepProposalResponse = object;

export interface BridgeMsgUnsignedTxRefund {
  /** @format uint64 */
  reserveId?: string;

  /** @format uint64 */
  roundId?: string;
  btcUnsignedRefundTx?: string;
  judgeAddress?: string;
}

export type BridgeMsgUnsignedTxRefundResponse = object;

export interface BridgeMsgUnsignedTxSweep {
  txId?: string;
  btcUnsignedSweepTx?: string;

  /** @format uint64 */
  reserveId?: string;

  /** @format uint64 */
  roundId?: string;
  judgeAddress?: string;
}

export type BridgeMsgUnsignedTxSweepResponse = object;

export type BridgeMsgWithdrawBtcRequestResponse = object;

export type BridgeMsgWithdrawTxFinalResponse = object;

export type BridgeMsgWithdrawTxSignedResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type BridgeParams = object;

export interface BridgeQueryBroadcastTxRefundAllResponse {
  BroadcastTxRefundMsg?: BridgeMsgBroadcastTxRefund[];
}

export interface BridgeQueryBroadcastTxRefundResponse {
  broadcastRefundMsg?: BridgeMsgBroadcastTxRefund;
}

export interface BridgeQueryBroadcastTxSweepAllResponse {
  BroadcastTxSweepMsg?: BridgeMsgBroadcastTxSweep[];
}

export interface BridgeQueryBroadcastTxSweepResponse {
  broadcastSweepMsg?: BridgeMsgBroadcastTxSweep;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface BridgeQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: BridgeParams;
}

export interface BridgeQueryProposeRefundHashAllResponse {
  proposeRefundHashMsg?: BridgeMsgProposeRefundHash[];
}

export interface BridgeQueryProposeSweepAddressResponse {
  proposeSweepAddressMsg?: BridgeMsgProposeSweepAddress;
}

export interface BridgeQueryProposeSweepAddressesAllResponse {
  proposeSweepAddressMsgs?: BridgeMsgProposeSweepAddress[];
}

export interface BridgeQueryRegisteredBtcDepositAddressByTwilightAddressResponse {
  depositAddress?: string;
  twilightDepositAddress?: string;
}

export interface BridgeQueryRegisteredBtcDepositAddressResponse {
  depositAddress?: string;
  twilightDepositAddress?: string;
}

export interface BridgeQueryRegisteredBtcDepositAddressesResponse {
  addresses?: VoltBtcDepositAddress[];
}

export interface BridgeQueryRegisteredJudgeAddressByValidatorAddressResponse {
  creator?: string;
  judgeAddress?: string;
  validatorAddress?: string;
}

export interface BridgeQueryRegisteredJudgesResponse {
  Judges?: BridgeMsgRegisterJudge[];
}

export interface BridgeQueryRegisteredReserveAddressesResponse {
  addresses?: BridgeMsgRegisterReserveAddress[];
}

export interface BridgeQuerySignRefundAllResponse {
  signRefundMsg?: BridgeMsgSignRefund[];
}

export interface BridgeQuerySignRefundResponse {
  signRefundMsg?: BridgeMsgSignRefund[];
}

export interface BridgeQuerySignSweepAllResponse {
  signSweepMsg?: BridgeMsgSignSweep[];
}

export interface BridgeQuerySignSweepResponse {
  signSweepMsg?: BridgeMsgSignSweep[];
}

export interface BridgeQueryUnsignedTxRefundAllResponse {
  unsignedTxRefundMsgs?: BridgeMsgUnsignedTxRefund[];
}

export interface BridgeQueryUnsignedTxRefundResponse {
  unsignedTxRefundMsg?: BridgeMsgUnsignedTxRefund;
}

export interface BridgeQueryUnsignedTxSweepAllResponse {
  unsignedTxSweepMsgs?: BridgeMsgUnsignedTxSweep[];
}

export interface BridgeQueryUnsignedTxSweepResponse {
  unsignedTxSweepMsg?: BridgeMsgUnsignedTxSweep;
}

export interface BridgeQueryWithdrawBtcRequestAllResponse {
  withdrawRequest?: VoltBtcWithdrawRequestInternal[];
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface VoltBtcDepositAddress {
  btcDepositAddress?: string;

  /** @format uint64 */
  btcSatoshiTestAmount?: string;

  /**
   * make it constant through gov proposal
   * @format uint64
   */
  twilightStakingAmount?: string;
  twilightAddress?: string;
  isConfirmed?: boolean;

  /** @format int64 */
  CreationTwilightBlockHeight?: string;
}

export interface VoltBtcWithdrawRequestInternal {
  /** @format int64 */
  withdrawIdentifier?: number;
  withdrawAddress?: string;

  /** @format uint64 */
  withdrawReserveId?: string;

  /**
   * in satoshis
   * @format uint64
   */
  withdrawAmount?: string;
  twilightAddress?: string;
  isConfirmed?: boolean;

  /** @format int64 */
  CreationTwilightBlockHeight?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title nyks/bridge/events.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBroadcastTxRefund
   * @summary Queries a list of BroadcastTxRefund items.
   * @request GET:/twilight-project/nyks/bridge/broadcast_tx_refund/{reserveId}/{roundId}
   */
  queryBroadcastTxRefund = (reserveId: string, roundId: string, params: RequestParams = {}) =>
    this.request<BridgeQueryBroadcastTxRefundResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/broadcast_tx_refund/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBroadcastTxRefundAll
   * @summary Queries a list of BroadcastTxRefundAll items.
   * @request GET:/twilight-project/nyks/bridge/broadcast_tx_refund_all
   */
  queryBroadcastTxRefundAll = (params: RequestParams = {}) =>
    this.request<BridgeQueryBroadcastTxRefundAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/broadcast_tx_refund_all`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBroadcastTxSweep
   * @summary Queries a list of BroadcastTxSweep items.
   * @request GET:/twilight-project/nyks/bridge/broadcast_tx_sweep/{reserveId}/{roundId}
   */
  queryBroadcastTxSweep = (reserveId: string, roundId: string, params: RequestParams = {}) =>
    this.request<BridgeQueryBroadcastTxSweepResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/broadcast_tx_sweep/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBroadcastTxSweepAll
   * @summary Queries a list of BroadcastTxSweepAll items.
   * @request GET:/twilight-project/nyks/bridge/broadcast_tx_sweep_all
   */
  queryBroadcastTxSweepAll = (params: RequestParams = {}) =>
    this.request<BridgeQueryBroadcastTxSweepAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/broadcast_tx_sweep_all`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/twilight-project/nyks/bridge/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<BridgeQueryParamsResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProposeRefundHashAll
   * @summary Queries a list of ProposeRefundHashAll items.
   * @request GET:/twilight-project/nyks/bridge/propose_refund_hash_all
   */
  queryProposeRefundHashAll = (params: RequestParams = {}) =>
    this.request<BridgeQueryProposeRefundHashAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/propose_refund_hash_all`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProposeSweepAddress
   * @summary Queries a list of ProposeSweepAddress items.
   * @request GET:/twilight-project/nyks/bridge/propose_sweep_address/{reserveId}/{roundId}
   */
  queryProposeSweepAddress = (reserveId: string, roundId: string, params: RequestParams = {}) =>
    this.request<BridgeQueryProposeSweepAddressResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/propose_sweep_address/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryProposeSweepAddressesAll
   * @summary Queries a list of ProposeSweepAddressesAll items.
   * @request GET:/twilight-project/nyks/bridge/propose_sweep_addresses_all/{limit}
   */
  queryProposeSweepAddressesAll = (limit: string, params: RequestParams = {}) =>
    this.request<BridgeQueryProposeSweepAddressesAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/propose_sweep_addresses_all/${limit}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegisteredBtcDepositAddress
   * @summary Queries a list of RegisteredBtcDepositAddress items.
   * @request GET:/twilight-project/nyks/bridge/registered_btc_deposit_address/{depositAddress}
   */
  queryRegisteredBtcDepositAddress = (depositAddress: string, params: RequestParams = {}) =>
    this.request<BridgeQueryRegisteredBtcDepositAddressResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/registered_btc_deposit_address/${depositAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegisteredBtcDepositAddressByTwilightAddress
   * @summary Queries a list of RegisteredBtcDepositAddressByTwilightAddress items.
   * @request GET:/twilight-project/nyks/bridge/registered_btc_deposit_address_by_twilight_address/{twilightDepositAddress}
   */
  queryRegisteredBtcDepositAddressByTwilightAddress = (twilightDepositAddress: string, params: RequestParams = {}) =>
    this.request<BridgeQueryRegisteredBtcDepositAddressByTwilightAddressResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/registered_btc_deposit_address_by_twilight_address/${twilightDepositAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegisteredBtcDepositAddresses
   * @summary Queries a list of RegisteredBtcDepositAddresses items.
   * @request GET:/twilight-project/nyks/bridge/registered_btc_deposit_addresses
   */
  queryRegisteredBtcDepositAddresses = (params: RequestParams = {}) =>
    this.request<BridgeQueryRegisteredBtcDepositAddressesResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/registered_btc_deposit_addresses`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegisteredJudgeAddressByValidatorAddress
   * @summary Queries a list of RegisteredJudgeAddressByValidatorAddress items.
   * @request GET:/twilight-project/nyks/bridge/registered_judge_address_by_validator_address/{validatorAddress}
   */
  queryRegisteredJudgeAddressByValidatorAddress = (validatorAddress: string, params: RequestParams = {}) =>
    this.request<BridgeQueryRegisteredJudgeAddressByValidatorAddressResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/registered_judge_address_by_validator_address/${validatorAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegisteredJudges
   * @summary Queries a list of RegisteredJudges items.
   * @request GET:/twilight-project/nyks/bridge/registered_judges
   */
  queryRegisteredJudges = (params: RequestParams = {}) =>
    this.request<BridgeQueryRegisteredJudgesResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/registered_judges`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRegisteredReserveAddresses
   * @summary Queries a list of RegisteredReserveAddresses items.
   * @request GET:/twilight-project/nyks/bridge/registered_reserve_addresses
   */
  queryRegisteredReserveAddresses = (params: RequestParams = {}) =>
    this.request<BridgeQueryRegisteredReserveAddressesResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/registered_reserve_addresses`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySignRefund
   * @summary Queries a list of SignRefund items.
   * @request GET:/twilight-project/nyks/bridge/sign_refund/{reserveId}/{roundId}
   */
  querySignRefund = (reserveId: string, roundId: string, params: RequestParams = {}) =>
    this.request<BridgeQuerySignRefundResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/sign_refund/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySignRefundAll
   * @summary Queries a list of SignRefundAll items.
   * @request GET:/twilight-project/nyks/bridge/sign_refund_all
   */
  querySignRefundAll = (params: RequestParams = {}) =>
    this.request<BridgeQuerySignRefundAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/sign_refund_all`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySignSweep
   * @summary Queries a list of SignSweep items.
   * @request GET:/twilight-project/nyks/bridge/sign_sweep/{reserveId}/{roundId}
   */
  querySignSweep = (reserveId: string, roundId: string, params: RequestParams = {}) =>
    this.request<BridgeQuerySignSweepResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/sign_sweep/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySignSweepAll
   * @summary Queries a list of SignSweepAll items.
   * @request GET:/twilight-project/nyks/bridge/sign_sweep_all
   */
  querySignSweepAll = (params: RequestParams = {}) =>
    this.request<BridgeQuerySignSweepAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/sign_sweep_all`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUnsignedTxRefund
   * @summary Queries a list of UnsignedTxRefund items.
   * @request GET:/twilight-project/nyks/bridge/unsigned_tx_refund/{reserveId}/{roundId}
   */
  queryUnsignedTxRefund = (reserveId: string, roundId: string, params: RequestParams = {}) =>
    this.request<BridgeQueryUnsignedTxRefundResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/unsigned_tx_refund/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUnsignedTxRefundAll
   * @summary Queries a list of UnsignedTxRefundAll items.
   * @request GET:/twilight-project/nyks/bridge/unsigned_tx_refund_all
   */
  queryUnsignedTxRefundAll = (query?: { limit?: string }, params: RequestParams = {}) =>
    this.request<BridgeQueryUnsignedTxRefundAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/unsigned_tx_refund_all`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUnsignedTxSweep
   * @summary Queries a list of UnsignedTxSweep items.
   * @request GET:/twilight-project/nyks/bridge/unsigned_tx_sweep/{reserveId}/{roundId}
   */
  queryUnsignedTxSweep = (reserveId: string, roundId: string, params: RequestParams = {}) =>
    this.request<BridgeQueryUnsignedTxSweepResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/unsigned_tx_sweep/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUnsignedTxSweepAll
   * @summary Queries a list of UnsignedTxSweepAll items.
   * @request GET:/twilight-project/nyks/bridge/unsigned_tx_sweep_all
   */
  queryUnsignedTxSweepAll = (query?: { limit?: string }, params: RequestParams = {}) =>
    this.request<BridgeQueryUnsignedTxSweepAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/unsigned_tx_sweep_all`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWithdrawBtcRequestAll
   * @summary Queries a list of WithdrawBtcRequestAll items.
   * @request GET:/twilight-project/nyks/bridge/withdraw_btc_request_all
   */
  queryWithdrawBtcRequestAll = (params: RequestParams = {}) =>
    this.request<BridgeQueryWithdrawBtcRequestAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/withdraw_btc_request_all`,
      method: "GET",
      format: "json",
      ...params,
    });
}
