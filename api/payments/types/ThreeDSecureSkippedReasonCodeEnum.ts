/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface ThreeDSecureSkippedReasonCodeEnum<
  RawValue extends ThreeDSecureSkippedReasonCodeEnum.RawValue = ThreeDSecureSkippedReasonCodeEnum.RawValue
> {
  value: RawValue;
  visit: <Result>(visitor: ThreeDSecureSkippedReasonCodeEnum._Visitor<Result>) => Result;
}

const _GatewayUnavailable: ThreeDSecureSkippedReasonCodeEnum<"GATEWAY_UNAVAILABLE"> = {
  value: "GATEWAY_UNAVAILABLE",
  visit: (visitor) => visitor.gatewayUnavailable(),
};
const _DisabledByMerchant: ThreeDSecureSkippedReasonCodeEnum<"DISABLED_BY_MERCHANT"> = {
  value: "DISABLED_BY_MERCHANT",
  visit: (visitor) => visitor.disabledByMerchant(),
};
const _NotSupportedByIssuer: ThreeDSecureSkippedReasonCodeEnum<"NOT_SUPPORTED_BY_ISSUER"> = {
  value: "NOT_SUPPORTED_BY_ISSUER",
  visit: (visitor) => visitor.notSupportedByIssuer(),
};
const _FailedToNegotiate: ThreeDSecureSkippedReasonCodeEnum<"FAILED_TO_NEGOTIATE"> = {
  value: "FAILED_TO_NEGOTIATE",
  visit: (visitor) => visitor.failedToNegotiate(),
};
const _UnknownAcsResponse: ThreeDSecureSkippedReasonCodeEnum<"UNKNOWN_ACS_RESPONSE"> = {
  value: "UNKNOWN_ACS_RESPONSE",
  visit: (visitor) => visitor.unknownAcsResponse(),
};
const _ThreeDsServerError: ThreeDSecureSkippedReasonCodeEnum<"3DS_SERVER_ERROR"> = {
  value: "3DS_SERVER_ERROR",
  visit: (visitor) => visitor.threeDsServerError(),
};
const _AcquirerNotConfigured: ThreeDSecureSkippedReasonCodeEnum<"ACQUIRER_NOT_CONFIGURED"> = {
  value: "ACQUIRER_NOT_CONFIGURED",
  visit: (visitor) => visitor.acquirerNotConfigured(),
};
const _AcquirerNotParticipating: ThreeDSecureSkippedReasonCodeEnum<"ACQUIRER_NOT_PARTICIPATING"> = {
  value: "ACQUIRER_NOT_PARTICIPATING",
  visit: (visitor) => visitor.acquirerNotParticipating(),
};
export const ThreeDSecureSkippedReasonCodeEnum = {
  GatewayUnavailable: _GatewayUnavailable,
  DisabledByMerchant: _DisabledByMerchant,
  NotSupportedByIssuer: _NotSupportedByIssuer,
  FailedToNegotiate: _FailedToNegotiate,
  UnknownAcsResponse: _UnknownAcsResponse,
  ThreeDsServerError: _ThreeDsServerError,
  AcquirerNotConfigured: _AcquirerNotConfigured,
  AcquirerNotParticipating: _AcquirerNotParticipating,
} as const;

export declare namespace ThreeDSecureSkippedReasonCodeEnum {
  type RawValue =
    | "GATEWAY_UNAVAILABLE"
    | "DISABLED_BY_MERCHANT"
    | "NOT_SUPPORTED_BY_ISSUER"
    | "FAILED_TO_NEGOTIATE"
    | "UNKNOWN_ACS_RESPONSE"
    | "3DS_SERVER_ERROR"
    | "ACQUIRER_NOT_CONFIGURED"
    | "ACQUIRER_NOT_PARTICIPATING"
    | string;

  interface _Visitor<Result> {
    gatewayUnavailable: () => Result;
    disabledByMerchant: () => Result;
    notSupportedByIssuer: () => Result;
    failedToNegotiate: () => Result;
    unknownAcsResponse: () => Result;
    threeDsServerError: () => Result;
    acquirerNotConfigured: () => Result;
    acquirerNotParticipating: () => Result;
    _other: (value: string) => Result;
  }
}
