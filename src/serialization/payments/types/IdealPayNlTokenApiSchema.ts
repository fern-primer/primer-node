/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const IdealPayNlTokenApiSchema: core.schemas.ObjectSchema<
  serializers.IdealPayNlTokenApiSchema.Raw,
  PrimerPrimerApi.IdealPayNlTokenApiSchema
> = core.schemas.object({
  paymentMethodConfigId: core.schemas.string(),
});

export declare namespace IdealPayNlTokenApiSchema {
  interface Raw {
    paymentMethodConfigId: string;
  }
}
