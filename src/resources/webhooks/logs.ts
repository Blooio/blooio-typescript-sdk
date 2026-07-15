// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * View and replay webhook deliveries
 */
export class Logs extends APIResource {
  /**
   * List delivery logs for a specific webhook.
   *
   * @example
   * ```ts
   * const logs = await client.webhooks.logs.list(
   *   'wh_abc123def456',
   * );
   * ```
   */
  list(
    webhookID: string,
    query: LogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogListResponse> {
    return this._client.get(path`/webhooks/${webhookID}/logs`, { query, ...options });
  }

  /**
   * Re-send a webhook event to the configured URL.
   *
   * @example
   * ```ts
   * const response = await client.webhooks.logs.replay(
   *   'eventId',
   *   { webhookId: 'wh_abc123def456' },
   * );
   * ```
   */
  replay(eventID: string, params: LogReplayParams, options?: RequestOptions): APIPromise<LogReplayResponse> {
    const { webhookId } = params;
    return this._client.post(path`/webhooks/${webhookId}/logs/${eventID}/replay`, options);
  }
}

export interface LogListResponse {
  logs?: Array<LogListResponse.Log>;

  pagination?: LogListResponse.Pagination;
}

export namespace LogListResponse {
  export interface Log {
    attempted_time?: number;

    /**
     * Webhook event payload. Structure varies by event type. All message events
     * include group information when applicable.
     */
    event_body?: Log.EventBody;

    event_id?: string;

    /**
     * Additional metadata about the webhook delivery
     */
    metadata?: Log.Metadata;

    /**
     * Response body from the webhook endpoint (if JSON)
     */
    response_json?: unknown | null;

    response_received_at?: number | null;

    /**
     * HTTP status code received from the webhook endpoint
     */
    response_status?: number | null;

    scope?: 'api' | 'integration' | 'org';

    webhook_url?: string;
  }

  export namespace Log {
    /**
     * Webhook event payload. Structure varies by event type. All message events
     * include group information when applicable.
     */
    export interface EventBody {
      /**
       * Array of attachment objects
       */
      attachments?: Array<EventBody.Attachment> | null;

      /**
       * Timestamp when message was delivered (for message.delivered events)
       */
      delivered_at?: number | null;

      /**
       * Error code (for message.failed events)
       */
      error_code?: string | null;

      /**
       * Error description (for message.failed events)
       */
      error_message?: string | null;

      /**
       * Event type (e.g., message.received, message.sent, message.delivered,
       * message.failed, message.read)
       */
      event?: string;

      /**
       * Recipient identifier (phone number, email, or group ID)
       */
      external_id?: string;

      /**
       * Group ID (only present when is_group=true)
       */
      group_id?: string | null;

      /**
       * Group display name (only present when is_group=true)
       */
      group_name?: string | null;

      /**
       * Phone number that sent/received the message
       */
      internal_id?: string | null;

      /**
       * Whether this message is from/to a group chat. Always present.
       */
      is_group?: boolean;

      /**
       * Unique message identifier
       */
      message_id?: string;

      /**
       * Array of group participants (only present when is_group=true)
       */
      participants?: Array<EventBody.Participant> | null;

      /**
       * Transport used to carry the message; never null. `pending` = accepted and
       * dispatched, wire service not resolved yet (settles within seconds of send);
       * `imessage` = delivered over iMessage (blue bubble); `rcs` = delivered over RCS;
       * `sms` = fell back to SMS/MMS (green bubble); `unknown` = accepted by the carrier
       * but the wire service could not be resolved before the tracking window closed
       * (see `error`).
       */
      protocol?: 'pending' | 'unknown' | 'imessage' | 'sms' | 'rcs';

      /**
       * Timestamp when message was read (for message.read events)
       */
      read_at?: number | null;

      /**
       * Sender identifier (for inbound messages)
       */
      sender?: string | null;

      /**
       * Timestamp when message was sent (for message.sent events)
       */
      sent_at?: number | null;

      /**
       * Message status carried by the event. `queued` / `pending` = accepted, not yet
       * handed off; `sent` = handed to Apple/the carrier; `delivered` = a delivery
       * receipt was received; `read` = a read receipt was received (iMessage, when the
       * recipient has read receipts on); `failed` = delivery failed (see `error_code` /
       * `error_message`); `received` = an inbound message arrived.
       */
      status?: 'queued' | 'pending' | 'sent' | 'delivered' | 'failed' | 'read' | 'received';

      /**
       * Message text content
       */
      text?: string | null;

      /**
       * Event timestamp in milliseconds
       */
      timestamp?: number;
    }

    export namespace EventBody {
      export interface Attachment {
        name?: string | null;

        url?: string;
      }

      export interface Participant {
        contact_id?: string;

        identifier?: string;

        name?: string | null;
      }
    }

    /**
     * Additional metadata about the webhook delivery
     */
    export interface Metadata {
      duration_ms?: number;

      event_name?: string;

      is_replay?: boolean;

      message_id?: string;

      organization_id?: string;

      original_event_id?: string;
    }
  }

  export interface Pagination {
    /**
     * Whether there are more logs to fetch
     */
    has_more?: boolean;

    limit?: number;

    offset?: number;

    /**
     * Number of logs returned in this response
     */
    returned?: number;

    /**
     * Total number of matching logs
     */
    total?: number;
  }
}

export interface LogReplayResponse {
  /**
   * Time taken for the replay request in milliseconds
   */
  duration_ms?: number;

  /**
   * The original event ID that was replayed
   */
  original_event_id?: string;

  /**
   * New event ID for this replay attempt
   */
  replay_event_id?: string;

  /**
   * Response details from the replay attempt
   */
  response_data?: LogReplayResponse.ResponseData;

  /**
   * HTTP status code from replay attempt
   */
  response_status?: number;

  /**
   * Whether the replay received a 2xx response
   */
  success?: boolean;

  webhook_id?: string;

  webhook_url?: string;
}

export namespace LogReplayResponse {
  /**
   * Response details from the replay attempt
   */
  export interface ResponseData {
    /**
     * Response body (if parseable)
     */
    body?: unknown;

    contentType?: string;

    duration?: number;

    error?: string | null;

    errorType?: string | null;

    headers?: unknown;

    size?: number;
  }
}

export interface LogListParams {
  /**
   * Maximum number of items to return in a single response. Must be between 1 and
   * 200; defaults to 50. Use together with `offset` to page through large result
   * sets.
   */
  limit?: number;

  /**
   * Maximum HTTP status code
   */
  max_status?: number;

  /**
   * Minimum HTTP status code
   */
  min_status?: number;

  /**
   * Number of items to skip before returning results. Combine with `limit` for
   * page-based pagination (e.g. `offset=50&limit=50` returns the second page).
   * Defaults to 0.
   */
  offset?: number;

  /**
   * Sort order by attempted time
   */
  sort?: 'asc' | 'desc';

  /**
   * Filter by exact HTTP status code
   */
  status?: number;
}

export interface LogReplayParams {
  /**
   * Unique identifier of the webhook subscription, prefixed with `wh_` (e.g.
   * `wh_abc123def456`). Returned when you create or list webhooks.
   */
  webhookId: string;
}

export declare namespace Logs {
  export {
    type LogListResponse as LogListResponse,
    type LogReplayResponse as LogReplayResponse,
    type LogListParams as LogListParams,
    type LogReplayParams as LogReplayParams,
  };
}
