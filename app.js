
// VIEWS //
$(document).ready(function (e) {

    function showView(viewName) {
        $('.view').hide();
        $('#' + viewName).show();
    }

    $('[data-launch-view]').click(function (e) {
        e.preventDefault();
        var viewName = $(this).attr('data-launch-view');
        showView(viewName);
    });

});
// VIEWS //

// GAME //

var rock = "rock";
var paper = "paper";
var scissors = "scissors";

var fwah = function (userChoice, computerChoice) {

    var computerChoice = Math.random(0, 1);
    // console.log("The computer chose the number " + computerChoice);

    if (computerChoice <= .3333) {
        computerChoice = rock;
    } else if (computerChoice <= .6666) {
        computerChoice = paper;
    } else if (computerChoice <= .9999) {
        computerChoice = scissors;
    }
    console.log("The computer chose " + computerChoice);    
    
    if (userChoice === rock) {
        console.log("You chose " + rock);
        if (computerChoice === scissors) {
            console.log("rock crushes scissors, you win");
        }
        else if (computerChoice === paper) {
            console.log("paper cushions rock, the computer wins");
        }
    }

    // PAPER //
    else if (userChoice === paper) {
        console.log("You chose " + paper);
        if (computerChoice === rock) {
            console.log("paper cushions rock, you win");
        }
        else if (computerChoice === scissors) {
            console.log("scissors cut through paper, the computer wins");
        }
    }

    // SCISSORS //
    else if (userChoice === scissors) {
        console.log("You chose " + scissors);
        if (computerChoice === rock) {
            console.log("rock crushes scissors, the computer wins");
        }
        else if (computerChoice === paper) {
            console.log("scissors cut through paper, you win");
        }
    }
    else if (userChoice === computerChoice) {
        console.log("the result is a tie!", computerChoice);
    }
};
// GAME //