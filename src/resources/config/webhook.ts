// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Webhook extends APIResource {
  /**
   * Get the current webhook URL
   *
   * @example
   * ```ts
   * const webhook = await client.config.webhook.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<WebhookRetrieveResponse> {
    return this._client.get('/v1/api/config/webhook', options);
  }

  /**
   * Configure the webhook URL that will receive all message events. Once configured,
   * your endpoint will receive POST requests with the following event types:
   *
   * - `message.received` - When you receive an inbound message
   * - `message.sent` - When your outbound message is sent to the carrier
   * - `message.delivered` - When your outbound message is delivered to the recipient
   * - `message.failed` - When your outbound message fails to deliver
   * - `message.read` - When your outbound message is read by the recipient (iMessage
   *   only, recipient must have read receipts enabled)
   *
   * See the webhook event schemas for detailed payload formats.
   *
   * @example
   * ```ts
   * const webhook = await client.config.webhook.update({
   *   webhook_url: 'https://example.com/mywebhook',
   * });
   * ```
   */
  update(body: WebhookUpdateParams, options?: RequestOptions): APIPromise<WebhookUpdateResponse> {
    return this._client.put('/v1/api/config/webhook', { body, ...options });
  }
}

export interface WebhookRetrieveResponse {
  /**
   * Unix timestamp (ms) when the webhook URL was last updated.
   */
  updated_at?: number;

  /**
   * The current webhook URL or null if not set.
   */
  webhook_url?: string | null;
}

export interface WebhookUpdateResponse {
  message?: string;

  status?: string;
}

export interface WebhookUpdateParams {
  webhook_url: string;
}

export declare namespace Webhook {
  export {
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
