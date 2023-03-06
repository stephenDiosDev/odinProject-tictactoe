// gameboard represents the tic-tac-toe board
const gameboard = (() => {
    const board = [0,0,0,
                   0,0,0,
                   0,0,0];  //1 --> X, 2 --> O, 0 -> empty

    const renderBoard = () => {
        let htmlboard = document.getElementsByClassName("grid-cell");
        
        for(let i = 0; i < htmlboard.length; i++) {
            if(board[i] == 1) {
                htmlboard[i].firstChild.textContent = "close";
            }
            else if(board[i] == 2) {
                htmlboard[i].firstChild.textContent = "circle";
            }
            else {
                htmlboard[i].firstChild.textContent = "";
            }
        }

        setBorders();
        setScores();
    };

    const setScores = () => {

    }

    const setBorders = () => {
        let htmlboard = document.getElementsByClassName("grid-cell");
        //set full borders on corner cells
        for(let i = 0; i < 9; i += 2) {
            if(i != 4) {
                htmlboard[i].style = "border: 3px solid var(--dark-grey);";
            }
        }

        //top middle cell
        htmlboard[1].style = "border-top: 3px solid var(--dark-grey); border-bottom: 3px solid var(--dark-grey);";
        //left middle cell
        htmlboard[3].style = "border-left: 3px solid var(--dark-grey); border-right: 3px solid var(--dark-grey);";

        //right middle cell
        htmlboard[5].style = "border-left: 3px solid var(--dark-grey); border-right: 3px solid var(--dark-grey);";

        //bottom middle cell
        htmlboard[7].style = "border-top: 3px solid var(--dark-grey); border-bottom: 3px solid var(--dark-grey);";
    }

    //1: player 1 win
    //2: player 2 win
    //3: tie
    const checkWinCondition = () => {
        //check top left corner on up, right, diagonal for win

        for(let i = 0; i < 9; i += 3) {    //check for a row win
            if(board[0 + i] == board[1 + i] && board[0 + i] == board[2 + i] && board[0 + i] != 0) {
                return board[0 + i];
            }
        }

        for(let i = 0; i < 3; i++) {    //check for a column win
            if(board[i] == board[i + 3] && board[i] == board[i + 6] && board[i] != 0) {
                return board[i];
            }
        }

        //check for both diagonals
        if((board[0] == board[4] && board[0] == board[8] && board[0] != 0) || (board[6] == board[4] && board[6] == board[2] && board[6] != 0)) {
            return board[0];
        }

        //check for ties, no winner + full board
        for(let i = 0; i < 9; i++) {
            if(board[i] == 0) {     //empty cell found
                return -1; 
            }
        }

        return 3;
    }

    const getBoard = () => {
        return board;
    }

    const setCell = (index, symbol) => {
        board[index] = symbol;
    }

    return {
        renderBoard,
        getBoard,
        checkWinCondition,
        setCell
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
    let activePlayer = null;
    let board = gameboard;

    const players = [];

    const addPlayers = (player1, player2) => {
        players[0] = player1;
        players[1] = player2;
    }

    const processTurn = () => {

    }

    const renderBoard = () => {
        gameboard.renderBoard();
    }

    const checkForWinner = () => {
       return board.checkWinCondition();
    }

    function inputHandler(cell, cellContent) {
        return function listener(e) {                    //of the board array
            if(e.target.innerText == "") {
                if(activePlayer.id == 1) {
                    cellContent.textContent = "close";
                }
                else {
                    cellContent.textContent = "circle";
                }

                board.setCell(e.target.dataset.index, activePlayer.id)
            }
            //check win condition
            let winner = checkForWinner();
            if(winner != -1) {    //winner has been found, or its a tie!
                let replacementBoard = document.getElementById("gameboard");
                replacementBoard.replaceWith(replacementBoard.cloneNode(true));
                activePlayer.score += 1;
                renderWinLoss(winner);
            }
            switchActivePlayer();
        }
    }

    function startGame() {
        //check for custom names
        let player1NameInput = document.getElementById("player1-name");
        let player2NameInput = document.getElementById("player2-name");

        let player1Name = "Player 1";
        let player2Name = "Player 2";

        if(player1NameInput.value != "") {
            player1Name = player1NameInput.value;
        }

        if(player2NameInput.value != "") {
            player2Name = player2NameInput.value;
        }

        //disable name fields
        player1NameInput.setAttribute("disabled", "true");
        player2NameInput.setAttribute("disabled", "true");

        document.getElementById("player1-name-banner").innerHTML = player1Name;
        document.getElementById("player2-name-banner").innerHTML = player2Name;

        //create players
        let player1 = playerFactory(player1Name, 1, 0);
        let player2 = playerFactory(player2Name, 2, 0);

        let game = gameController;
        game.addPlayers(player1, player2);
        game.setupBoard();
        game.renderBoard();
        console.log("Players: ");
        console.log(players);
    }

    const setupBoard = () => {
        let htmlboard = document.querySelector("#gameboard");
        activePlayer = players[0];

        // add cells
        for(let i = 0; i < 9; i++) {
            let cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.dataset.index = i;

            let cellContent = document.createElement("span");
            cellContent.classList.add("material-icons-outlined");
            cellContent.classList.add("md-80");
            cellContent.textContent = "test";

            cell.addEventListener("mousedown", inputHandler(cell, cellContent), false);

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

    //make a "hidden" div appear with the winning player
    const renderWinLoss = (winnerID) => {
        //display winning player name
       let winMessage = document.querySelector("#win-msg > h2");

       if(winnerID != 3) {
            let winnerName = players[activePlayer.id - 1].name;
            winMessage.textContent = winnerName + " wins!";
       }
       else {
            winMessage.textContent = "It's a tie!";
       }
       
       winMessage.style.animation = "2s anim-popin 100ms ease forwards";
       winMessage.style.display = "inline";

       if(winnerID != 3) {
            let winnerScore = document.getElementsByClassName("player-card")[winnerID - 1].children[3];
            winnerScore.innerText = players[winnerID - 1].score + " points";
       }
    }

    return {
        addPlayers,
        setupBoard,
        renderBoard,
        processTurn,
        startGame
    }


})();

const playerFactory = (name, id, score) => {
    return {name, id, score}
};