/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";

export interface GetPaymentsList {
  /**
   * Filter payments by their status. For example, "FAILED,CANCELLED”
   */
  status?: string;
  /**
   * Filter payments by their payment method type. For example, "PAYMENT_CARD,APPLE_PAY"
   */
  paymentMethodType?: string;
  /**
   * Filter payments by their payment processor. For example, "Stripe,Braintree"
   */
  processor?: string;
  /**
   * Filter payments by their payment currency. For example, "USD,EUR" for US dollars and Euro
   */
  currencyCode?: PrimerPrimerApi.CurrencyCode;
  /**
   * Return only payments from this date (inclusive).
   */
  fromDate?: Date;
  /**
   * Return only payments up to this date (inclusive).
   */
  toDate?: Date;
  /**
   * Return payments related to this order ID.
   */
  orderId?: string;
  /**
   * Return payments of this amount minimum (inclusive).
   */
  minAmount?: number;
  /**
   * Return payments of this amount max (inclusive).
   */
  maxAmount?: number;
  /**
   * ID of the customer that has made the payment. For example, "anna-123,dirk-456"
   */
  customerId?: PrimerPrimerApi.CustomerId;
  /**
   * ID of the merchant involved in the payment.
   */
  merchantId?: PrimerPrimerApi.MerchantId;
  /**
   * Email of the customer that has made the payment. For example, "mary@gm.com,ginni@ibm.com"
   */
  customerEmailAddress?: string;
  /**
   * Last 4 digits of the card used for the payment. For example, "4839,8709"
   */
  last4Digits?: string;
  /**
   * Paypal email address associated with the payment. For example, "mary@gm.com,ginni@ibm.com"
   */
  paypalEmail?: string;
  /**
   * Klarna email address associated with the payment. "mary@gm.com,ginni@ibm.com"
   */
  klarnaEmail?: string;
  /**
   * Maximum number of payments to return per page. Between 1 and 100.
   */
  limit?: number;
  /**
   * If results are paginated, pass the nextCursor to access next page.
   */
  cursor?: number;
  idempotencyKey?: string;
}
