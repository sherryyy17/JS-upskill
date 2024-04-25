const calculator = require('../index')

describe('Math Functions', () => {
    describe('add', () => {
      it('adds two decimal numbers correctly', () => {
        expect(calculator.add(1.5, 2.5)).toBe(4);
      });
  
      it('adds a positive and a negative number correctly', () => {
        expect(calculator.add(3, -2)).toBe(1);
      });
  
      it('adds two large numbers correctly', () => {
        expect(calculator.add(999999999, 1)).toBe(1000000000);
      });
  
      //Test for commutative property
      it('is commutative', () => {
        expect(calculator.add(2, 3)).toBe(calculator.add(3, 2));
      });
  
      // Test for associativity
      it('is associative', () => {
        expect(calculator.add(1, calculator.add(2, 3))).toBe(calculator.add(calculator.add(1, 2), 3));
      });
  
    });
  
    describe('sub', () => {
      it('subtracts a smaller number from a larger number correctly', () => {
        expect(calculator.sub(5, 3)).toBe(2);
      });
  
      it('subtracts a negative number from a positive number correctly', () => {
        expect(calculator.sub(5, -3)).toBe(8);
      });
  
    });
  
    describe('mult', () => {
      it('multiplies two decimal numbers correctly', () => {
        expect(calculator.mult(2.5, 2)).toBe(5);
      });
  
      it('multiplies a negative number by a positive number correctly', () => {
        expect(calculator.mult(-2, 3)).toBe(-6);
      });
  
    });
  
    describe('div', () => {
      it('divides two decimal numbers correctly', () => {
        expect(calculator.div(6.4, 2)).toBeCloseTo(3.2);
      });
  
      it('divides a negative number by a positive number correctly', () => {
        expect(calculator.div(-6, 2)).toBe(-3);
      });
  
      it('throws an error when dividing by zero', () => {
        expect(() => calculator.div(5, 0)).toThrow();
      });
  
    });

    describe('percentage', () => {
      it('calculates the percentage correctly', () => {
        expect(calculator.percentage(10, 200)).toBe(20);
      });
      it('returns 0 when percentage is 0', () => {
        expect(calculator.percentage(0, 100)).toBe(0);
      });
      it('returns 0 when value is 0', () => {
        expect(calculator.percentage(10, 0)).toBe(0);
      });
            
    });
  });