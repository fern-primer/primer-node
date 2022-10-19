/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const Network: core.schemas.ObjectSchema<Network.Raw, PrimerApi.clientSession.Network> = core.schemas.object({
  surcharge: core.schemas.lazyObject(() => schemas.clientSession.Surcharge).optional(),
});

export declare namespace Network {
  interface Raw {
    surcharge?: schemas.clientSession.Surcharge.Raw | null;
  }
}