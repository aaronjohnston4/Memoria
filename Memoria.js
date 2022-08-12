
addEventListener("click", (e) => {
    flipCard()
});

function flipCard() {
    const cards = document.querySelectorAll(".flip-card");
    // cards.classList.toggle("flip-card-back")
};


const cards = document.querySelectorAll(".flip-card");
let shuffledArray = [];
function shuffle(arr) {
    for (let i = 0; i < arr.length; i++) {
        shuffledArray.push(arr[i]);
    }
    shuffledArray.sort(() => .5 - Math.random());
    cards.forEach(card => {
        card.remove();
    })
    shuffledArray.forEach(newCard => {
        gameboard.appendChild(newCard)
    })
}

const gameboard = document.querySelector("#gameboard");
const resetButton = document.querySelector(".reset-button");
let scoreBoard = document.querySelector(".score");
let card1 = "";
let card2 = "";
let currentPlayer = cards;
let gameActive = true;
let lives = 2;
let livesCount = document.getElementById("livesCount")


resetButton.addEventListener('click', function (evt) {
    cards.forEach(function (e) {
    })
    gameActive = true;
})

function addFlip() {

}
let myMatches = 0;
function checkPoints() {
    if (calculateTotal(playerHand) < calculateTotal(dealerHand) || playerHand == 21) {
        alert("You Lose! Dealer Wins!");
        console.log(`Player hand: ${playerHand}, dealer hand: ${dealerHand}`)
    }
    else {
        alert("You Win! Dealer Lose!");
        console.log(`Player hand: ${playerHand}, dealer hand: ${dealerHand}`)
    }
}

shuffle(cards)
cards.forEach(card => {
    // console.log(card)
    card.addEventListener("click", () => {
        card.classList.add("clicked");
        console.log(card1 === "");
        if (card1 === "") {
            card1 = card
        } else {
            if (card1.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc == card.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc) {
                myMatches++;
                card1 = "";
                scoreBoard.innerHTML = `You have made ${myMatches} matches`
            } else {
                setTimeout(() => {
                    card.classList.remove("clicked");
                    card1.classList.remove("clicked");
                    card1 = "";
                }, "600")
                lives = lives - 1;
                livesCount.innerHTML = ` Player has ${lives} lives left`
                if (lives === 0) {
                    livesCount.innerHTML = `Game Over`;
                    for (let i = 0; i < cards.length; i++) {
                        cards[i].removeEventListener("click", this)
                    }

                }

            }

        }
    })
})


