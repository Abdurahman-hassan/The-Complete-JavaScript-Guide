const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
    console.log("The number is greater than 0.7!");
} else {
    console.log("The number is not greater than 0.7!");
}


const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

for (const number of numbers.reverse()) {
    console.log(number);
}


for (const number in numbers) {
    console.log(numbers[number]);
}

let counter = 0;
while (counter < numbers.length) {
    console.log(numbers[counter]);
    counter++;
}

// Create another random number (in a separate constant) and show an alert in two different scenarios: Both are greater 0.7 OR at least one of the two is NOT greater than 0.2.
const randomNumber2 = Math.random();

if ((randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber <= 0.2 || randomNumber2 <= 0.2) {
    alert("Both are greater 0.7 OR at least one of the two is NOT greater than 0.2");
}

let j = 0;
outerWhile: do {
    console.log("Outer", j);
    innerFor: for (let k = 0; k < 5; k++) {
        if (j === 3) {
            break outerWhile; // continue here it will be dangerous because it will create infinite loop
        }
        console.log("Inner", k);
    }
    j++;
} while (j < 5);