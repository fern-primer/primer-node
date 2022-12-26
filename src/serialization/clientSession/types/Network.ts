/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const Network: core.schemas.ObjectSchema<serializers.Network.Raw, PrimerPrimerApi.Network> = core.schemas.object(
  {
    surcharge: core.schemas.lazyObject(async () => (await import("../..")).Surcharge).optional(),
  }
);

export declare namespace Network {
  interface Raw {
    surcharge?: serializers.Surcharge.Raw | null;
  }
}
