

// Create an array of the letters of the alphabet
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Create code so it is noted and logged when user presses a button in the array
document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userguess);
}