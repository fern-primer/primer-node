/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";

export interface ClientPaymentMethod {
  /** Whether the payment method should be vaulted on a successful payment or not. */
  vaultOnSuccess?: boolean;
  /** A description of the payment, as it would typically appear on a bank statement. */
  descriptor?: string;
  /**
   * Payment types, primarily to be used for recurring payments.
   * Note: If you successfully vault a SINGLE_USE token on payment creation, then there's no need to set a value for this field and it will be flagged as FIRST_PAYMENT. Otherwise, see the table below for all possible values.
   *
   */
  paymentType?: PrimerPrimerApi.PaymentType;
  /** Additional options for the payment methods. */
  options?: Record<PrimerPrimerApi.SupportedPaymentMethods, PrimerPrimerApi.NetworkOrSurchargeObject>;
}
