/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { PrimerApi } from "../../..";

export interface Request {
  apiKey?: core.Supplier<string>;
  /** ID of the payment to refund. */
  id: PrimerApi.payments.PaymentId;
  xIdempotencyKey?: string;
  _body: PrimerApi.payments.RefundPaymentRequest;
}

export type Response = core.APIResponse<PrimerApi.payments.PaymentResponse, PrimerApi.payments.refund.Error>;
export type Error = Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <Result>(visitor: Error._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    _other: (value: core.Fetcher.Error) => Result;
  }
}
