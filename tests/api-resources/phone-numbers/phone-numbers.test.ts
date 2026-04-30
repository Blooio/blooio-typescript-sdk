// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Blooio from '@blooio/sdk';

const client = new Blooio({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phoneNumbers', () => {
  // Mock server tests are disabled
  test.skip('batchCreate: only required params', async () => {
    const responsePromise = client.phoneNumbers.batchCreate({
      numbers: ['+12125551234', '+14155551234', '+18582849901'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('batchCreate: required and optional params', async () => {
    const response = await client.phoneNumbers.batchCreate({
      numbers: ['+12125551234', '+14155551234', '+18582849901'],
    });
  });
});
