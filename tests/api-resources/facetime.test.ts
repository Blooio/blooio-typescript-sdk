// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blooio from '@blooio/sdk';

const client = new Blooio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource facetime', () => {
  // Mock server tests are disabled
  test.skip('initiateCall: only required params', async () => {
    const responsePromise = client.facetime.initiateCall({ handle: '+15551234567' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('initiateCall: required and optional params', async () => {
    const response = await client.facetime.initiateCall({ handle: '+15551234567' });
  });
});
