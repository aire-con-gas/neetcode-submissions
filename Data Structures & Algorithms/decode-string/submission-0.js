class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];
        let current = "";
        let k = 0;

        for (const ch of s) {
            if (ch >= '0' && ch <= '9') {
                k = k * 10 + Number(ch);
            } else if (ch === '[') {
                stack.push([current, k]);
                current = '';
                k = 0;
            } else if (ch === ']') {
                const [prev, repeat] = stack.pop();
                current = prev + current.repeat(repeat);
            } else {
                current += ch;
            }
        }

        return current;
    }
}
