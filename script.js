var buttons = document.querySelectorAll('.btn, .backspace, .Enter');
var inputBox = document.querySelector('.input-box input');
var isHidden = true;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var value = button.getAttribute('value'); // Get the value attribute of the clicked button

        if (value === "Backspace") {
            // Handle Backspace button: Remove the last character from the input field
            inputBox.value = inputBox.value.slice(0, -1);
        } else if (value === "Enter") {
            if (inputBox.value.length === 4 || inputBox.value.length === 6) {
                // Handle Enter button: Save the form (you can replace this with your saving logic)
                saveForm();
            } else {
                // Show an "invalid input" message if the length is not 4 or 6
                alert('Invalid input. Please enter a 4 or 6-digit value.');
            }
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

function saveForm() {
    // Send the form data to the server using an AJAX request
    var formData = new FormData();
    formData.append('myInput', inputBox.value);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'process_form.php', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Form data has been successfully saved on the server
            // You can perform additional actions if needed
            console.log('Form data saved on the server.');
        }
    };

    xhr.send(formData);
}
