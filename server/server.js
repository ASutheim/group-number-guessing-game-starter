const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));

// GET & POST Routes go here

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

let randomNumber;
let guessArray = []


function generateNumber() {
  randomNumber = Math.floor(Math.random() * 25) + 1;
  console.log("Here's a random number between 1 and 25:", randomNumber);
  return randomNumber;
}

function compareGuesses() {
  //this function needs to take the submitted guesses from the client
  //(passed as an array), and compare each guess to the value of RandomNumber.

  for (guess of GuessArray) {
    if (guess > randomNumber) {
      //code which tells client js to update DOM with '${guess} is too high, try again
    }
    else if (guess < randomNumber) {
      //code which tells client.js to update DOM with '${guess} is too low, try again'
    }
    else if (guess === randomNumber) {
      //code which tells client.js to update DOM with "YOU GOT IT!" and turn background green
      //also to empty out the guessArray
  }
}
}
