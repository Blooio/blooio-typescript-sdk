// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Contacts extends APIResource {
  /**
   * Check if a phone number or email address supports iMessage, SMS, RCS, and other
   * messaging capabilities.
   *
   * @example
   * ```ts
   * const response = await client.contacts.checkCapabilities(
   *   'contact',
   * );
   * ```
   */
  checkCapabilities(contact: string, options?: RequestOptions): APIPromise<ContactCheckCapabilitiesResponse> {
    return this._client.get(path`/v1/api/contacts/${contact}/capabilities`, options);
  }
}

export interface ContactCheckCapabilitiesResponse {
  /**
   * Messaging capabilities for this contact.
   */
  capabilities?: ContactCheckCapabilitiesResponse.Capabilities;

  /**
   * The contact identifier (phone number or email).
   */
  contact?: string;

  /**
   * ISO 8601 timestamp of when capabilities were last checked.
   */
  lastChecked?: string;

  /**
   * Type of contact identifier.
   */
  type?: 'phone' | 'email';
}

export namespace ContactCheckCapabilitiesResponse {
  /**
   * Messaging capabilities for this contact.
   */
  export interface Capabilities {
    /**
     * Whether this contact supports iMessage.
     */
    imessage?: boolean;

    /**
     * Whether this contact supports SMS (always true for phone numbers, false for
     * emails).
     */
    sms?: boolean;
  }
}

export declare namespace Contacts {
  export { type ContactCheckCapabilitiesResponse as ContactCheckCapabilitiesResponse };
}
