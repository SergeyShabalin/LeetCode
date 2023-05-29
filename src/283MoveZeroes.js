//Учитывая массив целых чисел nums, переместите все 0элементы в его конец,
// сохраняя относительный порядок ненулевых элементов.
//
// Обратите внимание , что вы должны сделать это на месте, не создавая копию массива.

const moveZeroes = function(nums) {
    let count = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            nums[count] = nums[i];
            count++;
        }
    }

    while (count < n) {
        nums[count] = 0;
        count++;
    }
    console.log(nums)
};

moveZeroes([9,4,0,3,0,2,3])