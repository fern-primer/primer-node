/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface PrepaidReloadableIndicator<
  RawValue extends PrepaidReloadableIndicator.RawValue = PrepaidReloadableIndicator.RawValue
> {
  value: RawValue;
  visit: <Result>(visitor: PrepaidReloadableIndicator._Visitor<Result>) => Result;
}

const _Reloadable: PrepaidReloadableIndicator<"RELOADABLE"> = {
  value: "RELOADABLE",
  visit: (visitor) => visitor.reloadable(),
};
const _NonReloadable: PrepaidReloadableIndicator<"NON_RELOADABLE"> = {
  value: "NON_RELOADABLE",
  visit: (visitor) => visitor.nonReloadable(),
};
const _NotApplicable: PrepaidReloadableIndicator<"NOT_APPLICABLE"> = {
  value: "NOT_APPLICABLE",
  visit: (visitor) => visitor.notApplicable(),
};
const _Unknown: PrepaidReloadableIndicator<"UNKNOWN"> = {
  value: "UNKNOWN",
  visit: (visitor) => visitor.unknown(),
};
export const PrepaidReloadableIndicator = {
  Reloadable: _Reloadable,
  NonReloadable: _NonReloadable,
  NotApplicable: _NotApplicable,
  Unknown: _Unknown,
  _parse: (value: string): PrepaidReloadableIndicator => {
    switch (value) {
      case "RELOADABLE": {
        return _Reloadable;
      }
      case "NON_RELOADABLE": {
        return _NonReloadable;
      }
      case "NOT_APPLICABLE": {
        return _NotApplicable;
      }
      case "UNKNOWN": {
        return _Unknown;
      }
      default: {
        return {
          value: value as PrepaidReloadableIndicator.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace PrepaidReloadableIndicator {
  type RawValue = "RELOADABLE" | "NON_RELOADABLE" | "NOT_APPLICABLE" | "UNKNOWN";

  interface _Visitor<Result> {
    reloadable: () => Result;
    nonReloadable: () => Result;
    notApplicable: () => Result;
    unknown: () => Result;
    _other: (value: string) => Result;
  }
}