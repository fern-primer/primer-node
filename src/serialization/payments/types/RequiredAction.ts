/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const RequiredAction: core.schemas.ObjectSchema<serializers.RequiredAction.Raw, PrimerPrimerApi.RequiredAction> =
  core.schemas.object({
    name: core.schemas.string(),
    description: core.schemas.string(),
    clientToken: core.schemas.string().optional(),
  });

export declare namespace RequiredAction {
  interface Raw {
    name: string;
    description: string;
    clientToken?: string | null;
  }
}
