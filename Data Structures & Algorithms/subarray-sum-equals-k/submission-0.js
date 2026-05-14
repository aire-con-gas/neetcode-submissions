class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixCount = new Map();
        prefixCount.set(0, 1); // empty prefix

        let prefixSum = 0;
        let count = 0;

        for (const num of nums) {
            prefixSum += num;

            // How many previous prefix sums are exactly (prefixSum - k)?
            // Each such occurrence gives us one valid subarray ending here.
            const diff = prefixSum - k;
            if (prefixCount.has(diff)) {
                count += prefixCount.get(diff);
            }

            // Record this prefix sum for future iterations
            prefixCount.set(prefixSum, (prefixCount.get(prefixSum) ?? 0) + 1);
        }

        return count;
    }
}
