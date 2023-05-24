//Учитывая root бинарное дерево, инвертируйте дерево и верните его корень.

const invertTree = function(array) {
    if (array === null) {
        return null;
    }

    const stack = [array];

    while (stack.length > 0) {
        const node = stack.pop();

        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }

   return(array);

};

invertTree([4,2,7,1,3,6,9])