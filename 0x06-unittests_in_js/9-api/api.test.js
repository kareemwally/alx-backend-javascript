const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(API_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return 404 for invalid routes', (done) => {
    request.get(`${API_URL}/invalid_route`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return 200 with valid cart id', async () => {
    const response = await app.inject({
    method: 'GET',
    url: '/cart/12',
    });
  assert.strictEqual(response.statusCode, 200);
  });

  it('should return 404 with invalid cart id', async () => {
    const response = await app.inject({
    method: 'GET',
    url: '/cart/hello',
    });
  assert.strictEqual(response.statusCode, 404);
  });
});
