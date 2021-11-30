// document.body.style.backgroundImage = url(../Image/sm.jpeg);
const squares = document.querySelectorAll(".square");
const title= document.getElementById("pageTitle");
const message = document.getAnimations("gameMessage");
const restartBtn = document.querySelector('#restart');
// new component( "../Image/sm.jpeg";
const spaces = [];
const playerOne = 'W';
const playerTwo = 'E';
let currentPlayer = playerOne;

const drawBoard = () => {
  squares.forEach((square, i) => {
    let styling= '';
    if (i < 3) {
      styling += 'border-bottom: 3px solid red;';
    }
    if (i % 3 === 0) {
      styling += 'border-right: 3px solid red;';
    }
    if (i % 3 === 2) {
      styling += 'border-left: 3px solid red;';
    }
    if (i > 5) {
      styling += 'border-top: 3px solid red;';
    }
    square.style = styling;
    square.addEventListener('click', boxClicked);
  });
};

const boxClicked = (e) => {
e.preventDefault();
  const id = e.target.id;
  console.log(e);
  if (!spaces[id]) {
    console.log(spaces[id]);
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerWon()) {
      title.innerText = `${currentPlayer} is the winner!!!`;
      restart();
      return;
    }

    if (playerDraw()) {
      return;
    }
    currentPlayer = currentPlayer === playerOne ? playerTwo: playerOne;
  }
};

const playerWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      message.innerText = `${currentPlayer} wins up to top`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      message.innerText = `${currentPlayer} wins on the left`;
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      message.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      message.innerText = `${currentPlayer} wins on the right`;
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      message.innerText = `${currentPlayer} wins on the bottom`;
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      message.innerText = `${currentPlayer} wins vertically on middle`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      message.innerText = `${currentPlayer} wins horizontally on the middle`;
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
     message.innerText = `${currentPlayer} wins diagonally`;
      return true;
    }
  }
};

const playerDraw = () => {
  let draw = 0;
  spaces.forEach((space, i) => {
    if (spaces[i] !== null) draw++;
  });
  if (draw === 9) {
    text.innerText = `Draw`;
    restart();
  }
};

const restart = () => {
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    squares.forEach((square) => {
      square.innerText = '';
    });
    title.innerText = `Play`;
    message.innerText = ``;
  }, 1000);
};
restartBtn.addEventListener('click', restart);
restart();
drawBoard();
