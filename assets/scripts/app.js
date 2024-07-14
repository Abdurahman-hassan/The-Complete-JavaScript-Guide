// let username = 'John Doe';
// username = 'Abdo';
// console.log(username);


// const totalUsers = 100;
// totalUsers = 101;
// console.log(totalUsers); // Error: Assignment to constant variable.

// naming convention
// let user_name = 'John Doe'; // snake_case (not recommended)
// let userName = 'John Doe'; // camelCase (recommended)
// start with a letter, underscore, or dollar sign
// let $userName = 'John Doe';
// let _userName = 'John Doe';

const defaultResult = 0; // we can declare a variable without assigning a value to it.
let currentResult = defaultResult;
let logEntries = [];

// let calculationDescription = "'(' + currentResult + ' + 10) * 3 / 2 - 1'";
// let calculationDescription = `(${currentResult}+ 10) * 3 / 2 - 1`;
//
// let errorMessage = 'An error \n' + 'occurred!';
// let errorMessage2 =`An error
//
//                     occurred!`; // multi-line string we can add pre value in white space key in css to make it work

// currentResult = add(1, 2);

// don't execute the function here, but tell the engine that this function exists
// execute it when clicking the button



function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}


function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// js makes an arthmetic operation with string exept the + operator
// console.log(10 - '5'); // 5
// console.log('10' * '5'); // 50
// console.log('10' / '5'); // 2
// console.log('10' + '5'); // 105


// we have object data type in js it's like a dictionary in python
// const person = {
//     name: 'John Doe',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     greet: function () {
//         alert('Hi there!');
//     }
// };

// we also have arrays in js
// const hobbies = ['Sports', 'Cooking'];
