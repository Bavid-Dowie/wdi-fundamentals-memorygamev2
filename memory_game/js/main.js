console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
//
// // console.log("User flipped " + cardOne);
// // console.log("User flipped " + cardFour);

var cards = ["queen", "queen", "king", "King"];
var cardsInPlay = [];

var cardOne = cards[0];
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
console.log("User flipped " + cardTwo);

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1])  {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}
