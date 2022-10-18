/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const KlarnaSessionDetails: core.schemas.ObjectSchema<
  KlarnaSessionDetails.Raw,
  PrimerApi.payments.KlarnaSessionDetails
> = core.schemas.object({
  recurringDescription: core.schemas.string().optional(),
  billingAddress: core.schemas.lazyObject(() => schemas.payments.KlarnaAddress),
  shippingAddress: core.schemas.lazyObject(() => schemas.payments.KlarnaAddress).optional(),
  purchaseCountry: core.schemas.string(),
  purchaseCurrency: core.schemas.string(),
  locale: core.schemas.string(),
  orderLines: core.schemas.list(core.schemas.unknown()),
  tokenDetails: core.schemas.lazyObject(() => schemas.payments.KlarnaTokenDetails).optional(),
});

export declare namespace KlarnaSessionDetails {
  interface Raw {
    recurringDescription?: string | null;
    billingAddress: schemas.payments.KlarnaAddress.Raw;
    shippingAddress?: schemas.payments.KlarnaAddress.Raw | null;
    purchaseCountry: string;
    purchaseCurrency: string;
    locale: string;
    orderLines: unknown[];
    tokenDetails?: schemas.payments.KlarnaTokenDetails.Raw | null;
  }
}
