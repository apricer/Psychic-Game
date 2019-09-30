
alert("You have 10 guesses. Guess A - Z");

var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var remaining = 9;
var guesses = 9;
var computerLetter;
var yourGuessesSoFar = [];


var letterGenerate = function () {
    var computerLetter = options[Math.floor(Math.random()*options.length)];
    console.log(computerGuess);
}

var currentGuesses = function() {
    document.getElementById("guesses").innerHTML = "Your Guesses so Far: " + yourGuessesSoFar.join(",");
}

var guessesRemaining = function() {
    document.getElementById("remaining").innerHTML = "Guesses Remaining: " + remaining;
}

var startNewGame = function() {
    lettersGuessed = [];
    remaining = 9;
    letterGenerate();
    currentGuesses();
    guessesRemaining();
}

document.onkeyup = function(event) {
    var userGuess = event.key;
    remaining--;
    yourGuessesSoFar.push(userGuess);
    currentGuesses();
    guessesRemaining();
    if (left > 0) {
        if (userGuess === computerLetter) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins:" + wins;
            startNewGame();
        }
    
    }

    else if (left === 0) {
        losses ++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        startNewGame();
    }
}
    