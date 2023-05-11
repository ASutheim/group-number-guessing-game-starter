$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $("#generate-number").on("click", getNumber);
  $("#submit-guesses").on("click", submitGuesses);
}

function getNumber(event) {
  console.log("Random number requested");
  //this function should get the randomly generated number
  // from the server and append it to the DOM
}

function submitGuesses(event) {
  console.log("Guesses submitted");
  //this function should collect the guess from each input field, push them to an array,
  //And send it to the server
}

function updateGuessCount() {
  //this function should update a number within each player box that shows
  //how many times the submit button has been clicked
}

function giveFeedback() {
  //this function should send the result of a checkNumber function
  //in the server.js and use it to update the 'how doing' div on the DOM
  //with either
  // "[Guess number] was too high, try again!"
  // "[Guess number] was too low, try again!"
  // or "YOU GOT IT!!!!" (and maybe change background color of player box to something fun)
}
