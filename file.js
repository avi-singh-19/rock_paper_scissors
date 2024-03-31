// Valid selections
const selections = ['rock', 'paper', 'scissors'];

// Refresh page button
let refreshPage = () => location.reload();

// Function to generate a random computer choice
let computerChoice = () => {
  const randomIndex = Math.floor(Math.random() * selections.length);
  return selections[randomIndex];
};
console.log(computerChoice());

// Take in user choice and process versus computer
function handleUserChoice(computerChoice) {
  let userChoiceInput = document.getElementById('user-choice');
  let userChoice = userChoiceInput.value.trim().toLowerCase();
  let statusMessageElement = document.getElementById('status-message');


  if (!selections.includes(userChoice)) {
    statusMessageElement.classList.add('alert', 'alert-danger');
    statusMessageElement.innerHTML = 'Error - invalid input';
    return 'nil';
  }

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
    statusMessageElement.classList.add('alert', 'alert-secondary');
    statusMessageElement.innerHTML = 'Computer wins! Better luck next time';
  }
};

