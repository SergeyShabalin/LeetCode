//Учитывая целочисленный массив, nums отсортированный в неубывающем порядке ,
// удалите дубликаты на месте , чтобы каждый уникальный элемент появлялся только один раз.
// Относительный порядок элементов должен быть сохранен . Затем верните количество уникальных элементов в nums .
//
// Учитывайте количество уникальных элементов nums to be k, чтобы вас приняли, вам нужно сделать следующее:
//
// Измените массив nums таким образом, чтобы первые k элементы nums содержали
// уникальные элементы в том порядке, в котором они присутствовали nums изначально.
// Остальные элементы nums не так важны, как и размер nums.
// Вернуть k.
const removeDuplicates = function (nums) {

    let counter = 0;

    for (let j = 1; j < nums.length; j++) {

        if (nums[j] !== nums[counter]) {
            counter++
            nums[counter] = nums[j];
        }
    }
  return( counter + 1);
};

removeDuplicates([1, 1, 2])