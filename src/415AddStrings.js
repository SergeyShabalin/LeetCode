//Учитывая два неотрицательных целых числа, num1представленных num2в виде строки, верните сумму num1 и num2 в виде строки .
//
// Вы должны решить проблему без использования какой-либо встроенной библиотеки для обработки больших целых чисел (например, BigInteger).
// Вы также не должны преобразовывать входные данные в целые числа напрямую.

const addStrings = function(num1, num2) {
    let result = '';
    let carryOver = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carryOver > 0) {
        const digit1 = i >= 0 ? parseInt(num1.charAt(i)) : 0;
        const digit2 = j >= 0 ? parseInt(num2.charAt(j)) : 0;
        const sum = digit1 + digit2 + carryOver;
        const digitSum = sum % 10;
        carryOver = Math.floor(sum / 10);

        result = digitSum.toString() + result;

        i--;
        j--;
    }

    console.log(result) ;
};

addStrings('223', '747')