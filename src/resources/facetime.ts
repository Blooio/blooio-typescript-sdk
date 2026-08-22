// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Initiate FaceTime calls
 */
export class Facetime extends APIResource {
  /**
   * **Coming Soon** -- This endpoint is temporarily disabled while we stabilize the
   * FaceTime call flow.
   *
   * Initiates a FaceTime call to the specified phone number or email address.
   * Returns a shareable FaceTime link that anyone can use to join the call. The call
   * will ring the contact and auto-admit the first person who joins via the link.
   *
   * @example
   * ```ts
   * await client.facetime.initiateCall({
   *   handle: '+15551234567',
   * });
   * ```
   */
  initiateCall(body: FacetimeInitiateCallParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/facetime/calls', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FacetimeInitiateCallParams {
  /**
   * Phone number (E.164) or email address to call
   */
  handle: string;
}

export declare namespace Facetime {
  export { type FacetimeInitiateCallParams as FacetimeInitiateCallParams };
}
