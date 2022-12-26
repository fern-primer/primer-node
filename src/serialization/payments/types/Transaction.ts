/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const Transaction: core.schemas.ObjectSchema<serializers.Transaction.Raw, PrimerPrimerApi.Transaction> =
  core.schemas.object({
    date: core.schemas.string(),
    amount: core.schemas.number(),
    currencyCode: core.schemas.lazy(async () => (await import("../..")).CurrencyCode),
    type: core.schemas.lazy(async () => (await import("../..")).TransactionType).optional(),
    processorTransactionId: core.schemas.string().optional(),
    processorName: core.schemas.string().optional(),
    processorMerchantId: core.schemas.string(),
    processorStatus: core.schemas.lazy(async () => (await import("../..")).PaymentStatus).optional(),
    processorStatusReason: core.schemas
      .lazyObject(async () => (await import("../..")).PaymentProcessorError)
      .optional(),
  });

export declare namespace Transaction {
  interface Raw {
    date: string;
    amount: number;
    currencyCode: serializers.CurrencyCode.Raw;
    type?: serializers.TransactionType.Raw | null;
    processorTransactionId?: string | null;
    processorName?: string | null;
    processorMerchantId: string;
    processorStatus?: serializers.PaymentStatus.Raw | null;
    processorStatusReason?: serializers.PaymentProcessorError.Raw | null;
  }
}
