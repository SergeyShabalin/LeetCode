//Учитывая a pattern и строку s, найдите, s следует ли одному и тому же шаблону.
//
// Здесь follow означает полное совпадение, такое, что существует биекция между буквой в pattern и непустым словом в s.


const wordPattern = function(pattern, s) {
    const words = s.split(' ');

    if (pattern.length !== words.length) {
        console.log(false);
    }

    for (let i = 0; i < pattern.length; i++) {
        if (pattern.indexOf(pattern[i]) !== words.indexOf(words[i])) {
            console.log(false);
        }
    }

    console.log(true);
};

wordPattern('aaa', 'sema sema sema')