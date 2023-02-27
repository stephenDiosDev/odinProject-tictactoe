/*
    Gameboard module

    Player factory

    Control flow module
*/

// gameboard represents the tic-tac-toe board
const gameboard = (() => {
    const board = [1,2,1,1,1,0,2,2,2];  //1 --> X, 2 --> O, 0 -> empty

    const renderBoard = () => {
        let htmlboard = document.querySelector("#gameboard");
        let i = 0;
        htmlboard.childNodes.forEach(cell => {
            if(cell.className == "grid-cell") {
                if(board[i] == 1) {
                    cell.innerHTML = '<span class="material-icons-outlined md-80">close</span>';
                }
                else if(board[i] == 2) {
                    cell.innerHTML = '<span class="material-icons-outlined md-80">circle</span>';
                }
                else if(board[i] == 0) {
                    cell.innerHTML = '<span class="material-icons-outlined md-80"></span>';
                }
                else {
                    cell.innerHTML = '<span class="material-icons-outlined md-80"></span>';
                }
                i++;
            }
        });
    };

    const checkWinCondition = () => {

    }

    const getBoard = () => {
        return board;
    }

    return {
        renderBoard,
        getBoard
    };
})();

const gameController = ((player1, player2) => {
    /*
            Initialize game board
            Loop while game isn't over: 
                Ask active player for turn
                Process turn
                Render board
                Check win condition
                    mark game as over if win condition is met
                    else continue game
                switch active player
            Render victory/loss screen
            End game
    */
    const activePlayer = null;
    const board = null;

    const players = [player1, player2];

    const processTurn = () => {

    }

    const renderBoard = () => {

    }

    const checkForWinner = () => {

    }

    const switchActivePlayer = () => {
        if(getActivePlayer() === players[0]) {
            activePlayer = players[1]
        }
        else {
            activePlayer = players[0]
        }
    }

    const getActivePlayer = () => activePlayer;

    const renderWinLoss = () => {

    }


})();

const playerFactory = (name, id) => {
    return {name, id}
};

console.log("About to render board");
gameboard.renderBoard();