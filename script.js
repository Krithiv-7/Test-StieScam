var buttons = document.querySelectorAll('.btn, .backspace, .Enter');
var inputBox = document.querySelector('.input-box input');
var showButton = document.querySelector('.show');

// Variable to track whether the values are currently hidden
var valuesHidden = false;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = button.getAttribute('value'); // Get the value attribute of the clicked button

        if (value === "Backspace") {
            // Handle Backspace button: Remove the last character from the input field
            inputBox.value = inputBox.value.slice(0, -1);
        } else if (value === "Enter") {
            // Handle Enter button: Save the form (you can replace this with your saving logic)
            saveForm();
        } else {
            // Check if the input length is less than 6; if so, append the value
            if (inputBox.value.length < 6) {
                inputBox.value += value;

                // Add a CSS class to style the input
                updateInputClass();
            }
        }
    });
});

function updateInputClass() {
    var inputLength = inputBox.value.length;
    if (inputLength === 6) {
        inputBox.classList.add("valid-input");
    } else {
        inputBox.classList.remove("valid-input");
    }
}

function saveForm() {
    // Replace this with your actual save form logic
    // For example, you can submit the form or perform an AJAX request here.
    // For demonstration purposes, we'll simply alert a message.
    alert('Form saved!');
}

showButton.addEventListener('click', function() {
    // Toggle the visibility of the values in the input field
    if (valuesHidden) {
        inputBox.type = 'password'; // Hide values with asterisks
    } else {
        inputBox.type = 'text'; // Show the actual values
    }
    valuesHidden = !valuesHidden; // Toggle the flag
});
