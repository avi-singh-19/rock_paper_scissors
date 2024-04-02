// Valid selections
const selections = ['rock', 'paper', 'scissors'];

// Refresh page button
let refreshPage = () => location.reload();

// Function to generate a random computer choice
let generateComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
};

// Take in user choice and process versus computer
function handleUserChoice() {
  let submitButton = document.getElementById('submit-button');
  let userChoiceInput = document.getElementById('user-choice');
  let userChoice = userChoiceInput.value.trim().toLowerCase();
  let statusMessageElement = document.getElementById('status-message');
  let computerChoiceElement = document.getElementById('computer-choice');
  let playAgainButton = document.getElementById('refresh-button');

  submitButton.disabled = true;
  submitButton.style.display = 'none';
  playAgainButton.style.display = 'block';


  if (!selections.includes(userChoice)) {
    statusMessageElement.classList.add('alert', 'alert-danger');
    statusMessageElement.innerHTML = 'Error - invalid input';
    submitButton.disabled = false;
    submitButton.style.display = 'block';
    playAgainButton.style.display = 'none';
    return 'nil';
  }

  let computerChoice = generateComputerChoice();
  computerChoiceElement.innerHTML = `Computer chose: ${computerChoice}`;

  if (userChoice === computerChoice) {
    // It's a tie
    statusMessageElement.classList.add('alert', 'alert-warning');
    statusMessageElement.innerHTML = 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    // User wins
    statusMessageElement.classList.add('alert', 'alert-success');
    statusMessageElement.innerHTML = 'Congratulations! You win!';
  } else {
    // Computer wins
    statusMessageElement.classList.add('alert', 'alert-danger');
    statusMessageElement.innerHTML = 'Computer wins! Better luck next time';
  }
}