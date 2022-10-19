function newShuffle() {
    return new Promise((resolve, reject) => {
        deck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle')
        resolve(deck)
    })
}
function newDeckSingleDraw() {
    newShuffle()
        .then(deck => {
            return axios.get('https://deckofcardsapi.com/api/deck/' + deck.data.deck_id + '/draw/?count=1')
        })
        .then(card => {
            console.log(card.data.cards[0].value + ' of ' + card.data.cards[0].suit)
        })
}
function newDeckMultiDraw() {
    newShuffle()
        .then(deck => {
            return axios.get('https://deckofcardsapi.com/api/deck/' + deck.data.deck_id + '/draw/?count=' + (Math.ceil(1 / Math.random())) + '')

        })
        .then(draws => {
            draws.data.cards.forEach(card => {
                console.log(card.value + ' of ' + card.suit)
            })
        })
}

// HTML for Card draw website

$(document).ready(function () {
    var deck = newShuffle()
    return deck
});

$('div').on("click", "#card-draw", () => {
    cardDraw(deck)
})

function cardDraw(deck) {
    deck
        .then(deck => {
            return axios.get('https://deckofcardsapi.com/api/deck/' + deck.data.deck_id + '/draw/?count=1')
        })
        .then(card => {
            drawnCard = card.data.cards[0].value + ' of ' + card.data.cards[0].suit
            $('#card-pile').append('<li class=' + card.data.cards[0].suit + '>' + drawnCard + '</li>')
        })
}
