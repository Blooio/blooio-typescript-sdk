// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * FindMy contact location tracking
 */
export class Contacts extends APIResource {
  /**
   * Returns the cached location for a specific contact identified by phone number or
   * email.
   */
  retrieve(handle: string, options?: RequestOptions): APIPromise<ContactLocation> {
    return this._client.get(path`/location/contacts/${handle}`, options);
  }

  /**
   * Returns cached FindMy contact locations available through your blooio account.
   * Each entry includes the contact's handle (phone/email), coordinates, and last
   * update time.
   */
  list(options?: RequestOptions): APIPromise<ContactListResponse> {
    return this._client.get('/location/contacts', options);
  }

  /**
   * Triggers a refresh of cached FindMy contact locations. Updated results may take
   * 15-20 seconds to appear.
   */
  refresh(options?: RequestOptions): APIPromise<ContactRefreshResponse> {
    return this._client.post('/location/contacts/refresh', options);
  }
}

export interface ContactLocation {
  /**
   * GPS coordinates [latitude, longitude]
   */
  coordinates?: Array<number>;

  /**
   * Contact's phone number or email
   */
  handle?: string;

  /**
   * Timestamp of last location update (epoch ms)
   */
  last_updated?: number;

  /**
   * Location status (e.g., 'live', 'shallow', 'legacy')
   */
  status?: string;
}

export interface ContactListResponse {
  friends?: Array<ContactLocation>;
}

export interface ContactRefreshResponse {
  friends?: Array<ContactLocation>;

  success?: boolean;
}

export declare namespace Contacts {
  export {
    type ContactLocation as ContactLocation,
    type ContactListResponse as ContactListResponse,
    type ContactRefreshResponse as ContactRefreshResponse,
  };
}
