/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface StatusReasonCode<RawValue extends StatusReasonCode.RawValue = StatusReasonCode.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: StatusReasonCode._Visitor<Result>) => Result;
}

const _Error: StatusReasonCode<"ERROR"> = {
  value: "ERROR",
  visit: (visitor) => visitor.error(),
};
const _InvalidCardNumber: StatusReasonCode<"INVALID_CARD_NUMBER"> = {
  value: "INVALID_CARD_NUMBER",
  visit: (visitor) => visitor.invalidCardNumber(),
};
const _ExpiredCard: StatusReasonCode<"EXPIRED_CARD"> = {
  value: "EXPIRED_CARD",
  visit: (visitor) => visitor.expiredCard(),
};
const _LostOrStolenCard: StatusReasonCode<"LOST_OR_STOLEN_CARD"> = {
  value: "LOST_OR_STOLEN_CARD",
  visit: (visitor) => visitor.lostOrStolenCard(),
};
const _SuspectedFraud: StatusReasonCode<"SUSPECTED_FRAUD"> = {
  value: "SUSPECTED_FRAUD",
  visit: (visitor) => visitor.suspectedFraud(),
};
const _UnknownDeclined: StatusReasonCode<"UNKNOWN_DECLINED"> = {
  value: "UNKNOWN_DECLINED",
  visit: (visitor) => visitor.unknownDeclined(),
};
const _ReferToCardIssuer: StatusReasonCode<"REFER_TO_CARD_ISSUER"> = {
  value: "REFER_TO_CARD_ISSUER",
  visit: (visitor) => visitor.referToCardIssuer(),
};
const _DoNotHonor: StatusReasonCode<"DO_NOT_HONOR"> = {
  value: "DO_NOT_HONOR",
  visit: (visitor) => visitor.doNotHonor(),
};
const _InsufficientFunds: StatusReasonCode<"INSUFFICIENT_FUNDS"> = {
  value: "INSUFFICIENT_FUNDS",
  visit: (visitor) => visitor.insufficientFunds(),
};
const _WithdrawalLimitExceeded: StatusReasonCode<"WITHDRAWAL_LIMIT_EXCEEDED"> = {
  value: "WITHDRAWAL_LIMIT_EXCEEDED",
  visit: (visitor) => visitor.withdrawalLimitExceeded(),
};
const _IssuerTemporarilyUnavailable: StatusReasonCode<"ISSUER_TEMPORARILY_UNAVAILABLE"> = {
  value: "ISSUER_TEMPORARILY_UNAVAILABLE",
  visit: (visitor) => visitor.issuerTemporarilyUnavailable(),
};
const _AuthenticationRequired: StatusReasonCode<"AUTHENTICATION_REQUIRED"> = {
  value: "AUTHENTICATION_REQUIRED",
  visit: (visitor) => visitor.authenticationRequired(),
};
export const StatusReasonCode = {
  Error: _Error,
  InvalidCardNumber: _InvalidCardNumber,
  ExpiredCard: _ExpiredCard,
  LostOrStolenCard: _LostOrStolenCard,
  SuspectedFraud: _SuspectedFraud,
  UnknownDeclined: _UnknownDeclined,
  ReferToCardIssuer: _ReferToCardIssuer,
  DoNotHonor: _DoNotHonor,
  InsufficientFunds: _InsufficientFunds,
  WithdrawalLimitExceeded: _WithdrawalLimitExceeded,
  IssuerTemporarilyUnavailable: _IssuerTemporarilyUnavailable,
  AuthenticationRequired: _AuthenticationRequired,
  _parse: (value: string): StatusReasonCode => {
    switch (value) {
      case "ERROR": {
        return _Error;
      }
      case "INVALID_CARD_NUMBER": {
        return _InvalidCardNumber;
      }
      case "EXPIRED_CARD": {
        return _ExpiredCard;
      }
      case "LOST_OR_STOLEN_CARD": {
        return _LostOrStolenCard;
      }
      case "SUSPECTED_FRAUD": {
        return _SuspectedFraud;
      }
      case "UNKNOWN_DECLINED": {
        return _UnknownDeclined;
      }
      case "REFER_TO_CARD_ISSUER": {
        return _ReferToCardIssuer;
      }
      case "DO_NOT_HONOR": {
        return _DoNotHonor;
      }
      case "INSUFFICIENT_FUNDS": {
        return _InsufficientFunds;
      }
      case "WITHDRAWAL_LIMIT_EXCEEDED": {
        return _WithdrawalLimitExceeded;
      }
      case "ISSUER_TEMPORARILY_UNAVAILABLE": {
        return _IssuerTemporarilyUnavailable;
      }
      case "AUTHENTICATION_REQUIRED": {
        return _AuthenticationRequired;
      }
      default: {
        return {
          value: value as StatusReasonCode.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace StatusReasonCode {
  type RawValue =
    | "ERROR"
    | "INVALID_CARD_NUMBER"
    | "EXPIRED_CARD"
    | "LOST_OR_STOLEN_CARD"
    | "SUSPECTED_FRAUD"
    | "UNKNOWN_DECLINED"
    | "REFER_TO_CARD_ISSUER"
    | "DO_NOT_HONOR"
    | "INSUFFICIENT_FUNDS"
    | "WITHDRAWAL_LIMIT_EXCEEDED"
    | "ISSUER_TEMPORARILY_UNAVAILABLE"
    | "AUTHENTICATION_REQUIRED";

  interface _Visitor<Result> {
    error: () => Result;
    invalidCardNumber: () => Result;
    expiredCard: () => Result;
    lostOrStolenCard: () => Result;
    suspectedFraud: () => Result;
    unknownDeclined: () => Result;
    referToCardIssuer: () => Result;
    doNotHonor: () => Result;
    insufficientFunds: () => Result;
    withdrawalLimitExceeded: () => Result;
    issuerTemporarilyUnavailable: () => Result;
    authenticationRequired: () => Result;
    _other: (value: string) => Result;
  }
}