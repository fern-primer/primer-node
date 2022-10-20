/**
 * This file auto-generated by Fern from our API Definition.
 */

/**
 * Supported payment methods.
 */
export interface SupportedPaymentMethods<
  RawValue extends SupportedPaymentMethods.RawValue = SupportedPaymentMethods.RawValue
> {
  value: RawValue;
  visit: <Result>(visitor: SupportedPaymentMethods._Visitor<Result>) => Result;
}

const _PaymentCard: SupportedPaymentMethods<"PAYMENT_CARD"> = {
  value: "PAYMENT_CARD",
  visit: (visitor) => visitor.paymentCard(),
};
const _GooglePay: SupportedPaymentMethods<"GOOGLE_PAY"> = {
  value: "GOOGLE_PAY",
  visit: (visitor) => visitor.googlePay(),
};
const _ApplePay: SupportedPaymentMethods<"APPLE_PAY"> = {
  value: "APPLE_PAY",
  visit: (visitor) => visitor.applePay(),
};
const _Paypal: SupportedPaymentMethods<"PAYPAL"> = {
  value: "PAYPAL",
  visit: (visitor) => visitor.paypal(),
};
const _Gocardless: SupportedPaymentMethods<"GOCARDLESS"> = {
  value: "GOCARDLESS",
  visit: (visitor) => visitor.gocardless(),
};
const _Klarna: SupportedPaymentMethods<"KLARNA"> = {
  value: "KLARNA",
  visit: (visitor) => visitor.klarna(),
};
const _Apaya: SupportedPaymentMethods<"APAYA"> = {
  value: "APAYA",
  visit: (visitor) => visitor.apaya(),
};
const _Hoolah: SupportedPaymentMethods<"HOOLAH"> = {
  value: "HOOLAH",
  visit: (visitor) => visitor.hoolah(),
};
const _Atome: SupportedPaymentMethods<"ATOME"> = {
  value: "ATOME",
  visit: (visitor) => visitor.atome(),
};
const _PayNlIdeal: SupportedPaymentMethods<"PAY_NL_IDEAL"> = {
  value: "PAY_NL_IDEAL",
  visit: (visitor) => visitor.payNlIdeal(),
};
const _PayNlBancontact: SupportedPaymentMethods<"PAY_NL_BANCONTACT"> = {
  value: "PAY_NL_BANCONTACT",
  visit: (visitor) => visitor.payNlBancontact(),
};
const _PayNlDirectDebit: SupportedPaymentMethods<"PAY_NL_DIRECT_DEBIT"> = {
  value: "PAY_NL_DIRECT_DEBIT",
  visit: (visitor) => visitor.payNlDirectDebit(),
};
const _PayNlSofortBanking: SupportedPaymentMethods<"PAY_NL_SOFORT_BANKING"> = {
  value: "PAY_NL_SOFORT_BANKING",
  visit: (visitor) => visitor.payNlSofortBanking(),
};
const _PayNlPaypal: SupportedPaymentMethods<"PAY_NL_PAYPAL"> = {
  value: "PAY_NL_PAYPAL",
  visit: (visitor) => visitor.payNlPaypal(),
};
const _PayNlPayconiq: SupportedPaymentMethods<"PAY_NL_PAYCONIQ"> = {
  value: "PAY_NL_PAYCONIQ",
  visit: (visitor) => visitor.payNlPayconiq(),
};
const _PayNlGiropay: SupportedPaymentMethods<"PAY_NL_GIROPAY"> = {
  value: "PAY_NL_GIROPAY",
  visit: (visitor) => visitor.payNlGiropay(),
};
const _AdyenSofort: SupportedPaymentMethods<"ADYEN_SOFORT"> = {
  value: "ADYEN_SOFORT",
  visit: (visitor) => visitor.adyenSofort(),
};
const _AdyenTwint: SupportedPaymentMethods<"ADYEN_TWINT"> = {
  value: "ADYEN_TWINT",
  visit: (visitor) => visitor.adyenTwint(),
};
const _AdyenGiropay: SupportedPaymentMethods<"ADYEN_GIROPAY"> = {
  value: "ADYEN_GIROPAY",
  visit: (visitor) => visitor.adyenGiropay(),
};
const _AdyenTrustly: SupportedPaymentMethods<"ADYEN_TRUSTLY"> = {
  value: "ADYEN_TRUSTLY",
  visit: (visitor) => visitor.adyenTrustly(),
};
const _AdyenAlipay: SupportedPaymentMethods<"ADYEN_ALIPAY"> = {
  value: "ADYEN_ALIPAY",
  visit: (visitor) => visitor.adyenAlipay(),
};
const _AdyenMobilepay: SupportedPaymentMethods<"ADYEN_MOBILEPAY"> = {
  value: "ADYEN_MOBILEPAY",
  visit: (visitor) => visitor.adyenMobilepay(),
};
const _AdyenVipps: SupportedPaymentMethods<"ADYEN_VIPPS"> = {
  value: "ADYEN_VIPPS",
  visit: (visitor) => visitor.adyenVipps(),
};
const _AdyenDotpay: SupportedPaymentMethods<"ADYEN_DOTPAY"> = {
  value: "ADYEN_DOTPAY",
  visit: (visitor) => visitor.adyenDotpay(),
};
const _AdyenIdeal: SupportedPaymentMethods<"ADYEN_IDEAL"> = {
  value: "ADYEN_IDEAL",
  visit: (visitor) => visitor.adyenIdeal(),
};
const _MollieIdeal: SupportedPaymentMethods<"MOLLIE_IDEAL"> = {
  value: "MOLLIE_IDEAL",
  visit: (visitor) => visitor.mollieIdeal(),
};
const _MollieBancontact: SupportedPaymentMethods<"MOLLIE_BANCONTACT"> = {
  value: "MOLLIE_BANCONTACT",
  visit: (visitor) => visitor.mollieBancontact(),
};
const _BuckarooIdeal: SupportedPaymentMethods<"BUCKAROO_IDEAL"> = {
  value: "BUCKAROO_IDEAL",
  visit: (visitor) => visitor.buckarooIdeal(),
};
const _BuckarooBancontact: SupportedPaymentMethods<"BUCKAROO_BANCONTACT"> = {
  value: "BUCKAROO_BANCONTACT",
  visit: (visitor) => visitor.buckarooBancontact(),
};
const _BuckarooSofort: SupportedPaymentMethods<"BUCKAROO_SOFORT"> = {
  value: "BUCKAROO_SOFORT",
  visit: (visitor) => visitor.buckarooSofort(),
};
const _BuckarooGiropay: SupportedPaymentMethods<"BUCKAROO_GIROPAY"> = {
  value: "BUCKAROO_GIROPAY",
  visit: (visitor) => visitor.buckarooGiropay(),
};
const _BuckarooEps: SupportedPaymentMethods<"BUCKAROO_EPS"> = {
  value: "BUCKAROO_EPS",
  visit: (visitor) => visitor.buckarooEps(),
};
const _XfersPaynow: SupportedPaymentMethods<"XFERS_PAYNOW"> = {
  value: "XFERS_PAYNOW",
  visit: (visitor) => visitor.xfersPaynow(),
};
export const SupportedPaymentMethods = {
  PaymentCard: _PaymentCard,
  GooglePay: _GooglePay,
  ApplePay: _ApplePay,
  Paypal: _Paypal,
  Gocardless: _Gocardless,
  Klarna: _Klarna,
  Apaya: _Apaya,
  Hoolah: _Hoolah,
  Atome: _Atome,
  PayNlIdeal: _PayNlIdeal,
  PayNlBancontact: _PayNlBancontact,
  PayNlDirectDebit: _PayNlDirectDebit,
  PayNlSofortBanking: _PayNlSofortBanking,
  PayNlPaypal: _PayNlPaypal,
  PayNlPayconiq: _PayNlPayconiq,
  PayNlGiropay: _PayNlGiropay,
  AdyenSofort: _AdyenSofort,
  AdyenTwint: _AdyenTwint,
  AdyenGiropay: _AdyenGiropay,
  AdyenTrustly: _AdyenTrustly,
  AdyenAlipay: _AdyenAlipay,
  AdyenMobilepay: _AdyenMobilepay,
  AdyenVipps: _AdyenVipps,
  AdyenDotpay: _AdyenDotpay,
  AdyenIdeal: _AdyenIdeal,
  MollieIdeal: _MollieIdeal,
  MollieBancontact: _MollieBancontact,
  BuckarooIdeal: _BuckarooIdeal,
  BuckarooBancontact: _BuckarooBancontact,
  BuckarooSofort: _BuckarooSofort,
  BuckarooGiropay: _BuckarooGiropay,
  BuckarooEps: _BuckarooEps,
  XfersPaynow: _XfersPaynow,
  _parse: (value: string): SupportedPaymentMethods => {
    switch (value) {
      case "PAYMENT_CARD": {
        return _PaymentCard;
      }
      case "GOOGLE_PAY": {
        return _GooglePay;
      }
      case "APPLE_PAY": {
        return _ApplePay;
      }
      case "PAYPAL": {
        return _Paypal;
      }
      case "GOCARDLESS": {
        return _Gocardless;
      }
      case "KLARNA": {
        return _Klarna;
      }
      case "APAYA": {
        return _Apaya;
      }
      case "HOOLAH": {
        return _Hoolah;
      }
      case "ATOME": {
        return _Atome;
      }
      case "PAY_NL_IDEAL": {
        return _PayNlIdeal;
      }
      case "PAY_NL_BANCONTACT": {
        return _PayNlBancontact;
      }
      case "PAY_NL_DIRECT_DEBIT": {
        return _PayNlDirectDebit;
      }
      case "PAY_NL_SOFORT_BANKING": {
        return _PayNlSofortBanking;
      }
      case "PAY_NL_PAYPAL": {
        return _PayNlPaypal;
      }
      case "PAY_NL_PAYCONIQ": {
        return _PayNlPayconiq;
      }
      case "PAY_NL_GIROPAY": {
        return _PayNlGiropay;
      }
      case "ADYEN_SOFORT": {
        return _AdyenSofort;
      }
      case "ADYEN_TWINT": {
        return _AdyenTwint;
      }
      case "ADYEN_GIROPAY": {
        return _AdyenGiropay;
      }
      case "ADYEN_TRUSTLY": {
        return _AdyenTrustly;
      }
      case "ADYEN_ALIPAY": {
        return _AdyenAlipay;
      }
      case "ADYEN_MOBILEPAY": {
        return _AdyenMobilepay;
      }
      case "ADYEN_VIPPS": {
        return _AdyenVipps;
      }
      case "ADYEN_DOTPAY": {
        return _AdyenDotpay;
      }
      case "ADYEN_IDEAL": {
        return _AdyenIdeal;
      }
      case "MOLLIE_IDEAL": {
        return _MollieIdeal;
      }
      case "MOLLIE_BANCONTACT": {
        return _MollieBancontact;
      }
      case "BUCKAROO_IDEAL": {
        return _BuckarooIdeal;
      }
      case "BUCKAROO_BANCONTACT": {
        return _BuckarooBancontact;
      }
      case "BUCKAROO_SOFORT": {
        return _BuckarooSofort;
      }
      case "BUCKAROO_GIROPAY": {
        return _BuckarooGiropay;
      }
      case "BUCKAROO_EPS": {
        return _BuckarooEps;
      }
      case "XFERS_PAYNOW": {
        return _XfersPaynow;
      }
      default: {
        return {
          value: value as SupportedPaymentMethods.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace SupportedPaymentMethods {
  type RawValue =
    | "PAYMENT_CARD"
    | "GOOGLE_PAY"
    | "APPLE_PAY"
    | "PAYPAL"
    | "GOCARDLESS"
    | "KLARNA"
    | "APAYA"
    | "HOOLAH"
    | "ATOME"
    | "PAY_NL_IDEAL"
    | "PAY_NL_BANCONTACT"
    | "PAY_NL_DIRECT_DEBIT"
    | "PAY_NL_SOFORT_BANKING"
    | "PAY_NL_PAYPAL"
    | "PAY_NL_PAYCONIQ"
    | "PAY_NL_GIROPAY"
    | "ADYEN_SOFORT"
    | "ADYEN_TWINT"
    | "ADYEN_GIROPAY"
    | "ADYEN_TRUSTLY"
    | "ADYEN_ALIPAY"
    | "ADYEN_MOBILEPAY"
    | "ADYEN_VIPPS"
    | "ADYEN_DOTPAY"
    | "ADYEN_IDEAL"
    | "MOLLIE_IDEAL"
    | "MOLLIE_BANCONTACT"
    | "BUCKAROO_IDEAL"
    | "BUCKAROO_BANCONTACT"
    | "BUCKAROO_SOFORT"
    | "BUCKAROO_GIROPAY"
    | "BUCKAROO_EPS"
    | "XFERS_PAYNOW";

  interface _Visitor<Result> {
    paymentCard: () => Result;
    googlePay: () => Result;
    applePay: () => Result;
    paypal: () => Result;
    gocardless: () => Result;
    klarna: () => Result;
    apaya: () => Result;
    hoolah: () => Result;
    atome: () => Result;
    payNlIdeal: () => Result;
    payNlBancontact: () => Result;
    payNlDirectDebit: () => Result;
    payNlSofortBanking: () => Result;
    payNlPaypal: () => Result;
    payNlPayconiq: () => Result;
    payNlGiropay: () => Result;
    adyenSofort: () => Result;
    adyenTwint: () => Result;
    adyenGiropay: () => Result;
    adyenTrustly: () => Result;
    adyenAlipay: () => Result;
    adyenMobilepay: () => Result;
    adyenVipps: () => Result;
    adyenDotpay: () => Result;
    adyenIdeal: () => Result;
    mollieIdeal: () => Result;
    mollieBancontact: () => Result;
    buckarooIdeal: () => Result;
    buckarooBancontact: () => Result;
    buckarooSofort: () => Result;
    buckarooGiropay: () => Result;
    buckarooEps: () => Result;
    xfersPaynow: () => Result;
    _other: (value: string) => Result;
  }
}
