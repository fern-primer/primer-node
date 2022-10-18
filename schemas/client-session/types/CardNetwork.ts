/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const CardNetwork: core.schemas.Schema<CardNetwork.Raw, PrimerApi.clientSession.CardNetwork> = core.schemas
  .record(
    core.schemas.string(),
    core.schemas.lazyObject(() => schemas.clientSession.Surcharge)
  )
  .optional();

export declare namespace CardNetwork {
  type Raw = Record<schemas.commons.CardNetworkType.Raw, schemas.clientSession.Surcharge.Raw> | null | undefined;
}
