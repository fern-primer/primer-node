/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Supported payment methods.
 */
export type SupportedPaymentMethods =
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

export const SupportedPaymentMethods = {
  PaymentCard: "PAYMENT_CARD",
  GooglePay: "GOOGLE_PAY",
  ApplePay: "APPLE_PAY",
  Paypal: "PAYPAL",
  Gocardless: "GOCARDLESS",
  Klarna: "KLARNA",
  Apaya: "APAYA",
  Hoolah: "HOOLAH",
  Atome: "ATOME",
  PayNlIdeal: "PAY_NL_IDEAL",
  PayNlBancontact: "PAY_NL_BANCONTACT",
  PayNlDirectDebit: "PAY_NL_DIRECT_DEBIT",
  PayNlSofortBanking: "PAY_NL_SOFORT_BANKING",
  PayNlPaypal: "PAY_NL_PAYPAL",
  PayNlPayconiq: "PAY_NL_PAYCONIQ",
  PayNlGiropay: "PAY_NL_GIROPAY",
  AdyenSofort: "ADYEN_SOFORT",
  AdyenTwint: "ADYEN_TWINT",
  AdyenGiropay: "ADYEN_GIROPAY",
  AdyenTrustly: "ADYEN_TRUSTLY",
  AdyenAlipay: "ADYEN_ALIPAY",
  AdyenMobilepay: "ADYEN_MOBILEPAY",
  AdyenVipps: "ADYEN_VIPPS",
  AdyenDotpay: "ADYEN_DOTPAY",
  AdyenIdeal: "ADYEN_IDEAL",
  MollieIdeal: "MOLLIE_IDEAL",
  MollieBancontact: "MOLLIE_BANCONTACT",
  BuckarooIdeal: "BUCKAROO_IDEAL",
  BuckarooBancontact: "BUCKAROO_BANCONTACT",
  BuckarooSofort: "BUCKAROO_SOFORT",
  BuckarooGiropay: "BUCKAROO_GIROPAY",
  BuckarooEps: "BUCKAROO_EPS",
  XfersPaynow: "XFERS_PAYNOW",
} as const;
