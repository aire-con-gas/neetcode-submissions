class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
       let idx1 = 0;
       let idx2 = 0;

       const result = [];

       while (idx1 < word1.length || idx2 < word2.length) {
            if (idx1 < word1.length) {
                result.push(word1[idx1]);
                idx1++;
            }
            if (idx2 < word2.length) {
                result.push(word2[idx2])
                idx2++;
            }
       }

       return result.join('');

    }
}
