/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface PaymentType<RawValue extends PaymentType.RawValue = PaymentType.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: PaymentType._Visitor<Result>) => Result;
}

const _FirstPayment: PaymentType<"FIRST_PAYMENT"> = {
  value: "FIRST_PAYMENT",
  visit: (visitor) => visitor.firstPayment(),
};
const _Ecommerce: PaymentType<"ECOMMERCE"> = {
  value: "ECOMMERCE",
  visit: (visitor) => visitor.ecommerce(),
};
const _Subscription: PaymentType<"SUBSCRIPTION"> = {
  value: "SUBSCRIPTION",
  visit: (visitor) => visitor.subscription(),
};
const _Unscheduled: PaymentType<"UNSCHEDULED"> = {
  value: "UNSCHEDULED",
  visit: (visitor) => visitor.unscheduled(),
};
export const PaymentType = {
  FirstPayment: _FirstPayment,
  Ecommerce: _Ecommerce,
  Subscription: _Subscription,
  Unscheduled: _Unscheduled,
  _parse: (value: string): PaymentType => {
    switch (value) {
      case "FIRST_PAYMENT": {
        return _FirstPayment;
      }
      case "ECOMMERCE": {
        return _Ecommerce;
      }
      case "SUBSCRIPTION": {
        return _Subscription;
      }
      case "UNSCHEDULED": {
        return _Unscheduled;
      }
      default: {
        return {
          value: value as PaymentType.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace PaymentType {
  type RawValue = "FIRST_PAYMENT" | "ECOMMERCE" | "SUBSCRIPTION" | "UNSCHEDULED";

  interface _Visitor<Result> {
    firstPayment: () => Result;
    ecommerce: () => Result;
    subscription: () => Result;
    unscheduled: () => Result;
    _other: (value: string) => Result;
  }
}
