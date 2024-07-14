const task3Element = document.getElementById('task-3');

function greet() {
    alert('Salam Aleikum!');
}

function greetUser(userName) {
    alert('Hello ' + userName);
}

greet();
greetUser('Ali');

task3Element.addEventListener('click', greet);

function combineStrings(string1, string2, string3) {
    return `${string1} ${string2} ${string3}`;
}

alert(combineStrings('Hello', 'World', '!'));