// pseudo code

// 1. match cards  
//     indicator showing matching card set
//     what logic will i need to do
//     probably an if SVGPatternElement
//     ho2 2ill you fi

// 2. randomize cards




// document.addEventListener('DOMContentLoaded', () =>{

// const cards = document.querySelectorAll(".flip-card");
addEventListener("click", (e) => {
flipCard()
});

function flipCard() {
    const cards = document.querySelectorAll(".flip-card");
        // cards.classList.toggle("flip-card-back")
};


// Variables



// console.log(allCardsArray)
const cards = document.querySelectorAll(".flip-card");
let shuffledArray = [];
function shuffle (arr) {
    for (let i=0;i <arr.length; i++){
        shuffledArray.push(arr[i]);
    }
    shuffledArray.sort( () => .5 - Math.random());
    cards.forEach(card => {
        card.remove();
    })
    shuffledArray.forEach(newCard => {
        gameboard.appendChild(newCard)
    })
}

// cards.sort((a,b) => 0.5 - Math.random());
const gameboard = document.querySelector("#gameboard");
const resetButton = document.querySelector(".reset-button");
// const flipCard = document.querySelectorAll(".flip-card-front");
let scoreBoard = document.querySelector(".score");
let card1 = "";
let card2 = "";
let currentPlayer = cards;
let gameActive = true;
let lives = 2;
let livesCount = document.getElementById("livesCount")


resetButton.addEventListener('click', function(evt) {
    cards.forEach(function(e) {
        // e.innerHTML = ''
    })
    gameActive = true;
})

// create a function that anytime you click on a card it does a console.log
// function shuffleArray(allCardsArray) {
//     for (let i = 0;i < allCardsArray.length; i++) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [allCardsArray[i], allCardsArray[j]] = [allCardsArray[j], caallCardsArrayrds[i]];
//     }
//    return allCardsArray;
// }
// console.log(cards)

function addFlip(){

}
let myMatches = 0;
function checkPoints() {
    if ( calculateTotal(playerHand) < calculateTotal(dealerHand) || playerHand == 21) {
        alert("You Lose! Dealer Wins!");
        console.log(`Player hand: ${playerHand}, dealer hand: ${dealerHand}`)
    }
    else {
        alert("You Win! Dealer Lose!");
        console.log(`Player hand: ${playerHand}, dealer hand: ${dealerHand}`)
    }
    //Add a condiiton for ties too here
}

shuffle(cards)
cards.forEach(card => {
    // console.log(card)
    card.addEventListener("click", () => {
        card.classList.add("clicked");
        console.log(card1 === "");
        if(card1 === ""){
            card1 = card
            // console.log(card.classList)
        } else {
            // console.log(card.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc);
            // console.log(card1.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc);
            if(card1.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc == card.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc){
                myMatches++;
                card1 = "";
                scoreBoard.innerHTML = `You have made ${myMatches} matches`
            } else {
                // card.classList.remove("clicked")
                setTimeout(() => {
                    card.classList.remove("clicked");
                    card1.classList.remove("clicked");
                    card1 = "";
                  }, "600")
                  lives = lives - 1;
                  livesCount.innerHTML = ` Player has ${lives} lives left`
                  if (lives === 0){
                  livesCount.innerHTML = `Game Over`;
                  for (let i =0; i <cards.length; i++){
                    cards[i].removeEventListener("click", this)
                  }

                  }

            }
            // else if(card1.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc !== card.childNodes[1].childNodes[3].childNodes[1].childNodes[1].childNodes[1].currentSrc){
            //     //Flip card back function
            // }
            // console.log("no match")
            // console.log(card.classList);
        }
        // cards.f(card => {
        // for(let i = 0; i < allCardsArray.length; i++) {
        //     //add class to each card
        //     card.classList.add(allCardsArray[i])
        // }
    // console.log(cards)
    // cards.sort(() => (Math.random() - 0.5));
    })
    // if 
    // if(card2 !== card1)
    // function disableCards() {
    //     card1.removeEventListener('click', flipCard);
    //     card2.removeEventListener('click', flipCard);
    //   }

    // console.log(card.classList)
})
// cards.forEach( flipCardFront => {
//     flipCardFront.addEventListener('click', move)
//     // addEventListener accepts an optional argument -
//     // once - will prevent subsequent handler calls for that bound node event
    
//     });
  
    // function move(evt){
    //     console.log(evt.target)
    
        // check if current square has already been played
        // if(gameActive && evt.target.innerText === ""){
        //     console.log(`${currentPlayer} moved`)
        //     // change the content of the selected cell
        //     evt.target.innerText = currentPlayer
            // if (lockBoard) return;
            // if (this === firstCard) return;
          
            // this.classList.add('flip');
          
            // if (!hasFlippedCard) {
            //   hasFlippedCard = true;
            //   firstCard = this;
          
            //   return;
            // }
          
            // secondCard = this;
    //     }
    //     cards.forEach(card => card.addEventListener('click', flipCard));
    //     // change players
    
    // }


// how to flip card in javascript instead of CSS
// });
// const cardArray = [
// {

// }
// ]



// Functions

// flipCard.forEach(flip-card => {
//     console.log(flip-card)
    // cell.addEventListener('click', move, {once: true})

// }












// // Event Listeners


// flip-card-front.addEventListener("click", chooseCard);

// function chooseCard() {
    
// }




// element.addEventListener("click", someOtherFunction);
// flipCard.addEventListener("click", myFunction);

// function flipCard() {
//   document.getElementById("flip-card").innerHTML = "Hello World";
// }

// // Create your data that will be in your array

// const getData = () => [

// ]



// //randomize

// const randomize = () => {

// }


// })


// 1. Link HTML, Javascript and CSS to webpage

// 2.         HTML
//     a. Make Header of title
//     b. div of all images
//         - create container wrapper for gameboard
//         - div with id and class of each of the 12 total images
//         - 6 images duplicated to equal 12
//         - link all images 
//         - sizing for cells and wrapper
//     c. button for refresh (going to be an icon)
//     d. lives count in h3 (add icon next to comment)


// 3.         CSS
//     a. align everything in center
//     b. font Inter at light 300 level for H1 header title
//        font Roboto Thin 100 level for h3 player turns
//     c. font icons - settings to turn to dark mode
//     d. refresh icon instead of refresh button
//     e. person icon next to lives




// 3.       Javascript

//     a. Setup global variables - Player lives at bottom of screen, cards/gameboard, refresh button, settings button

//     b. Make an array of cards.

//     b. Write a shufflecards() function
    
//     c. write a chooseCard() function
//         Somehow make it to where you choose 2 cards and make it check to see if it's the duplicate card.
//         If correct you have a match, and if not then you lose a turn

//     d. attach chooseCard() function for each cards (like in tic tac toew)

//     c. Write a cardMatch() function
//         When running through the array the car is the duplicate label as a match

//     e. create a function for darkmode in the settings button

//     e. Test out the code to see if it works.

// 
