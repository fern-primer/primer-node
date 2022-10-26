import { PrimerApi, PrimerApiClient } from "@fern-api/primer";
import { Environment } from "@fern-api/primer/environments";
void main();

async function main() {
  const primerToken = process.env.PRIMER_TOKEN;
  if (primerToken == null) {
    console.error("PRIMER_TOKEN environment variable must be initialized.");
    return;
  }

  const primer = new PrimerApiClient({
    environment: Environment.Sandbox,
    auth: {
      apiKey: primerToken,
    },
  });

  const createResponse = await primer.clientSession.create({
    orderId: "my-order-id",
    amount: 200,
    currencyCode: PrimerApi.CurrencyCode.Usd,
  });

  if (!createResponse.ok) {
    throw new Error(
      `Encountered error ${JSON.stringify(createResponse.error)}`
    );
  }

  console.log(`The client's token is ${createResponse.body.clientToken}`);
}
