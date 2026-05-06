class MyHashSet {
    constructor() {
        this._hashSet = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        // if (this._hashSet[key] === undefined) {
        //     this._hashSet[key] = true;
        // }
        if (!this.contains(key)) {
            this._hashSet.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this._hashSet.indexOf(key);
        if (index !== -1) {
            this._hashSet[index] = this._hashSet[this._hashSet.length - 1];
            this._hashSet.pop();
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this._hashSet.indexOf(key) !== -1;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
