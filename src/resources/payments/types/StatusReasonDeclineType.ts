/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface StatusReasonDeclineType<
  RawValue extends StatusReasonDeclineType.RawValue = StatusReasonDeclineType.RawValue
> {
  value: RawValue;
  visit: <Result>(visitor: StatusReasonDeclineType._Visitor<Result>) => Result;
}

const _SoftDecline: StatusReasonDeclineType<"SOFT_DECLINE"> = {
  value: "SOFT_DECLINE",
  visit: (visitor) => visitor.softDecline(),
};
const _HardDecline: StatusReasonDeclineType<"HARD_DECLINE"> = {
  value: "HARD_DECLINE",
  visit: (visitor) => visitor.hardDecline(),
};
export const StatusReasonDeclineType = {
  SoftDecline: _SoftDecline,
  HardDecline: _HardDecline,
  _parse: (value: string): StatusReasonDeclineType => {
    switch (value) {
      case "SOFT_DECLINE": {
        return _SoftDecline;
      }
      case "HARD_DECLINE": {
        return _HardDecline;
      }
      default: {
        return {
          value: value as StatusReasonDeclineType.RawValue,
          visit: (visitor) => visitor._other(value),
        };
      }
    }
  },
} as const;

export declare namespace StatusReasonDeclineType {
  type RawValue = "SOFT_DECLINE" | "HARD_DECLINE";

  interface _Visitor<Result> {
    softDecline: () => Result;
    hardDecline: () => Result;
    _other: (value: string) => Result;
  }
}