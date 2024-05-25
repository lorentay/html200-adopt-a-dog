// cardDeck.js

// Suits and values
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

// Creates and prints the deck of cards
function printDeck() {
  const deck = [];

  // Loops through each suit
  for (let suit of suits) {
    // Loops through each value
    for (let value of values) {
      // Combines the suit and value
      let card = `${value} of ${suit}`;
      // Add sthe card to the deck
      deck.push(card);
    }
  }

  // Prints each card in the deck
  for (let card of deck) {
    console.log(card);
  }
}

// Prints the deck
printDeck();
