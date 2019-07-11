/*
* 123 -> 321
* -123 -> -321
* 120 -> 12
* */

// 解法一

function reverseNum(x) {
    x = x.toString().split('');
    x.reverse();
    // 去0
    let len = x.length;
    let i = 0;
    while(i <= len) {
        if (x[i] === '0') {
            x.splice(i, 1);
            len = x.length;
        } else {
            break;
        }
    }
    if (x[x.length - 1] === '-') {
        x.unshift(x.splice(x.length - 1, 1)[0]);
    }
    return x.join('') * 1;
}

console.log(reverseNum(-123));;
