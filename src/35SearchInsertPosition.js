//Учитывая отсортированный массив различных целых чисел и целевое значение,
// вернуть индекс, если цель найдена.
// Если нет, верните индекс туда, где он был бы, если бы он был вставлен по порядку.
// Вы должны написать алгоритм со  O(log n)сложностью выполнения.

const searchInsert = function (nums, target, arrLength = 0) {

    let changedNums = nums
    let len = nums.length
    let half = Math.round(len / 2)
    let firstHalfArr = nums.slice(0, half)
    let secondHalfArr = nums.slice(half, len)
    const sumIndex = arrLength

    let finishIndex = 0

    let lastElemFirst = firstHalfArr[firstHalfArr.length - 1]
    let firstElemSecond = secondHalfArr[0]

    if (target > nums[len - 1]) {
        console.log('index', nums.indexOf(nums[len - 1]) + 1)
    }

    if (target <= lastElemFirst) {
        console.log('искомое число в первой части массива')
        changedNums = firstHalfArr
        if (target === lastElemFirst) {
            console.log('найденное число', lastElemFirst, 'его индекс ')
            console.log(nums.indexOf(lastElemFirst) + sumIndex)
            finishIndex = (nums.indexOf(lastElemFirst) + sumIndex)
        } else {
            searchInsert(changedNums, target)
        }

    }
    if (target >= firstElemSecond) {
        let indexed = nums.indexOf(target)
        changedNums = secondHalfArr
        console.log('искомое число во второй части массива')
        if (target === firstElemSecond) {
            console.log('найденное число', firstElemSecond, 'его индекс ')
            console.log(indexed + sumIndex)
            finishIndex = indexed + sumIndex
        } else {
            searchInsert(changedNums, target, firstHalfArr.length)
        }
    } else {
        console.log('half', half)
        finishIndex = half
    }

    console.log('finishIndex', finishIndex)
};

searchInsert([1, 3, 5, 6], 5)