//Учитывая строку s, инвертировать только все гласные в строке и вернуть ее.
//
// Гласные 'a', 'e', 'i', 'o'и 'u', и они могут появляться как в нижнем, так и в верхнем регистре более одного раза.

const reverseVowels = function (s) {
    const arr = s.split('')

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];


    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (vowels.includes(arr[i]) && vowels.includes(arr[j])) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        } else if (vowels.includes(arr[i])) {
            j--;
        } else {
            i++;
        }
    }

    return arr.join('');
};


reverseVowels('leetcode')