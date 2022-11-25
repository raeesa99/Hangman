// let topLineOfFrame = "_____________"
// let topEdgeOfFrame = "|           |"
// let frameBody = "|"
// let baseOfFrame = "|___"
// let head = "o" 
// let body = "|"
// let leftLimb = "/"
// let rightLimb = "\\\ "
// let loserMessage = "!! YOU LOSE !!"

// let frame = (
//     `${topLineOfFrame}
// ${topEdgeOfFrame}
// ${frameBody}
// ${frameBody}
// ${frameBody}
// ${frameBody}
// ${frameBody}
// ${baseOfFrame}`
// )

// let framePlusHead = (
//     `${topLineOfFrame}
// ${topEdgeOfFrame}
// ${frameBody}           ${head}
// ${frameBody}
// ${frameBody}
// ${frameBody}
// ${frameBody}
// ${baseOfFrame}`
//     )

// let HeadBody = (
//     `${topLineOfFrame}
// ${topEdgeOfFrame}
// ${frameBody}           ${head}
// ${frameBody}           ${body}
// ${frameBody}           ${body}
// ${frameBody}
// ${frameBody}
// ${baseOfFrame}`
//         )

// let plusLeftarm = (
//     `${topLineOfFrame}
// ${topEdgeOfFrame}
// ${frameBody}           ${head}
// ${frameBody}           ${body}
// ${frameBody}          ${leftLimb}${body}
// ${frameBody}
// ${frameBody}
// ${baseOfFrame}`
//     )

// let plusBothArms = (
//      `${topLineOfFrame}
// ${topEdgeOfFrame}
// ${frameBody}           ${head}
// ${frameBody}           ${body}
// ${frameBody}          ${leftLimb}${body}${rightLimb}
// ${frameBody}
// ${frameBody}
// ${baseOfFrame}`
//     )

// let plusLeftleg = (
//         `${topLineOfFrame}
// ${topEdgeOfFrame}
// ${frameBody}           ${head}
// ${frameBody}           ${body}
// ${frameBody}          ${leftLimb}${body}${rightLimb}
// ${frameBody}          ${leftLimb}
// ${frameBody}
// ${baseOfFrame}`
// )

// let loser = (
//     `${topLineOfFrame}
// ${topEdgeOfFrame}
// ${frameBody}           ${head}
// ${frameBody}           ${body}
// ${frameBody}          ${leftLimb}${body}${rightLimb}
// ${frameBody}          ${leftLimb} ${rightLimb}
// ${frameBody}
// ${baseOfFrame}
// ${loserMessage}`  
// )

// const hangman = [`${frame}`, `${framePlusHead}`, `${HeadBody}`, `${plusLeftarm}`, `${plusBothArms}`, `${plusLeftleg}`, `${loser}`]
// //i need to correlate the guesses to every time maxGuesses decreases by 1

// let words = ["mouse", "clean", "style", "fleets", "teepee", "close", "achoo", "doubt", "shelf"]
//a

generateWord = (words) => {
    let random = Math.floor(Math.random() * words.length);
    return words[random];
}
// let wordToGuess = generateWord(words)

// let blankLetter = '_'
// let blankWordToGuess = [ ]
// for (let i = 0; i < wordToGuess.length; i++) {
//     blankWordToGuess.push(blankLetter)
// };
// let correctGuesses = blankWordToGuess.fill(blankLetter)


// let maxGuesses = 6
// let guessedLetters = [ ]

// console.log(frame)
// console.log(blankWordToGuess)
// console.log(maxGuesses + " guesses remaining")
// // console.log(wordToGuess)

const printInfo = (correctGuesses, maxGuesses, guessedLetters, hangman) => {  
    console.log(hangman)
    console.log(correctGuesses.join(''));
    console.log('Guesses remaining: ' + maxGuesses);
    console.log('Incorrect letters: ' + guessedLetters.join(''));
}

// //loop starts here
// const game = () => {
//     while (maxGuesses > 0) {

//         let guess = prompt("take a guess");

//         let correctGuess = false;   

//         for (let i = 0; i < wordToGuess.length; i++) {
//                 if (wordToGuess[i] === guess) {
//                     correctAttempts[i] = guess + ' ';
//                     correctGuess = true;
//                 }             
//             }

//             guessedLetters.push(guess);

//             if (!correctGuess) {
//                 maxGuesses--;
//                 //console.log(hangman)
//             }
//         }
//     }

//     game()

// const guess = prompt("take a guess") //i can start my game loop with this prompt

// const pushGuess = (guess) => { 
// for (let i = 0; i < blankWordToGuess.length; i++) {
//     if (blankWordToGuess[i] === guess) {
//         blankWordToGuess.splice(blankWordToGuess.indexOf(i), 1, [j])
//     }
//   }
// }

const checkValidUserInput = (guess, wordToGuess, guessedLetters, maxGuesses, correctGuesses, hangman) => {
    let correctGuess = false;

        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === guess) {
                 correctGuesses[i] = guess + ' ';
                 correctGuess = true;
            }
          } 
          if (!correctGuess) {
        maxGuesses -- ;
        guessedLetters.push(guess + ' ');
  } 
  return printInfo;
}

const checkGameOver = (correctGuesses, maxGuesses, wordToGuess) => {
    let attempts = correctGuesses.map(letter => letter[0])

    if (maxGuesses == 0) {
        alert('Uh-oh...You lose');
        return true;
    } else if(attempts.join('') === wordToGuess) {
        alert("Congrats...You've won!");
        return true;
    }

    return false;
}


const game = () => {
    const words = ["mouse", "clean", "style", "fleets", "teepee", "close", "achoo", "doubt", "shelf"]
    let wordToGuess = generateWord(words);
    let maxGuesses = 6;
    let correctGuesses = new Array(wordToGuess.length).fill('_ '); //JAZZ =  _ _ _ _ 
    let guessedLetters = [];
    let all = ['o', '|', '-', '-', '/', '\\'];
    let bp = [' ', ' ', ' ', ' ', ' ', ' '];
;
    let name = prompt("Hi there, what is your name?");
    alert(`Welcome to hangman ${name}`);
    while(maxGuesses > 0) {
        printInfo(correctGuesses, maxGuesses, guessedLetters, hangman);
        let guess = prompt("Please enter a letter");

        if (!checkValidUserInput(guess, wordToGuess, guessedLetters, maxGuesses, correctGuesses, hangman)) {
            continue;
        }

        let output = checkValidUserInput(guess, wordToGuess, guessedLetters, maxGuesses, correctGuesses, hangman);
        maxGuesses = output.maxGuesses;

        if(checkGameOver(correctGuesses, maxGuesses, wordToGuess)) {
            printInfo(correctGuesses, maxGuesses, guessedLetters, hangman);
            return;
        }
    }
}
game();


