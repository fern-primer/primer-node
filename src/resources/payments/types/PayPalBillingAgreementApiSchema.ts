/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";

export interface PayPalBillingAgreementApiSchema {
  paypalBillingAgreementId: string;
  /** Information about the PayPal customer */
  externalPayerInfo?: PrimerPrimerApi.ExternalPayerInfo;
  /** The PayPal customer's shipping address */
  shippingAddress?: PrimerPrimerApi.ShippingAddress;
  paypalStatus?: string;
}
