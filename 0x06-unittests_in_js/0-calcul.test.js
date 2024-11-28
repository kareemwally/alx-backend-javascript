const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculator', function() {
    it('the result must be 10', function() {
      assert.equal(calculateNumber(5.6, 3.9), 10);
    });

    it('the result must be -1', function() {
      assert.equal(calculateNumber(5.6, -7.4), -1);
    });

});
