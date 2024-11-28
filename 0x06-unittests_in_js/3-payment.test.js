const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber correctly', () => {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);
    // Verify the spy was called with the correct arguments
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.calledOnce).to.be.true;
    // Verify the return value matches what we expect
    const result = calculateNumberSpy.firstCall.returnValue;
    expect(result).to.equal(120);
    // Restore the spy
    calculateNumberSpy.restore();
  });
});
