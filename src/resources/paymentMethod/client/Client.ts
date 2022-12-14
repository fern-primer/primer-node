/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { PrimerPrimerApi } from "@fern-api/primer";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    apiKey?: core.Supplier<string>;
    apiVersion: string;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async saveToken(
    paymentMethodToken: string,
    request: PrimerPrimerApi.SavePaymentMethodTokenRequest
  ): Promise<PrimerPrimerApi.paymentMethod.saveToken.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        `/payment-instruments/${paymentMethodToken}/vault`
      ),
      method: "POST",
      headers: {
        "X-API-VERSION": this.options.apiVersion,
        "X-API-KEY": await core.Supplier.get(this.options.apiKey),
      },
      body: await serializers.paymentMethod.saveToken.Request.json({
        customerId: request.customerId,
        verify: request.verify,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.paymentMethod.saveToken.Response.parse(
          _response.body as serializers.paymentMethod.saveToken.Response.Raw
        ),
      };
    }

    if (_response.error.reason === "status-code") {
      switch (_response.error.statusCode) {
        case 400:
          return {
            ok: false,
            error: PrimerPrimerApi.paymentMethod.saveToken.Error.failedVerificationError(
              await serializers.FailedVerificationError.parse(
                _response.error.body as serializers.FailedVerificationError.Raw
              )
            ),
          };
        case 422:
          return {
            ok: false,
            error: PrimerPrimerApi.paymentMethod.saveToken.Error.requestValidationError(
              await serializers.RequestValidationError.parse(
                _response.error.body as serializers.RequestValidationError.Raw
              )
            ),
          };
      }
    }

    return {
      ok: false,
      error: PrimerPrimerApi.paymentMethod.saveToken.Error._unknown(_response.error),
    };
  }

  public async list(
    request: PrimerPrimerApi.ListPaymentMethodsRequest
  ): Promise<PrimerPrimerApi.paymentMethod.list.Response> {
    const _queryParams = new URLSearchParams();
    _queryParams.append("customer_id", request.customerId);
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/payment-instruments/"),
      method: "GET",
      headers: {
        "X-API-VERSION": this.options.apiVersion,
        "X-API-KEY": await core.Supplier.get(this.options.apiKey),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.paymentMethod.list.Response.parse(
          _response.body as serializers.paymentMethod.list.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: PrimerPrimerApi.paymentMethod.list.Error._unknown(_response.error),
    };
  }

  public async delete(paymentMethodToken: string): Promise<PrimerPrimerApi.paymentMethod.delete.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        `/payment-instruments/${paymentMethodToken}`
      ),
      method: "DELETE",
      headers: {
        "X-API-VERSION": this.options.apiVersion,
        "X-API-KEY": await core.Supplier.get(this.options.apiKey),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.paymentMethod.delete.Response.parse(
          _response.body as serializers.paymentMethod.delete.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: PrimerPrimerApi.paymentMethod.delete.Error._unknown(_response.error),
    };
  }

  public async update(paymentMethodToken: string): Promise<PrimerPrimerApi.paymentMethod.update.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        `/payment-instruments/${paymentMethodToken}/default`
      ),
      method: "POST",
      headers: {
        "X-API-VERSION": this.options.apiVersion,
        "X-API-KEY": await core.Supplier.get(this.options.apiKey),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.paymentMethod.update.Response.parse(
          _response.body as serializers.paymentMethod.update.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: PrimerPrimerApi.paymentMethod.update.Error._unknown(_response.error),
    };
  }
}
