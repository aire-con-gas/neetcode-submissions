class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const n = nums.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(nums, n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            [nums[0], nums[i]] = [nums[i], nums[0]];

            this.heapify(nums, i, 0);
        }

        return nums;
    }

    heapify(nums, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
    
        if (left < n && nums[left] > nums[largest]) {
            largest = left;
        }

        if (right < n && nums[right] > nums[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [nums[i], nums[largest]] = [nums[largest], nums[i]];

            this.heapify(nums, n, largest);
        }
    }
}
