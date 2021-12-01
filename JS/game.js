/* Resources/Research 
https://www.youtube.com/watch?v=S3qHB9mJ2zA
https://www.codebrainer.com/blog/tic-tac-toe-javascript-game
https://www.studytonight.com/post/building-a-tic-tac-toe-game-in-javascript
recommended using the defer keyword for the javascript to load after the HTML
*/
// new component( "../Image/sm.jpeg";
// https://www.w3schools.com/graphics/game_images.asp
// document.body.style.backgroundImage = url(../Image/sm.jpeg); attempt to change game piece to image


// setting on for DOM Manipulation 
const squares = document.querySelectorAll(".square");
const title= document.getElementById("pageTitle");
const message = document.getElementById("gameMessage");
const restartBtn = document.querySelector('#restart');



const spaces = [];
const playerOne = 'X';
const playerTwo = 'O';
let currentPlayer = playerOne;
// when I started set playTwo to false to prevent O from going first. In StackOverflow  I saw this example
// the logic was easier to follow. this make "X" make the first move

//setting up the gameboard and styling. empty function to set up the boarders/canvas.
const gameBoard = () => {

  // this runs the above callback function for each of the squares array.
  // running the for each is looping through the styling array and replacing
  // current value with new value 
  squares.forEach((square, i) => {
    let styling= ''
    // if it is less than three a bottom board is add.
    if (i < 3) {
      styling += 'border-bottom: 10px solid red;';
    }
    // if it can be divided by three and has zero remaining a right border is add
    if (i % 3 === 0) {
      styling += 'border-right: 10px solid red;';
    }
    // if there is two remaining a left border is add (example 2, 5 and 8)
    if (i % 3 === 2) {
      styling += 'border-left: 10px solid red;';
    }

    // anything above 5 it adds a top border
    if (i > 5) {
      styling += 'border-top: 10px solid red;';
    }
    square.style = styling;
    square.addEventListener('click', squareClickEvent);
    //listening for click event for any square 
  });
};

// function sets up to target the div id 0-8
const squareClickEvent = (e) => {
  // 
  const turn = e.target.id;
  //this check if the square is empty
  if (!spaces[turn]) {
    spaces[turn] = currentPlayer;
    e.target.innerText = currentPlayer;
//  with this if statement the inner HTML text is changed based
// on which condition is met
    if (winner()) {
      title.innerText = `${currentPlayer} is the winner!!!`;
 
      //Reminder break loop ** stop looping forever
      return;
    }

    if (draw()) {
      return;
    }
    // change the values for currentPlayer based on who turn is is
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }
};
// this could be accomplished by follow 
// https://www.codebrainer.com/blog/tic-tac-toe-javascript-game
// wanted to follow the gladiator game logic
// this cycle through the combination of three in a row to determine
//if playerOne or PlayTwo won

const winner = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      message.innerText = `${currentPlayer} wins`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      message.innerText = `${currentPlayer} wins`;
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      message.innerText = `${currentPlayer} wins`;
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      message.innerText = `${currentPlayer} wins`;
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      message.innerText = `${currentPlayer} wins`;
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      message.innerText = `${currentPlayer} wins`;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      message.innerText = `${currentPlayer} wins`;
      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
     message.innerText = `${currentPlayer} wins`;
      return true;
    }

else { draw = () => {
  let itsamedraw = 0;
  spaces.forEach((space, i) => {
    if (spaces[i] !== null) itsamedraw++;
    // no more space left
  });
  if (itsamedraw === 9) {
    title.innerText = `Draw`;

  }}}}
};

const restart = () => {
  // method to delay 1000 millisecond
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    squares.forEach((square) => {
      square.innerText = '';
    });
    title.innerText = `Moon Prism Power!`;
    message.innerText = ``;
  }, 1000);
};
restartBtn.addEventListener('click', restart);
restart();
gameBoard();
