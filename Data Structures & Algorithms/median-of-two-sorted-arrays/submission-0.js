class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        const m = nums1.length;
        const n = nums2.length;
        const half = Math.floor((m + n + 1) / 2);

        let lo = 0;
        let hi = m;

        while (lo <= hi) {
            const px = Math.floor((lo + hi) / 2);
            const py = half - px;

            const maxLeft1 = px === 0 ? -Infinity : nums1[px - 1];
            const minRight1 = px === m ? Infinity: nums1[px];
            const maxLeft2 = py === 0 ? -Infinity : nums2[py - 1];
            const minRight2 = py === n ? Infinity: nums2[py];

            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                // ✓ Valid partition — compute the median
                if ((m + n) % 2 === 1) {
                    // Odd total: median is the max of the left half
                    return Math.max(maxLeft1, maxLeft2);
                }
                // Even total: average of the middle two elements
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else if (maxLeft1 > minRight2) {
                hi = px - 1;
            } else {
                lo = px + 1;
            }
        }

    }
}
