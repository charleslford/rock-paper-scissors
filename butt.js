// choose what you want to throw on line 51
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
   return userInput;
 } else {
   console.log('You entered, not a rock, paper, or scissors... so we picked for you');
   forcedChoice = getComputerChoice()
   console.log(`you get: ${forcedChoice}`)
   return forcedChoice
 }
}
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  choiceRules = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  }

  if (choiceRules(userChoice) === computerChoice) {
      console.log('Robot wins GG NUB');
    } else if (choiceRules(computerChoice) === userChoice) {
      console.log('You win! GG, NO RE');
    } else {
      console.log('A tie, IE a european victory');
    }

  };
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You throw: ' + userChoice);
  console.log('Computer throws: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};


playGame()

//choose what you want to throw on line 51

