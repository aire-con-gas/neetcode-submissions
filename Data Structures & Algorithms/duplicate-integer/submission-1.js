class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dup = false;
        const duplicateSet = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (duplicateSet.has(nums[i])) {
                dup = true;
                break;
            }
            duplicateSet.add(nums[i]);
        }

        return dup;
    }
}
