//Учитывая целое число n, вернуть, true если это степень четырех. В противном случае возвращайте false .
//
// Целое число n является степенью числа четыре, если существует целое число x такое, что .n == 4x

const isPowerOfFour = function(n) {
    if (n <= 0) {
        return false;
    }

    while (n % 4 === 0) {
        n = n/4;
    }

    return n === 1;
};