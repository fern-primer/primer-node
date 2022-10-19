/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const BinData: core.schemas.ObjectSchema<BinData.Raw, PrimerApi.payments.BinData> = core.schemas.object({
  network: core.schemas.lazy(() => schemas.commons.CardNetworkType),
  issuerCountryCode: core.schemas.lazy(() => schemas.commons.CountryCode).optional(),
  issuerName: core.schemas.string().optional(),
  issuerCurrencyCode: core.schemas.lazy(() => schemas.commons.CurrencyCode).optional(),
  regionalRestriction: core.schemas.lazy(() => schemas.payments.RegionalRestriction),
  accountNumberType: core.schemas.lazy(() => schemas.payments.AccountNumberType),
  accountFundingType: core.schemas.lazy(() => schemas.commons.AccountFundingType),
  prepaidReloadableIndicator: core.schemas.lazy(() => schemas.payments.PrepaidReloadableIndicator),
  productUsageType: core.schemas.lazy(() => schemas.payments.ProductUsageType),
  productCode: core.schemas.string(),
  productName: core.schemas.string(),
});

export declare namespace BinData {
  interface Raw {
    network: schemas.commons.CardNetworkType.Raw;
    issuerCountryCode?: schemas.commons.CountryCode.Raw | null;
    issuerName?: string | null;
    issuerCurrencyCode?: schemas.commons.CurrencyCode.Raw | null;
    regionalRestriction: schemas.payments.RegionalRestriction.Raw;
    accountNumberType: schemas.payments.AccountNumberType.Raw;
    accountFundingType: schemas.commons.AccountFundingType.Raw;
    prepaidReloadableIndicator: schemas.payments.PrepaidReloadableIndicator.Raw;
    productUsageType: schemas.payments.ProductUsageType.Raw;
    productCode: string;
    productName: string;
  }
}