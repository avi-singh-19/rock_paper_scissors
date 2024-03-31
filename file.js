// Valid selections
const selections = ['rock', 'paper', 'scissors'];

// Refresh page button
let refreshPage = () => location.reload();

// Function to generate a random computer choice
let generateComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
};
console.log(generateComputerChoice());

// Take in user choice and process versus computer
function handleUserChoice(computerSelection) {
  let userChoiceInput = document.getElementById('user-choice');
  let userChoice = userChoiceInput.value.trim().toLowerCase();
  let statusMessageElement = document.getElementById('status-message');

  if (!selections.includes(userChoice)) {
    statusMessageElement.classList.add('alert', 'alert-danger');
    statusMessageElement.innerHTML = 'Error - invalid input';
    return 'nil';
  }

  if (userChoice === computerSelection) {
    // It's a tie
    statusMessageElement.classList.add('alert', 'alert-warning');
    statusMessageElement.innerHTML = 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerSelection === 'scissors') ||
    (userChoice === 'paper' && computerSelection === 'rock') ||
    (userChoice === 'scissors' && computerSelection === 'paper')
  ) {
    // User wins
    statusMessageElement.classList.add('alert', 'alert-success');
    statusMessageElement.innerHTML = 'Congratulations! You win!';
  } else {
    // Computer wins
    statusMessageElement.classList.add('alert', 'alert-secondary');
    statusMessageElement.innerHTML = 'Computer wins! Better luck next time';
  }
  submitButton.disabled = false; // Re-enable the button
}