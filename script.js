let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const steps = document.getElementById("steps");
    const result = document.getElementById("result");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "🚨 Please enter a number between 1 and 100!";
        message.style.color = "yellow";
        return;
    }
    guessCount++;
    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        message.style.color = "lightgreen";
        result.textContent = `✅ The Number was: ${randomNumber}`;
        steps.textContent = `📊 Attempts: ${guessCount}`;
    } else {
        message.textContent = userGuess > randomNumber ? "⬆️ Too High! Try again." : "⬇️ Too Low! Try again.";
        message.style.color = "orange";
    }
    document.getElementById("guessInput").value = "";
}
