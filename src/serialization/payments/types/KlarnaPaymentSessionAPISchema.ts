/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const KlarnaPaymentSessionAPISchema: core.schemas.ObjectSchema<
  KlarnaPaymentSessionAPISchema.Raw,
  PrimerApi.payments.KlarnaPaymentSessionAPISchema
> = core.schemas.object({
  klarnaAuthorizationToken: core.schemas.string(),
  sessionData: core.schemas.lazyObject(() => serializers.payments.KlarnaSessionDetails),
});

export declare namespace KlarnaPaymentSessionAPISchema {
  interface Raw {
    klarnaAuthorizationToken: string;
    sessionData: serializers.payments.KlarnaSessionDetails.Raw;
  }
}