class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const delimiter = '#';
        return strs.map((str) => (`${str.length}${delimiter}${str}`)).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //return str.match(/\d+#\w+/g).map((s) => s.replace(/\d+#/, ''));
        const result = []; 
        let i = 0;
        while (i < str.length) {
            const hash = str.indexOf('#', i);
            const len = Number(str.slice(i, hash));
            result.push(str.slice(hash + 1, hash + 1 + len));
            i = hash + 1 + len;
        }

        return result;
    }
}
