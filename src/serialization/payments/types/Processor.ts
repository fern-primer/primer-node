/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const Processor: core.schemas.ObjectSchema<serializers.Processor.Raw, PrimerPrimerApi.Processor> =
  core.schemas.object({
    name: core.schemas.string().optional(),
    processorMerchantId: core.schemas.string().optional(),
    amountCaptured: core.schemas.number().optional(),
    amountRefunded: core.schemas.number().optional(),
  });

export declare namespace Processor {
  interface Raw {
    name?: string | null;
    processorMerchantId?: string | null;
    amountCaptured?: number | null;
    amountRefunded?: number | null;
  }
}
