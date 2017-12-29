
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

var rock;
var paper;
var scissors;

var computerChoiceFn = function () {
    var computerChoice = Math.random(0, 1);
    // console.log("The computer chose the number " + computerChoice);

    if (computerChoice <= .3333) {
        computerChoice = rock;
        console.log("The computer chose rock");
    } else if (computerChoice <= .6666) {
        computerChoice = paper;
        console.log("The computer chose paper");
    } else if (computerChoice <= .9999) {
        computerChoice = scissors;
        console.log("The computer chose scissors");
    }
};
var userChoiceFn = function (userChoice, computerChoice) {
    console.log("Starting");
    computerChoiceFn();
    console.log("Comparing...");
    if (userChoice === computerChoice) {
        console.log("the result is a tie!", computerChoice);
    }

    else if (userChoice === rock) {
        if (computerChoice === scissors) {
            console.log("rock crushes scissors, you wins");
        }
        else if (computerChoice === paper) {
            console.log("paper cushions rock, the computer wins");
        }
    }

    else if (userChoice === paper) {
        if (computerChoice === rock) {
            console.log("paper cushions rock, you win");
        }
        else if (computerChoice === scissors) {
            console.log("scissors cut through paper, the computer win");
        }
    }
};

// GAME //