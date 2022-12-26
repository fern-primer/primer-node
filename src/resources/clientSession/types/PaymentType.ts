/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PaymentType =
  /**
   * a customer-initiated payment which is the first in a series of recurring payments or subscription, or a card on file scenario. */
  | "FIRST_PAYMENT"
  /**
   * a customer-initiated payment using stored payment details where the cardholder is present. */
  | "ECOMMERCE"
  /**
   * a merchant-initiated payment as part of a series of payments on a fixed schedule and a set amount. */
  | "SUBSCRIPTION"
  /**
   * a merchant-initiated payment using stored payment details with no fixed schedule or amount. */
  | "UNSCHEDULED";

export const PaymentType = {
  FirstPayment: "FIRST_PAYMENT",
  Ecommerce: "ECOMMERCE",
  Subscription: "SUBSCRIPTION",
  Unscheduled: "UNSCHEDULED",
} as const;
