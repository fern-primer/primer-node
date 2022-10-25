/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const StatusReason: core.schemas.ObjectSchema<StatusReason.Raw, PrimerApi.payments.StatusReason> =
  core.schemas.object({
    type: core.schemas.lazy(() => serializers.payments.StatusReasonType),
    declineType: core.schemas.lazy(() => serializers.payments.StatusReasonDeclineType).optional(),
    code: core.schemas.lazy(() => serializers.payments.StatusReasonCode).optional(),
    message: core.schemas.string().optional(),
  });

export declare namespace StatusReason {
  interface Raw {
    type: serializers.payments.StatusReasonType.Raw;
    declineType?: serializers.payments.StatusReasonDeclineType.Raw | null;
    code?: serializers.payments.StatusReasonCode.Raw | null;
    message?: string | null;
  }
}