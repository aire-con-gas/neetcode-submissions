class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const entries = this.keyStore.get(key);
        if (!entries) {
            return '';
        }

        let lo = 0;
        let hi = entries.length - 1;
        let ans = '';

        while (lo <= hi) {
            const mid = lo + Math.floor((hi - lo) / 2);
            if (entries[mid][0] <= timestamp) {
                ans = entries[mid][1];
                lo = mid + 1;
            } else { 
                hi = mid - 1;
            }
        }


        return ans;
    }
}
