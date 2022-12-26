/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const TransactionType: core.schemas.Schema<serializers.TransactionType.Raw, PrimerPrimerApi.TransactionType> =
  core.schemas.enum_(["SALE", "REFUND"]);

export declare namespace TransactionType {
  type Raw = "SALE" | "REFUND";
}
