// refresh page button
function refreshPage() {
    location.reload();
}

// computer choice

// take in user choice and validate it
function handleUserChoice() {
    let userChoiceInput = document.getElementById('user-choice');
    let userChoice = userChoiceInput.value.trim();

    if (userChoice.toLowerCase() !== 'rock' && userChoice.toLowerCase() !== 'paper' && userChoice.toLowerCase() !== 'scissors') {
        let errorMessageElement = document.getElementById('error-message');
        errorMessageElement.classList.add('alert', 'alert-danger');
        errorMessageElement.innerHTML = 'Error - invalid input';
    }
};