generateWord = (words) => {
    let random = Math.floor(Math.random() * words.length);
    return words[random];
}

const printInfo = (correctGuesses, maxGuesses, guessedLetters, hangman) => {  
    console.log(hangman)
    console.log(correctGuesses.join(''));
    console.log('Guesses remaining: ' + maxGuesses);
    console.log('Incorrect letters: ' + guessedLetters.join(''));
}

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


