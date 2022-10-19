/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface SecureAuthenticationResponseCode<
  RawValue extends SecureAuthenticationResponseCode.RawValue = SecureAuthenticationResponseCode.RawValue
> {
  value: RawValue;
  visit: <Result>(visitor: SecureAuthenticationResponseCode._Visitor<Result>) => Result;
}

const _NotPerformed: SecureAuthenticationResponseCode<"NOT_PERFORMED"> = {
  value: "NOT_PERFORMED",
  visit: (visitor) => visitor.notPerformed(),
};
const _Skipped: SecureAuthenticationResponseCode<"SKIPPED"> = {
  value: "SKIPPED",
  visit: (visitor) => visitor.skipped(),
};
const _AuthSuccess: SecureAuthenticationResponseCode<"AUTH_SUCCESS"> = {
  value: "AUTH_SUCCESS",
  visit: (visitor) => visitor.authSuccess(),
};
const _AuthFailed: SecureAuthenticationResponseCode<"AUTH_FAILED"> = {
  value: "AUTH_FAILED",
  visit: (visitor) => visitor.authFailed(),
};
const _ChallengeMethod: SecureAuthenticationResponseCode<"CHALLENGE_METHOD"> = {
  value: "CHALLENGE_METHOD",
  visit: (visitor) => visitor.challengeMethod(),
};
export const SecureAuthenticationResponseCode = {
  NotPerformed: _NotPerformed,
  Skipped: _Skipped,
  AuthSuccess: _AuthSuccess,
  AuthFailed: _AuthFailed,
  ChallengeMethod: _ChallengeMethod,
} as const;

export declare namespace SecureAuthenticationResponseCode {
  type RawValue = "NOT_PERFORMED" | "SKIPPED" | "AUTH_SUCCESS" | "AUTH_FAILED" | "CHALLENGE_METHOD" | string;

  interface _Visitor<Result> {
    notPerformed: () => Result;
    skipped: () => Result;
    authSuccess: () => Result;
    authFailed: () => Result;
    challengeMethod: () => Result;
    _other: (value: string) => Result;
  }
}