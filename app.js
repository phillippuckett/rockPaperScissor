
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
// var userChoice = prompt("Do you choose rock, paper or scissors?");

// make this a button choice instead ^^

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

var compare = function (userChoice, computerChoice) {
    
    if (userChoice === computerChoice) {
        return  "The result is a tie!"
    }  
    
    else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            prompt("rock wins");
            }
        else {
            prompt("paper wins");
            }
    }
    
    else if (userChoice === computerChoice) {
        if (choice2 === "rock") {
            prompt("paper wins");
        }
        else {
            prompt("scissors win");    
        }
    }
    else {
        prompt("not a valid weapon of choice");
    }
};
console.log("The computer chose " + computerChoice + " and ");
console.log(compare());

/*
What if a user makes an inappropriate choice like 'dog'? 
How can we extend the function to handle that?

What if players in the game could also choose 
Rope in this game?

In this version, if both players make the same choice, 
the game returns a tie. What if the game didn't end 
there but instead asked both players for new choices?
*/

// GAME //