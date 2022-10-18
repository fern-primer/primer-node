/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const KlarnaPaymentSessionSchema: core.schemas.ObjectSchema<
  KlarnaPaymentSessionSchema.Raw,
  PrimerApi.payments.KlarnaPaymentSessionSchema
> = core.schemas.object({
  paymentMethodData: core.schemas.lazyObject(() => schemas.payments.KlarnaPaymentSessionAPISchema),
  descriptor: core.schemas.string().optional(),
  paymentMethodToken: core.schemas.string().optional(),
  isVaulted: core.schemas.boolean().optional(),
  analyticsId: core.schemas.string().optional(),
  threeDSecureAuthentication: core.schemas.lazyObject(() => schemas.payments.ThreeDSecureAuthentication).optional(),
});

export declare namespace KlarnaPaymentSessionSchema {
  interface Raw {
    paymentMethodData: schemas.payments.KlarnaPaymentSessionAPISchema.Raw;
    descriptor?: string | null;
    paymentMethodToken?: string | null;
    isVaulted?: boolean | null;
    analyticsId?: string | null;
    threeDSecureAuthentication?: schemas.payments.ThreeDSecureAuthentication.Raw | null;
  }
}
