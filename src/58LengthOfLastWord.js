// Учитывая строку s, состоящую из слов и пробелов, вернуть длину последнего слова в строке.
// Слово – это максимальная подстрока
// состоящая только из не пробельных символов.

function lengthOfLastWord(s) {
    const newArr = s.trim().split(' ')
    return (newArr[newArr.length - 1].length)
}

lengthOfLastWord("   fly me   to   the moon  ")