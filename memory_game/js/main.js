// a constant array that defines the rank suit and front image of each card in the game
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

// an array to store the rank (string) of each card in play
const cardsInPlay = [];

// generate the cards on the game board
function createBoard() {
	// loop 4 times
	for (let i = 0; i < 4; i++) {
		// create the card (img) and store it to cardElement
		let cardElement = document.createElement('img');
		// set the source to the card back image (card starts face down)
		cardElement.setAttribute('src', 'images/back.png');
		// assign the card a unique serial ID
		cardElement.setAttribute('data-id', i);
		// create event listener: when the card is pressed, flip the card
		cardElement.addEventListener('click', flipCard);
		// add the card to the DOM: append to the game board
		document.querySelector('#game-board').appendChild(cardElement);
	}
}

// check to see if the first two cards in play match, and signal a win or loss
function checkForMatch() {
	// if the first two cards in play match
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// win case
		alert("You found a match!");
	} else {
		// loss case
		alert("Sorry, try again.");
	}
}

// flip this card -- triggered by user clicking on a card
function flipCard() {
	// get this card's data-id
	cardId = this.getAttribute('data-id');
	// print this card's rank and value
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	// print this card's image
	console.log(cards[cardId].cardImage);
	// add this card to the list of cards in play
	cardsInPlay.push(cards[cardId].rank);
	// set the image of this card to the card's front image (stored in cards[{}])
	this.setAttribute('src', cards[cardId].cardImage);
	// if two cards have been flipped, check for a match
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

// reset board -- triggered by user pressing reset button
function resetBoard() {
	// empty cardsInPlay array
	cardsInPlay.length = 0;
	// remove each child of game-board
	let boardElement = document.querySelector('#game-board');
	while (boardElement.firstChild) {
		boardElement.removeChild(boardElement.lastChild);
	}
	// create new board
	createBoard();
}

// add event listener to the reset button that resets the board
document.getElementById('reset').addEventListener("click", resetBoard);

// create initial board
createBoard();