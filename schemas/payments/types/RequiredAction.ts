/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";

export const RequiredAction: core.schemas.ObjectSchema<RequiredAction.Raw, PrimerApi.payments.RequiredAction> =
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