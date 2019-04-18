const mocha      = require('mocha');
const Calculator = require('./Calculator');
const Addition   = require('./Operator/Addition');
const Faker      = require('./Operator/Faker');
const Division   = require('./Operator/Division');
const assert     = require('chai').assert;

mocha.describe('Test calculator', () => {

    let calculator = new Calculator();
    let addition   = new Addition();
    let division   = new Division();
    let faker      = new Faker();

    calculator.register('fake', faker);

    mocha.it('Test fake operator', () => {
        assert.equal(calculator.calculate('fake', 1, 2), 42);
    });

    mocha.it('Test Operator', () => {
        assert.throw(() => {
            calculator.calculate('asd', 3, 4);
        }, 'Phép toán asd không được đăng kí');
    });

    mocha.it('Test Calculator with Add', () => {
        assert.equal(addition.execute(1, 2), 3);
    });

    mocha.it('Test Calculator with Division', () => {
        assert.equal(division.execute(6, 2), 3);
        assert.throw(() => {
            division.execute(6, 0);
        }, 'Số thứ 2 phải khác 0');
    });

});
