/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export const AccountNumberType: core.schemas.Schema<
  serializers.AccountNumberType.Raw,
  PrimerPrimerApi.AccountNumberType
> = core.schemas.enum_(["PRIMARY_ACCOUNT_NUMBER", "NETWORK_TOKEN", "UNKNOWN"]);

export declare namespace AccountNumberType {
  type Raw = "PRIMARY_ACCOUNT_NUMBER" | "NETWORK_TOKEN" | "UNKNOWN";
}
