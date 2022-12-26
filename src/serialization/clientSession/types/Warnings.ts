/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const Warnings: core.schemas.ObjectSchema<serializers.Warnings.Raw, PrimerPrimerApi.Warnings> =
  core.schemas.object({
    type: core.schemas.string().optional(),
    code: core.schemas.string().optional(),
    message: core.schemas.string().optional(),
  });

export declare namespace Warnings {
  interface Raw {
    type?: string | null;
    code?: string | null;
    message?: string | null;
  }
}
