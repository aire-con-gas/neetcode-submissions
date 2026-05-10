class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};

        for (let i = 0; i < nums.length; i++) {
            if (countMap[nums[i]] === undefined) {
                countMap[nums[i]] = 1;
            } else {
                countMap[nums[i]]++;
            }
        }

        const entries = Object.entries(countMap)
            .map(([key, count]) => [Number(key), count]);
        const heap = [];

        for (let [key, count] of entries) {
            heap.push([key, count]);
            heap.sort((a, b) => a[1] - b[1]);
            if (heap.length > k) {
                heap.shift();
            }
        }

        return heap.map(([key]) => key).sort((a, b) => a - b);

    }
}
