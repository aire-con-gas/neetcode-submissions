class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        const result = [];
        const n = nums.length;

        for (let i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            for (let j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) {
                    continue;
                }

                let lo = j + 1;
                let hi = n - 1;

                while (lo < hi) {
                    const sum = nums[i] + nums[j] + nums[lo] + nums[hi];

                    if (sum === target) {
                        result.push([[nums[i], nums[j], nums[lo], nums[hi]]]);
                        while(lo < hi && nums[lo] === nums[lo + 1]) {
                            lo++;
                        }
                        while(lo < hi && nums[hi] === nums[hi - 1]) {
                            hi--;
                        }
                        lo++;
                        hi--;
                    } else if (sum < target) {
                        lo++;
                    } else {
                        hi--;
                    }
                }

            }
        }

        return result;
    }
}
