class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        k = k % n;
        if (k === 0) {
            return;
        }

        this.reverse(nums, 0, n - 1);
        this.reverse(nums, 0, k - 1);
        this.reverse(nums, k, n - 1);
    }

    reverse(nums, left, right) {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
}
