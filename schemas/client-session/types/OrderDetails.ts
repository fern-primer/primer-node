/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const OrderDetails: core.schemas.ObjectSchema<OrderDetails.Raw, PrimerApi.clientSession.OrderDetails> =
  core.schemas.object({
    lineItems: core.schemas.list(core.schemas.lazyObject(() => schemas.clientSession.LineItem)).optional(),
    countryCode: core.schemas.lazy(() => schemas.commons.CountryCode).optional(),
    fees: core.schemas.list(core.schemas.lazyObject(() => schemas.clientSession.Fee)).optional(),
    shipping: core.schemas.lazyObject(() => schemas.clientSession.ShippingDetails).optional(),
  });

export declare namespace OrderDetails {
  interface Raw {
    lineItems?: schemas.clientSession.LineItem.Raw[] | null;
    countryCode?: schemas.commons.CountryCode.Raw | null;
    fees?: schemas.clientSession.Fee.Raw[] | null;
    shipping?: schemas.clientSession.ShippingDetails.Raw | null;
  }
}