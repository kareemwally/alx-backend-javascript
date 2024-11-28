import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';
//const calculateNumber = require('./2-calcul_chai.cjs');
//const expect = require('chai').expect;

describe('calculator', function() {
  describe('SUM', function() {
    it('the result must be 10', function() {
      expect(calculateNumber('SUM', 5.6, 3.9)).to.equal(10);
    });

    it('the result must be -1', function() {
      expect(calculateNumber('SUM', 5.6, -7.4)).to.equal(-1);
    });

    it('the result must be 6', function() {  
      expect(calculateNumber('SUM', 5.4, 0.5)).to.equal(6);
    });

    it('the result must be 0', function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });

  describe('SUBTRACT', function() {
    it('the result must be 2', function() {
      expect(calculateNumber('SUBTRACT', 5.6, 3.9)).to.equal(2);
    });

    it('the result must be 13', function() {
      expect(calculateNumber('SUBTRACT', 5.6, -7.4)).to.equal(13);
    });

    it('the result must be -6', function() {
      expect(calculateNumber('SUBTRACT', -5.4, 0.5)).to.equal(-6);
    });

    it('the result must be 4', function() {
      expect(calculateNumber('SUBTRACT', 5.2, 0.5)).to.equal(4);
    });

    it('the result must be 0', function() {
      expect(calculateNumber('SUBTRACT', 5.2, 5.2)).to.equal(0);
    });

    it('the result must be 0', function() {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', function() {
    it('the result must be 1.5', function() {
      expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });

    it('the result must be -1.6666666666666667', function() {
      expect(calculateNumber('DIVIDE', -5, 2.5)).to.equal(-1.6666666666666667);
    });

    it('the result must be 0', function() {
      expect(calculateNumber('DIVIDE', 0, 2)).to.equal(0);
    });

    it('the result must be "Error"', function() {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
  });
});
