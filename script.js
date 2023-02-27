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
                    // cell.innerHTML = '<span class="material-icons-outlined md-80">close</span>';
                    cell.firstChild.textContent = "close";
                }
                else if(board[i] == 2) {
                    // cell.innerHTML = '<span class="material-icons-outlined md-80">circle</span>';
                    cell.firstChild.textContent = "circle";
                }
                else {
                    // cell.innerHTML = '<span class="material-icons-outlined md-80"></span>';
                    cell.firstChild.textContent = "test";
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

    const players = [];

    const addPlayers = (player1, player2) => {
        players[0] = player1;
        players[1] = player2;
    }

    const processTurn = () => {

    }

    const renderBoard = () => {
        // gameboard.renderBoard();
    }

    const checkForWinner = () => {

    }

    const setupBoard = () => {
        let htmlboard = document.querySelector("#gameboard");

        // add cells
        for(let i = 0; i < 9; i++) {
            let cell = document.createElement("div");
            cell.setAttribute("id", "grid-cell");

            let cellContent = document.createElement("span");
            cellContent.classList.add("material-icons-outlined");
            cellContent.classList.add("md-80");
            cellContent.textContent = "test";

            cell.addEventListener("mousedown", function(e) {
                /*
                    If cell content is empty
                        Set the id based on the id of the current player
                */
               console.log(e);
            });

            cell.appendChild(cellContent);
            htmlboard.appendChild(cell);
        }
        gameboard.renderBoard();
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

    return {
        addPlayers,
        setupBoard,
        renderBoard,
        processTurn
    }


})();

const playerFactory = (name, id) => {
    return {name, id}
};


let player1 = playerFactory("player1", 1);
let player2 = playerFactory("player2", 2);

let game = gameController;
game.addPlayers(player1, player2);
game.setupBoard();
console.log("About to render board");
gameboard.renderBoard();