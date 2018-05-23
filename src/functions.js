
export const calcBoard = (board, grid) => {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === 'nobomb') {
            let total = 0;
            // left
            if (i % grid !== 0 && board[(i - grid) - 1] !== 'undefined' && board[(i - grid) - 1] === 'bomb') {
                total += 1;
            }
            if (board[i - grid] !== 'undefined' && board[i - grid] === 'bomb')  {
                total += 1;
            }
            // right
            if ((i + 1) % grid !== 0 && board[(i - grid) + 1] !== 'undefined' && board[(i - grid) + 1] === 'bomb') {
                total += 1;
            }
            // left
            if (i % grid !== 0 && board[i - 1] !== 'undefined' && board[i - 1] === 'bomb') {
                total += 1;
            }
            //right
            if ((i + 1) % grid !== 0 && board[i + 1] !== 'undefined' && board[i + 1] === 'bomb') {
                total += 1;
            }
            // left
            if (i % grid !== 0 && board[(i + grid) - 1] !== 'undefined' && board[(i + grid) - 1] === 'bomb') {
                total += 1;
            }
            if (board[i + grid] !== 'undefined' && board[i + grid] === 'bomb') {
                total += 1;
            }
            // right
            if ((i + 1) % grid !== 0 && board[(i + grid) + 1] !== 'undefined' && board[(i + grid) + 1] === 'bomb') {
                total += 1;
            }
            board[i] = total;            
        }
    }
    return board;
}

export const checkAdjacentSquares = (id, boardValue, boardClicked, grid) => {
    if (boardValue[id] === 'bomb') {
        for (let i = 0; i < boardValue.length; i++) {
            boardClicked[i] = true;
        }
    }
    else if (boardValue[id] > 0) {
        boardClicked[id] = true;
    }
    else {
        boardClicked[id] = true;
        let adjacentSquares = checkAdjacentSquaresHelper(id, grid, boardValue);
        adjacentSquares.forEach(function(e) {
            if(boardClicked[e] !== true) {
                checkAdjacentSquares(e, boardValue, boardClicked, grid)
            }
        });

    }
    return boardClicked;
}

// helper function to return array of adjacent cell IDs
const checkAdjacentSquaresHelper = (id, grid, board) => {
    let adjacentCells = [];
        // left
        if ((id % grid !== 0) && (board[(id - grid) - 1] !== undefined)) {
            adjacentCells.push((id - grid) - 1);
        }
        if (board[id - grid] !== undefined)  {
            adjacentCells.push(id - grid);
        }
        // right
        if ((id + 1) % grid !== 0 && board[(id - grid) + 1] !== undefined) {
            adjacentCells.push((id - grid) + 1);
        }
        // left
        if (id % grid !== 0 && board[id - 1] !== undefined) {
            adjacentCells.push(id - 1);
        }
        //right
        if ((id + 1) % grid !== 0 && board[id + 1] !== undefined) {
            adjacentCells.push(id + 1);
        }
        // left
        if (id % grid !== 0 && board[(id + grid) - 1] !== undefined) {
            adjacentCells.push((id + grid) - 1);
        }
        if (board[id + grid] !== undefined) {
            adjacentCells.push(id + grid);
        }
        // right
        if ((id + 1) % grid !== 0 && board[(id + grid) + 1] !== undefined) {
            adjacentCells.push((id + grid) + 1);
        }
    return adjacentCells;
}