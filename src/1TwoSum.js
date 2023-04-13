// Учитывая массив целых чисел nums и целое число target, верните индексы двух чисел так, чтобы они составляли
// в сумме target
// Вы можете предположить, что каждый вход будет иметь ровно одно решение,
// и вы не можете использовать один и тот же элемент дважды.
// Вы можете вернуть ответ в любом порядке.

//медленное решение
const twoSum = function (nums, target) {
    let array = []

    for (let i = 0; i < nums.length; i++) {
        let indexItem = i
        const arrayItem = nums[i]
        const twoIndex = []
        const lastNumber = (target - arrayItem)
        twoIndex.push(i)

        nums.filter((item, ss) => {
            if (item === lastNumber && indexItem !== ss)
                twoIndex.push(ss)
        })
        if (twoIndex.length === 2){
            array = [...twoIndex];
            break
        }
    }

    return(array)
};

//быстрое решение
function twoSum2(nums, target) {
    const objData = {};
    for (let i in nums) {
        const diff = target - nums[i];
        if (objData[diff]) {
            return([+objData[diff], +i])
        } else {
             objData[nums[i]] = i;
        }
    }
}

twoSum2([3,2,4], 6)