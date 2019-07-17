// 暴力法
function trap(height) {
    let res = 0;
    for (let i = 1; i < height.length - 1; i ++) {
        let left_max = 0, right_max = 0;
        for (let j = i; j >= 0; j --) {
            left_max = Math.max(left_max, height[j]);
            console.log(left_max);
        }
        for (let k = i; k < height.length; k ++) {
            right_max = Math.max(right_max, height[k]);
            console.log(right_max);
        }
        res += Math.min(left_max, right_max) - height[i];
        // console.log(res);
    }
    return res;
}

const arr = [0, 1, 0, 2];

// 动态编程
function f(height) {
    let left = 0, right = height.length - 1;
    let res = 0;
    let left_max = 0, right_max = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= left_max ? (left_max = height[left]) : res += (left_max - height[left]);
            ++left;
        } else {
            height[right] >= right_max ? (right_max = height[right]) : res += (right_max - height[right]);
            --right;
        }
    }
    return res;
}
