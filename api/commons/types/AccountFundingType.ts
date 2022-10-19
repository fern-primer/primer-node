/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface AccountFundingType<RawValue extends AccountFundingType.RawValue = AccountFundingType.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: AccountFundingType._Visitor<Result>) => Result;
}

const _Credit: AccountFundingType<"CREDIT"> = {
  value: "CREDIT",
  visit: (visitor) => visitor.credit(),
};
const _Debit: AccountFundingType<"DEBIT"> = {
  value: "DEBIT",
  visit: (visitor) => visitor.debit(),
};
const _Prepaid: AccountFundingType<"PREPAID"> = {
  value: "PREPAID",
  visit: (visitor) => visitor.prepaid(),
};
const _Charge: AccountFundingType<"CHARGE"> = {
  value: "CHARGE",
  visit: (visitor) => visitor.charge(),
};
const _DeferredDebit: AccountFundingType<"DEFERRED_DEBIT"> = {
  value: "DEFERRED_DEBIT",
  visit: (visitor) => visitor.deferredDebit(),
};
const _Unknown: AccountFundingType<"UNKNOWN"> = {
  value: "UNKNOWN",
  visit: (visitor) => visitor.unknown(),
};
export const AccountFundingType = {
  Credit: _Credit,
  Debit: _Debit,
  Prepaid: _Prepaid,
  Charge: _Charge,
  DeferredDebit: _DeferredDebit,
  Unknown: _Unknown,
} as const;

export declare namespace AccountFundingType {
  type RawValue = "CREDIT" | "DEBIT" | "PREPAID" | "CHARGE" | "DEFERRED_DEBIT" | "UNKNOWN" | string;

  interface _Visitor<Result> {
    credit: () => Result;
    debit: () => Result;
    prepaid: () => Result;
    charge: () => Result;
    deferredDebit: () => Result;
    unknown: () => Result;
    _other: (value: string) => Result;
  }
}