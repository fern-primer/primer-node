/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const BinData: core.schemas.ObjectSchema<serializers.BinData.Raw, PrimerPrimerApi.BinData> = core.schemas.object(
  {
    network: core.schemas.lazy(async () => (await import("../..")).CardNetworkType),
    issuerCountryCode: core.schemas.lazy(async () => (await import("../..")).CountryCode).optional(),
    issuerName: core.schemas.string().optional(),
    issuerCurrencyCode: core.schemas.lazy(async () => (await import("../..")).CurrencyCode).optional(),
    regionalRestriction: core.schemas.lazy(async () => (await import("../..")).RegionalRestriction),
    accountNumberType: core.schemas.lazy(async () => (await import("../..")).AccountNumberType),
    accountFundingType: core.schemas.lazy(async () => (await import("../..")).AccountFundingType),
    prepaidReloadableIndicator: core.schemas.lazy(async () => (await import("../..")).PrepaidReloadableIndicator),
    productUsageType: core.schemas.lazy(async () => (await import("../..")).ProductUsageType),
    productCode: core.schemas.string(),
    productName: core.schemas.string(),
  }
);

export declare namespace BinData {
  interface Raw {
    network: serializers.CardNetworkType.Raw;
    issuerCountryCode?: serializers.CountryCode.Raw | null;
    issuerName?: string | null;
    issuerCurrencyCode?: serializers.CurrencyCode.Raw | null;
    regionalRestriction: serializers.RegionalRestriction.Raw;
    accountNumberType: serializers.AccountNumberType.Raw;
    accountFundingType: serializers.AccountFundingType.Raw;
    prepaidReloadableIndicator: serializers.PrepaidReloadableIndicator.Raw;
    productUsageType: serializers.ProductUsageType.Raw;
    productCode: string;
    productName: string;
  }
}
