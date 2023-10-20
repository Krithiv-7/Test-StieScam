var buttons = document.querySelectorAll('.btn, .backspace');
var inputBox = document.querySelector('.input-box input');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = button.getAttribute('value'); // Get the value attribute of the clicked button

        if (value === "Backspace") {
            // Handle Backspace button: Remove the last character from the input field
            inputBox.value = inputBox.value.slice(0, -1);
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
var inputBox = document.querySelector('.input-box input');

inputBox.addEventListener('click', function() {
    if (!inputBox.hasAttribute('readonly')) {
        inputBox.setAttribute('readonly', 'readonly');
        inputBox.removeAttribute('readonly');
        inputBox.focus();
    }
});

