function getInput(event) {
    const key = event.key;

    // Regex Expression for isAlpha
    if (/^[a-zA-Z]+$/.test(key)) {
      // str has only letters
    }
}

document.addEventListener("keydown", getInput);