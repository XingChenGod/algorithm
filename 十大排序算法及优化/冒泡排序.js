// 冒泡排序，相邻比较，交换位置
function bubbleSort(arr) {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }
    for (let i = 0; i < len - 1; i ++) {
        for (let j = 0; j < len - i - 1; j ++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 2, 1]));
