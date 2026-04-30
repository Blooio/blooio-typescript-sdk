// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Phone number validation, formatting, and NANPA geocoding. Requires an Enterprise plan (Dedicated Enterprise).
 */
export class Lookup extends APIResource {
  /**
   * Same as the GET endpoint, but accepts the phone number in the request body.
   * Useful when the number contains characters that are difficult to URL-encode.
   *
   * **Requires an Enterprise plan** (Dedicated Enterprise).
   *
   * @example
   * ```ts
   * const phoneNumberLookupResult =
   *   await client.phoneNumbers.lookup.create({
   *     number: '+12125551234',
   *   });
   * ```
   */
  create(body: LookupCreateParams, options?: RequestOptions): APIPromise<PhoneNumberLookupResult> {
    return this._client.post('/phone-numbers/lookup', { body, ...options });
  }

  /**
   * Returns detailed information about a phone number including validation,
   * formatting (E.164, national, international), number type, and NANPA geocoding
   * (city, state/province) for North American numbers. The geocoding data is sourced
   * from different database with 240,000+ NPA-NXX entries.
   *
   * **Requires an Enterprise plan** (Dedicated Enterprise). Returns 403 if your
   * organization does not have an active enterprise subscription.
   *
   * @example
   * ```ts
   * const phoneNumberLookupResult =
   *   await client.phoneNumbers.lookup.retrieve({
   *     number: '+12125551234',
   *   });
   * ```
   */
  retrieve(query: LookupRetrieveParams, options?: RequestOptions): APIPromise<PhoneNumberLookupResult> {
    return this._client.get('/phone-numbers/lookup', { query, ...options });
  }
}

export interface PhoneNumberLookupResult {
  /**
   * NPA area code (first 3 digits of national number, only for NANP numbers)
   */
  area_code?: string;

  /**
   * General region for the area code (most common city, only for NANP numbers)
   */
  area_code_region?: string;

  /**
   * ISO 3166-1 alpha-2 country code
   */
  country?: string | null;

  /**
   * Country calling code without +
   */
  country_calling_code?: string;

  /**
   * E.164 formatted number
   */
  e164?: string;

  /**
   * NXX exchange code (digits 4-6 of national number, only for NANP numbers)
   */
  exchange?: string;

  /**
   * The original input string
   */
  input?: string;

  /**
   * International formatted number
   */
  international?: string;

  /**
   * NANPA geocoding location (only for North American numbers with country code 1)
   */
  location?: PhoneNumberLookupResult.Location | null;

  /**
   * National formatted number
   */
  national?: string;

  /**
   * National number without country code
   */
  national_number?: string;

  /**
   * Whether the phone number is a possible number (less strict than valid)
   */
  possible?: boolean;

  /**
   * Number type detected by libphonenumber
   */
  type?:
    | 'FIXED_LINE'
    | 'MOBILE'
    | 'FIXED_LINE_OR_MOBILE'
    | 'TOLL_FREE'
    | 'PREMIUM_RATE'
    | 'SHARED_COST'
    | 'VOIP'
    | 'PERSONAL_NUMBER'
    | 'PAGER'
    | 'UAN'
    | 'VOICEMAIL'
    | null;

  /**
   * Whether the phone number is valid
   */
  valid?: boolean;
}

export namespace PhoneNumberLookupResult {
  /**
   * NANPA geocoding location (only for North American numbers with country code 1)
   */
  export interface Location {
    /**
     * City name
     */
    city?: string | null;

    /**
     * State/province abbreviation
     */
    region?: string | null;

    /**
     * Full state/province name
     */
    region_name?: string | null;
  }
}

export interface LookupCreateParams {
  /**
   * Phone number to look up
   */
  number: string;
}

export interface LookupRetrieveParams {
  /**
   * Phone number to look up. Can be E.164 format (+12125551234), national format
   * (2125551234), or with formatting ((212) 555-1234).
   */
  number: string;
}

export declare namespace Lookup {
  export {
    type PhoneNumberLookupResult as PhoneNumberLookupResult,
    type LookupCreateParams as LookupCreateParams,
    type LookupRetrieveParams as LookupRetrieveParams,
  };
}
