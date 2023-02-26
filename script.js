/*
    Gameboard module

    Player factory

    Control flow module
*/

// gameboard represents the tic-tac-toe board
const gameboard = (() => {
    const board = [0,0,0,0,0,0,0,0,0];

    const renderBoard = () => {
        // clear html board, loop through board arr, update html board
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