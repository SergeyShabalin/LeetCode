//Учитывая отсортированный массив различных целых чисел и целевое значение,
// вернуть индекс, если цель найдена.
// Если нет, верните индекс туда, где он был бы, если бы он был вставлен по порядку.
// Вы должны написать алгоритм со  O(log n)сложностью выполнения.

const searchInsert = function(nums, target, arrLength = 0) {
    const len = nums.length;
    const half = Math.floor(len / 2);
    const sumIndex = arrLength;

    if (len === 1) {
        if (target > nums[0]){
            return 1 + sumIndex;
        } else {
            return sumIndex;
        }
    }

    if (target <= nums[half - 1]) {
        return searchInsert(nums.slice(0, half), target, sumIndex);
    } else {
        return searchInsert(nums.slice(half), target, sumIndex + half);
    }
};

searchInsert([1, 3, 5, 6], 3)