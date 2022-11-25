generateWord = (words) => {
    let random = Math.floor(Math.random() * words.length);
    return words[random];
}

const printInfo = (correctGuesses, maxGuesses, guessedLetters, bp) => {  
    console.log(' |‾‾‾‾‾|');
    console.log(` ${bp[0]}     |`);
    console.log(`${bp[2]}${bp[1]}${bp[3]}    |`);
    console.log(` ${bp[4]}${bp[5]}    |`);
    console.log(' ‾‾‾‾‾‾');
    console.log('\n')
    
    console.log(correctGuesses.join(''));
    console.log('Attempts remaining: ' + maxGuesses);
    console.log('Incorrect letters: ' + guessedLetters.join(''));
}

const checkUserInput = (userInput, correctGuesses, guessedLetters) => {
    if (!userInput) {
        alert('Please enter a letter');
        return false;
    } else if(userInput.length > 1) {
        alert('Only enter a single letter at a time');
        return false;
    } else if(correctGuesses.includes(userInput + ' ') || guessedLetters.includes(userInput + ' ')) {
        alert('You have already tried: ' + userInput);
        return false;
    }

    return true;
}

const checkValidUserInput = (userInput, wordToGuess, correctGuesses, maxGuesses, guessedLetters, all, bp) => {
    let correctGuess = false;

    for (let i = 0; i < wordToGuess.length; i++) {
        if(wordToGuess[i] === userInput) {
            correctGuesses[i] = userInput + ' ';
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        maxGuesses--;
        guessedLetters.push(userInput + ' ');
        bp[5 - maxGuesses] = all[5 - maxGuesses]
    }

    return {bp: bp, maxGuesses: maxGuesses};
}

const checkGameOver = (correctGuesses, maxGuesses, wordToGuess) => {
    let thisAttempt = correctGuesses.map(letter => letter[0])

    if (maxGuesses == 0) {
        alert('Uh-Oh, better luck next time');
        return true;
    } else if(thisAttempt.join('') === wordToGuess) {
        alert(`Congrats! You guessed the full word:  ` + wordToGuess);
        return true;
    }

    return false;
}

const game = () => {
    const words = ["mouse", "clean", "style", "fleets", "teepee", "close", "achoo", "doubt", "shelf"];
    let wordToGuess = generateWord(words);
    let maxGuesses = 6;
    let correctGuesses = new Array(wordToGuess.length).fill('_ '); 
    let guessedLetters = [];
    let all = ['o', '|', '-', '-', '/', '\\'];
    let bp = [' ', ' ', ' ', ' ', ' ', ' '];

    let name = prompt("Hi there, what is your name?");
    alert(`Welcome to hangman ${name}`);
    while(maxGuesses > 0) {
        printInfo(correctGuesses, maxGuesses, guessedLetters, bp);
        console.log(maxGuesses);
        let userInput = prompt("Please enter a letter").toLowerCase();

        if (!checkUserInput(userInput, correctGuesses, guessedLetters)) {
            continue;
        }

        let output = checkValidUserInput(userInput, wordToGuess, correctGuesses, maxGuesses, guessedLetters, all, bp);
        
        maxGuesses = output.maxGuesses;
        bp = output.bp

        if(checkGameOver(correctGuesses, maxGuesses, wordToGuess)) {
            printInfo(correctGuesses, maxGuesses, guessedLetters, bp);
            return;
        }
    }
}

game();

