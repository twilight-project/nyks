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

export interface BridgeMsgBroadcastTxSweep {
  signedRefundTx?: string;
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
  reserveAddress?: string;
  signerAddress?: string;
  refundSignature?: string;
  btcOracleAddress?: string;
}

export type BridgeMsgSignRefundResponse = object;

export interface BridgeMsgSignSweep {
  reserveAddress?: string;
  signerAddress?: string;
  sweepSignature?: string;
  btcOracleAddress?: string;
}

export type BridgeMsgSignSweepResponse = object;

export type BridgeMsgSweepProposalResponse = object;

export type BridgeMsgUnsignedTxRefundResponse = object;

export type BridgeMsgUnsignedTxSweepResponse = object;

export interface BridgeMsgWithdrawBtcRequest {
  withdrawAddress?: string;
  reserveAddress?: string;

  /** @format uint64 */
  withdrawAmount?: string;
  twilightAddress?: string;
}

export type BridgeMsgWithdrawBtcRequestResponse = object;

export type BridgeMsgWithdrawTxFinalResponse = object;

export type BridgeMsgWithdrawTxSignedResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type BridgeParams = object;

export interface BridgeQueryBroadcastTxSweepAllResponse {
  BroadcastTxSweepMsg?: BridgeMsgBroadcastTxSweep[];
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

export interface BridgeQueryRegisteredBtcDepositAddressByTwilightAddressResponse {
  depositAddress?: string;
  twilightDepositAddress?: string;
}

export interface BridgeQueryRegisteredBtcDepositAddressResponse {
  depositAddress?: string;
  twilightDepositAddress?: string;
}

export interface BridgeQueryRegisteredBtcDepositAddressesResponse {
  accounts?: VoltClearingAccount[];
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

export interface BridgeQuerySignSweepAllResponse {
  signSweepMsg?: BridgeMsgSignSweep[];
}

export type BridgeQueryUnsignedTxRefundResponse = object;

export type BridgeQueryUnsignedTxSweepResponse = object;

export interface BridgeQueryWithdrawBtcRequestAllResponse {
  withdrawRequest?: BridgeMsgWithdrawBtcRequest[];
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

export interface VoltClearingAccount {
  TwilightAddress?: string;
  BtcDepositAddress?: string;
  BtcWithdrawAddress?: string;
  ReserveAccountBalances?: VoltIndividualTwilightReserveAccountBalance[];
}

export interface VoltIndividualTwilightReserveAccountBalance {
  /** @format uint64 */
  ReserveId?: string;

  /** @format uint64 */
  Amount?: string;
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
   * @name QueryBroadcastTxSweepAll
   * @summary Queries a list of BroadcastTxSweepAll items.
   * @request GET:/twilight-project/nyks/bridge/broadcast_refund_all
   */
  queryBroadcastTxSweepAll = (params: RequestParams = {}) =>
    this.request<BridgeQueryBroadcastTxSweepAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/broadcast_refund_all`,
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
   * @request GET:/twilight-project/nyks/bridge/unsigned_tx_refund/{reserveId}/{judgeAddress}
   */
  queryUnsignedTxRefund = (reserveId: string, judgeAddress: string, params: RequestParams = {}) =>
    this.request<BridgeQueryUnsignedTxRefundResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/unsigned_tx_refund/${reserveId}/${judgeAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryUnsignedTxSweep
   * @summary Queries a list of UnsignedTxSweep items.
   * @request GET:/twilight-project/nyks/bridge/unsigned_tx_sweep/{txId}
   */
  queryUnsignedTxSweep = (txId: string, params: RequestParams = {}) =>
    this.request<BridgeQueryUnsignedTxSweepResponse, RpcStatus>({
      path: `/twilight-project/nyks/bridge/unsigned_tx_sweep/${txId}`,
      method: "GET",
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
