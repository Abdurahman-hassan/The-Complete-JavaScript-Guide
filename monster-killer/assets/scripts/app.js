const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 10;
const MODE_ATTACK = 'ATTACK'
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let battleLog = [];

function getMaxLifeValues() {
    const enteredValue = prompt('Maximum life for you and the monster.', '100');
    const parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw {message: 'Invalid user input, not a number!'};
    }
    return parsedValue;

}

let chosenMaxLife;
try {
    chosenMaxLife = getMaxLifeValues();
}catch (error) {
    console.log(error);
    // we did the fallback value we don't need finally block
    chosenMaxLife = 100;
    alert('You entered something wrong, default value of 100 was used.');
    // throw error;
} // if we have an error in catch we can use finally block to do some clean up

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);


function printLogHandler() {
    for (let i = 0; i < battleLog.length; i++) {
        console.log('-------------------');
        console.log(battleLog[i]);
    }

    // for of
    // for (const logEntry of battleLog) {
    //     console.log('-------------------');
    //     console.log(logEntry);
    // }

    // for in
    // for (const key in battleLog) {
    //     console.log('-------------------');
    //     console.log(battleLog[key]);
    // }

    // let i = 0;
    // for (const logEntry of battleLog) {
    //     console.log(`#${i}`);
    //     for (const key in logEntry) {
    //         console.log(`${key} => ${logEntry[key]}`);
    //     }
    //     i++;
    // }
}

function writeTolog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };
    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalPlayerHealth: playerHealth,
                finalMonsterHealth: monsterHealth
            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalPlayerHealth: playerHealth,
                finalMonsterHealth: monsterHealth
            };
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalPlayerHealth: playerHealth,
                finalMonsterHealth: monsterHealth
            };
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalPlayerHealth: playerHealth,
                finalMonsterHealth: monsterHealth
            };
            break
        default:
            logEntry = {};
    }
    // if (ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.target = 'MONSTER'
    // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'MONSTER',
    //         finalPlayerHealth: playerHealth,
    //         finalMonsterHealth: monsterHealth
    //     };
    // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalPlayerHealth: playerHealth,
    //         finalMonsterHealth: monsterHealth
    //     };
    // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalPlayerHealth: playerHealth,
    //         finalMonsterHealth: monsterHealth
    //     };
    // } else if (ev === LOG_EVENT_GAME_OVER) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         finalPlayerHealth: playerHealth,
    //         finalMonsterHealth: monsterHealth
    //     };
    // }
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeTolog(
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    );


    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    }

    checkHealth(currentMonsterHealth, currentPlayerHealth);
}

function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    // if (mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeTolog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    );
    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) { // 100 - 10 = 90
        alert('You can\'t heal to more than your max initial health.');
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeTolog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    );
    endRound();

}

function checkHealth(currentMonsterHealth, currentPlayerHealth) {
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeTolog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        writeTolog(
            LOG_EVENT_GAME_OVER,
            'Moster WON',
            currentMonsterHealth,
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
        writeTolog(
            LOG_EVENT_GAME_OVER,
            'A Draw',
            currentMonsterHealth,
            currentPlayerHealth
        );
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);


// !! Boolean coercion via double negation !! // NOT double bang operator
// !!'string' => true
// !!undefined => false
// !!null => false
// !!0 => false
// !!1 => true
// !!{} => true
// !![] => true
// !!'' => false
// !!NaN => false
// !!false => false
// !!true => true

// const userInput = '';
// const isValidInput = userInput ? true : false;
// or // const isValidInput = !!userInput;
// isValidInput => false
// !userInput => true
// !!userInput => false
// const userName = userInput || 'Max';
// userName => 'Max'
// const realUserInput = 'Manu';
// const realUserName = realUserInput || 'Max';
// realUserName => 'Manu'; // return the first true one
// const isLoggedIn = true;
// const shoppingCart = isLoggedIn && ['books'];
// shoppingCart => ['books'];
// isLoggedIn = false;
// isLoggedIn && ['books'] => false // return the first value if it is false
// null && ['books'] => null // return the first value if it is false
// isLoggedIn = true;
// isLoggedIn && "" => ""

// in &&
// if the first value is true always return the second value
// and if the first value is false always return the first value

// in ||
// if the first value is true always return the first value
// and if the first value is false always return the second value

/*
const userName = 'Max';
const altName = '';
console.log(userName === 'Max'); // generates and prints a boolean => true
console.log(userName); // wasn't touched, still is a string => 'Max'

console.log(userName || null); // userName is truthy and therefore returned by || => 'Max'
console.log(altName || 'Max'); // altName is falsy (empty string), hence 'Max' is returned => 'Max'
console.log(altName || ''); // both altName and '' are falsy but if the first operand is falsy, the second one is always returned => ''
console.log(altName || null || 'Anna'); // altName and null are falsy, 'Anna' is returned => 'Anna'

console.log(userName && 'Anna'); // userName is truthy, hence second (!) value is returned => 'Anna'
console.log(altName && 'Anna'); // altName is falsy, hence first value is returned => ''
console.log(userName && ''); // userName is truthy, hence second value is returned => ''

 */

/*
we have 3 types of for loop in JS
1. for loop
2. for-in loop
3. for-of loop

1. for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
2. for-in loop
const person = { name : "Abdo", age : 27 };
for (const key in person) {
  console.log(key, person[key]);
}
3. for-of loop
const hobbies = ['Sports', 'Cooking'];
for (const hobby of hobbies) {
  console.log(hobby);
}
 */

