//Даны два целочисленных массива nums1и nums2, вернуть массив их пересечения.
//Каждый элемент в результате должен быть уникальным , и вы можете вернуть результат в любом порядке .

const intersection = function(nums1, nums2) {
    const result = [];

    for (const num of nums1) {
        if (nums2.includes(num) && !result.includes(num)) {
            result.push(num);
        }
    }

    console.log(result);
};

intersection([2,2], [1,2,2,1])