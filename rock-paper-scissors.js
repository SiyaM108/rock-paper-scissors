let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice = scissors;
let secondPlayerChoice = scissors;

let firstPossibility = (firstPlayerChoice === paper) && (secondPlayerChoice === rock);
let secondPossibility = (firstPlayerChoice === rock) && (secondPlayerChoice === scissors);
let thirdPossibility = (firstPlayerChoice === scissors) && (secondPlayerChoice === paper);

let fourthPossibility = (firstPlayerChoice === rock) && (secondPlayerChoice === paper);
let fifthPossibility = (firstPlayerChoice === scissors) && (secondPlayerChoice === rock);
let sixthPossibility = (firstPlayerChoice === paper) && (secondPlayerChoice === scissors);

let seventhPossibility = (firstPlayerChoice === secondPlayerChoice);

if(firstPossibility) {
  console.log("first player won!");
}
else if(secondPossibility) {
  console.log("first player won!");
}
else if(thirdPossibility) {
  console.log("first player won!");
}
else if(fourthPossibility) {
  console.log("second player won!");
}
else if(fifthPossibility) {
  console.log("second player won!");
}
else if(sixthPossibility) {
  console.log("second player won!");
}
else if(seventhPossibility) {
  console.log("it's a tie!");
}
else {
  console.log("something went wrong!");
}
