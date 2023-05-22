//Для заданного целочисленного массива nums возвращайте значение, true если какое-либо значение встречается
// в массиве не менее двух раз false,
// и возвращайте значение, если все элементы различны.

const containsDuplicate = function(nums) {
    const seenNumbers = {};

    for (let num of nums) {
        if (seenNumbers[num]) {
            console.log(true);
        }
        seenNumbers[num] = true;
    }

    console.log(false);
};

containsDuplicate([1,2,2,4,5])