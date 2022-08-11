---
name: 'Project 1 Proposal - Memoria '
about: Submitting Project 1 Proposal of a memory match game
title: YOUR Aaron-ericsMoneyTeam-PROJECT 1-Memoria
labels: ''
assignees: ''

---

### Link to your GH repository
https://github.com/aaronjohnston4/Project-1-Browser-Game/blob/main/.github/ISSUE_TEMPLATE/project-1-proposal.md
### Your chosen game 
> Brief 2-3 sentence description of your game
Memoria is a mind based memory game where you choose a card and match it with another card. Cards are face down and flipped when chosen. Chose to match, and chose to win.
### Basic User stories
The user is given the opportunity to play a game of finding the duplicate image. 12 cards face down, and your goal is to flip all cards chosing the correct duplicate card for each round. You have 2 lives. You fail twice, you start over. If you chose all the correct images, you are the champion. 
### Wireframes 
https://imgur.com/ZIjRRTw
### Anything else your instructional team should know
Web Based game meant for all ages.


How to start the game?  
Click the first card you want to choose.

2. What does the player do next?
Player picks the next card - trying to pull the duplicate card

3. How can a player win the game?
Player wins by matching all the duplicate cards without missing twice

4. How can a player lose?
Miss twice and you lose

5. How are you updating the player about the game info?
Update the player about the turn with the turn icon at the bottom of the screen



Pseudo- Code

1. Link HTML, Javascript and CSS to webpage

2.         HTML
    a. Make Header of title
    b. div of all images
        - create container wrapper for gameboard
        - div with id and class of each of the 12 total images
        - 6 images duplicated to equal 12
        - link all images 
        - sizing for cells and wrapper
    c. button for refresh (going to be an icon)
    d. lives count in h3 (add icon next to comment)


3.         CSS
    a. align everything in center
    b. font Inter at light 300 level for H1 header title
       font Roboto Thin 100 level for h3 player turns
    c. font icons - settings to turn to dark mode
    d. refresh icon instead of refresh button
    e. person icon next to lives




3.       Javascript

    a. Setup global variables - Player lives at bottom of screen, cards/gameboard, refresh button, settings button

    b. Make an array of cards.

    b. Write a shufflecards() function
    
    c. write a chooseCard() function
        Somehow make it to where you choose 2 cards and make it check to see if it's the duplicate card.
        If correct you have a match, and if not then you lose a turn

    d. attach chooseCard() function for each cards (like in tic tac toew)

    c. Write a cardMatch() function
        When running through the array the car is the duplicate label as a match

    e. create a function for darkmode in the settings button

    e. Test out the code to see if it works.


