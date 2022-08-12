
//flipCard function and eventListener to flip card accessing the .flip-card class in CSS//
addEventListener("click", (e) => {
    flipCard()
});

function flipCard() {
    const cards = document.querySelectorAll(".flip-card");
};

// creates the cards variable and querySelectorAll grabs all the cards that contain the class .flip-card.
const cards = document.querySelectorAll(".flip-card");
let shuffledArray = [];
function shuffle(arr) {
    //the for loop runs throught the array, pushing each integer
    for (let i = 0; i < arr.length; i++) {
        shuffledArray.push(arr[i]);
    }
    //this randomizes that array
    shuffledArray.sort(() => .5 - Math.random());
    cards.forEach(card => {
        card.remove();
    })
    //this calls each new card within the shuffled array
    shuffledArray.forEach(newCard => {
        gameboard.appendChild(newCard)
    })
}

//Variables being declared//
const gameboard = document.querySelector("#gameboard");
const resetButton = document.querySelector(".reset-button");
let scoreBoard = document.querySelector(".score");
let card1 = "";
let card2 = "";
let gameActive = true;
let lives = 2;
let livesCount = document.getElementById("livesCount")

// Created the reset button to connect gameActive to make sure the game continues to run after pushing the reset button.
resetButton.addEventListener('click', function (evt) {
    cards.forEach(function (e) {
    })
    gameActive = true;
})

function addFlip() {

}
//creating the variable myMatches being equal to 1 integer
let myMatches = 0;

// for each shuffled card in the cards variable (.flip-card class) a "click" eventListener is being placed 
shuffle(cards)
cards.forEach(card => {
    card.addEventListener("click", () => {
        //creating a class likst called clicked that will be referenced in CSS to use the 180 degree transform
        card.classList.add("clicked");
        //states that card 1 === the string  which is the clicked card chosen
        console.log(card1 === "");
        // if card 1 === the string which is the declared clicked card then card1 = card
        if (card1 === "") {
            card1 = card
        } else {
            //these childNodes lead to the images like line 39 in HTML. and it states if card1's image is the same as the second chosen card's image then it's a match and to move on to add another round of picking cards. It also sends the message and count of myMatches to the scoreboard. This is done by using scoreBoard.innerHTML
            if (card1.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc == card.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc) {
                myMatches++;
                card1 = "";
                scoreBoard.innerHTML = `You have made ${myMatches} matches`
            } else {
                //if this is the wrong card then you remove "clicked" from both card and card1 and allow card1 to remain or = a "". The flip is at 600ms,so that it's slow enough to see and fast enough to not lag the game.
                setTimeout(() => {
                    card.classList.remove("clicked");
                    card1.classList.remove("clicked");
                    card1 = "";
                }, "600")
                // The lives variable declares that you have 2 lives. This makes it to where you are subtracting 1 life each round
                lives = lives - 1;
                //livesCount which is referenced as an id on line 234 of the html and is in the h3 tag that makes the statement along with the current number of lives from the lives variable.
                livesCount.innerHTML = ` Player has ${lives} lives left`
                //if lives gets down to 0 then you get a gameover.
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


