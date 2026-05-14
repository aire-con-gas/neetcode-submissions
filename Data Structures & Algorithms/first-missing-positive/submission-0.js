class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const n = nums.length;

        // Phase 1: Place each number in its correct bucket
        for (let i = 0; i < n; i++) {
            // Keep swapping until nums[i] is in the right place or out of range
            while (
                nums[i] >= 1 &&
                nums[i] <= n &&
                nums[nums[i] - 1] !== nums[i]   // avoid infinite loop on duplicates
            ) {
                const dest = nums[i] - 1;
                [nums[i], nums[dest]] = [nums[dest], nums[i]];
            }
        }

        // Phase 2: Find the first "hole"
        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) return i + 1;
        }

        return n + 1;
    }
}
