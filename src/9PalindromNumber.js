
//Учитывая целое число x, вернуть, true если x это палиндром, и false в противном случае
const isPalindrome = function (x) {
    const
        reverse = x.toString().split("").reverse().join(""),
        normal = x.toString()

    return reverse === normal
};

isPalindrome(111991121)