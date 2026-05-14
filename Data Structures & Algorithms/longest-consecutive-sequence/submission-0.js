class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);   // O(n) build; deduplicates automatically
        let best = 0;

        for (const num of numSet) {
            // Only start counting if this is the beginning of a sequence
            if (numSet.has(num - 1)) continue;  // not a start — skip

            // Walk the sequence upward
            let current = num;
            let length = 1;
            while (numSet.has(current + 1)) {
                current++;
                length++;
            }

            best = Math.max(best, length);
        }

        return best;

    }
}
