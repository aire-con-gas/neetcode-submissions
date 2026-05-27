class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let lo = 1;
        let hi = Math.max(...piles);

        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);

            if (this.canFinish(piles, mid, h)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }

        return lo;
    }

    canFinish(piles, k, h) {
        let hours = 0;

        for (const p of piles) {
            hours += Math.ceil(p / k);
        }

        return hours <= h;
    }
}
