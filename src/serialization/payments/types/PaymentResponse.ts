/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const PaymentResponse: core.schemas.ObjectSchema<PaymentResponse.Raw, PrimerApi.payments.PaymentResponse> =
  core.schemas.object({
    id: core.schemas.lazy(() => serializers.payments.PaymentId).optional(),
    date: core.schemas.date().optional(),
    status: core.schemas.lazy(() => serializers.payments.PaymentStatus).optional(),
    orderId: core.schemas.lazy(() => serializers.commons.OrderId).optional(),
    customerId: core.schemas.string().optional(),
    currencyCode: core.schemas.lazy(() => serializers.commons.CurrencyCode).optional(),
    amount: core.schemas.number().optional(),
    order: core.schemas.lazyObject(() => serializers.clientSession.CustomerDetails).optional(),
    countryCode: core.schemas.lazy(() => serializers.commons.CountryCode).optional(),
    fees: core.schemas.list(core.schemas.lazyObject(() => serializers.clientSession.Fee)).optional(),
    shipping: core.schemas.lazyObject(() => serializers.clientSession.ShippingDetails).optional(),
    paymentMethod: core.schemas.lazy(() => serializers.payments.PaymentMethod),
    requiredAction: core.schemas.lazyObject(() => serializers.payments.RequiredAction).optional(),
    statusReason: core.schemas.lazyObject(() => serializers.payments.StatusReason).optional(),
    transactions: core.schemas.list(core.schemas.lazyObject(() => serializers.payments.Transaction)),
    processor: core.schemas.lazyObject(() => serializers.payments.Processor).optional(),
    customer: core.schemas.lazyObject(() => serializers.clientSession.CustomerDetails).optional(),
    metadata: core.schemas.record(core.schemas.string(), core.schemas.unknown()).optional(),
  });

export declare namespace PaymentResponse {
  interface Raw {
    id?: serializers.payments.PaymentId.Raw | null;
    date?: string | null;
    status?: serializers.payments.PaymentStatus.Raw | null;
    orderId?: serializers.commons.OrderId.Raw | null;
    customerId?: string | null;
    currencyCode?: serializers.commons.CurrencyCode.Raw | null;
    amount?: number | null;
    order?: serializers.clientSession.CustomerDetails.Raw | null;
    countryCode?: serializers.commons.CountryCode.Raw | null;
    fees?: serializers.clientSession.Fee.Raw[] | null;
    shipping?: serializers.clientSession.ShippingDetails.Raw | null;
    paymentMethod: serializers.payments.PaymentMethod.Raw;
    requiredAction?: serializers.payments.RequiredAction.Raw | null;
    statusReason?: serializers.payments.StatusReason.Raw | null;
    transactions: serializers.payments.Transaction.Raw[];
    processor?: serializers.payments.Processor.Raw | null;
    customer?: serializers.clientSession.CustomerDetails.Raw | null;
    metadata?: Record<string, unknown> | null;
  }
}