/*
* (){}[] 括号是否合理
* */
function isValid(s) {
    const len = s.length;
    // 拿到字符串的第一项
    const first = s.charAt(0);
    if (len === 0) return true;
    if (len % 2 !== 0 || [')', ']', '}'].indexOf(first) === 0) return false;

    // 入栈，第一项
    const stack = [first];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 1; i < len; i ++) {
        const flag = s.charAt(i) in map;
        console.log(flag);
        if (flag) {
            if (stack[stack.length - 1] === map[s.charAt(i)]) {
                stack.pop();
            } else {
                break;
                return false;
            }
        } else {
            stack.push(s.charAt(i));
        }
    }
    return stack.length === 0;
}

console.log(isValid(''));

// 生成括号 n 是给几对括号
// function generateParenthesis(n) {
//     const res = [];
//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '[',
//     };
//     for (let i = 0; i < n * 2; i ++) {
//
//     }
// }

const arr = [{ id: '1', name: 'xl' },
    { id: '2', name: 'ww' },
    { id: '1', name: 'xl' },
    { id: '4', name: 'ww' }];

// function f(arr) {
//     let map = {};
//     const res = [];
//     for (let i = 0; i < arr.length; i ++) {
//         if (!(`${arr[i].id}${arr[i].name}`in map)) {
//             res.push(arr[i]);
//             map[`${arr[i].id}${arr[i].name}`] = arr[i];
//         }
//     }
//     return res;
// }
//
// console.log(f(arr));
