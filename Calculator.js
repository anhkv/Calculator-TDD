class Calsulator {
    constructor() {
        this.operators = {};
    }

    register(name, operator) {
        this.operators[name] = operator;
    }

    calculate(operatorName, number1, number2) {
        const operator = this.operators[operatorName];
        
        if(!operator){
            throw new Error(`Phép toán ${operatorName} không được đăng kí`);
        }

        return operator.execute(number1, number2);
    }
}

module.exports = Calsulator;
