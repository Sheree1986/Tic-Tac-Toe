// document.body.style.backgroundImage = url(../Image/sm.jpeg); attempt to change game piece to image

// setting on for DOM Manipulation 
const squares = document.querySelectorAll(".square");
const title= document.getElementById("pageTitle");
const message = document.getAnimations("gameMessage");
const restartBtn = document.querySelector('#restart');


// new component( "../Image/sm.jpeg";
// https://www.w3schools.com/graphics/game_images.asp

const spaces = [];
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;
// when I started set playTwo to false to prevent O from going first. In StackOverflow  I saw this example
// the logic was easier to follow. this make "X" make the first move

//setting up the game board and styling 
const drawBoard = () => {

  // this runs the above callback function for each of the squares array
  squares.forEach((square, i) => {
    let styling= ''
    if (i < 3) {
      styling += 'border-bottom: 10px solid red;';
    }
    if (i % 3 === 0) {
      styling += 'border-right: 10px solid red;';
    }
    if (i % 3 === 2) {
      styling += 'border-left: 10px solid red;';
    }
    if (i > 5) {
      styling += 'border-top: 10px solid red;';
    }
    square.style = styling;
    square.addEventListener('click', boxClicked);
    //listening for click event on one for any square 
  });
};

// function sets up if 
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
