/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";

export interface UpdateClientSessionRequest {
  clientToken?: string;
  orderId?: PrimerPrimerApi.OrderId;
  currencyCode?: PrimerPrimerApi.CurrencyCode;
  amount?: number;
  order?: PrimerPrimerApi.OrderDetails;
  customer?: PrimerPrimerApi.CustomerDetails;
  metadata?: PrimerPrimerApi.MetadataDetails;
  paymentMethod?: PrimerPrimerApi.ClientPaymentMethod;
}
