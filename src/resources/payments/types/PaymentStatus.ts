/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface PaymentStatus<RawValue extends PaymentStatus.RawValue = PaymentStatus.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: PaymentStatus._Visitor<Result>) => Result;
}

const _Pending: PaymentStatus<"PENDING"> = {
  value: "PENDING",
  visit: (visitor) => visitor.pending(),
};
const _Failed: PaymentStatus<"FAILED"> = {
  value: "FAILED",
  visit: (visitor) => visitor.failed(),
};
const _Authorized: PaymentStatus<"AUTHORIZED"> = {
  value: "AUTHORIZED",
  visit: (visitor) => visitor.authorized(),
};
const _Settling: PaymentStatus<"SETTLING"> = {
  value: "SETTLING",
  visit: (visitor) => visitor.settling(),
};
const _PartiallySettled: PaymentStatus<"PARTIALLY_SETTLED"> = {
  value: "PARTIALLY_SETTLED",
  visit: (visitor) => visitor.partiallySettled(),
};
const _Settled: PaymentStatus<"SETTLED"> = {
  value: "SETTLED",
  visit: (visitor) => visitor.settled(),
};
const _Declined: PaymentStatus<"DECLINED"> = {
  value: "DECLINED",
  visit: (visitor) => visitor.declined(),
};
const _Cancelled: PaymentStatus<"CANCELLED"> = {
  value: "CANCELLED",
  visit: (visitor) => visitor.cancelled(),
};
export const PaymentStatus = {
  /**
   * The payment has been created by Primer but not yet authorized.
   */
  Pending: _Pending,
  /**
   * The processor failed to process this payment.
   */
  Failed: _Failed,
  /**
   * The payment is authorized and awaiting capture.
   */
  Authorized: _Authorized,
  /**
   * The payment has been submitted for settlement and funds will be settled later.
   */
  Settling: _Settling,
  /**
   * The payment has been partially settled.
   */
  PartiallySettled: _PartiallySettled,
  /**
   * Funds have been settled into your account.
   */
  Settled: _Settled,
  /**
   * This payment was declined by the processor, either at a gateway or acquirer level. See the `reason` object in your response payload for more details.
   */
  Declined: _Declined,
  /**
   * The payment was cancelled prior to it being settled.
   */
  Cancelled: _Cancelled,
  _parse: (value: string): PaymentStatus => {
    switch (value) {
      case "PENDING": {
        return _Pending;
      }
      case "FAILED": {
        return _Failed;
      }
      case "AUTHORIZED": {
        return _Authorized;
      }
      case "SETTLING": {
        return _Settling;
      }
      case "PARTIALLY_SETTLED": {
        return _PartiallySettled;
      }
      case "SETTLED": {
        return _Settled;
      }
      case "DECLINED": {
        return _Declined;
      }
      case "CANCELLED": {
        return _Cancelled;
      }
      default: {
        return {
          value: value as PaymentStatus.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace PaymentStatus {
  type RawValue =
    | "PENDING"
    | "FAILED"
    | "AUTHORIZED"
    | "SETTLING"
    | "PARTIALLY_SETTLED"
    | "SETTLED"
    | "DECLINED"
    | "CANCELLED";

  interface _Visitor<Result> {
    pending: () => Result;
    failed: () => Result;
    authorized: () => Result;
    settling: () => Result;
    partiallySettled: () => Result;
    settled: () => Result;
    declined: () => Result;
    cancelled: () => Result;
    _other: (value: string) => Result;
  }
}