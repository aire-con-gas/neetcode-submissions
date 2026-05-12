class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        const m = matrix.length;
        const n = matrix[0].length;

        this.prefix = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
        
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                this.prefix[i][j] = matrix[i - 1][j - 1]
                    + this.prefix[i - 1][j]
                    + this.prefix[i][j - 1]
                    - this.prefix[i - 1][j - 1];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        // let sum = 0;
        // for (let i = row1; i <= row2; i++) {
        //     for(let j = col1; j <= col2; j++) {
        //         sum += this.matrix[i][j];
        //     }
        // }
        // return sum;
        return this.prefix[row2 + 1][col2 + 1]
            - this.prefix[row1][col2 + 1]
            - this.prefix[row2 + 1][col1]
            + this.prefix[row1][col1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
