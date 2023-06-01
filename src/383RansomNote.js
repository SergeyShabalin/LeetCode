//Имея две строки ransomNote и magazine, верните true, если ransomNote можно построить,
// используя буквы от magazine и false в противном случае .
//
// Каждая буква в magazine может быть использована только один раз в ransomNote.

const canConstruct = function(ransomNote, magazine) {
    const magazineChars = magazine.split('')

    for (let char of ransomNote) {
        const charIndex = magazineChars.indexOf(char)
        if (charIndex === -1) {
            console.log(false);
        }
        magazineChars.splice(charIndex, 1)
    }

    console.log(true);
};

canConstruct('aa', 'aasb')