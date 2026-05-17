class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (const op of operations) {
            if (op === 'C') {
                stack.pop();
            } else if (op === 'D') {
                stack.push(stack.at(-1) * 2);
            } else if (op === '+') {
                stack.push(stack.at(-1) + stack.at(-2));
            } else {
                stack.push(Number(op));
            }
        }

        return stack.reduce((sum, n) => sum + n, 0);
    }
}
