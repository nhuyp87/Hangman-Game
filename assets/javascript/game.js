// Counter for wins. 
var victory = 0;

// Counter for remaining guesses, set equal to 15. 
var guessesRemaining = 15; 

// Array used for letters guessed. 
var lettersGuessed = []; 

// Word bank for game: 
var wordBank = ["abate","aberration","abstruse","accost","acrimony","acumen","adamant", "banal", "barrage", "belie", "belligerent", "benevolent", "bequest", "berate", "bipartisanship", "chide", "churlish", "circuitous", "circumscribe", "circumvent", "clandestine", "coalesce"];

// Randomly generate a word. 
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randWord);


// Empty array used for dashes. 
var emptyArray = []; 


// The word length is displayed on-screen to the user as dashes.
	for (var i=0; i < randWord.length; i++) {
		emptyArray.push("_");
	}

// Print dashes of empty array to document. 
document.getElementById("wordGuess").innerHTML= emptyArray.join(" ");


// Reset function when user guesses word correctly or runs out of remaining guesses. 
var resetPrint = function () {

			randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
			
			emptyArray = [];
			
			for (var i=0; i < randWord.length; i++) {
				emptyArray.push("_");
			}

			lettersGuessed = []; 
			guessesRemaining = 15; 
			printLetters (); 
			


}


// Function for winning condition. 
var winCondition = function () {

	var correctWord = emptyArray.join("");
		
		if (correctWord==randWord){

			alert("Correct word! The word is " + randWord + "."); 
			victory++;		
			document.getElementById("totalWins").innerHTML = victory;
			resetPrint(); 
		}

}

// Function for loss condition. 
var lossCondition = function () {

	if (guessesRemaining < 0) {

			alert("YOU LOSE! Try again! The word is " + randWord + ".");
			resetPrint();
		}

}

// Function to print to document. 

var printLetters = function () {

	// Add correct guesses to document. 
	document.getElementById("wordGuess").innerHTML= emptyArray.join(" ");

	// Decrease "Guesses Remaining" if incorrectly guessed. 
	document.getElementById("wrongGuess").innerHTML= guessesRemaining;

	// Add all letters guessed to word bank. 
	document.getElementById("letterBank").innerHTML=lettersGuessed.join(); 



}







// Where the game begins....

document.onkeyup = function (event) { 

	// User presses any key to get started. 
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z"))

	
	{ console.log(userGuess);
	

	// Provides index # of the letter guessed --> if correct, take user's guess and insert into random word generated. 
	if (randWord.indexOf(userGuess) > -1){

	// Replace dashes with letters guessed. 
		for (var i=0; i < randWord.length; i++) { 
			if (userGuess==randWord.charAt(i)) {
				emptyArray[i]=userGuess; 
			} 


		}

	// Add correct letters guessed to letter bank. 
		lettersGuessed.push(userGuess);

	// Win condition - if the empty array is equal to the random word, then the user wins the game. 
		winCondition (); 


	}  else {

	// If the letter guessed is incorrect, guesses remaining decreases by one and the letter is added to the letter bank. 
		guessesRemaining--;
		lettersGuessed.push(userGuess);


	// Loss condition - if the guesses remaining is less than 0, then the user is alerted of the loss. 
		lossCondition(); 
	}


	printLetters (); 

} }
