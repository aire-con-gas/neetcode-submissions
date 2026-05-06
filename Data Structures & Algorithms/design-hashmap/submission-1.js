class MyHashMap {
    constructor() {
        this._hashMap = [];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.get(key) === -1) {
            
            this._hashMap.push([key, value]);
            console.log('put1', this._hashMap);
        } else { 
            for(let i = 0; i < this._hashMap.length; i++) {
                if (this._hashMap[i][0] === key) {
                    this._hashMap[i] = [key, value];
                    console.log('put2', this._hashMap);
                    break;
                }
            }
        }
        
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this._hashMap.length === 0) {
            return -1;
        }

        for(let i = 0; i < this._hashMap.length; i++) {
            if (this._hashMap[i][0] === key) {
                console.log('get', key, this._hashMap);
                return this._hashMap[i][1];
            }
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        for(let i = 0; i < this._hashMap.length; i++) {
            if (this._hashMap[i][0] === key) {
                this._hashMap[i] = this._hashMap[this._hashMap.length - 1];
                this._hashMap.pop();
                return;
            }
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
