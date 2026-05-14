class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows  = Array.from({ length: 9 }, () => new Set());
  const cols  = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;              // empty cell — skip

      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(val))   return false;   // duplicate in this row
      if (cols[c].has(val))   return false;   // duplicate in this column
      if (boxes[boxIndex].has(val)) return false; // duplicate in this 3×3 box

      rows[r].add(val);
      cols[c].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
    }
}
