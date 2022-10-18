/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";
import * as core from "../../../core";

export const ThreeDSecureFailedReasonCodeEnum: core.schemas.Schema<
  ThreeDSecureFailedReasonCodeEnum.Raw,
  PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum
> = core.schemas.string().transform<PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum>({
  parse: (value) => {
    switch (value) {
      case "01": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.CardAuthenticationFailed;
      }
      case "02": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.UnknownDevice;
      }
      case "03": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.UnsupportedDevice;
      }
      case "04": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.ExceedsAuthenticationFrequencyLimit;
      }
      case "05": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.ExpiredCard;
      }
      case "06": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.InvalidCardNumber;
      }
      case "07": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.InvalidTransaction;
      }
      case "08": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.NoCardRecord;
      }
      case "09": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.SecurityFailure;
      }
      case "10": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.StolenCard;
      }
      case "11": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.SuspectedFraud;
      }
      case "12": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.TransactionNotPermittedToCardholder;
      }
      case "13": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.CardholderNotEnrolledInService;
      }
      case "14": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.TransactionTimedOutAtTheAcs;
      }
      case "15": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.LowConfidence;
      }
      case "16": {
        return PrimerApi.payments.ThreeDSecureFailedReasonCodeEnum.MediumConfidence;
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

export declare namespace ThreeDSecureFailedReasonCodeEnum {
  type Raw = string;
}
