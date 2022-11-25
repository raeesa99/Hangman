/* Things to consider:
- player can only enter a letter once BUT that letter must match every index of the word that contains that letter 
eg. awkward. a is at [0] and [4] of the word.
-the word would start off as an empty array for the player to guess letters.
- a prompt if the user has input a letter again - enter that letter into a system to keep track of if they entered it already
store them into an empty array? arr.push every letter that is input whether correct or incorrect
then check that array every time player makes another guess
- user enters a letter thats not in the word - they lose a guess and a part of the hangman is revealed in console.
- user enters the correct letter - it doesn't affect how many guesses they have left - it doesnt affect the hangman in console - the letter is displayed in its correct index
- if the player guesses the word we need to alert "winner"
-if player runs out of guesses before solving the word we alert "you lose"
-counter for every time player guesses a letter correlating to the limbs of the hangman */

//First step: welcome the user and have the game template ready.
const name = prompt("Hi there, what is your name?");
console.log(name);

const welcome  = alert(`Welcome to hangman ${name}`);
console.log(welcome);

//Now we need to start by displaying the basic template of the game. Including:

//an array of random words 
let words = ["mouse", "clean", "style", "fleets", "teepee", "close", "achoo", "doubt", "shelf"]

//-a counter of guesses that starts at 6
let maxGuesses = 6
console.log(maxGuesses + " guesses remaining")

//I need to store all guessed letters so that the player can't attempt the same one twice.
let guessedLetters = []
console.log(guessedLetters)

//first we need to choose a random word from the array to play:
let wordToGuess = words[Math.floor(Math.random() * words.length)]
console.log(wordToGuess)

//next we need to make an empty array of the characters of the chosen random word.I can do this using a for loop.
let blankWordToGuess = []
let blankLetter = "_"
for (let i = 0; i < wordToGuess.length; i++) {
    blankWordToGuess.push(blankLetter)
};
console.log(blankWordToGuess)
//hopefully this has made an empty array of "_" that I can then store correctly guessed letters in.
//kind of worked. can't figure out why there's a number in brackets before the array and why the _ shows up like "_"

//-a blank hangman
let topLineOfFrame = "_____________"
let topEdgeOfFrame = "|           |"
let frameBody = "|"
let baseOfFrame = "|___"

let frame = (
    `${topLineOfFrame}
${topEdgeOfFrame}
${frameBody}
${frameBody}
${frameBody}
${frameBody}
${frameBody}
${baseOfFrame}`
)
console.log(frame)
//can't figure this out!
//figured it out. I didn't declare each piece of the frame as a variable before trying to console.log it.
//I also need to create a variable for each body part so they can be logged each time the answer is incorrect.
let head = "o" 
let body = "|"
let leftLimb = "/"
let rightLimb = "\\\ "  // why do i need to add 3x \ and a space after it here for this error to go away? "\" gives me error
let loserMessage = "!! YOU LOSE !!"

let framePlusHead = (
    `${topLineOfFrame}
${topEdgeOfFrame}
${frameBody}           ${head}
${frameBody}
${frameBody}
${frameBody}
${frameBody}
${baseOfFrame}`
    )

let HeadBody = (
    `${topLineOfFrame}
${topEdgeOfFrame}
${frameBody}           ${head}
${frameBody}           ${body}
${frameBody}           ${body}
${frameBody}
${frameBody}
${baseOfFrame}`
        )

let plusLeftarm = (
    `${topLineOfFrame}
${topEdgeOfFrame}
${frameBody}           ${head}
${frameBody}           ${body}
${frameBody}          ${leftLimb}${body}
${frameBody}
${frameBody}
${baseOfFrame}`
    )

let plusBothArms = (
     `${topLineOfFrame}
${topEdgeOfFrame}
${frameBody}           ${head}
${frameBody}           ${body}
${frameBody}          ${leftLimb}${body}${rightLimb}
${frameBody}
${frameBody}
${baseOfFrame}`
    )

let plusLeftleg = (
        `${topLineOfFrame}
${topEdgeOfFrame}
${frameBody}           ${head}
${frameBody}           ${body}
${frameBody}          ${leftLimb}${body}${rightLimb}
${frameBody}          ${leftLimb}
${frameBody}
${baseOfFrame}`
)

let fullBodyLoser = (
    `${topLineOfFrame}
${topEdgeOfFrame}
${frameBody}           ${head}
${frameBody}           ${body}
${frameBody}          ${leftLimb}${body}${rightLimb}
${frameBody}          ${leftLimb} ${rightLimb}
${frameBody}
${baseOfFrame}
${loserMessage}`  
)
//now I need to prompt the user to guess a letter.
const guess = prompt("take a guess")


//what happens after they guess? 
//I could create a function that takes the userinput as a parameter and runs it through to check if:
//the letter is either correct or incorrect.
//if correct:
// * push the guess to the guessedLetters array
// * find the correct letter within the blankWordToGuess array and display it
// * guesses stays the same
// * alert (guess was correct, guess again)
// * prompt(guess)

//if incorrect:
// * push the guess to the guessedLetters array
// * guesses -1 (when guesses reaches 0 it's game over)
// * console.log a body part of hangman
// * alert (guess was incorrect, guess again)
// * prompt(guess)

/* if (guess == inwordtoguessarray) {
    guessedLetters.push(guess)
    console.log(guessedLetters)
} */ // this doesn't work

/*const checkValidUserInput = (guess) => {
for (let j = 0; j < wordToGuess; j++) {
    if (wordToGuess(j) == guess.map(i)) {
        console.log(blankWordToGuess.push(j))
        alert("correct!")
    }
 }
}
checkValidUserInput(guess) */ //also doesnt work. The function needs to compare both arrays.

const checkValidUserInput = (guess, wordToGuess) => {
    for (let i = 0; i < guess.length; i++) {
        for (let j = 0; j < wordToGuess.length; j++) {
            if (guess[i] === wordToGuess[j]) {
                 guessedLetters.push(i)
                 console.log("correct!")
                 console.log(maxGuesses + " guesses remaining")
                 //blankWordToGuess.replace[i]
                 //console.log(blankWordToGuess)
                 return;
            }
         }
    } 
        console.log("incorrect!")
        console.log(framePlusHead)
        console.log(maxGuesses -1 + " guesses remaining") 
}
checkValidUserInput(guess, wordToGuess)
console.log(guessedLetters)
//console.log(blankWordToGuess)

//this is starting to work but needs more code.
//not sure why when guess is correct, both codes run. //fixed this by adding return;
/* i need to create a loop of the above code that will run each time the user inputs a guess until maxGuesses === 0 then console.log("you lose")
else if the blankWordToGuess array fills up then console.log("you win")
I'm also thinking to create an array of console.log(frame+bodypart) and then return the correct image for each time the answer is incorrect.
*/
// 14/11/22:
/* today we learned a little more about creating functions and dean created multiple functions first and then a function that takes the
other functions as parameters so i might try to implement that here too. */

// while (maxGuesses === 6) {
//     const nextGuess = prompt("take a guess")
//     guessedLetters.push(guess)
// }
//this is giving me an Infinity Loop ^

//feedback from Dean:
/*
So your game loop can start just above where you ask your user to guess a letter.
You can probably get away with using a regular for loop to loop over the correct word checking each letter against the guessed one.
 If it is correct you can use the "i" variable to change the blank to the guessed letter
*/