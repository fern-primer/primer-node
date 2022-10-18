/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const PaymentCardTokenSchemaPaymentMethodsAPI: core.schemas.ObjectSchema<
  PaymentCardTokenSchemaPaymentMethodsAPI.Raw,
  PrimerApi.paymentMethod.PaymentCardTokenSchemaPaymentMethodsAPI
> = core.schemas.object({
  paymentMethodData: core.schemas.lazyObject(() => schemas.paymentMethod.PaymentCardTokenAPISchemaPaymentMethodsAPI),
  createdAt: core.schemas.date().optional(),
  deletedAt: core.schemas.date().optional(),
  deleted: core.schemas.boolean().optional(),
  token: core.schemas.string().optional(),
  tokenType: core.schemas.string().optional(),
  analyticsId: core.schemas.string().optional(),
  customerId: core.schemas.string().optional(),
  description: core.schemas.string().optional(),
  default: core.schemas.boolean().optional(),
  isVerified: core.schemas.boolean().optional(),
});

export declare namespace PaymentCardTokenSchemaPaymentMethodsAPI {
  interface Raw {
    paymentMethodData: schemas.paymentMethod.PaymentCardTokenAPISchemaPaymentMethodsAPI.Raw;
    createdAt?: string | null;
    deletedAt?: string | null;
    deleted?: boolean | null;
    token?: string | null;
    tokenType?: string | null;
    analyticsId?: string | null;
    customerId?: string | null;
    description?: string | null;
    default?: boolean | null;
    isVerified?: boolean | null;
  }
}
