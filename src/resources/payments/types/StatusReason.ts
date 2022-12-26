/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";

/**
 * Check this field for more information regarding the payment's status. This is especially useful when the status is `DECLINED` or `FAILED`.
 */
export interface StatusReason {
  type: PrimerPrimerApi.StatusReasonType;
  /** If the error is of type `ISSUER_DECLINED` this will be returned. Declines of type `SOFT_DECLINE` may be retried, whereas declines of type `HARD_DECLINE` should not be retried. */
  declineType?: PrimerPrimerApi.StatusReasonDeclineType;
  /** If the error is of type `ISSUER_DECLINED`, this will be returned. */
  code?: PrimerPrimerApi.StatusReasonCode;
  /** In case of an error on the processor's part, we will return the message returned by the processor. This is usually a human readable error. */
  message?: string;
}
