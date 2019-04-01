$(document).ready(function () {
  
    //  variables to store goal, user score, wins, and losses
    var win = 0;
    var lose = 0;
    var goal = $("#randomGoal");
    var userScore = 0;

    // variables to access the HTML for each crystal
    var $crystalOne = $("#crystalOne");
    var $crystalTwo = $("#crystalTwo");
    var $crystalThree = $("#crystalThree");
    var $crystalFour = $("#crystalFour");

    // function to start a new game that can reset the variables on wins and losses
    function newGame() {
        goal = Math.floor(Math.random() * 102) + 12;
        $("#randomGoal").text(goal);
        userScore = 0;
        $("#userScore").text(userScore);
        $(".crystal").each(function(){
            $(this).attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
        })
    };

    // selects a random number between 19 - 120
    goal = Math.floor(Math.random() * 102) + 12;

    // initial values printed to the page
    $("#randomGoal").text(goal);
    $("#wins").text(win);
    $("#losses").text(lose);
    $("#userScore").text(userScore);

    // Assigns each crystal a random value between 1 and 12
    $crystalOne.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $crystalTwo.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $crystalThree.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);
    $crystalFour.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

    // click event that adds value to the crystals and adds it to the userScore and displays it
    $(".crystal").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        userScore += crystalValue;
        $("#userScore").text(userScore);
       
        if (userScore === goal) {
            win++;
            newGame();
        } else if (userScore >= goal) {
            lose++;
            newGame();
        }
        $("#wins").text(win);
        $("#losses").text(lose);
    });
   
    
    newGame();
    
})