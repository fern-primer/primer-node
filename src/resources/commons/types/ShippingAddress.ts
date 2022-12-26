/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { PrimerPrimerApi } from "@fern-api/primer";

export interface ShippingAddress {
  firstName?: string;
  lastName?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  countryCode?: PrimerPrimerApi.CountryCode;
  postalCode?: string;
}
