// 插入排序，选择元素与前一个比较
function insertSort(arr) {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }
    let preIndex, // 前一个元素的序号
        current; // 当前选择的元素
    for (let i = 1; i < len; i ++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && current < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex --;
        }
        if (preIndex !== i) {
            arr[preIndex + 1] = current;
        }
    }
    return arr;
}

/*
* 优化思路：拆半，从中间元素开始和其他元素比较
* */

function binaryInsertionSort1(arr) {
    const len = arr.length;
    if (len <= 1) return arr;

    let current, i, j, low, high, m;
    for (i = 1; i < len; i ++) {
        low = 0;
        high = i - 1;
        current = arr[i];
        while (low <= high) {
            m = (low + high) >> 1; //相当于Math.floor(x / 2)
            if (arr[i] >= arr[m]) {
                // 换到高区
                low = m + 1;
            } else {
                high = m - 1
            }
        }
        for (j = i; j > low; j --) {
            arr[j] = arr[j - 1];
        }
        arr[low] = current;
    }
    return arr;
}
