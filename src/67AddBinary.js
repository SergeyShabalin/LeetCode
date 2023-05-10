// Учитывая две двоичные строки a и b, верните их сумму в виде двоичной строки .

function addBinary(a, b) {
    let result = "";
    let carry = 0;
    const arrayOne = a.split("");
    const arrayTwo = b.split("");

    while (arrayOne.length || arrayTwo.length || carry) {
        const digitA = parseInt(arrayOne.pop() || "0");
        const digitB = parseInt(arrayTwo.pop() || "0");
        const sum = digitA + digitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }

    return(result);
}

addBinary('11', '1')