// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blooio from 'blooio';

const client = new Blooio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contacts', () => {
  // Prism tests are disabled
  test.skip('checkCapabilities', async () => {
    const responsePromise = client.contacts.checkCapabilities('contact');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
