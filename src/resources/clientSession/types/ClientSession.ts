/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";

export interface ClientSession {
  /** Client token used to initialize the SDK on all platforms. */
  clientToken?: string;
  /** Expiration date & time of the client token (UTC with no timezoneinfo). */
  clientExpirationDate?: Date;
  /** A unique identifier for your customer. */
  customerId?: PrimerPrimerApi.CustomerId;
  /** Your reference for the payment. */
  orderId?: PrimerPrimerApi.OrderId;
  /**
   * The 3-letter currency code in ISO 4217 format.
   * e.g. use USD for US dollars.
   *
   */
  currencyCode?: PrimerPrimerApi.CurrencyCode;
  /**
   * The amount you would like to charge the customer, in minor units. e.g. for $7, use 700.
   * Some currencies, such as Japanese Yen, do not have minor units. In this case you should use the value as it is, without any formatting. For example for ¥100, use 100.
   * If the amount is provided on this level, it would override any amount calculated from the provided line items, shipping and other amounts.
   *
   */
  amount?: number;
  /** More information associated with the order. */
  order?: PrimerPrimerApi.OrderDetails;
  /** More information associated with the customer. */
  customer?: PrimerPrimerApi.CustomerDetails;
  /** Additional data to be used throughout the payment lifecycle. */
  metadata?: PrimerPrimerApi.MetadataDetails;
  /** Enable certain options associated with the payment methods. */
  paymentMethod?: PrimerPrimerApi.ClientPaymentMethod;
  /** Warning messages to indicate missing information that are required for payment methods, checkout modules and other features; or when third-party services are unavailable. */
  warnings?: PrimerPrimerApi.Warnings;
}
