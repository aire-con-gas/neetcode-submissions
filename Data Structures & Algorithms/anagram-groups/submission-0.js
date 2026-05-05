class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for(let i = 0; i < strs.length; i++) {
            const k = strs[i].split('').sort().join('');
            if (groups[k] !== undefined) {
                groups[k].push(strs[i]);
            } else {
                groups[k] = [strs[i]];
            }
        }

        return Object.values(groups);
    }
}
