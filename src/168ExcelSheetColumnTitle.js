//Если задано целое число columnNumber,
// вернуть заголовок соответствующего столбца в том виде, в котором он отображается на листе Excel .
const convertToTitle = function(columnNumber) {
    let result = '';

    for (; columnNumber > 0; columnNumber = Math.floor((columnNumber - 1) / 26)) {
        let remainder = (columnNumber - 1) % 26;
        result = String.fromCharCode(65 + remainder) + result;
    }

    return (result);
};

convertToTitle(361)