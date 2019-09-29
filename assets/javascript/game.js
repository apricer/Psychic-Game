
// Alert pop-up telling user they have 10 guesses, A - Z
alert("You have 10 guesses. Guess A - Z");

// Create for loop for 10 guesses
for(i=0; i < 10; i++){
    console.log(i + 1);
}

// Create an array of the letters of the alphabet
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Create code so it is noted and logged when user presses a button in the array
document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userguess);


    // Computer generates a letter at random
    var computerGuess = options[Math.floor(Math.random()*options.length)];

    console.log(computerGuess);

    // Counting number of guesses

    // Counting number of wins

    // Counting number of losses

    // Number of guesses left

    // Letters guessed so far

    // Increasing win counter

    // Increasing loss counter

}