class MyQueue {
    constructor() {
        this.inbox = [];
        this.outbox = [];
    }

    _transfer() {
        if (this.outbox.length === 0) {
            while (this.inbox.length > 0) {
                this.outbox.push(this.inbox.pop());
            }
        }
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.inbox.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        this._transfer();
        return this.outbox.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        this._transfer();
        return this.outbox.at(-1);
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.inbox.length === 0 && this.outbox.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
