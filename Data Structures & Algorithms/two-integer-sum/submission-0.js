class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const lookup = {};
        

        for(let i = 0; i < nums.length; i++) {
            const val = target - nums[i];
            console.log('val', val);
            if (lookup[val] !== undefined) {
                return [lookup[val], i];
            } 
            
            lookup[nums[i]] = i;
        }

        return result;
    }
}
