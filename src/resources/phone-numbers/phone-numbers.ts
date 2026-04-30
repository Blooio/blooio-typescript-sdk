// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LookupAPI from './lookup';
import { Lookup, LookupCreateParams, LookupRetrieveParams, PhoneNumberLookupResult } from './lookup';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Phone number validation, formatting, and NANPA geocoding. Requires an Enterprise plan (Dedicated Enterprise).
 */
export class PhoneNumbers extends APIResource {
  lookup: LookupAPI.Lookup = new LookupAPI.Lookup(this._client);

  /**
   * Look up multiple phone numbers in a single request. Returns the same detailed
   * information as the single lookup endpoint for each number. Maximum 100 numbers
   * per request.
   *
   * **Requires an Enterprise plan** (Dedicated Enterprise).
   *
   * @example
   * ```ts
   * const response = await client.phoneNumbers.batchCreate({
   *   numbers: ['+12125551234', '+14155551234', '+18582849901'],
   * });
   * ```
   */
  batchCreate(
    body: PhoneNumberBatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberBatchCreateResponse> {
    return this._client.post('/phone-numbers/batch', { body, ...options });
  }
}

export interface PhoneNumberBatchCreateResponse {
  results?: Array<LookupAPI.PhoneNumberLookupResult>;
}

export interface PhoneNumberBatchCreateParams {
  /**
   * Array of phone numbers to look up
   */
  numbers: Array<string>;
}

PhoneNumbers.Lookup = Lookup;

export declare namespace PhoneNumbers {
  export {
    type PhoneNumberBatchCreateResponse as PhoneNumberBatchCreateResponse,
    type PhoneNumberBatchCreateParams as PhoneNumberBatchCreateParams,
  };

  export {
    Lookup as Lookup,
    type PhoneNumberLookupResult as PhoneNumberLookupResult,
    type LookupCreateParams as LookupCreateParams,
    type LookupRetrieveParams as LookupRetrieveParams,
  };
}
