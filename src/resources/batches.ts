// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Batches extends APIResource {
  /**
   * Create a batch of messages (stub)
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/api/batches', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get batch details (stub)
   */
  retrieve(batchID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v1/api/batches/${batchID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List messages in a batch (stub)
   */
  listMessages(batchID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v1/api/batches/${batchID}/messages`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get batch status (stub)
   */
  retrieveStatus(batchID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v1/api/batches/${batchID}/status`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
