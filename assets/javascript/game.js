// GLOBAL VARIABLES


// crystal variables
var crystals = {
	crystal1:
	{
	  name: "Crystal1",
	  value: 0
	},
	crystal2:
	{
	  name: "Crystal2",
	  value: 0
	},
	crystal3:
	{
	  name: "Crystal3",
	  value: 0
	},
	crystal4:
	{
	  name: "Crystal4",
	  value: 0
	}
};

// scores
var userNumber = 0;
var targetNumber = 0;

// wins and losses
var wins = 0;
// shows user wins
$("#wins").html("<h3>Wins: " + wins + "</h3>");

var losses = 0;
// shows user losses
$("#losses").html("<h3>Losses: " + losses + "</h3>");


//FUNCTIONS



// generates random numbers and logs them
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// start and restart
var startGame = function() {

	// resets the user number
	userNumber = 0;

	// target score 19-120
	targetNumber = getRandom(19, 120);

	// crytal values 1-12
	crystals.crystal1.value = getRandom(1, 12);
	crystals.crystal2.value = getRandom(1, 12);
	crystals.crystal3.value = getRandom(1, 12);
	crystals.crystal4.value = getRandom(1, 12);

	// change the html to show the user these changes
	$("#yourNumber").html("<h3>Your number: " + userNumber + "</h3>");
	$("#targetNumber").html("<h3>Target: " + targetNumber + "</h3>");

	// console log all these stats for ease of debugging
	console.log("Target score: " + targetNumber);
	console.log("Crystal 1: " + crystals.crystal1.value + " | Crystal 2: " + crystals.crystal2.value + " | Crystal 3: " + crystals.crystal3.value + " | Crystal 4: " + crystals.crystal4.value);

	// clears gameStatus div
	$("#gameStatus").empty();

};

// check whether user won or lost
// reset the game
var checkWin = function() {

	// check if user lost
	if (userNumber > targetNumber) {
		// adds one point to the losses counter
		losses ++;
		// updates html
		$("#losses").html("<h3>Losses: " + losses + "</h3>");
		console.log("Losses count is " + losses);
		// tell user what happened
		$("#gameStatus").html("<h2>You went over **sad face** Try again!</h2>");
	}

	// check if user won
	else if (userNumber === targetNumber) {
		// adds one point to the wins counter
		wins ++;
		// updates html
		$("#wins").html("<h3>Wins: " + wins + "</h3>");
		console.log("Win count is " + wins);
		// tell user what happened
		$("#gameStatus").html("<h2>You're amazing! Want to go again?</h2>");
	}
};

// respond to clicks on the crystals
var addValues = function(clickedCrystal) {

	// change userNumber. is this right?
	userNumber += clickedCrystal.value;

	// update html
	$("#yourNumber").html("<h3>Your number: " + userNumber + "</h3>");

	// call the checkWin function
	checkWin();

	// console log current score
	console.log("Your Score: " + userNumber);
};



// on-click functions

startGame();

$("#gameStatus").click(function() {
	startGame();
})

$("#crystal1").click(function() {
	addValues(crystals.crystal1);
});

$("#crystal2").click(function() {
	addValues(crystals.crystal2);
});

$("#crystal3").click(function() {
	addValues(crystals.crystal3);
});

$("#crystal4").click(function() {
	addValues(crystals.crystal4);
});