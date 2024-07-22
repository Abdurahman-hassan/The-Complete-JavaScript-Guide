const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');


let person = {name: 'Abdo', age: 30};
// js garbage collector will delete the object from the memory if it's not used anymore
person = null;

function printMessage() {
    const value = messageInput.value;
    console.log(value || 'Clicked me!');
}

function addListener() {
    console.log('Adding listener...');
    clickableBtn.addEventListener('click', printMessage);
}

// Anonymous function this behavior is called closure it's not a good practice to use it
function addListener_using_anonmous_function() {
    console.log('Adding listener...');
    clickableBtn.addEventListener('click', function() {
        const value = messageInput.value;
        console.log(value || 'Clicked me!');
    });
}

// addListenerBtn.addEventListener('click', addListener);
addListenerBtn.addEventListener('click', addListener_using_anonmous_function);