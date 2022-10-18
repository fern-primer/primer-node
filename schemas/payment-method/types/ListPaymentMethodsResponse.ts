/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const ListPaymentMethodsResponse: core.schemas.ObjectSchema<
  ListPaymentMethodsResponse.Raw,
  PrimerApi.paymentMethod.ListPaymentMethodsResponse
> = core.schemas.object({
  data: core.schemas.list(core.schemas.lazy(() => schemas.paymentMethod.PaymentMethodToken)),
});

export declare namespace ListPaymentMethodsResponse {
  interface Raw {
    data: schemas.paymentMethod.PaymentMethodToken.Raw[];
  }
}
