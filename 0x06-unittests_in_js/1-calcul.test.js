const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculator', function() {
  describe('SUM', function() {
    it('the result must be 10', function() {
      assert.equal(calculateNumber('SUM',5.6, 3.9), 10);
    });

    it('the result must be -1', function() {
      assert.equal(calculateNumber('SUM',5.6, -7.4), -1);
    });

    it('the result must be 6', function() {
      assert.equal(calculateNumber('SUM',5.4, 0.5), 6);
    });

    it('the result must be 0', function() {
      assert.equal(calculateNumber('SUM',0, 0), 0);
    });
  });
  describe('SUBTRACT', function() {
    it('the result must be 2', function() {
      assert.equal(calculateNumber('SUBTRACT',5.6, 3.9), 2);
    });

    it('the result must be 13', function() {
      assert.equal(calculateNumber('SUBTRACT',5.6, -7.4), 13);
    });

    it('the result must be -6', function() {
      assert.equal(calculateNumber('SUBTRACT',-5.4, 0.5), -6);
    });

    it('the result must be 4', function() {
      assert.equal(calculateNumber('SUBTRACT',5.2, 0.5), 4);
    });

    it('the result must be 0', function() {
      assert.equal(calculateNumber('SUBTRACT',5.2, 5.2), 0);
    });

    it('the result must be 0', function() {
      assert.equal(calculateNumber('SUBTRACT',0, 0), 0);
    });

  });
  describe('DIVIDE', function() { 
    it('the result must be 1.5', function() {
      assert.equal(calculateNumber('DIVIDE',3, 2), 1.5);
    });

    it('the result must be -1.6666666666666667', function() {
      assert.equal(calculateNumber('DIVIDE',-5, 2.5), -1.6666666666666667);
    });

    it('the result must be 0', function() {
      assert.equal(calculateNumber('DIVIDE',0, 2), 0);
    });

    it('the result must be 0', function() {
      assert.equal(calculateNumber('DIVIDE',0, 0), 'Error');
    });
  });
});
