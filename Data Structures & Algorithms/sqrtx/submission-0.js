class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x < 2) {
            return x;
        }

        let lo = 1;
        let hi = Math.floor(x / 2);
        let result = 1;

        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (mid * mid === x) {
                return mid;
            }
            if (mid * mid < x) {
                result = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return result;
    }
}
