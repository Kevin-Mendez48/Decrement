var userInput = prompt("Please enter a number: ");

if (!isNaN(userInput)) {
    userInput = parseInt(userInput);

    function decrement() {
        if (userInput > 0) {
            userInput -= 1;
            console.log(userInput);
        } else {
            clearInterval(intervalId);
            console.log("Countdown completed!");
        }
    }

    var intervalId = setInterval(decrement, 1000);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
