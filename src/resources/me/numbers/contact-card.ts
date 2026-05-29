// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage and share your iMessage contact card (Name & Photo)
 */
export class ContactCard extends APIResource {
  /**
   * ⚠️ **COMING SOON** - This endpoint is temporarily disabled while we stabilize
   * this feature.
   *
   * Get the personal contact card (Name & Photo) for the specified phone number.
   * This is the identity that gets shared with contacts in iMessage.
   */
  retrieve(number: string, options?: RequestOptions): APIPromise<ContactCardRetrieveResponse> {
    return this._client.get(path`/me/numbers/${number}/contact-card`, options);
  }

  /**
   * Update the personal contact card (Name & Photo) for the specified phone number.
   * All fields are optional — only provided fields are updated.
   *
   * ⚠️ **Plan requirement:** Setting the `first_name`, `last_name`, or `avatar` is
   * only available on **Dedicated Commercial** and **Dedicated Enterprise** plans.
   * Numbers on other plans receive a `403`.
   */
  update(
    number: string,
    body: ContactCardUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ContactCardUpdateResponse> {
    return this._client.put(path`/me/numbers/${number}/contact-card`, { body, ...options });
  }
}

export interface ContactCardRetrieveResponse {
  /**
   * Base64-encoded JPEG/PNG image
   */
  avatar?: string | null;

  first_name?: string | null;

  has_wallpaper?: boolean;

  last_name?: string | null;

  /**
   * Display name
   */
  name?: string | null;

  phone_number?: string;

  sharing?: ContactCardRetrieveResponse.Sharing;
}

export namespace ContactCardRetrieveResponse {
  export interface Sharing {
    /**
     * 0 = Contacts Only, 1 = Always Ask
     */
    audience?: number;

    /**
     * Whether Name & Photo sharing is enabled
     */
    enabled?: boolean;

    /**
     * 0 = First & Last, 1 = First Only
     */
    name_format?: number;
  }
}

export interface ContactCardUpdateResponse {
  first_name?: string | null;

  last_name?: string | null;

  phone_number?: string;

  success?: boolean;
}

export interface ContactCardUpdateParams {
  /**
   * Profile photo as base64-encoded JPEG/PNG
   */
  avatar?: string;

  /**
   * First name
   */
  first_name?: string;

  /**
   * Last name
   */
  last_name?: string;

  sharing?: ContactCardUpdateParams.Sharing;
}

export namespace ContactCardUpdateParams {
  export interface Sharing {
    /**
     * 0 = Contacts Only, 1 = Always Ask
     */
    audience?: number;

    /**
     * Enable/disable Name & Photo sharing
     */
    enabled?: boolean;

    /**
     * 0 = First & Last, 1 = First Only
     */
    name_format?: number;
  }
}

export declare namespace ContactCard {
  export {
    type ContactCardRetrieveResponse as ContactCardRetrieveResponse,
    type ContactCardUpdateResponse as ContactCardUpdateResponse,
    type ContactCardUpdateParams as ContactCardUpdateParams,
  };
}
