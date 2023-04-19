// Учитывая строку s, содержащую только символы '(', ')', '{', и , определите '}', допустима ли входная строка.'['']'
//
// Входная строка действительна, если:
//
// Открытые скобки должны быть закрыты однотипными скобками.
// Открытые скобки должны быть закрыты в правильном порядке.
// Каждой закрывающей скобке соответствует открытая скобка того же типа.
const isValid = function (s) {
    let arrayOfSymbol = [];
    let checkSymbol = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let symbol of s) {
        if (checkSymbol[symbol]) {
            arrayOfSymbol.push(checkSymbol[symbol]);
        } else {
            if (arrayOfSymbol.pop() !== symbol) return false;
        }
    }
    return (!arrayOfSymbol.length);
};

isValid('()[]{}')