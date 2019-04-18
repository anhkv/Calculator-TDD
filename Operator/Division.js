class Division {
    execute(number1, number2) {
        if(number2 == 0) {
            throw new Error('Số thứ 2 phải khác 0');
        }else {
            return number1/number2;
        }
    }
}
module.exports = Division;