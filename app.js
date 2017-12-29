
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

    if (computerChoice <= .3333) {
        computerChoice = rock;
    } else if (computerChoice <= .6666) {
        computerChoice = paper;
    } else if (computerChoice <= .9999) {
        computerChoice = scissors;
    }    

    if (userChoice === rock) {
        if (computerChoice === scissors) {
            alert("Rock crushes scissors, YOU WIN!");
        }
        else if (computerChoice === paper) {
            alert("Paper cushions rock, THE COMPUTER WINS!");
        }
        else if (userChoice === computerChoice) {
            alert("It's a TIE!");
        }
    }

    else if (userChoice === paper) {
        if (computerChoice === rock) {
            alert("Paper cushions rock, YOU WIN!");
        }
        else if (computerChoice === scissors) {
            alert("Scissors cut through paper, THE COMPUTER WINS!");
        }
        else if (userChoice === computerChoice) {
            alert("TIE!");
        }
    }

    else if (userChoice === scissors) {
        if (computerChoice === rock) {
            alert("Rock crushes scissors, THE COMPUTER WINS!");
        }
        else if (computerChoice === paper) {
            alert("Scissors cut through paper, YOU WIN!");
        }
        else if (userChoice === computerChoice) {
            alert("TIE!");
        }
    }
};
// GAME //