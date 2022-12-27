/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";

/**
 * Used exclusively by the Payment Methods API
 */
export interface PaymentCardTokenApiSchemaPaymentMethodsApi {
  last4Digits: string;
  expirationMonth: string;
  expirationYear: string;
  cardholderName?: string;
  network?: string;
  /** An ID for the transaction assigned by the card network. Used to correlate recurring payments. */
  networkTransactionId?: string;
  /** The type of card, e.g. Debit, Credit */
  accountFundingType?: PrimerPrimerApi.AccountFundingType;
}