class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let maxLength = 0;
        const charCounts = {};

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            
            charCounts[char] = (charCounts[char] || 0) + 1;

            maxFreq = Math.max(maxFreq, charCounts[char]);

            const windowSize = right - left + 1;
            if (windowSize - maxFreq > k) {
                const leftChar = s[left];
                charCounts[leftChar]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }


        return maxLength;
    }
}
