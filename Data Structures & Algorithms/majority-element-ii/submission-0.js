class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const numsMap = {};
        const n = nums.length;
        const majorityElements = [];
        const third = 1 / 3;

        for(let i = 0; i < nums.length; i++) {
            if(numsMap[nums[i]]) {
                numsMap[nums[i]] += 1;
            } else {
                numsMap[nums[i]] = 1;
            }
        }

        for(const [key, val] of Object.entries(numsMap)) {
            if ((val / n) > third) {
                majorityElements.push(Number(key));
            }
        }

        return majorityElements.sort();
    }
}
