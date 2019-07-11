// 滑动窗口方法
function slideFrame(s) {
    const len = s.length;
    if (len === 0) {
        return '';
    }
    // 最大回文字符串
    let maxStr = '';
    // 窗口大小
    let frameSize = 1;
    while (frameSize <= len) {
        for (let i = 0; i < len; i ++) {
            const str = s.substr(i, frameSize);
            if (str === str.split('').reverse().join('') && str.length > maxStr) {
                maxStr = str;
            }
        }
    }
    return maxStr;
}

// 中心扩展
function centerSpread(s) {
    const len = s.length;
    if (len === 0) {
        return '';
    }
    // 回文字符串的长度
    let longestPalindrome = 1;
    // 取一个字符串
    let longestPalindromeStr = s.substring(0, 1);
    for (let i = 0; i < len; i ++) {
        // 奇数扩展
        let palindromeOdd = findStr(s, len, i, i);
        // 偶数扩展
        let palindromeEven = findStr(s, len, i, i + 1);
        let maxLen = palindromeOdd.length > palindromeEven.length ? palindromeOdd : palindromeEven;
        if (maxLen.length > longestPalindrome) {
            longestPalindrome = maxLen.length;
            longestPalindromeStr = maxLen;
        }
    }
    return longestPalindromeStr;
}

function findStr(str, len, left, right) {
    let l = left,
        r = right;
    while (l >= 0 && r <= len && str.charAt(l) === str.charAt(r)) {
        l --;
        r ++;
    }
    return str.substring(l + 1, r);
}

// 动态规划
function dynmic(s) {
    var arr = [];
    var max = 0;
    var ret = '';
    for (let left = 0; left < s.length; left++) {
        arr[left] = []
    }
    for (let right = 1; right < s.length; right++) {
        for (let left = 0; left < right; left++) {
            if ((s.charAt(left) === s.charAt(right)) && (right - left <= 2 || arr[left + 1][right - 1])) {
                arr[left][right] = true;
                if (right - left + 1 > max) {
                    max = right - left + 1
                    ret = s.slice(left, right + 1)
                }
            }
        }
    }
    if (max === 0) {
        return s.charAt(0)
    }
    return ret;
}


