class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const stack = [];
        const segments = path.split('/');

        for (const seg of segments) {
            if (seg === '' || seg === '.') {
                continue;
            } else if (seg === '..') {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else {
                stack.push(seg);
            }
        }



        return '/' + stack.join('/');
    }
}
