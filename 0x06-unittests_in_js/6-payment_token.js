function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  // Return nothing if success is false
}

module.exports = getPaymentTokenFromAPI;
