/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";

export interface ListPaymentMethodsRequest {
  /**
   * Return payment methods for this customer ID.
   */
  customerId: PrimerPrimerApi.CustomerId;
}