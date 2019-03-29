// create var to store goal, user score, wins, and losses
var win = 0;
var lose = 0;
var goal = $("#randomGoal");
var userScore = 0;
var $crystalOne = $("#crystalOne");
var $crystalTwo = $("#crystalTwo");
var $crystalThree = $("#crystalThree");
var $crystalFour = $("#crystalFour");
// create function that selects a random number between 19 - 120
goal = Math.floor(Math.random() * 102) + 12;

$("#randomGoal").text(goal);

// create a function that asigns a each crystal a number between 1 - 12
// create a click event that adds crystal value to the userScore and displays it
$crystalOne = Math.floor(Math.random() * 12) + 1;
$crystalTwo = Math.floor(Math.random() * 12) + 1;
$crystalThree = Math.floor(Math.random() * 12) + 1;
$crystalFour = Math.floor(Math.random() * 12) + 1;
console.log($crystalOne)

$("#crystalOne").on("click", function () {
    userScore += $crystalOne;
})
$("#crystalTwo").on("click", function () {
    userScore = userScore + $crystalTwo
}) 
$("#crystalOne").on("click", function () {
    userScore = userScore + $crystalTwo
}) 
$("#crystalOne").on("click", function () {
    userScore = userScore + $crystalTwo
})

$("#userScore").text(userScore);

// create a function to start a new game
function newGame() {
    userScore = 0;
    goal;
};

// create a if else statement to track wins and losses and reset the game
if (userScore === goal) {
    win++;
    newGame();
} else if (userScore >= goal) {
    lose++;
    newGame();
}

$("#wins").text(win);
$("#losses").text(losses);