import { PrimerApi } from "..";

void main();

async function main() {
  const primerToken = process.env.PRIMER_TOKEN;
  if (primerToken == null) {
    console.error("PRIMER_TOKEN environment variable must be initialized.");
    return;
  }

  const primer = new PrimerApi.Client({
    _origin: "https://api.sandbox.primer.io",
    apiKey: primerToken,
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
