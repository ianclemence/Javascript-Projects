// Player Object
let player = {
    name : "Ian",
    chips : 200
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(params) {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >= 11 ) {
        return 10
    }
    return randomNumber
}

function startGame() {
    if (isAlive === false) {
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        isAlive = true;
    } else if (sum === 21) {
        message = "Wohooo! You've got blackjack!";
        hasBlackjack = true;
        isAlive = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEL.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    // console.log("Drawing a new card from the deck!")
}

// CASH OUT
console.log(hasBlackjack);
console.log(message);
