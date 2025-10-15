// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Retrieve full message metadata including direction, protocol, text length,
   * attachments count, timestamps, current status, and original metadata.
   *
   * @example
   * ```ts
   * const message = await client.messages.retrieve('messageId');
   * ```
   */
  retrieve(messageID: string, options?: RequestOptions): APIPromise<MessageRetrieveResponse> {
    return this._client.get(path`/v1/api/messages/${messageID}`, options);
  }

  /**
   * Request cancellation for a queued or scheduled message. If the message is
   * already in a non-cancellable state (e.g., sent), the response indicates the
   * current status. Note: response may include deprecated `current_status`; use
   * `status` instead.
   *
   * @example
   * ```ts
   * const response = await client.messages.cancel('messageId');
   * ```
   */
  cancel(messageID: string, options?: RequestOptions): APIPromise<MessageCancelResponse> {
    return this._client.delete(path`/v1/api/messages/${messageID}`, options);
  }

  /**
   * Get current delivery status only
   *
   * @example
   * ```ts
   * const response = await client.messages.getStatus(
   *   'messageId',
   * );
   * ```
   */
  getStatus(messageID: string, options?: RequestOptions): APIPromise<MessageGetStatusResponse> {
    return this._client.get(path`/v1/api/messages/${messageID}/status`, options);
  }

  /**
   * Queues an outbound iMessage/SMS to the specified phone number.
   *
   * Supports optional media attachments via public URLs, and arbitrary metadata for
   * correlation.
   *
   * For safe retries, provide an `Idempotency-Key` header. If the same key is used
   * twice, the original message will be returned with 200; otherwise a new message
   * is queued with 202.
   *
   * @example
   * ```ts
   * const response = await client.messages.send({
   *   to: '+15551234567',
   *   metadata: { ticket_id: 'TCK-123' },
   *   text: 'Hello world!',
   * });
   * ```
   */
  send(params: MessageSendParams, options?: RequestOptions): APIPromise<MessageSendResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/v1/api/messages', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface MessageRetrieveResponse {
  api_key?: string;

  attachments_count?: number;

  direction?: 'outbound' | 'inbound';

  /**
   * Recipient phone number.
   */
  external_id?: string;

  message_id?: string;

  /**
   * Original metadata provided plus system generated fields.
   */
  metadata?: unknown;

  /**
   * The protocol used to send the message (e.g., imessage, rcs, sms).
   */
  protocol?: string;

  /**
   * Current delivery status.
   */
  status?: 'pending' | 'queued' | 'sent' | 'delivered' | 'failed' | 'cancelled' | 'cancellation_requested';

  text_length?: number;

  /**
   * Unix timestamp (ms) when the message was queued/sent.
   */
  time_sent?: number;
}

export interface MessageCancelResponse {
  /**
   * True if cancellation was successful, false otherwise.
   */
  cancelled?: boolean;

  /**
   * The current status if cancellation failed (deprecated, use 'status' instead).
   */
  current_status?: string | null;

  /**
   * Human-readable message about the cancellation result.
   */
  message?: string;

  message_id?: string;

  /**
   * The current status of the message.
   */
  status?: string;
}

export interface MessageGetStatusResponse {
  message_id?: string;

  status?: 'pending' | 'queued' | 'sent' | 'delivered' | 'failed' | 'cancelled' | 'cancellation_requested';
}

export interface MessageSendResponse {
  message_id?: string;

  status?: string;
}

export interface MessageSendParams {
  /**
   * Body param: Recipient phone number in E.164 format (e.g., +15551234567)
   */
  to: string;

  /**
   * Body param: Array of publicly accessible URLs to media attachments.
   */
  attachments?: Array<string>;

  /**
   * Body param: Arbitrary key/value pairs to associate with the message.
   */
  metadata?: unknown;

  /**
   * Body param: Text body of the message.
   */
  text?: string;

  /**
   * Header param: Optional key to ensure idempotent message creation. If the same
   * key is used twice, the original message will be returned.
   */
  'Idempotency-Key'?: string;
}

export declare namespace Messages {
  export {
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageCancelResponse as MessageCancelResponse,
    type MessageGetStatusResponse as MessageGetStatusResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageSendParams as MessageSendParams,
  };
}
