/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";

export interface ApayaCustomerTokenSchema {
  paymentMethodData: PrimerApi.payments.KlarnaCustomerTokenAPISchema;
  /** The description of the payment, as it would typically appear on a bank statement. */
  descriptor?: string;
  /** The payment method token used to authorize the transaction. */
  paymentMethodToken?: string;
  /** Whether the payment method token represents a vaulted payment method and can be used for future payments. */
  isVaulted?: boolean;
  /** Unique analytics identifier corresponding to a payment method */
  analyticsId?: string;
  threeDSecureAuthentication?: PrimerApi.payments.ThreeDSecureAuthentication;
}
