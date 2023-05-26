//Даны две строки sи t, вернуть, true если t это анаграмма s, и false в противном случае .
//
// Анаграмма — это слово или фраза, образованная путем перестановки букв другого слова или фразы,
// обычно с использованием всех исходных букв ровно один раз .

const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
};

isAnagram('анаграмма', 'нагарам')