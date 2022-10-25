/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const KlarnaCustomerTokenSchema: core.schemas.ObjectSchema<
  KlarnaCustomerTokenSchema.Raw,
  PrimerApi.payments.KlarnaCustomerTokenSchema
> = core.schemas.object({
  paymentMethodData: core.schemas.lazyObject(() => serializers.payments.KlarnaCustomerTokenAPISchema),
  descriptor: core.schemas.string().optional(),
  paymentMethodToken: core.schemas.string().optional(),
  isVaulted: core.schemas.boolean().optional(),
  analyticsId: core.schemas.string().optional(),
  threeDSecureAuthentication: core.schemas.lazyObject(() => serializers.payments.ThreeDSecureAuthentication).optional(),
});

export declare namespace KlarnaCustomerTokenSchema {
  interface Raw {
    paymentMethodData: serializers.payments.KlarnaCustomerTokenAPISchema.Raw;
    descriptor?: string | null;
    paymentMethodToken?: string | null;
    isVaulted?: boolean | null;
    analyticsId?: string | null;
    threeDSecureAuthentication?: serializers.payments.ThreeDSecureAuthentication.Raw | null;
  }
}