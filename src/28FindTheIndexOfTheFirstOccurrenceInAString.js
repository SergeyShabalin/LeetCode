//Учитывая две строки needle и haystack,
// вернуть индекс первого вхождения в needle,
// haystack или -1 если needle не является частью haystack.
const strStr = function (haystack, needle) {

        let counter = 0

        while (counter < haystack.length) {
            const str = haystack.slice(counter, counter + needle.length)
            if (str === needle) {
                return (counter)
            }
            counter++
        }
        return (-1)
    }
;

strStr("sadbutsad", "sad")