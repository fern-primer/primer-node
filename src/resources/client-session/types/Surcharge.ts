/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface Surcharge {
  /** The surcharge amount, in minor units. Surcharge amount must be used in conjunction with line item amounts, if a top level amount is passed then surcharge will not be calculated. */
  amount?: number;
}