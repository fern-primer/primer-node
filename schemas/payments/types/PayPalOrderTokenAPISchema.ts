/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const PayPalOrderTokenAPISchema: core.schemas.ObjectSchema<
  PayPalOrderTokenAPISchema.Raw,
  PrimerApi.payments.PayPalOrderTokenAPISchema
> = core.schemas.object({
  paypalOrderId: core.schemas.string(),
  externalPayerInfo: core.schemas.lazyObject(() => schemas.payments.ExternalPayerInfo),
  paypalStatus: core.schemas.string().optional(),
});

export declare namespace PayPalOrderTokenAPISchema {
  interface Raw {
    paypalOrderId: string;
    externalPayerInfo: schemas.payments.ExternalPayerInfo.Raw;
    paypalStatus?: string | null;
  }
}
