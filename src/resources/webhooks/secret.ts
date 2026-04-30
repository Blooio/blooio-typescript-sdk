// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage webhook subscriptions
 */
export class Secret extends APIResource {
  /**
   * Generate a new signing secret for the webhook. The new secret is returned only
   * once in this response - store it securely. The old secret becomes invalid
   * immediately.
   *
   * @example
   * ```ts
   * const response = await client.webhooks.secret.rotate(
   *   'wh_abc123def456',
   * );
   * ```
   */
  rotate(webhookID: string, options?: RequestOptions): APIPromise<SecretRotateResponse> {
    return this._client.post(path`/webhooks/${webhookID}/secret/rotate`, options);
  }
}

export interface SecretRotateResponse {
  /**
   * Timestamp when the secret was rotated
   */
  rotated_at?: number;

  /**
   * Identifier of who rotated the secret
   */
  rotated_by?: string;

  /**
   * Total number of times this secret has been rotated
   */
  rotation_count?: number;

  /**
   * The new signing secret. Store this securely - it will not be shown again.
   */
  signing_secret?: string;

  webhook_id?: string;
}

export declare namespace Secret {
  export { type SecretRotateResponse as SecretRotateResponse };
}
