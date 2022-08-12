# MEMORIA

## Description

This is a game that is focused on memory. The main goal of the game is match the 6 pairs of cards, totaling 12 cards. You have two lives to complete the game. If you do not match all cards before your lives are up, then it's game over.

# Screen shots

Pictures below consist of the wireframe and final product of the game.
 
 Step 1. Wire-frame

 <img width="400" alt="Screen Shot 2022-08-07 at 8.33.46 PM" src="https://i.imgur.com/lHCEfve.png">

Step 3. The final product 

<a href="https://i.imgur.com/oj5oeqB.png"><img width="400" src="https://i.imgur.com/oj5oeqB.png" title="source: imgur.com" /></a>

# Technologies Used: 

I built Memoria by using HTML to create the basic layout and structure of the game, consisting of images, scoreboard, and lives counter. To create these items I used headers, divs, classes, id's and spans.

 I used CSS to create the look and styling of the game. There is a total of 24 cards which with the styling in CSS, the cards are visually placed front and back. Using position, backface-visibility, transform and perspective the card is given the visual of being front and back. Finally fonts and icons were received from google fonts and google icons.

The majority of the working of the game is within Javascript. The process consists of randomizing the array of cards, adding event listeners to click the cards, adding event listeners to flip the cards, and event listeners to turn the cards back over if wrong. I used if/else statements to run through the childnodes to see if the cards clicked were matches, to keep score, keep up with lives left, and game-over. Through dom manipulation I was able to call cards, give scores, keep up with lives, shuffle and have fun.


# Getting Started:

You initiate Memoria by clicking your first card. After clicking your first you then click your second. If your second card is a matching card to the one that you chose, then you get a match. With this outcome you will get to move forward to going for your next card match. If you do not match a set of cards, you will lose a life. You have two lives to make all the matches on the Memoria memory game board. If you lose your two lives, then game-over. You car reset the board by pushing the refresh button on the bottom of the screen.

https://github.com/aaronjohnston4/Memoria


# Next Steps:

I plan to make the game a little more appealing with stylying the game closer to the wire-frame by manipulating the CSS. I would also like to make a dark mode setting in the top right hand corner.

# Cites

https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

 https://marina-ferreira.github.io/tutorials/js/memory-game/

 https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

 https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

 https://stackoverflow.com/questions/41206642/javascript-math-random-in-a-for-loop

 https://www.w3schools.com/howto/howto_css_flip_card.asp

 




