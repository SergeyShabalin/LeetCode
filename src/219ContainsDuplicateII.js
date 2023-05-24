//Учитывая целочисленный массив nums и целое число k, возврат,
// true если есть два различных индекса i и jв массиве, такие что nums[i] == nums[j]и abs(i - j) <= k .
// ищем одинаковые числа в промежутке массива между первым найденным и числом k от этого числа
//
const containsNearbyDuplicate = function(nums, k) {
    const numIndexes = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num in numIndexes) {
            if (i - numIndexes[num] <= k) {
                return(true);
            }
        }

        numIndexes[num] = i;
    }

    return(false);
};

containsNearbyDuplicate([1,2,3,1], k = 4)