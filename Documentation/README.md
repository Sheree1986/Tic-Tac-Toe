                                      Sailor Moon's Moon Prism Power Tic Tac Toe

                                    https://sheree1986.github.io/Tic-Tac-Toe/
                                    
                                    
<img width="1200" alt="gamess" src="https://user-images.githubusercontent.com/87440131/144290762-ed34b646-55ff-4174-81f3-7fd40549ad98.png">

                                    

![TicTacToe](https://user-images.githubusercontent.com/87440131/143349773-c046328c-28c6-43e4-99e1-0faff7f0ae05.png)

                                                  Pseudocode:




game needs two players
game piece equals X or O (in this class Sailor Moon image - working on this)
game board equals exactly nine squares (keep to standard game the outerboxes do not have border lines)
turn based game where X makes the first move
second player must play O
Once game square piece is occupied another piece can't enter the space
turns continues until either player get three in a row and wins (if/else or switch statement)
game equals draw if no player get three in a row

<strong>Hardest Part</strong>
Wasted a lot of time trying to do an if else statement for winner function. Didn't know you could you if repeatedly if all statements are true. There are two issues that will need to be fix in future iterations. One a glitch that places playerOne (O) on the gameboard for a few seconds. second the message to inform the user whose turn it is. For this I used forEach and if else statments. I tried to based the format of this on how we structure the Gladiator game. Lastly I would like to get the logical down behind how to add pictures as a game piece.

<strong>Technical Requirements - Per GA</strong>
Your Tic Tac Toe app must:

Render a game board in the browser 
Switch turns between X and O (or whichever markers you select) (working on sailor moon icon or images)
Visually display which side won if a player gets three in a row, or show a draw if neither player wins 
Include separate HTML / CSS / JavaScript files
Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
Use JavaScript for DOM manipulation
Deploy your game online, where the rest of the world can access it
You can use GitHub Pages for deploying your project
Use semantic markup for HTML and CSS (adhere to best practices)
Have well-formatted, and well-commented code

<strong>User Stories</strong>

1) As a user, I should be able to start a new tic tac toe game 

2) As a user, I should be able to click on a square to add X first and then O, and so on

3) As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next (didn't complete who's turn is it)

4) As a user, I should not be able to click the same square twice

5) As a user, I should be shown a message when I win, lose or tie

6) As a user, I should not be able to continue playing once I win, lose, or tie

7) As a user, I should be able to play the game again without refreshing the page

<strong>Potential Extra Tic Tac Toe Features</strong>

Keep track of multiple game rounds with a win, lose and tie counter
Allow players to customize their tokens (X, O, name, picture, etc)
Use localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
Involve Audio in your game
Create an AI opponent: teach JavaScript to play an unbeatable game against you
Make your site fully responsive so that it is playable from a mobile phone
Get inventive with your styling e.g. use hover effects or animations
Super Potential Extra Tic Tac Toe Features
Allow 2 players to play online with each other using any means such as WebSockets, Firebase, or other 3rd-party services.
README Suggestions
List technologies used
Link to wireframes and user stories.
Document your planning and tell a story about your development process and problem-solving strategy.
List unsolved problems which would be fixed in future iterations.
Describe how you solved for the winner
Describe how some of your favorite functions work


<strong>Submission</strong>

???? Submit Issue Here


Necessary Deliverables

A working game, built by you, hosted somewhere on the internet
A link to your hosted working game in the URL section of your Github repository
A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
A README.md file, including
Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
Follow this mini-lesson on writing documentation for your project


<strong>Resources/Research</strong>

https://www.youtube.com/watch?v=S3qHB9mJ2zA

https://www.codebrainer.com/blog/tic-tac-toe-javascript-game

https://www.studytonight.com/post/building-a-tic-tac-toe-game-in-javascript

recommended using the defer keyword for the javascript to load after the HTML

             attempt to change game piece to image


new component( "../Image/sm.jpeg";
https://www.w3schools.com/graphics/game_images.asp
document.body.style.backgroundImage = url(../Image/sm.jpeg); 

