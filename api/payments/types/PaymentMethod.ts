/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";

export type PaymentMethod =
  | PaymentMethod.PaymentCard
  | PaymentMethod.PaypalOrder
  | PaymentMethod.PaypalBilling
  | PaymentMethod.GoCardless
  | PaymentMethod.KlarnaPaymentSession
  | PaymentMethod.KlarnaCustomerToken
  | PaymentMethod.IdealPayNlToken
  | PaymentMethod.ApayaCustomerToken
  | PaymentMethod._Unknown;

export declare namespace PaymentMethod {
  interface PaymentCard extends PrimerApi.payments.PaymentCardSchema, _Utils {
    paymentMethodType: "PAYMENT_CARD";
  }

  interface PaypalOrder extends PrimerApi.payments.PayPalOrderSchema, _Utils {
    paymentMethodType: "PAYPAL_ORDER";
  }

  interface PaypalBilling extends PrimerApi.payments.PayPalBillingAgreementSchema, _Utils {
    paymentMethodType: "PAYPAL_BILLING";
  }

  interface GoCardless extends PrimerApi.payments.GoCardlessMandateSchema, _Utils {
    paymentMethodType: "GO_CARDLESS";
  }

  interface KlarnaPaymentSession extends PrimerApi.payments.KlarnaPaymentSessionSchema, _Utils {
    paymentMethodType: "KLARNA_PAYMENT_SESSION";
  }

  interface KlarnaCustomerToken extends PrimerApi.payments.KlarnaCustomerTokenSchema, _Utils {
    paymentMethodType: "KLARNA_CUSTOMER_TOKEN";
  }

  interface IdealPayNlToken extends PrimerApi.payments.IdealPayNLTokenSchema, _Utils {
    paymentMethodType: "IDEAL_PAY_NL_TOKEN";
  }

  interface ApayaCustomerToken extends PrimerApi.payments.ApayaCustomerTokenSchema, _Utils {
    paymentMethodType: "APAYA_CUSTOMER_TOKEN";
  }

  interface _Unknown extends _Utils {
    paymentMethodType: void;
  }

  interface _Utils {
    _visit: <Result>(visitor: PaymentMethod._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    paymentCard: (value: PrimerApi.payments.PaymentCardSchema) => Result;
    paypalOrder: (value: PrimerApi.payments.PayPalOrderSchema) => Result;
    paypalBilling: (value: PrimerApi.payments.PayPalBillingAgreementSchema) => Result;
    goCardless: (value: PrimerApi.payments.GoCardlessMandateSchema) => Result;
    klarnaPaymentSession: (value: PrimerApi.payments.KlarnaPaymentSessionSchema) => Result;
    klarnaCustomerToken: (value: PrimerApi.payments.KlarnaCustomerTokenSchema) => Result;
    idealPayNlToken: (value: PrimerApi.payments.IdealPayNLTokenSchema) => Result;
    apayaCustomerToken: (value: PrimerApi.payments.ApayaCustomerTokenSchema) => Result;
    _other: (value: { paymentMethodType: string }) => Result;
  }
}

export const PaymentMethod = {
  paymentCard: (value: PrimerApi.payments.PaymentCardSchema): PaymentMethod.PaymentCard => {
    const valueWithoutVisit: Omit<PaymentMethod.PaymentCard, "_visit"> = {
      ...value,
      paymentMethodType: "PAYMENT_CARD",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as PaymentMethod.PaymentCard;
    castedValue._visit = (visitor) => visitor.paymentCard(value);
    return castedValue;
  },

  paypalOrder: (value: PrimerApi.payments.PayPalOrderSchema): PaymentMethod.PaypalOrder => {
    const valueWithoutVisit: Omit<PaymentMethod.PaypalOrder, "_visit"> = {
      ...value,
      paymentMethodType: "PAYPAL_ORDER",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as PaymentMethod.PaypalOrder;
    castedValue._visit = (visitor) => visitor.paypalOrder(value);
    return castedValue;
  },

  paypalBilling: (value: PrimerApi.payments.PayPalBillingAgreementSchema): PaymentMethod.PaypalBilling => {
    const valueWithoutVisit: Omit<PaymentMethod.PaypalBilling, "_visit"> = {
      ...value,
      paymentMethodType: "PAYPAL_BILLING",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as PaymentMethod.PaypalBilling;
    castedValue._visit = (visitor) => visitor.paypalBilling(value);
    return castedValue;
  },

  goCardless: (value: PrimerApi.payments.GoCardlessMandateSchema): PaymentMethod.GoCardless => {
    const valueWithoutVisit: Omit<PaymentMethod.GoCardless, "_visit"> = {
      ...value,
      paymentMethodType: "GO_CARDLESS",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as PaymentMethod.GoCardless;
    castedValue._visit = (visitor) => visitor.goCardless(value);
    return castedValue;
  },

  klarnaPaymentSession: (value: PrimerApi.payments.KlarnaPaymentSessionSchema): PaymentMethod.KlarnaPaymentSession => {
    const valueWithoutVisit: Omit<PaymentMethod.KlarnaPaymentSession, "_visit"> = {
      ...value,
      paymentMethodType: "KLARNA_PAYMENT_SESSION",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as PaymentMethod.KlarnaPaymentSession;
    castedValue._visit = (visitor) => visitor.klarnaPaymentSession(value);
    return castedValue;
  },

  klarnaCustomerToken: (value: PrimerApi.payments.KlarnaCustomerTokenSchema): PaymentMethod.KlarnaCustomerToken => {
    const valueWithoutVisit: Omit<PaymentMethod.KlarnaCustomerToken, "_visit"> = {
      ...value,
      paymentMethodType: "KLARNA_CUSTOMER_TOKEN",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as PaymentMethod.KlarnaCustomerToken;
    castedValue._visit = (visitor) => visitor.klarnaCustomerToken(value);
    return castedValue;
  },

  idealPayNlToken: (value: PrimerApi.payments.IdealPayNLTokenSchema): PaymentMethod.IdealPayNlToken => {
    const valueWithoutVisit: Omit<PaymentMethod.IdealPayNlToken, "_visit"> = {
      ...value,
      paymentMethodType: "IDEAL_PAY_NL_TOKEN",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as PaymentMethod.IdealPayNlToken;
    castedValue._visit = (visitor) => visitor.idealPayNlToken(value);
    return castedValue;
  },

  apayaCustomerToken: (value: PrimerApi.payments.ApayaCustomerTokenSchema): PaymentMethod.ApayaCustomerToken => {
    const valueWithoutVisit: Omit<PaymentMethod.ApayaCustomerToken, "_visit"> = {
      ...value,
      paymentMethodType: "APAYA_CUSTOMER_TOKEN",
    };
    Object.defineProperty(valueWithoutVisit, "_visit", {
      enumerable: false,
      writable: true,
    });
    const castedValue = valueWithoutVisit as PaymentMethod.ApayaCustomerToken;
    castedValue._visit = (visitor) => visitor.apayaCustomerToken(value);
    return castedValue;
  },
} as const;
