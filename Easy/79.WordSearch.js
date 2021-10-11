/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == word[0] && dfs(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
};

const dfs = (board, i, j, count, word) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[i].length ||
    board[i][j] != word[count]
  ) {
    return false;
  }
  if (count == word.length - 1) return true;
  let temp = board[i][j];
  board[i][j] = 0;
  let check =
    dfs(board, i + 1, j, count + 1, word) ||
    dfs(board, i - 1, j, count + 1, word) ||
    dfs(board, i, j + 1, count + 1, word) ||
    dfs(board, i, j - 1, count + 1, word);
  board[i][j] = temp;
  return check;
};
//https://leetcode.com/problems/word-search/
