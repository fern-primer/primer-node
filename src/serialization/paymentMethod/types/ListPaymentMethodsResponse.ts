/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const ListPaymentMethodsResponse: core.schemas.ObjectSchema<
  serializers.ListPaymentMethodsResponse.Raw,
  PrimerPrimerApi.ListPaymentMethodsResponse
> = core.schemas.object({
  data: core.schemas.list(core.schemas.lazy(async () => (await import("../..")).PaymentMethodToken)),
});

export declare namespace ListPaymentMethodsResponse {
  interface Raw {
    data: serializers.PaymentMethodToken.Raw[];
  }
}
