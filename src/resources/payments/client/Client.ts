/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { PrimerApi } from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    auth?: {
      apiKey?: core.Supplier<string>;
    };
    apiVersion: string;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async search(request: PrimerApi.payments.search.Request): Promise<PrimerApi.payments.search.Response> {
    const queryParameters = new URLSearchParams();
    if (request.status != null) {
      queryParameters.append("status", request.status);
    }

    if (request.paymentMethodType != null) {
      queryParameters.append("payment_method_type", request.paymentMethodType);
    }

    if (request.processor != null) {
      queryParameters.append("processor", request.processor);
    }

    if (request.currencyCode != null) {
      queryParameters.append("currency_code", request.currencyCode.value);
    }

    if (request.fromDate != null) {
      queryParameters.append("from_date", request.fromDate.toISOString());
    }

    if (request.toDate != null) {
      queryParameters.append("to_date", request.toDate.toISOString());
    }

    if (request.orderId != null) {
      queryParameters.append("order_id", request.orderId);
    }

    if (request.minAmount != null) {
      queryParameters.append("min_amount", request.minAmount.toString());
    }

    if (request.maxAmount != null) {
      queryParameters.append("max_amount", request.maxAmount.toString());
    }

    if (request.customerId != null) {
      queryParameters.append("customer_id", request.customerId);
    }

    if (request.merchantId != null) {
      queryParameters.append("merchant_id", request.merchantId);
    }

    if (request.customerEmailAddress != null) {
      queryParameters.append("customer_email_address", request.customerEmailAddress);
    }

    if (request.last4Digits != null) {
      queryParameters.append("last_4_digits", request.last4Digits);
    }

    if (request.paypalEmail != null) {
      queryParameters.append("paypal_email", request.paypalEmail);
    }

    if (request.klarnaEmail != null) {
      queryParameters.append("klarna_email", request.klarnaEmail);
    }

    if (request.limit != null) {
      queryParameters.append("limit", request.limit.toString());
    }

    if (request.cursor != null) {
      queryParameters.append("cursor", request.cursor.toString());
    }

    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/payments/"),
      method: "GET",
      headers: {
        "X-API-KEY": await core.Supplier.get(this.options.auth?.apiKey),
        "X-API-VERSION": this.options?.apiVersion,
        "X-Idempotency-Key": request.idempotencyKey,
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.payments.PaymentsData.parse(response.body as serializers.payments.PaymentsData.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async create(request: PrimerApi.payments.CreatePaymentRequest): Promise<PrimerApi.payments.create.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/payments/"),
      method: "POST",
      headers: {
        "X-API-KEY": await core.Supplier.get(this.options.auth?.apiKey),
        "X-API-VERSION": this.options?.apiVersion,
      },
      body: serializers.payments.CreatePaymentRequest.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.payments.PaymentResponse.parse(response.body as serializers.payments.PaymentResponse.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async capture(request: PrimerApi.payments.capture.Request): Promise<PrimerApi.payments.capture.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/payments/${request.id}/capture`),
      method: "POST",
      headers: {
        "X-API-KEY": await core.Supplier.get(this.options.auth?.apiKey),
        "X-API-VERSION": this.options?.apiVersion,
        "X-Idempotency-Key": request.idempotencyKey,
      },
      body: serializers.payments.CapturePaymentRequest.json(request._body),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.payments.PaymentResponse.parse(response.body as serializers.payments.PaymentResponse.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async cancel(request: PrimerApi.payments.cancel.Request): Promise<PrimerApi.payments.cancel.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/payments/${request.id}/cancel`),
      method: "POST",
      headers: {
        "X-API-KEY": await core.Supplier.get(this.options.auth?.apiKey),
        "X-API-VERSION": this.options?.apiVersion,
        "X-Idempotency-Key": request.idempotencyKey,
      },
      body: serializers.payments.CancelPaymentRequest.json(request._body),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.payments.PaymentResponse.parse(response.body as serializers.payments.PaymentResponse.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async refund(request: PrimerApi.payments.refund.Request): Promise<PrimerApi.payments.refund.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/payments/${request.id}/refund`),
      method: "POST",
      headers: {
        "X-API-KEY": await core.Supplier.get(this.options.auth?.apiKey),
        "X-API-VERSION": this.options?.apiVersion,
        "X-Idempotency-Key": request.idempotencyKey,
      },
      body: serializers.payments.RefundPaymentRequest.json(request._body),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.payments.PaymentResponse.parse(response.body as serializers.payments.PaymentResponse.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async resume(request: PrimerApi.payments.resume.Request): Promise<PrimerApi.payments.resume.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/payments/${request.id}/resume`),
      method: "POST",
      headers: {
        "X-API-KEY": await core.Supplier.get(this.options.auth?.apiKey),
        "X-API-VERSION": this.options?.apiVersion,
        "X-Idempotency-Key": request.idempotencyKey,
      },
      body: serializers.payments.ResumePaymentRequest.json(request._body),
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.payments.PaymentResponse.parse(response.body as serializers.payments.PaymentResponse.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async get(request: PrimerApi.payments.get.Request): Promise<PrimerApi.payments.get.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, `/payments/${request.id}/resume`),
      method: "GET",
      headers: {
        "X-API-KEY": await core.Supplier.get(this.options.auth?.apiKey),
        "X-API-VERSION": this.options?.apiVersion,
        "X-Idempotency-Key": request.idempotencyKey,
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: serializers.payments.PaymentResponse.parse(response.body as serializers.payments.PaymentResponse.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }
}
