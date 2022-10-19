/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PrimerApi } from "../../..";

export interface CustomerDetails {
  /** Customer email address */
  emailAddress?: string;
  /** The customer's mobile number */
  mobileNumber?: string;
  /** The customer's first name */
  firstName?: string;
  /** The customer's last name */
  lastName?: string;
  /** Customer billing address */
  billingAddress?: PrimerApi.commons.BillingAddress;
  /** Customer shipping address */
  shippingAddress?: PrimerApi.commons.ShippingAddress;
  /** The customer's tax id number for tax exemptions */
  taxId?: string;
  /** The customer's national identification number */
  nationalDocumentId?: string;
}