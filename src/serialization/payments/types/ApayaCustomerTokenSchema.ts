/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const ApayaCustomerTokenSchema: core.schemas.ObjectSchema<
  serializers.ApayaCustomerTokenSchema.Raw,
  PrimerPrimerApi.ApayaCustomerTokenSchema
> = core.schemas.object({
  paymentMethodData: core.schemas.lazyObject(async () => (await import("../..")).KlarnaCustomerTokenApiSchema),
  descriptor: core.schemas.string().optional(),
  paymentMethodToken: core.schemas.string().optional(),
  isVaulted: core.schemas.boolean().optional(),
  analyticsId: core.schemas.string().optional(),
  threeDSecureAuthentication: core.schemas
    .lazyObject(async () => (await import("../..")).ThreeDSecureAuthentication)
    .optional(),
});

export declare namespace ApayaCustomerTokenSchema {
  interface Raw {
    paymentMethodData: serializers.KlarnaCustomerTokenApiSchema.Raw;
    descriptor?: string | null;
    paymentMethodToken?: string | null;
    isVaulted?: boolean | null;
    analyticsId?: string | null;
    threeDSecureAuthentication?: serializers.ThreeDSecureAuthentication.Raw | null;
  }
}
