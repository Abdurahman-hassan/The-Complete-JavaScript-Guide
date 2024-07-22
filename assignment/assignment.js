// function sayHello(name) {
//     console.log('Hi ' + name);
// }

// rewrite the above code using arrow function
const sayHello = (name) => {
    console.log(`Hi ${name}`);
};

// Adjust the arrow function you created as part of task 1 to use three different syntaxes: With two arguments (incl. a phrase that replaces "Hi"), with no arguments (hard-coded values in function body) and with one returned value (instead of outputting text inside of the function directly).
// const sayHello = (name) => {
//     console.log(`Hi ${name}`);
// };


const sayHelloWithoutParam = () => {
    console.log('Hi there!');
}

const sayHelloWithTwoParam = (name, age) => {
    console.log(`Hi ${name}, you are ${age} years old`);
}

const sayHelloWithDefaultValue = (name = 'Abdelrahman') => {
    console.log(`Hi ${name}`);
}

const checkInput = (cb, ...inputs) => {
    let hasEmptyText = false;
    for (const text of inputs) {
        if (!text) {
            hasEmptyText = true;
            break;
        }
    }
    if (!hasEmptyText) {
        cb();
    }

}

checkInput(() => {
    console.log('All not empty');

}, 'Hello', '12', 'Abdelrahman');


sayHello();
sayHelloWithoutParam();
sayHelloWithTwoParam('Abdelrahman', 25);
sayHelloWithDefaultValue();
sayHelloWithDefaultValue('Mohamed');