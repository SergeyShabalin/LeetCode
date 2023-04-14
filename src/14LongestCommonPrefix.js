//Напишите функцию, которая находит самую длинную строку общего префикса среди массива строк.
// Если общего префикса нет, вернуть пустую строку "".

const longestCommonPrefix = function(strs) {
        if(!strs.length) return '';

        for( let i = 0; i < strs[0].length; i++){ //пробегаюсь по буквам в первом слове

            for( let word of strs){ //пробегаюсь по словам в массиве
                if( word[i] !== strs[0][i]){
                    return(strs[0].slice(0,i)); //Если такой буквы в слове нет, возвращаю слово без этой буквы
                }
            }
        }
    return(strs[0])

};

longestCommonPrefix(["dog","racecar","car"])