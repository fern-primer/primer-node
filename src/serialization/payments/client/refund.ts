/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const Request: core.schemas.Schema<
  serializers.payments.refund.Request.Raw,
  Omit<PrimerPrimerApi.RefundPaymentRequest, "idempotencyKey">
> = core.schemas.object({
  amount: core.schemas.number().optional(),
  orderId: core.schemas.string().optional(),
  reason: core.schemas.string().optional(),
});

export declare namespace Request {
  interface Raw {
    amount?: number | null;
    orderId?: string | null;
    reason?: string | null;
  }
}

export const Response: core.schemas.Schema<serializers.payments.refund.Response.Raw, PrimerPrimerApi.PaymentResponse> =
  core.schemas.lazyObject(async () => (await import("../..")).PaymentResponse);

export declare namespace Response {
  type Raw = serializers.PaymentResponse.Raw;
}
