const board = document.getElementById("board");
const GUESSES = 6;
const LETTERS = 5;
let currentGuess = 0;
let currentLetter = 0;

function createGuesses() {
    for (let i = 0; i < GUESSES; i++) {
        const guess = document.createElement("div");
        guess.classList.add("guess");

        for (let j = 0; j < LETTERS; j++) {
            const letter = document.createElement("div");
            letter.classList.add("letter");
            guess.appendChild(letter);
        }
        board.appendChild(guess);
    }
}

createGuesses();