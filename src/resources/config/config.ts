// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhookAPI from './webhook';
import { Webhook, WebhookRetrieveResponse, WebhookUpdateParams, WebhookUpdateResponse } from './webhook';

export class Config extends APIResource {
  webhook: WebhookAPI.Webhook = new WebhookAPI.Webhook(this._client);
}

Config.Webhook = Webhook;

export declare namespace Config {
  export {
    Webhook as Webhook,
    type WebhookRetrieveResponse as WebhookRetrieveResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
