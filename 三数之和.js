// 双指针
function threeSum(nums) {
    if (nums === null || nums.length < 3) return [];
    // 先排序
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 1; i < nums.length; i ++) {
        if (nums[0] > 0) break;
        // 去重,下一轮会比较
        if (i > 0 && nums [i] === nums[i - 1]) continue;
        let left = 0, right = nums.length - 1;
        while (left < right) {
            if (nums[left] + nums[i] + nums[right] === 0) {
                res.push([nums[left], nums[i], nums[right]]);
                // 去重
                while (left < right && nums[left] === nums[left + 1]) left ++;
                // 去重
                while (left < right && nums[right] === nums[right - 1]) right --;
                left ++;
                right --;
            }
            if (nums[left] + nums[i] + nums[right] > 0) {
                right --;
            }
            if (nums[left] + nums[i] + nums[right] < 0) {
                left ++;
            }
        }
    }
    return res;
}

console.log(threeSum([-1,0,1,0]));


// 接近target
function f(nums, target) {
    const len = nums.length;
    if (len < 3) {
        return null;
    }
    nums.sort((a, b) => a - b);
    // 结果，比存储 sum 方便，下面对比时不用再用 target - sum 对比
    let diff = target - (nums[0] + nums[1] + nums[2]);
    for (let i = 0; i < len - 2; i++) {
        // 左指针为 i+1，右指针为 nums.length - 1
        let left = i + 1,
            right = len - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                // sum < target 时，left++
                left ++;
            } else {
                // sum > target时，right--
                // while (nums[right] === nums[--right]);
                right --;
            }
            // 存储与 target 最近的值
            if (Math.abs(sum - target) < Math.abs(diff)) {
                diff = target - sum;
            }
        }
    }
    return target - diff;
}
