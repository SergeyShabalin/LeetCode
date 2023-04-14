//Римские цифры представлены семью различными символами:  I, V, X, L, и .CDM
// I 1
// В 5
// X 10
// L
// 50 C 100
// D 500
// M 1000

// Римские цифры обычно пишутся слева направо от большего к меньшему. Однако цифра «четыре» — не IIII.
// Вместо этого цифра четыре записывается как IV.
// Так как единица предшествует пятерке, мы вычитаем ее и получаем четыре.
// Тот же принцип применим к числу девять, которое записывается как IX.
// Есть шесть случаев, когда используется вычитание:
//
// I можно поставить перед V(5) и X(10), чтобы получилось 4 и 9.
// X можно поставить перед L(50) и C(100), чтобы получилось 40 и 90.
// C можно поставить перед D(500) и M(1000), чтобы получить 400 и 900.
// Дана римская цифра, преобразовать ее в целое число.
//
//
const romanToInt = function (s) {
    const designations = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const number = s.split("")
    let contain = {integer: 0}

    for (let i = 0; i < number.length; i++) {
        const assign = designations[number[i]]
        const assignLater = designations[number[i + 1]]

        if (assign) {
            if (assignLater && assignLater > assign) {
                contain.integer -= assign
            } else contain.integer += assign
        }
    }
    return (contain.integer)
};

romanToInt("III ")