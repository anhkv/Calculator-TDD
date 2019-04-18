const mocha      = require('mocha');
const sinon      = require('sinon');
const Calculator = require('./Calculator');
const Add        = require('./Operator/Add');
const Division   = require('./Operator/Division');
const assert     = require('chai').assert;

mocha.describe('Test calculator', () => {
    const calculator = new Calculator();
    const add        = new Add();
    const division   = new Division();
    const operator   = {
        execute: sinon.fake.returns(42)
    };

    calculator.register('fake', operator);
    calculator.register('+', operator);

    mocha.it('Test Calculator', () => {
        const result = calculator.calculate('fake', 1, 2);
        assert.equal(result, 42);
    });

    mocha.it('Test Operate', () => {
        assert.throw(() => {
            calculator.calculate('asd', 3, 4);
        }, 'Phép toán asd không được đăng kí');
    });

    mocha.it('Test Calculator with Add', () => {
        const result = add.execute(1, 2);
        assert.equal(result, 3);
    });

    mocha.it('Test Calculator with Division', () => {
        const result = division.execute(6, 2);
        assert.equal(result, 3);
        assert.throw(() => {
            division.execute(6, 0);
        }, 'Số thứ 2 phải khác 0');
    });

});