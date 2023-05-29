//Для заданного целого числа n вернуть массив такой ans длины ,
// n + 1что для каждого i ( 0 <= i <= n) равно количеству 's в двоичном представлении .ans[i]1i

const countBits = function(n) {
    const ans = [];

    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2);
        const count = (binary.match(/1/g) || []).length;
        ans.push(count);
    }

    console.log(ans);
};

countBits(5)