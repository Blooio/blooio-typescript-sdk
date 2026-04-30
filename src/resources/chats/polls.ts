// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Send native iMessage polls and retrieve poll results with vote counts. Poll events are delivered via separate webhook event types (poll.received, poll.created, poll.voted) and require webhook_type 'poll' or 'all'.
 */
export class Polls extends APIResource {
  /**
   * Retrieve a poll's definition and aggregated vote counts. The pollId is the
   * poll_id returned in the poll.received or poll.created webhook event.
   *
   * @example
   * ```ts
   * const response = await client.chats.polls.getResults(
   *   'pollId',
   *   { chatId: 'chatId' },
   * );
   * ```
   */
  getResults(
    pollID: string,
    params: PollGetResultsParams,
    options?: RequestOptions,
  ): APIPromise<PollGetResultsResponse> {
    const { chatId } = params;
    return this._client.get(path`/chats/${chatId}/polls/${pollID}`, options);
  }

  /**
   * Send a native iMessage poll to a chat. The poll appears as an interactive ballot
   * that recipients can vote on.
   *
   * @example
   * ```ts
   * const response = await client.chats.polls.send('chatId', {
   *   options: ['string', 'string'],
   * });
   * ```
   */
  send(chatID: string, body: PollSendParams, options?: RequestOptions): APIPromise<PollSendResponse> {
    return this._client.post(path`/chats/${chatID}/polls`, { body, ...options });
  }
}

export interface PollGetResultsResponse {
  chat_id?: string;

  options?: Array<PollGetResultsResponse.Option>;

  poll_id?: string;

  title?: string;

  total_votes?: number;
}

export namespace PollGetResultsResponse {
  export interface Option {
    text?: string;

    votes?: number;
  }
}

export interface PollSendResponse {
  chat_id?: string;

  poll?: PollSendResponse.Poll;

  /**
   * Unique identifier for the poll
   */
  poll_id?: string;

  sent_at?: number;
}

export namespace PollSendResponse {
  export interface Poll {
    options?: Array<string>;

    title?: string;
  }
}

export interface PollGetResultsParams {
  /**
   * Chat identifier. Can be: (1) phone number in E.164 format (e.g., +15551234567),
   * (2) email address, (3) group ID (grp_xxxx), or (4) comma-separated list of phone
   * numbers/emails for multi-recipient group chats (e.g.,
   * +15551234567,+15559876543). All values should be URL-encoded.
   */
  chatId: string;
}

export interface PollSendParams {
  /**
   * Array of 2-10 option strings for the poll
   */
  options: Array<string>;

  /**
   * Poll question or title (optional)
   */
  title?: string;
}

export declare namespace Polls {
  export {
    type PollGetResultsResponse as PollGetResultsResponse,
    type PollSendResponse as PollSendResponse,
    type PollGetResultsParams as PollGetResultsParams,
    type PollSendParams as PollSendParams,
  };
}
