/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Supported card networks.
 */
export type CardNetworkType =
  | "AMEX"
  | "DANKORT"
  | "DINERS_CLUB"
  | "DISCOVER"
  | "ENROUTE"
  | "ELO"
  | "HIPER"
  | "INTERAC"
  | "JCB"
  | "MAESTRO"
  | "MASTERCARD"
  | "MIR"
  | "PRIVATE_LABEL"
  | "UNIONPAY"
  | "VISA";

export const CardNetworkType = {
  Amex: "AMEX",
  Dankort: "DANKORT",
  DinersClub: "DINERS_CLUB",
  Discover: "DISCOVER",
  Enroute: "ENROUTE",
  Elo: "ELO",
  Hiper: "HIPER",
  Interac: "INTERAC",
  Jcb: "JCB",
  Maestro: "MAESTRO",
  Mastercard: "MASTERCARD",
  Mir: "MIR",
  PrivateLabel: "PRIVATE_LABEL",
  Unionpay: "UNIONPAY",
  Visa: "VISA",
} as const;
