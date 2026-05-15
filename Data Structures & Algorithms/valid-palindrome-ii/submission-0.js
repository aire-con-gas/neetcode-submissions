class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function verifyIsPalindrome(left, right) {
            while (left < right) {
                if (s[left] !== s[right]) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        }

        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            if (s[l] !== s[r]) {
                return verifyIsPalindrome(l + 1, r) || verifyIsPalindrome(l, r - 1);
            }
            l++;
            r--;
        }

        return true;
    }
}
