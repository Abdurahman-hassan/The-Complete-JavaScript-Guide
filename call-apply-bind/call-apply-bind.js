function sayHi() {
  console.log(`Hi`);
}

sayHi(); // Hi

sayHi.call(); // Hi

const firstCharacter = {
    name: 'Mario',
    health: 100,
    fullHealth(health1, health2) {
        return (this.health = health1 + health2);
    }
};

const secondCharacter = {
    name: 'Luigi',
    health: 90
};

console.log(firstCharacter.health); // 100
console.log(secondCharacter.health); // 90

firstCharacter.fullHealth.call(secondCharacter, 100, 100);
console.log(secondCharacter.health); // 200

firstCharacter.fullHealth.apply(secondCharacter, [100, 100]);
console.log(secondCharacter.health); // 200

const newFunction = firstCharacter.fullHealth.bind(secondCharacter, 5, 100);
newFunction();
console.log(secondCharacter.health); // 104

