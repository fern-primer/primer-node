/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";
import * as core from "../../../core";

export type Response = core.APIResponse<PrimerPrimerApi.PaymentResponse, PrimerPrimerApi.payments.refund.Error>;
export type Error = PrimerPrimerApi.payments.refund.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: PrimerPrimerApi.payments.refund.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  _unknown: (fetcherError: core.Fetcher.Error): PrimerPrimerApi.payments.refund.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<PrimerPrimerApi.payments.refund.Error._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: PrimerPrimerApi.payments.refund.Error._Unknown, visitor: PrimerPrimerApi.payments.refund.Error._Visitor<_Result>) {
      return PrimerPrimerApi.payments.refund.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: PrimerPrimerApi.payments.refund.Error,
    visitor: PrimerPrimerApi.payments.refund.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      default:
        return visitor._other(value as any);
    }
  },
} as const;
