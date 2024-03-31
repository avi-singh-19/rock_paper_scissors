// valid selections
const selections = ['rock', 'paper', 'scissors'];

// refresh page button
let refreshPage = () => location.reload();

// computer choice
let computerChoice = () => {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
};

// take in user choice and validate it
function handleUserChoice() {
    let userChoiceInput = document.getElementById('user-choice');
    let userChoice = userChoiceInput.value.trim();

    if (!selections.includes(userChoice)) {
        let errorMessageElement = document.getElementById('status-message');
        errorMessageElement.classList.add('alert', 'alert-danger');
        errorMessageElement.innerHTML = 'Error - invalid input';
    }
};