
// Фраза является палиндромом , если после преобразования всех прописных букв в строчные и удаления
// всех не буквенно-цифровых символов она читается одинаково вперед и назад.
// Буквенно-цифровые символы включают буквы и цифры.
// Если задана строка s, возврат, true если это палиндром , или false иначе .
const isPalindrome = function(s) {

    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const len = newStr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (newStr[i] !== newStr[len - 1 - i]) {
            return false;
        }
    }
    return true
};

isPalindrome('А Роза упала на лапу азора')