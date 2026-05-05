class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let commonPrefix = strs[0];

        for (let i = 1; i < strs.length; i++) {
           while(strs[i].indexOf(commonPrefix) !== 0) {
                commonPrefix = commonPrefix.substring(0, commonPrefix.length - 1);

                if (commonPrefix === "") {
                    return "";
                }
           }
        }

        return commonPrefix;
    }
}
