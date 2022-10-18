/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const SavePaymentMethodTokenRequest: core.schemas.ObjectSchema<
  SavePaymentMethodTokenRequest.Raw,
  PrimerApi.paymentMethod.SavePaymentMethodTokenRequest
> = core.schemas.object({
  customerId: core.schemas.lazy(() => schemas.commons.CustomerId),
  verify: core.schemas.boolean().optional(),
});

export declare namespace SavePaymentMethodTokenRequest {
  interface Raw {
    customerId: schemas.commons.CustomerId.Raw;
    verify?: boolean | null;
  }
}
