
// global variables // 

function newNumber() {
 let num = Math.floor(Math.random() * 10) + 1;
 return num;
};
let number = newNumber();
console.log("Number to guess:", number);
let counter = 0;
let guess = document.getElementById("guessInputField").value;

let message = document.getElementById("resultMessage");
let validation_message = document.getElementById ("validation_message");


function updateTriesText() {
    document.getElementById("tryes_text").innerText = "You have " + (5 - counter) + " treys left to guess the number";
    validation_message.textContent = "";
}

function check_answer() {
    guess = document.getElementById("guessInputField").value;
    validation_message.textContent = "";
        // inner variables for setting messages // 
        message = document.getElementById("resultMessage");
        validation_message = document.getElementById("validation_message");

        // check the value from the input field //

        if (guess == number) {
            message.innerHTML += "<p>Congratulations! You guessed the number!</p>";
            message.style.color = "green";
            message.style.fontSize = "20px";
            document.getElementById("submitGuess").disabled = true;
            document.getElementById("guessInputField").disabled = true;
            message.style.fontSize = "20px";
            counter++;
            updateTriesText();
            return;
        }   else if (guess === "") {
            validation_message.innerText = "Please enter a number.";
            message.style.color = "orange";
            return;
        }   else if (counter >= 4) {
            message.innerHTML += "<p>Your number: " + guess + " is incorrect. Game over! You've used all your tries. The number was " + number + ".</p>";
            message.style.color = "red";
            message.style.fontSize = "20px";
            document.getElementById("submitGuess").disabled = true;
            document.getElementById("guessInputField").disabled = true;
            updateTriesText();
            return;
        } else if (guess < 1 || guess > 10 || isNaN(guess)) {
            validation_message.innerText = "Invalid input. Please enter a number between 1 and 10.";
            message.style.color = "orange";
            message.style.fontSize = "20px";
            return;    
        } else if (guess < number) {
            message.innerHTML += "<p>Number: " + guess + " is too low! Try again.</p>";
            message.style.color = "black";
            message.style.fontSize = "20px";
            counter++;
            updateTriesText();
            return;
        } else if (guess > number)  {
            message.innerHTML += "<p>Number: " + guess + " is too high! Try again.</p>" ;
            message.style.color = "black";
            message.style.fontSize = "20px";
            counter++;
            updateTriesText();
            return;
        }   else {
            validation_message.innerText = "Invalid input. Please enter a number between 1 and 10.";
            message.style.color = "orange";
            return;
        }
        

}



function reset_game() {
    number = newNumber();
    counter = 0;
    document.getElementById("guessInputField").value = "";
    validation_message.innerText = "Game has been reset. Guess a new number!";
    updateTriesText();
    document.getElementById("resultMessage").innerHTML = "";
    validation_message.style.color = "black";
    document.getElementById("submitGuess").disabled = false;
    document.getElementById("guessInputField").disabled = false;
}