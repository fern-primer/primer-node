/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";

export interface NetworkOrSurchargeObject {
  networks?: Record<PrimerApi.commons.CardNetworkType.RawValue, PrimerApi.clientSession.Network>;
  surcharge?: PrimerApi.clientSession.Surcharge;
}
