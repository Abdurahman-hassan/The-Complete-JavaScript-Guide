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

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}


function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
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


// undefined is Default Value of uninitialized variables
// let x;
// console.log(x); // undefined
// this is benefit to check if a variable is defined or not

// null is a special value that represents "nothing", "empty" or "value unknown".
// let y = null;
// console.log(y); // null
// this is benefit to reset or clear a variable

// NaN is a property of the global object. In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number — the same as the value of Number.NaN.
// let z = NaN;
// console.log(z); // NaN
//3.14159 * 'PIE' // NaN
// this is benefit to check if a variable is a number or not

// typeof operator returns a string indicating the type of the unevaluated operand.
// let x = 5;
// let y = 'John Doe';
// let z = null;
// typeof x; // number
// typeof y; // string
// typeof z; // object
// typeof undefined; // undefined
