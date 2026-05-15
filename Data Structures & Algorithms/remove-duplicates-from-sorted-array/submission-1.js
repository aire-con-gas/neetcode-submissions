class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 1; // first element is always unique

        for (let j = 1; j < nums.length; j++) {
            if (nums[j] !== nums[j - 1]) {
                nums[k] = nums[j]; // write unique value into place
                k++;
            }
        }

        return k;
    }
}
