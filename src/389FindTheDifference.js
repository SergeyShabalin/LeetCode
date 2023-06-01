//Вам даны две строки s и t.
// Строка t генерируется случайным перетасовкой строки s,
// а затем добавляется еще одна буква в случайном месте.
//
// Вернуть букву, которая была добавлена в t.

const findTheDifference = function(s, t) {
    let result = 0;

    for (let char of s) {
        result ^= char.charCodeAt(0)
    }

    for (let char of t) {
        result ^= char.charCodeAt(0)
    }

    console.log(String.fromCharCode(result))
};

findTheDifference('abcd', 'abecd')