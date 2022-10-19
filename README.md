# Primer Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/primer)](https://www.npmjs.com/package/@fern-api/primer)

The Primer Node library provides access to the Primer API from JavaScript/TypeScript.

## Documentation

API documentation is available at https://apiref.primer.io/reference.

## Usage

```typescript
import { PrimerApi } from "primer";

const primer = new PrimerApi.Client({
  _origin: "https://api.sandbox.primer.io",
  apiKey: process.env.PRIMER_TOKEN,
});

const createClientResponse = await primer.clientSession.create({
  orderId: "my-order-id",
  amount: 200,
});

if (!createClientResponse.ok) {
  throw new Error(createClientResponse.error.errorName);
}

console.log(createClientResponse.body.clientToken);
```

## Sample App

Checkout the [sample app](.sample-app/app.ts) which consumes this SDK!

```bash
export PRIMER_TOKEN=...

cd .sample-app
yarn install
yarn start
```

## SDK Examples

Below are a few examples of how to use the SDK to hit different endpoints. Checkout our [API Reference](https://apiref.primer.io/reference/create_client_side_token_client_session_post) to see all of our endpoints.

### Searching Payments

```typescript
const searchResponse = await primer.payments.search({
  paypalEmail: "customer@acme.com",
  limit: 10,
  paymentMethodType: "PAYPAL",
});

if (!searchResponse.ok) {
  throw new Error(`Encountered error ${searchResponse.error.errorName}`);
}

for (const searchPaymentResponse of searchResponse.body.data) {
  console.log(
    `Found payment of ${searchPaymentResponse.amount} ${searchPaymentResponse.currencyCode}`
  );
}
```

### Save payment method token

```typescript
const saveTokenResponse = await primer.paymentMethod.saveToken({
  paymentMethodToken: "my-payment-method-token",
  _body: {
    customerId: "customer-id",
  },
});

if (!saveTokenResponse.ok) {
  throw new Error(`Encountered error ${saveTokenResponse.error}`);
}

console.log("Saved token!", saveTokenResponse.body.token);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Questions or feedback?

Feel free to [leave an issue](https://github.com/fern-primer/primer-node) on this repo!
