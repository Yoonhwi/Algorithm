/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const firstWord = word[0];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === firstWord) {
                const canVisit = Array.from({ length: board.length }, () => Array(board[0].length).fill(true))
                if (findStr(board, word, i, j, canVisit)) {
                    return true
                };
            }
        }
    }
    return false;
};


function findStr(board, word, i, j, canVisit) {
    if (word.length === 0) {
        return true;
    }

    const findChar = word[0];
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || !canVisit[i][j] || board[i][j] !== findChar) {
        return false;
    }

    canVisit[i][j] = false;
    if (findStr(board, word.slice(1), i - 1, j, canVisit) ||
        findStr(board, word.slice(1), i, j - 1, canVisit) ||
        findStr(board, word.slice(1), i + 1, j, canVisit) ||
        findStr(board, word.slice(1), i, j + 1, canVisit)) {
        return true;
    }

    canVisit[i][j] = true;
    return false
}




console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "SEE"));