/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    var pre = nums[0];
    var cur = null
    var result = 0;


    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] != pre) {
            cur = nums[i];
            if ((cur > pre && nums[i + 1] < cur) || (cur < pre && nums[i + 1] > cur)) {
                result++;
                pre = cur;
            }
        }

    }
    return result;

};
const array = [4, 4, 1, 1, 6, 5]

console.log(countHillValley(array))