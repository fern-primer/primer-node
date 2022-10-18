/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";

export interface PaymentCardTokenSchemaPaymentMethodsAPI {
  paymentMethodData: PrimerApi.paymentMethod.PaymentCardTokenAPISchemaPaymentMethodsAPI;
  /** Creation date & time of the object (UTC) */
  createdAt?: Date;
  /** Date & time when this object was revoked. (UTC) */
  deletedAt?: Date;
  /** Whether or not this object has been revoked. */
  deleted?: boolean;
  /** The vaulted payment method token. */
  token?: string;
  /** MULTI_USE means a vaulted token that can be re-used with subsequent payments. */
  tokenType?: string;
  /** Unique analytics identifier corresponding to a payment method */
  analyticsId?: string;
  /** The ID representing the customer */
  customerId?: string;
  /** A friendly description given by the user */
  description?: string;
  /** Whether or not this payment method is the default */
  default?: boolean;
  /** Whether or not this payment method was verified */
  isVerified?: boolean;
}
