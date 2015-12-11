///////////////////////////////////////////////////////////////////////////////
// Card Object ////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var Card = function(){};
Card.prototype.make = function(suit, value, name, face, id){
// This method will initialize the card data base on arguments passed
	this.suit = suit;
	this.value = value;
	this.name = name;
	this.face = face;
	this.id = id;
}
Card.prototype.getData = function(stringify){
// This method will return the card data in JSON 
	var data = {
		suit: this.suit,
		value: this.value,
		name: this.name,
		face: this.face,
		id: this.id
	}
	
	// If any true value is passed as parameter, the data is be converted to a string
	if(stringify){data = JSON.stringify(data)}
	return data;
}



///////////////////////////////////////////////////////////////////////////////
// Deck ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var deck = []
function buildDeck(){
// This function will create an array of initialized 'card' objects. Standard 52 card deck
	/* deckIndex will be used to assign each card a unique id number
	this may seem redundant until you remember decks are to be shuffled,
	and we may want to preserve that position data after a shuffle.*/
	var deckIndex = 0;

	// The four suits
	var suit = ['spade', 'club', 'heart', 'diamond']

	// Names of the cards
	var cardNames = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

	// Loops based on the number of suits
	for(var j=0; j<=suit.length-1; j++){
		// 'k' will be used to assign a value to the Card instances
		var k = 1; 
	
		// There are 
		while(k<=cardNames.length){
			// Place an Card instance at that index in the deck array
			deck[deckIndex] = new Card()

			if(k<11){
				// Any card ten and below gets the value of 'k' 
				deck[deckIndex].make(suit[j], k, cardNames[k-1], false, deckIndex);
			} else {
				// Any card above ten, value is always 10.
				deck[deckIndex].make(suit[j], 10, cardNames[k-1], true, deckIndex);
			}
			console.log(deck[deckIndex].getData(true));
 			deckIndex++;
			k++;
		}
	}
}

function makeCardElems(deck, path, ext, appendTo){
// This function takes very specific arguments to create and append 'cards' to the UI based on an array of card object instances 
	// Loop through the array of card instances
	for (i = 0; i<deck.length; i++){
		// Create an image element
		var card = document.createElement('img');

		// Set attributes
		card.setAttribute('src', path + deck[i].name + deck[i].suit + ext);
		card.setAttribute('id', deck[i].id);
		card.setAttribute('class', 'card');

		// Put the element on the page
		appendTo.appendChild(card);
	}
}

buildDeck()
makeCardElems(deck, "assets/svgCards/", ".svg", document.getElementById('cardSpace')) /* TODO REMOVE: DEV CODE */
