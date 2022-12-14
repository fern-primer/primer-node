/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const PaymentsData: core.schemas.ObjectSchema<serializers.PaymentsData.Raw, PrimerPrimerApi.PaymentsData> =
  core.schemas.object({
    data: core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).SearchPaymentResponse)),
    nextCursor: core.schemas.string().optional(),
    prevCursor: core.schemas.string().optional(),
  });

export declare namespace PaymentsData {
  interface Raw {
    data: serializers.SearchPaymentResponse.Raw[];
    nextCursor?: string | null;
    prevCursor?: string | null;
  }
}
