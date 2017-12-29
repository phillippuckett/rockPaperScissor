
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
    // console.log("The computer chose " + computerChoice);    
    

    // ROCK //
    if (userChoice === rock) {
        // console.log("You chose " + rock);
        if (computerChoice === scissors) {
            console.log("Rock crushes scissors, YOU WIN!");
        }
        else if (computerChoice === paper) {
            console.log("Paper cushions rock, THE COMPUTER WINS!");
        }
        else if (userChoice === computerChoice) {
            console.log("It's a TIE!");
        }
    }

    // PAPER //
    else if (userChoice === paper) {
        // console.log("You chose " + paper);
        if (computerChoice === rock) {
            console.log("Paper cushions rock, YOU WIN!");
        }
        else if (computerChoice === scissors) {
            console.log("Scissors cut through paper, THE COMPUTER WINS!");
        }
        else if (userChoice === computerChoice) {
            console.log("TIE!");
        }
    }

    // SCISSORS //
    else if (userChoice === scissors) {
        // console.log("You chose " + scissors);
        if (computerChoice === rock) {
            console.log("Rock crushes scissors, THE COMPUTER WINS!");
        }
        else if (computerChoice === paper) {
            console.log("Scissors cut through paper, YOU WIN!");
        }
        else if (userChoice === computerChoice) {
            console.log("TIE!");
        }
    }
};
// GAME //