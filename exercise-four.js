// Challenge 4: No Jokers

let cardData = [
    // Array 0 'i' suits
    ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    // Array 1 'j' cards
    ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
];

// Loops through the suits
for (let i = 0; i < cardData[0].length; i++) {
    // Loops through the card names in reverse order
    for (let j = cardData[1].length - 1; j >= 0; j--) {
        console.log(cardData[1][j] + ' of ' + cardData[0][i]);
    }
}
