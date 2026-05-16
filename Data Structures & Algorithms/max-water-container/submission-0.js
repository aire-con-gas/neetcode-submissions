class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        let i = 0;
        let j = heights.length - 1;

        while (i < j) {
            const currArea = (j - i) * Math.min(heights[i], heights[j]);
            maxArea = Math.max(maxArea, currArea);
            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return maxArea;
    }
}
