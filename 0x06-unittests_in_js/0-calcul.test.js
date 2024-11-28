const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculator', function() {
    it('the result must be 10', function() {
      assert.equal(calculateNumber(5.6, 3.9), 10);
    });

    it('the result must be -1', function() {
      assert.equal(calculateNumber(5.6, -7.4), -1);
    });

    it('the result must be 4', function() {
      assert.equal(calculateNumber(0, -7.6), -8);
    });

    it('the result must be 0', function() {
      assert.equal(calculateNumber(0.8, -0.8), 0);
    });

    it('the result must be -2', function() {
      assert.equal(calculateNumber(-4.3, 2), -2);
    });

    it('the result must be 6', function() {
      assert.equal(calculateNumber(5.2, 0.5), 6);
    });

    it('the result must be 0', function() {
      assert.equal(calculateNumber(0.04, 0.03), 0);
    });
});
