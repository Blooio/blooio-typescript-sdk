// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Me extends APIResource {
  /**
   * Returns information about the authenticated API key including plan, devices,
   * usage statistics, and integration details.
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/v1/api/me', options);
  }
}

export interface MeRetrieveResponse {
  /**
   * The API key used for authentication.
   */
  api_key?: string;

  /**
   * List of devices associated with this API key.
   */
  devices?: Array<MeRetrieveResponse.Device>;

  /**
   * Integration-specific details (GHL or API integration).
   */
  integration_details?: MeRetrieveResponse.IntegrationDetails | null;

  /**
   * Custom metadata associated with the API key.
   */
  metadata?: unknown;

  /**
   * The plan associated with this API key.
   */
  plan?: string;

  /**
   * Usage statistics for this API key.
   */
  usage?: MeRetrieveResponse.Usage;

  /**
   * Whether the API key is valid.
   */
  valid?: boolean;
}

export namespace MeRetrieveResponse {
  export interface Device {
    /**
     * Hashed device identifier.
     */
    device_hash?: string;

    /**
     * Whether the device is currently active.
     */
    is_active?: boolean;

    /**
     * Unix timestamp (ms) of last device activity.
     */
    last_active?: number | null;
  }

  /**
   * Integration-specific details (GHL or API integration).
   */
  export interface IntegrationDetails {
    /**
     * Webhook URL for API integrations.
     */
    customer_webhook_url?: string;

    /**
     * Integration-specific metadata.
     */
    metadata?: unknown;

    /**
     * Name of the integration (GHL only).
     */
    name?: string;
  }

  /**
   * Usage statistics for this API key.
   */
  export interface Usage {
    /**
     * Total number of inbound messages.
     */
    inbound_messages?: number;

    /**
     * Unix timestamp (ms) of the last message sent.
     */
    last_message_sent?: number | null;

    /**
     * Total number of outbound messages.
     */
    outbound_messages?: number;
  }
}

export declare namespace Me {
  export { type MeRetrieveResponse as MeRetrieveResponse };
}
