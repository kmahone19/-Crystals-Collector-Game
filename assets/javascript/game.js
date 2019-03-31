// create var to store goal, user score, wins, and losses
var win = 0;
var lose = 0;
var goal = $("#randomGoal");
var userScore = 0;
var $crystalOne = $("#crystalOne");
var $crystalTwo = $("#crystalTwo");
var $crystalThree = $("#crystalThree");
var $crystalFour = $("#crystalFour");

// documen.ready does not work

    // create function that selects a random number between 19 - 120
    goal = Math.floor(Math.random() * 102) + 12;

    $("#randomGoal").text(goal);

    // create a function that asigns a each crystal a number between 1 - 12
    // create a click event that adds crystal value to the userScore and displays it
    $crystalOne.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $crystalTwo.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $crystalThree.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $crystalFour.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

    $("#crystalOne").on("click", function () {
        var crystalValue1 = ($(this).attr("data-crystalvalue"));
        crystalValue1 = parseInt(crystalValue1);
        userScore += $crystalOne;
    });
    $("#crystalTwo").on("click", function () {
        var crystalValue2 = ($(this).attr("data-crystalvalue"));
        crystalValue2 = parseInt(crystalValue2);
        userScore += $crystalTwo;
    });
    $("#crystalThree").on("click", function () {
        var crystalValue3 = ($(this).attr("data-crystalvalue"));
        crystalValue3 = parseInt(crystalValue3);
        userScore += $crystalThree;
    });
    $("#crystalFour").on("click", function () {
        var crystalValue4 = ($(this).attr("data-crystalvalue"));
        crystalValue4 = parseInt(crystalValue4);
        userScore += $crystalFour;
    });
    // does not update
    $("#userScore").text(userScore);
    
    // create a function to start a new game
    function newGame() {
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
