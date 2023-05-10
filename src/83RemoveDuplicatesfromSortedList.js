// Учитывая head отсортированный связанный список, удалите все дубликаты,
// чтобы каждый элемент появлялся только один раз.
// Возвращает также отсортированный связанный список.
// const deleteDuplicates = function (head) {
//     const newArr = head.filter((char, index, self) => self.indexOf(char) === index).join("");
//     return (newArr.split(''))
// }; эта версия в leet code ругается на head.filter

const deleteDuplicates = function(head) {
    if (head === null) {
        return null;
    }
    let current = head;
    while (current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return(head);
};

deleteDuplicates([1, 1, 3, 4, 5, 6, 6])