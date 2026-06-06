class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s || !t) {
            return "";
        }

        const targetCounts = {};
        for (let char of t) {
            targetCounts[char] = (targetCounts[char] || 0) + 1;
        }

        const required = Object.keys(targetCounts).length;

        let left = 0;
        let right = 0;
        let formed = 0;

        const windowCounts = {};

        let minLen = Infinity;
        let minStart = 0;

        while (right < s.length) {
            let charRight = s[right];
            windowCounts[charRight] = (windowCounts[charRight] || 0) + 1;

            if (targetCounts[charRight] && windowCounts[charRight] === targetCounts[charRight]) {
                formed++;
            }

            while (left <= right && formed === required) {
                if ((right - left + 1) < minLen) {
                    minLen = right - left + 1;
                    minStart = left;
                }

                let charLeft = s[left];
                windowCounts[charLeft]--;

                if (targetCounts[charLeft] && windowCounts[charLeft] < targetCounts[charLeft]) {
                    formed--;
                }

                left++;
            }

            right++;
        }

        return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
    }
}
