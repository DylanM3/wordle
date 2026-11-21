const board = document.getElementById("board");
const GUESSES = 6;
const LETTERS = 5;
let currentGuess = 0;
let currentLetter = 0;

function updateBoard(newLetter) {
    const guesses = document.querySelectorAll(".guess");
    const currentPos = guesses[currentGuess].querySelectorAll(".letter")[currentLetter];
    currentPos.textContent = newLetter;
    currentLetter++;
}

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

function getLetter(event) {
    const newLetter = event.key;

    // Regex Expression for isAlpha
    if (/^[a-zA-Z]+$/.test(newLetter)) {
      updateBoard(newLetter);
    }
}

createGuesses()
document.addEventListener("keydown", getLetter);