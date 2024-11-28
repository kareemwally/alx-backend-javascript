const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('should stub Utils.calculateNumber and verify console.log', () => {
    // Create a stub for Utils.calculateNumber
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    // Create a spy for console.log
    const consoleLogSpy = sinon.spy(console, 'log');
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);
    // Verify the stub was called with correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.calledOnce).to.be.true;
    // Verify console.log was called with the right message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
