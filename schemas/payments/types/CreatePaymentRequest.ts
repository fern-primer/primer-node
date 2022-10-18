/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const CreatePaymentRequest: core.schemas.ObjectSchema<
  CreatePaymentRequest.Raw,
  PrimerApi.payments.CreatePaymentRequest
> = core.schemas.object({
  orderId: core.schemas.lazy(() => schemas.commons.OrderId).optional(),
  currencyCode: core.schemas.lazy(() => schemas.commons.CurrencyCode).optional(),
  amount: core.schemas.number().optional(),
  order: core.schemas.lazyObject(() => schemas.clientSession.OrderDetails).optional(),
  paymentMethodToken: core.schemas.string(),
  customerId: core.schemas.lazy(() => schemas.commons.CustomerId).optional(),
  customer: core.schemas.lazyObject(() => schemas.clientSession.CustomerDetails).optional(),
  metadata: core.schemas.record(core.schemas.string(), core.schemas.unknown()).optional(),
  paymentMethod: core.schemas.lazyObject(() => schemas.clientSession.ClientPaymentMethod).optional(),
});

export declare namespace CreatePaymentRequest {
  interface Raw {
    orderId?: schemas.commons.OrderId.Raw | null;
    currencyCode?: schemas.commons.CurrencyCode.Raw | null;
    amount?: number | null;
    order?: schemas.clientSession.OrderDetails.Raw | null;
    paymentMethodToken: string;
    customerId?: schemas.commons.CustomerId.Raw | null;
    customer?: schemas.clientSession.CustomerDetails.Raw | null;
    metadata?: Record<string, unknown> | null;
    paymentMethod?: schemas.clientSession.ClientPaymentMethod.Raw | null;
  }
}
