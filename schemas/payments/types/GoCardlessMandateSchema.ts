/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const GoCardlessMandateSchema: core.schemas.ObjectSchema<
  GoCardlessMandateSchema.Raw,
  PrimerApi.payments.GoCardlessMandateSchema
> = core.schemas.object({
  paymentMethodData: core.schemas.lazyObject(() => schemas.payments.GoCardlessMandateAPISchema),
  descriptor: core.schemas.string().optional(),
  paymentMethodToken: core.schemas.string().optional(),
  isVaulted: core.schemas.boolean().optional(),
  analyticsId: core.schemas.string().optional(),
  threeDSecureAuthentication: core.schemas.lazyObject(() => schemas.payments.ThreeDSecureAuthentication).optional(),
});

export declare namespace GoCardlessMandateSchema {
  interface Raw {
    paymentMethodData: schemas.payments.GoCardlessMandateAPISchema.Raw;
    descriptor?: string | null;
    paymentMethodToken?: string | null;
    isVaulted?: boolean | null;
    analyticsId?: string | null;
    threeDSecureAuthentication?: schemas.payments.ThreeDSecureAuthentication.Raw | null;
  }
}