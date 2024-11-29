const assert = require('assert');
const app = require('../api/api.js');

describe('API', () => {
  it('should return 200', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    });
    assert.strictEqual(response.statusCode, 200);
  });
});
