class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const n = nums.length;
        const countMap = {};
        for (let i = 0; i < nums.length; i++) {
            if (countMap[nums[i]] !== undefined) {
                countMap[nums[i]] += 1;
            } else {
                countMap[nums[i]] = 0;
            }
        }

        // console.log('countMap', countMap);
        // console.log('n / 2', Math.floor(n / 2));

        for (let [key, value] of Object.entries(countMap)) {
            if (value >= Math.floor(n / 2)) {
                return Number(key);
            }
        }
    
    }
}
