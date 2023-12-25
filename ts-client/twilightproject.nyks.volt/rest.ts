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

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface VoltBtcReserve {
  /** @format uint64 */
  ReserveId?: string;
  ReserveAddress?: string;
  JudgeAddress?: string;

  /** @format uint64 */
  BtcRelayCapacityValue?: string;

  /** @format uint64 */
  TotalValue?: string;

  /** @format uint64 */
  PrivatePoolValue?: string;

  /** @format uint64 */
  PublicValue?: string;

  /** @format uint64 */
  FeePool?: string;

  /** @format uint64 */
  UnlockHeight?: string;

  /** @format uint64 */
  RoundId?: string;
}

export interface VoltClearingAccount {
  TwilightAddress?: string;
  BtcDepositAddress?: string;

  /** @format int64 */
  BtcDepositAddressIdentifier?: number;
  BtcWithdrawAddress?: string;

  /** @format int64 */
  BtcWithdrawAddressIdentifier?: number;
  ReserveAccountBalances?: VoltIndividualTwilightReserveAccountBalance[];
}

export interface VoltIndividualTwilightReserveAccountBalance {
  /** @format uint64 */
  ReserveId?: string;

  /** @format uint64 */
  Amount?: string;
}

/**
 * Params defines the parameters for the module.
 */
export type VoltParams = object;

export interface VoltQueryBtcReserveResponse {
  BtcReserves?: VoltBtcReserve[];
}

export type VoltQueryBtcWithdrawRequestResponse = object;

export interface VoltQueryClearingAccountResponse {
  ClearingAccount?: VoltClearingAccount;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface VoltQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: VoltParams;
}

export interface VoltQueryRefundTxSnapshotResponse {
  RefundTxSnapshot?: VoltRefundTxSnapshot;
}

export interface VoltQueryReserveClearingAccountsAllResponse {
  ReserveClearingAccountsAll?: VoltClearingAccount[];
}

export type VoltQueryReserveWithdrawPoolResponse = object;

export interface VoltQueryReserveWithdrawSnapshotResponse {
  ReserveWithdrawSnapshot?: VoltReserveWithdrawSnapshot;
}

export interface VoltRefundTxAccountSnap {
  /** @format uint64 */
  Amount?: string;
  BtcDepositAddress?: string;

  /** @format int64 */
  BtcDepositAddressIdentifier?: number;
}

export interface VoltRefundTxSnapshot {
  /** @format uint64 */
  ReserveId?: string;

  /** @format uint64 */
  RoundId?: string;
  refundAccounts?: VoltRefundTxAccountSnap[];

  /** @format int64 */
  EndBlockerHeightTwilight?: string;
}

export interface VoltReserveWithdrawSnapshot {
  /** @format uint64 */
  ReserveId?: string;

  /** @format uint64 */
  RoundId?: string;
  withdrawRequests?: VoltWithdrawRequestSnap[];

  /** @format int64 */
  EndBlockerHeightTwilight?: string;
}

export interface VoltWithdrawRequestSnap {
  /** @format int64 */
  withdrawIdentifier?: number;
  withdrawAddress?: string;

  /** @format uint64 */
  withdrawAmount?: string;
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
 * @title nyks/volt/clearing.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryBtcReserve
   * @summary Queries a list of BtcReserve items.
   * @request GET:/twilight-project/nyks/volt/btc_reserve
   */
  queryBtcReserve = (params: RequestParams = {}) =>
    this.request<VoltQueryBtcReserveResponse, RpcStatus>({
      path: `/twilight-project/nyks/volt/btc_reserve`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBtcWithdrawRequest
   * @summary Queries a list of BtcWithdrawRequest items.
   * @request GET:/twilight-project/nyks/volt/btc_withdraw_request/{twilightAddress}
   */
  queryBtcWithdrawRequest = (twilightAddress: string, params: RequestParams = {}) =>
    this.request<VoltQueryBtcWithdrawRequestResponse, RpcStatus>({
      path: `/twilight-project/nyks/volt/btc_withdraw_request/${twilightAddress}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryClearingAccount
   * @summary Queries a list of ClearingAccount items.
   * @request GET:/twilight-project/nyks/volt/clearing_account/{twilightAddress}
   */
  queryClearingAccount = (twilightAddress: string, params: RequestParams = {}) =>
    this.request<VoltQueryClearingAccountResponse, RpcStatus>({
      path: `/twilight-project/nyks/volt/clearing_account/${twilightAddress}`,
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
   * @request GET:/twilight-project/nyks/volt/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<VoltQueryParamsResponse, RpcStatus>({
      path: `/twilight-project/nyks/volt/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryRefundTxSnapshot
   * @summary Queries a list of RefundTxSnapshot items.
   * @request GET:/twilight-project/nyks/volt/refund_tx_snapshot/{reserveId}/{roundId}
   */
  queryRefundTxSnapshot = (reserveId: string, roundId: string, params: RequestParams = {}) =>
    this.request<VoltQueryRefundTxSnapshotResponse, RpcStatus>({
      path: `/twilight-project/nyks/volt/refund_tx_snapshot/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryReserveClearingAccountsAll
   * @summary Queries a list of ReserveClearingAccountsAll items.
   * @request GET:/twilight-project/nyks/volt/reserve_clearing_accounts_all/{reserveId}
   */
  queryReserveClearingAccountsAll = (reserveId: string, params: RequestParams = {}) =>
    this.request<VoltQueryReserveClearingAccountsAllResponse, RpcStatus>({
      path: `/twilight-project/nyks/volt/reserve_clearing_accounts_all/${reserveId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryReserveWithdrawPool
   * @summary Queries a list of ReserveWithdrawPool items.
   * @request GET:/twilight-project/nyks/volt/reserve_withdraw_pool/{reserveId}/{roundId}
   */
  queryReserveWithdrawPool = (reserveId: number, roundId: number, params: RequestParams = {}) =>
    this.request<VoltQueryReserveWithdrawPoolResponse, RpcStatus>({
      path: `/twilight-project/nyks/volt/reserve_withdraw_pool/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryReserveWithdrawSnapshot
   * @summary Queries a list of ReserveWithdrawSnapshot items.
   * @request GET:/twilight-project/nyks/volt/reserve_withdraw_snapshot/{reserveId}/{roundId}
   */
  queryReserveWithdrawSnapshot = (reserveId: string, roundId: string, params: RequestParams = {}) =>
    this.request<VoltQueryReserveWithdrawSnapshotResponse, RpcStatus>({
      path: `/twilight-project/nyks/volt/reserve_withdraw_snapshot/${reserveId}/${roundId}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
