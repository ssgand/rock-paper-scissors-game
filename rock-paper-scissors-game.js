const choices = ['rock', 'scissors', 'paper'];

function gettingStarted() {
    console.log(`This a ${choices[0]} ${choices[1]} ${choices[2]} game.`);
    console.log('1: rock, 2: scissors, 3: paper');
};

function getComputerChoice () {
    let ran = Math.floor(Math.random() * 10);
    while (ran < 0 || ran > 2) {
        ran = Math.floor(Math.random() * 10);
    }
    return ran;
};

function playerSelection() {
    let playerChoice = prompt('Choose a number between (1-3): ');
    while (!playerChoice || playerChoice < 1 || playerChoice > 3 || !(+playerChoice)) {
        console.log('Invalid choice. Try again!');
        playerChoice = prompt('Choose a number between (1-3): ');
    }
    return --playerChoice;
};

function game() {
    let playerChoice = playerSelection();
    const comp_choice = getComputerChoice();

    let difference = playerChoice - comp_choice;

    console.log('Your choice is', choices[playerChoice]);
    console.log('Computer\'s choice is', choices[comp_choice]);

    if (difference == -1 || difference == 2){
        console.log('You win! ' + choices[playerChoice] + ' beats ' + choices[comp_choice] + '.')
    } else if ( difference == 0) {
        console.log('Draw. Try again!');
        game();
    } else {
        console.log('You lose! ' + choices[comp_choice] + ' beats ' + choices[playerChoice] + '.')
    }
};

gettingStarted();
game();
