/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const BinData: core.schemas.ObjectSchema<BinData.Raw, PrimerApi.payments.BinData> = core.schemas.object({
  network: core.schemas.lazy(() => serializers.commons.CardNetworkType),
  issuerCountryCode: core.schemas.lazy(() => serializers.commons.CountryCode).optional(),
  issuerName: core.schemas.string().optional(),
  issuerCurrencyCode: core.schemas.lazy(() => serializers.commons.CurrencyCode).optional(),
  regionalRestriction: core.schemas.lazy(() => serializers.payments.RegionalRestriction),
  accountNumberType: core.schemas.lazy(() => serializers.payments.AccountNumberType),
  accountFundingType: core.schemas.lazy(() => serializers.commons.AccountFundingType),
  prepaidReloadableIndicator: core.schemas.lazy(() => serializers.payments.PrepaidReloadableIndicator),
  productUsageType: core.schemas.lazy(() => serializers.payments.ProductUsageType),
  productCode: core.schemas.string(),
  productName: core.schemas.string(),
});

export declare namespace BinData {
  interface Raw {
    network: serializers.commons.CardNetworkType.Raw;
    issuerCountryCode?: serializers.commons.CountryCode.Raw | null;
    issuerName?: string | null;
    issuerCurrencyCode?: serializers.commons.CurrencyCode.Raw | null;
    regionalRestriction: serializers.payments.RegionalRestriction.Raw;
    accountNumberType: serializers.payments.AccountNumberType.Raw;
    accountFundingType: serializers.commons.AccountFundingType.Raw;
    prepaidReloadableIndicator: serializers.payments.PrepaidReloadableIndicator.Raw;
    productUsageType: serializers.payments.ProductUsageType.Raw;
    productCode: string;
    productName: string;
  }
}