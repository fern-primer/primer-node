/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";

export interface UpdateClientSessionRequest {
  /** Client token for use in the Primer-JS SDK obtained via POST /client-session API call. */
  clientToken?: string;
  /** Your reference for the payment. */
  orderId?: PrimerApi.commons.OrderId;
  /**
   * The 3-letter currency code in ISO 4217 format.
   * e.g. use USD for US dollars.
   *
   */
  currencyCode?: PrimerApi.commons.CurrencyCode;
  /** The amount you would like to charge the customer, in minor units. e.g. for $7, use 700. */
  amount?: number;
  /** More information associated with the order. */
  order?: PrimerApi.clientSession.OrderDetails;
  /** More information associated with the customer. */
  customer?: PrimerApi.clientSession.CustomerDetails;
  /**
   * Additional data to be used throughout the payment lifecycle.
   * A dictionary of key-value pairs where the values can only be strings or
   * integers.
   * e.g. {"productId": 1001, "merchantId": "a13bsd62s"}
   *
   */
  metadata?: PrimerApi.clientSession.MetadataDetails;
  /** Enable certain options associated with the payment method. */
  paymentMethod?: PrimerApi.clientSession.ClientPaymentMethod;
}