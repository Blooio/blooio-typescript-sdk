// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Blooio } from '../client';

export abstract class APIResource {
  protected _client: Blooio;

  constructor(client: Blooio) {
    this._client = client;
  }
}
