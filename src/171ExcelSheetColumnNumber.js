//Получив строку columnTitle, представляющую заголовок столбца,
// отображаемый на листе Excel, вернуть соответствующий номер столбца .

const titleToNumber = function(columnTitle) {
    let columnNumber = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        const charCode = columnTitle.charCodeAt(i) - 65 + 1;
        columnNumber = columnNumber * 26 + charCode;
    }

    return (columnNumber);
};

titleToNumber('AB')