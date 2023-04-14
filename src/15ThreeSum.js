//Дан целочисленный массив nums, вернуть все триплеты,
// [nums[i], nums[j], nums[k]]такие что i != j, i != k, и j != k, и nums[i] + nums[j] + nums[k] == 0.
// Обратите внимание, что в наборе решений не должно быть повторяющихся триплетов.
const threeSum = function(nums) {
    for(let i = 0; i < nums.length; i++){
        console.log(nums[i])
    }
};

threeSum([-1,0,1,2,-1,-4])