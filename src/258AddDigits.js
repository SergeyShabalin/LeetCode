//Учитывая целое число num, последовательно добавляйте все его цифры,
// пока в результате не останется только одна цифра, и верните его.

const addDigits = function(num) {
    if (num === 0) {
        return(0);
    }
    if (num % 9 === 0) {
        return( 9);
    }
    return(num % 9);
};

addDigits(31)