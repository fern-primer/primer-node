/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PaymentStatus =
  /**
   * The payment has been created by Primer but not yet authorized. */
  | "PENDING"
  /**
   * The processor failed to process this payment. */
  | "FAILED"
  /**
   * The payment is authorized and awaiting capture. */
  | "AUTHORIZED"
  /**
   * The payment has been submitted for settlement and funds will be settled later. */
  | "SETTLING"
  /**
   * The payment has been partially settled. */
  | "PARTIALLY_SETTLED"
  /**
   * Funds have been settled into your account. */
  | "SETTLED"
  /**
   * This payment was declined by the processor, either at a gateway or acquirer level. See the `reason` object in your response payload for more details. */
  | "DECLINED"
  /**
   * The payment was cancelled prior to it being settled. */
  | "CANCELLED";

export const PaymentStatus = {
  Pending: "PENDING",
  Failed: "FAILED",
  Authorized: "AUTHORIZED",
  Settling: "SETTLING",
  PartiallySettled: "PARTIALLY_SETTLED",
  Settled: "SETTLED",
  Declined: "DECLINED",
  Cancelled: "CANCELLED",
} as const;
