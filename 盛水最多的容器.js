// 暴力法
function maxArea(height) {
    // 最大
    let max = 0;
    for (let i = 0; i < height.length; i ++) {
        for (let j = i + 1; j < height.length; j ++) {
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        }
    }
    return max;
}

// 双指针
function doublePointers(height) {
    let left = 0,
        right = height.length - 1,
        max = 0;
    while (left <= right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[left] > height[right]) {
            right --;
        } else {
            left ++;
        }
    }
    return max;
}
