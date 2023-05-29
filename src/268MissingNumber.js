//Учитывая массив nums, содержащий n различные числа в диапазоне [0, n],
// верните единственное число в диапазоне, отсутствующее в массиве.

const missingNumber = function(nums) {
    const n = nums.length;
    const sum = (n * (n + 1)) / 2;
    const sumNums = nums.reduce((acc, num) => acc + num, 0);
    const missingNumber = sum - sumNums;
    console.log(missingNumber);
};

missingNumber([0,4,1,2])