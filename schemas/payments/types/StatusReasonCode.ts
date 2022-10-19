/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";

export const StatusReasonCode: core.schemas.Schema<StatusReasonCode.Raw, PrimerApi.payments.StatusReasonCode> =
  core.schemas.string().transform<PrimerApi.payments.StatusReasonCode>({
    parse: (value) => {
      switch (value) {
        case "ERROR": {
          return PrimerApi.payments.StatusReasonCode.Error;
        }
        case "INVALID_CARD_NUMBER": {
          return PrimerApi.payments.StatusReasonCode.InvalidCardNumber;
        }
        case "EXPIRED_CARD": {
          return PrimerApi.payments.StatusReasonCode.ExpiredCard;
        }
        case "LOST_OR_STOLEN_CARD": {
          return PrimerApi.payments.StatusReasonCode.LostOrStolenCard;
        }
        case "SUSPECTED_FRAUD": {
          return PrimerApi.payments.StatusReasonCode.SuspectedFraud;
        }
        case "UNKNOWN_DECLINED": {
          return PrimerApi.payments.StatusReasonCode.UnknownDeclined;
        }
        case "REFER_TO_CARD_ISSUER": {
          return PrimerApi.payments.StatusReasonCode.ReferToCardIssuer;
        }
        case "DO_NOT_HONOR": {
          return PrimerApi.payments.StatusReasonCode.DoNotHonor;
        }
        case "INSUFFICIENT_FUNDS": {
          return PrimerApi.payments.StatusReasonCode.InsufficientFunds;
        }
        case "WITHDRAWAL_LIMIT_EXCEEDED": {
          return PrimerApi.payments.StatusReasonCode.WithdrawalLimitExceeded;
        }
        case "ISSUER_TEMPORARILY_UNAVAILABLE": {
          return PrimerApi.payments.StatusReasonCode.IssuerTemporarilyUnavailable;
        }
        case "AUTHENTICATION_REQUIRED": {
          return PrimerApi.payments.StatusReasonCode.AuthenticationRequired;
        }
        default: {
          return {
            value: value,
            visit: (visitor) => visitor._other(value),
          };
        }
      }
    },
    json: (value) => value.value,
  });

export declare namespace StatusReasonCode {
  type Raw = string;
}