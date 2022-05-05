let hands = ["rock", "paper", "scissors"]

function getHand() {
    console.log(hands[Math.floor(Math.random() * hands.length)])
}

getHand()