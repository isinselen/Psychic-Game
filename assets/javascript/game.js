
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var Guessedletters = [];
var Guessofcomputer = [];

    document.body.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	Guessofcomputer.push(compGuess);
	console.log(Guessofcomputer[0]);
}

    document.onkeyup = function(event) {
	var playerGuess = event.key;
	Guessedletters.push(playerGuess);
	console.log(Guessofcomputer[0]);

   if ((playerGuess === Guessofcomputer [0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	Guessedletters.length = 0;
	Guessofcomputer.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	Guessofcomputer.push(compGuess);
	console.log(Guessofcomputer[0]);
}

    else if ((playerGuess !== Guessofcomputer [0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}
    else {
	losses++;
	guessesLeft = 9;
	Guessedletters.length = 0;
	Guessofcomputer.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	Guessofcomputer.push(compGuess);
	console.log(Guessofcomputer[0]);
}

    var html = "<p>Guess what letter I'm thinking of...</p>" +
           "<p>Wins: " + wins + "</p>" +
           "<p>Losses: " + losses + "</p>" +
           "<p>Guesses Left: " + guessesLeft + "</p>" +
           "<p>Your Guesses so far: " + Guessedletters + "</p>";
 
document.querySelector("#game").innerHTML = html;

}