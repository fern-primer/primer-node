/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const ShippingDetails: core.schemas.ObjectSchema<
  serializers.ShippingDetails.Raw,
  PrimerPrimerApi.ShippingDetails
> = core.schemas.object({
  amount: core.schemas.number().optional(),
});

export declare namespace ShippingDetails {
  interface Raw {
    amount?: number | null;
  }
}
