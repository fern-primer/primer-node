/**
 * This file auto-generated by Fern from our API Definition.
 */

/**
 * Supported card networks.
 */
export interface CardNetworkType<RawValue extends CardNetworkType.RawValue = CardNetworkType.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: CardNetworkType._Visitor<Result>) => Result;
}

const _Amex: CardNetworkType<"AMEX"> = {
  value: "AMEX",
  visit: (visitor) => visitor.amex(),
};
const _Dankort: CardNetworkType<"DANKORT"> = {
  value: "DANKORT",
  visit: (visitor) => visitor.dankort(),
};
const _DinersClub: CardNetworkType<"DINERS_CLUB"> = {
  value: "DINERS_CLUB",
  visit: (visitor) => visitor.dinersClub(),
};
const _Discover: CardNetworkType<"DISCOVER"> = {
  value: "DISCOVER",
  visit: (visitor) => visitor.discover(),
};
const _Enroute: CardNetworkType<"ENROUTE"> = {
  value: "ENROUTE",
  visit: (visitor) => visitor.enroute(),
};
const _Elo: CardNetworkType<"ELO"> = {
  value: "ELO",
  visit: (visitor) => visitor.elo(),
};
const _Hiper: CardNetworkType<"HIPER"> = {
  value: "HIPER",
  visit: (visitor) => visitor.hiper(),
};
const _Interac: CardNetworkType<"INTERAC"> = {
  value: "INTERAC",
  visit: (visitor) => visitor.interac(),
};
const _Jcb: CardNetworkType<"JCB"> = {
  value: "JCB",
  visit: (visitor) => visitor.jcb(),
};
const _Maestro: CardNetworkType<"MAESTRO"> = {
  value: "MAESTRO",
  visit: (visitor) => visitor.maestro(),
};
const _Mastercard: CardNetworkType<"MASTERCARD"> = {
  value: "MASTERCARD",
  visit: (visitor) => visitor.mastercard(),
};
const _Mir: CardNetworkType<"MIR"> = {
  value: "MIR",
  visit: (visitor) => visitor.mir(),
};
const _PrivateLabel: CardNetworkType<"PRIVATE_LABEL"> = {
  value: "PRIVATE_LABEL",
  visit: (visitor) => visitor.privateLabel(),
};
const _Unionpay: CardNetworkType<"UNIONPAY"> = {
  value: "UNIONPAY",
  visit: (visitor) => visitor.unionpay(),
};
const _Visa: CardNetworkType<"VISA"> = {
  value: "VISA",
  visit: (visitor) => visitor.visa(),
};
export const CardNetworkType = {
  Amex: _Amex,
  Dankort: _Dankort,
  DinersClub: _DinersClub,
  Discover: _Discover,
  Enroute: _Enroute,
  Elo: _Elo,
  Hiper: _Hiper,
  Interac: _Interac,
  Jcb: _Jcb,
  Maestro: _Maestro,
  Mastercard: _Mastercard,
  Mir: _Mir,
  PrivateLabel: _PrivateLabel,
  Unionpay: _Unionpay,
  Visa: _Visa,
  _parse: (value: string): CardNetworkType => {
    switch (value) {
      case "AMEX": {
        return _Amex;
      }
      case "DANKORT": {
        return _Dankort;
      }
      case "DINERS_CLUB": {
        return _DinersClub;
      }
      case "DISCOVER": {
        return _Discover;
      }
      case "ENROUTE": {
        return _Enroute;
      }
      case "ELO": {
        return _Elo;
      }
      case "HIPER": {
        return _Hiper;
      }
      case "INTERAC": {
        return _Interac;
      }
      case "JCB": {
        return _Jcb;
      }
      case "MAESTRO": {
        return _Maestro;
      }
      case "MASTERCARD": {
        return _Mastercard;
      }
      case "MIR": {
        return _Mir;
      }
      case "PRIVATE_LABEL": {
        return _PrivateLabel;
      }
      case "UNIONPAY": {
        return _Unionpay;
      }
      case "VISA": {
        return _Visa;
      }
      default: {
        return {
          value: value as CardNetworkType.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace CardNetworkType {
  type RawValue =
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

  interface _Visitor<Result> {
    amex: () => Result;
    dankort: () => Result;
    dinersClub: () => Result;
    discover: () => Result;
    enroute: () => Result;
    elo: () => Result;
    hiper: () => Result;
    interac: () => Result;
    jcb: () => Result;
    maestro: () => Result;
    mastercard: () => Result;
    mir: () => Result;
    privateLabel: () => Result;
    unionpay: () => Result;
    visa: () => Result;
    _other: (value: string) => Result;
  }
}
