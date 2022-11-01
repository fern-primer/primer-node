/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as ClientSessionClient } from "./resources/clientSession/client/Client";
import { Client as PaymentMethodClient } from "./resources/paymentMethod/client/Client";
import { Client as PaymentsClient } from "./resources/payments/client/Client";

export declare namespace PrimerApiClient {
  interface Options {
    environment?: environments.Environment | string;
    auth?: {
      apiKey?: core.Supplier<string>;
    };
  }
}

export class PrimerApiClient {
  constructor(private readonly options: PrimerApiClient.Options) {}

  #clientSession: ClientSessionClient | undefined;

  public get clientSession(): ClientSessionClient {
    return (this.#clientSession ??= new ClientSessionClient(this.options));
  }

  #paymentMethod: PaymentMethodClient | undefined;

  public get paymentMethod(): PaymentMethodClient {
    return (this.#paymentMethod ??= new PaymentMethodClient(this.options));
  }

  #payments: PaymentsClient | undefined;

  public get payments(): PaymentsClient {
    return (this.#payments ??= new PaymentsClient(this.options));
  }
}
