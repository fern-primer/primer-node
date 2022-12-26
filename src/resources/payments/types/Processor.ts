/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface Processor {
  /** The payment processor used for this payment. */
  name?: string;
  /** The merchant ID registered at the payment processor used for this payment. */
  processorMerchantId?: string;
  /**
   * If no capture was performed, this value will be set to 0.
   * If one or more partial captures were performed, this value will be a sum of all partial capture amounts.
   *
   */
  amountCaptured?: number;
  /**
   * If no refund was performed, this value will be set to 0.
   * If one or more partial refunds were performed, this value will be a sum of all partial refund amounts.
   *
   */
  amountRefunded?: number;
}
