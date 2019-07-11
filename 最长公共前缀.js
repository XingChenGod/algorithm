// 
function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    let str = '';
    let minLength = strs[0].length;
    for (let i = 0; i < strs.length; i ++) {
        if (strs[i].length <= minLength) {
            minLength = strs[i].length;
            str = strs[i];
        }
    }
    // console.log(str, minLength);
    while(minLength >= 0) {
        const flag = strs.every(value => {
            // console.log(value.substr(0, minLength));
            return value.substr(0, minLength) === str.substr(0, minLength);
        });
        str = str.substr(0, minLength);
        if (flag) {
            return str;
        } else {
            minLength --;
        }
    }

    return str;
}

console.log(longestCommonPrefix(["dog","racecar","car"]));
