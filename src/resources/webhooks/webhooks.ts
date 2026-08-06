// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogsAPI from './logs';
import { LogListParams, LogListResponse, LogReplayParams, LogReplayResponse, Logs } from './logs';
import * as SecretAPI from './secret';
import { Secret, SecretRotateResponse } from './secret';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage webhook subscriptions
 */
export class Webhooks extends APIResource {
  secret: SecretAPI.Secret = new SecretAPI.Secret(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Registration through this endpoint is closed and returns 410. Use POST
   * /v4/webhooks to create new subscriptions. Existing webhooks keep working and can
   * still be listed, updated, and deleted here. Re-posting the URL of a webhook that
   * already exists still returns 200 with that webhook, so idempotent provisioning
   * scripts continue to work unchanged.
   *
   * @deprecated
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/webhooks', { body, ...options });
  }

  /**
   * Get details for a specific webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.retrieve(
   *   'wh_abc123def456',
   * );
   * ```
   */
  retrieve(webhookID: string, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.get(path`/webhooks/${webhookID}`, options);
  }

  /**
   * Update a webhook's configuration.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.update(
   *   'wh_abc123def456',
   * );
   * ```
   */
  update(webhookID: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.patch(path`/webhooks/${webhookID}`, { body, ...options });
  }

  /**
   * List all webhooks for the organization.
   *
   * @example
   * ```ts
   * const webhooks = await client.webhooks.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/webhooks', options);
  }

  /**
   * Permanently delete a webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.webhooks.delete(
   *   'wh_abc123def456',
   * );
   * ```
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<WebhookDeleteResponse> {
    return this._client.delete(path`/webhooks/${webhookID}`, options);
  }
}

export interface Webhook {
  /**
   * Name of the API key (if scope is api_key)
   */
  api_key_name?: string | null;

  created_at?: number;

  deprecated_at?: number | null;

  failure_count?: number;

  /**
   * Name of the integration (if scope is integration)
   */
  integration_name?: string | null;

  /**
   * Whether the webhook is active (not deprecated)
   */
  is_active?: boolean;

  last_triggered?: number | null;

  scope?: 'api_key' | 'organization' | 'integration';

  /**
   * -1 means no expiration
   */
  valid_until?: number;

  webhook_id?: string;

  webhook_type?: 'message' | 'status' | 'all';

  webhook_url?: string;
}

export interface WebhookCreateResponse {
  message?: string;

  scope?: 'api_key' | 'organization';

  webhook_id?: string;

  webhook_url?: string;
}

export interface WebhookListResponse {
  webhooks?: Array<Webhook>;
}

export interface WebhookDeleteResponse {
  message?: string;

  success?: boolean;
}

export interface WebhookCreateParams {
  /**
   * URL of an existing webhook, for the idempotent 200 response. A URL that does not
   * already exist returns 410.
   */
  webhook_url: string;

  /**
   * Ignored. Retained so existing request bodies stay valid.
   */
  valid_until?: number;
}

export interface WebhookUpdateParams {
  /**
   * Set to true to deprecate, false to undeprecate
   */
  deprecate?: boolean;

  /**
   * Expiration timestamp. Use -1 or null for no expiration.
   */
  valid_until?: number;

  /**
   * Type of events to receive
   */
  webhook_type?: 'message' | 'status' | 'all';
}

Webhooks.Secret = Secret;
Webhooks.Logs = Logs;

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };

  export { Secret as Secret, type SecretRotateResponse as SecretRotateResponse };

  export {
    Logs as Logs,
    type LogListResponse as LogListResponse,
    type LogReplayResponse as LogReplayResponse,
    type LogListParams as LogListParams,
    type LogReplayParams as LogReplayParams,
  };
}
