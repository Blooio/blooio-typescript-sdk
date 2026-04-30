// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NumbersAPI from './numbers/numbers';
import { NumberListResponse, Numbers } from './numbers/numbers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Authentication and account information
 */
export class Me extends APIResource {
  numbers: NumbersAPI.Numbers = new NumbersAPI.Numbers(this._client);

  /**
   * Returns details about the authenticated API key or dashboard user, including
   * organization info, devices, and usage statistics.
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/me', options);
  }
}

/**
 * Response depends on auth_type. For 'api_key': includes full API key details. For
 * 'dashboard': includes user_id and organization info only.
 */
export interface MeRetrieveResponse {
  /**
   * The API key (only for api_key auth)
   */
  api_key?: string;

  /**
   * Type of authentication used
   */
  auth_type?: 'api_key' | 'dashboard';

  /**
   * List of devices associated with this API key (only for api_key auth)
   */
  devices?: Array<MeRetrieveResponse.Device>;

  /**
   * Integration details if the API key is associated with an integration (only for
   * api_key auth)
   */
  integration_details?: unknown | null;

  /**
   * API key metadata (only for api_key auth)
   */
  metadata?: unknown;

  organization?: MeRetrieveResponse.Organization;

  /**
   * Organization ID (only for api_key auth)
   */
  organization_id?: string;

  /**
   * Usage statistics (only for api_key auth)
   */
  usage?: MeRetrieveResponse.Usage;

  /**
   * User ID (only for dashboard auth)
   */
  user_id?: string | null;

  /**
   * Whether the API key is valid (only for api_key auth)
   */
  valid?: boolean;
}

export namespace MeRetrieveResponse {
  export interface Device {
    is_active?: boolean;

    last_active?: number | null;

    /**
     * Phone number assigned to this device (E.164 format)
     */
    phone_number?: string | null;
  }

  export interface Organization {
    country_code?: string | null;

    created_at?: number;

    name?: string;

    organization_id?: string;
  }

  /**
   * Usage statistics (only for api_key auth)
   */
  export interface Usage {
    inbound_messages?: number;

    last_message_sent?: number | null;

    outbound_messages?: number;
  }
}

Me.Numbers = Numbers;

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };

  export { Numbers as Numbers, type NumberListResponse as NumberListResponse };
}
