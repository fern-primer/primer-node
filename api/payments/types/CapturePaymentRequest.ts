/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface CapturePaymentRequest {
  /** The amount you would like to capture, in minor units. The currency used on authorization is assumed. If no amount is specified it defaults to the full amount. */
  amount?: number;
  /** Indicates whether the capture request is the final capture request. After a final capture, no subsequent captures are allowed. */
  final?: boolean;
}