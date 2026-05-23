class FreqStack {
    constructor() {
        this.freq = new Map();
        this.group = new Map();
        this.maxFreq = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const f = (this.freq.get(val) ?? 0) + 1;
        this.freq.set(val, f);

        if (f > this.maxFreq) {
            this.maxFreq = f;
        }

        if (!this.group.has(f)) {
            this.group.set(f, []);
        }

        this.group.get(f).push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        const stack = this.group.get(this.maxFreq);
        const val = stack.pop();

        if (stack.length === 0) {
            this.group.delete(this.maxFreq);
            this.maxFreq--;
        }

        this.freq.set(val, this.freq.get(val) - 1);
        return val;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
