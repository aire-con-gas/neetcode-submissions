class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        let lo = 0;
        let hi = m * n - 1;

        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            const val = matrix[Math.floor(mid / n)][mid % n];

            if (val === target) {
                return true;
            } else if (val < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return false;
    }
}
