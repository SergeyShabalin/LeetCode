//Учитывая массив nums size n, вернуть элемент большинства .
// Элемент большинства — это элемент, который встречается более ⌊n / 2⌋одного раза.
// Вы можете предположить, что в массиве всегда существует мажоритарный элемент.
const majorityElement = function(nums) {
        let count = 0;
        let majority = null;

        for (let i = 0; i < nums.length; i++) {
            if (count === 0) {
                majority = nums[i];
                count++;
            } else if (majority === nums[i]) {
                count++;
            } else {
                count--;
            }
        }

    console.log(majority);
};

majorityElement([[2,2,1,1,1,2,2]])