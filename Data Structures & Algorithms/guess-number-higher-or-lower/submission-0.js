/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let lo = 1;
        let hi = n;

        while (lo <= hi) {
            const mid = lo + Math.floor((hi - lo) / 2);
            const result = guess(mid);

            if (result === 0) {
                return mid;
            } else if (result === 1) {
                lo = mid + 1;
            } else if (result === -1) {
                hi = mid - 1;
            }
        }
    }
}
