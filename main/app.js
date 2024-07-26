const startGameBtn = document.getElementById('start-game-btn');


const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'It\'s a draw!';
const RESULT_PLAYER_WINS = 'Player wins!';
const RESULT_COMPUTER_WINS = 'Computer wins!';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toLowerCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
    }
    return selection;
};

const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    } // if game is already running, return will stop the function
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice(); // might be undefined
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);

    let winner;
    // if the playerSelection is not undefined, then we can call getWinner with two arguments
    if (playerSelection) {
        winner = getWinner(computerSelection, playerSelection);
        console.log(winner);
    } else {
        winner = getWinner(computerSelection, playerSelection); // if playerSelection is undefined, then we call getWinner with only one argument
    }

    let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerSelection}, therefore you `;
    if (winner === RESULT_DRAW) {
        message += 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message += 'won.';
    } else {
        message += 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});

// function startGame() {
//   console.log('Game is starting...');
// }

// const person = {
//     name: 'Max',
//     greet: function great() {
//         console.log('Hello there!');
//     }
// };

// const person = {
//     name: 'Max',
//     greet: function() {
//         console.log('Hello there!');
//     }
// };

// const person = {
//     name: 'Max',
//     greet: () => {
//         console.log('Hello there!');
//     }
// };
//
// person.greet();
// console.dir(startGame);
// const start = function startGame() {
//     console.log('Game is starting...');
// };
// start();

// if i use function expression i can't call it before it's declaration
// startGame();
// const startGame = function() {
//     console.log('Game is starting...');
// };
// but if i use function declaration i can call it before it's declaration
// startGame();
// function startGame() {
//     console.log('Game is starting...');
// }


// startGameBtn.addEventListener('click', startGame);

// anonymous function
// const start = function() {
//     console.log('Game is starting...');
// };
// startGameBtn.addEventListener('click', start);

// startGameBtn.addEventListener('click', function() {
//     console.log('Game is starting...');
// });

// startGameBtn.addEventListener('click', () => {
//     console.log('Game is starting...');
// });


// more about arrow functions
// Function returns an object (with shortened syntax as shown in 4)):
// const person = { name: 'Max' }; // Clearly creates an object
// if (something) { ... } // Clearly used to mark the if statement block

// Shorter function body, if exactly one expression is used:
// const add = (a, b) => a + b; // Return value of a + b

//  Empty parameter parentheses if NO arguments are received:
// const printName = () => console.log('Max'); // No arguments here

// Shorter parameter syntax, if exactly one parameter is received:
// const multiply = number => number * 2; // Same as: const multiply = (number) => number * 2;

// Default syntax:
// const add = (a, b) => {
//     const result = a + b;
//     return result; // like in "normal" functions, parameters and return statement are OPTIONAL!
// };


// rest operator
// the rest operator is used to merge a list of function arguments into an array
// const sumUp = (a, b, ...numbers) => {
//     const validateNumber = (number) => {
//         return isNaN(number) ? 0 : number;
//     };
//
//     let sum = 0;
//     for (const num of numbers) {
//         sum += validateNumber(num);
//     }
//     return sum;
// }
//
// // 1 for a, 5 for b, 10 for the rest
// console.log(sumUp(1, 5, 10, -3, 6, 10));
//


// rest operator
// the rest operator is used to merge a list of function arguments into an array
// use callback function to handle the result
const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum;
    if (operation === 'ADD') {
        sum = 0;
    } else if (operation === 'SUBTRACT' || operation === 'DIVIDE') {
        sum = validateNumber(numbers[0]);
        numbers = numbers.slice(1); // Remove the first number for the loop
    } else if (operation === 'MULTIPLY') {
        sum = 1;
    }

    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else if (operation === 'SUBTRACT') {
            sum -= validateNumber(num);
        } else if (operation === 'MULTIPLY') {
            sum *= validateNumber(num);
        } else if (operation === 'DIVIDE') {
            sum /= validateNumber(num);
        } else {
            sum += validateNumber(num);
        }
    }
    resultHandler(sum); // execute the callback function with the result
}


const showResult = (messegaText, result) => {
    alert(messegaText + ' ' + result);
}



// we used bind which allows to pre-cofigure
// the functions in places where we need to pass
// a value but we also don't want to directly execute the function
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 10, 10);
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 20, 10);
combine(showResult.bind(this, 'The result after multiplying all numbers is:'), 'MULTIPLY', 10, 10);
combine(showResult.bind(this, 'The result after dividing all numbers is:'), 'DIVIDE', 90, 10);


/*
What bind() Does Here
Pre-configure Arguments:
bind() is used to create a new version of showResult where the first argument (messageText) is already set. For example:


showResult.bind(this, 'The result after adding all numbers is:')
This creates a new function that, when called, will always use 'The result after adding all numbers is:' as the first argument.

Context (this):
Although this is not particularly relevant in this specific example, bind() also sets the value of this inside the new function.
Here, it's set to this, which is usually the global object or the current context in which the code is running.

Simplified Explanation
bind() creates a new function.
The new function has this set to a specified value.
It also has pre-set arguments that are passed when the function is called.


bind in situations where you want to pre-configure a function argument
when you are not calling the function on your own but you want to pass it to another function


 */




// // we can use arguments object to get all arguments passed to a function,
// // but it's not an array, it's an array-like object
// const subtractUp = function () {
//     let sum = 0;
//     for (const num of arguments) { // not recommended to use arguments object
//         sum -= num;
//     }
//     return sum;
// }


// we can use arguments object to get all arguments passed to a function,
// but it's not an array, it's an array-like object
// const subtractUp = function (resultHandler, ...numbers) {
//     let sum = 0;
//     for (const num of numbers) { // not recommended to use arguments object
//         sum -= num;
//     }
//     resultHandler(sum);
// }
//
//
// console.log(subtractUp(showResult, 1, 10, 15, 20));