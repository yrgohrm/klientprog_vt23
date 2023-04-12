const suits = {
    HEARTS: "hearts",
    DIAMONDS: "diamonds",
    SPADES: "spades",
    CLUBS: "clubs"
}

class Card {
    constructor(number, suite) {
        this.number = number
        this.suite = suite
    }
}

function createDeck() {
    let deck = []
    for (const suite in suits) {
        for (let num = 1; num < 14; ++num) {
            deck.push(new Card(num, suits[suite]))
        }
    }
    return deck
}

function setupBlackJackDecks() {
    let deck = []
    deck = deck.concat(createDeck())
    deck = deck.concat(createDeck())
    deck = deck.concat(createDeck())
    deck = deck.concat(createDeck())
    return shuffleArray(deck)
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}