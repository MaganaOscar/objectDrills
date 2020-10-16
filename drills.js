/* eslint-disable indent */
/* eslint-disable strict */
/*1. Object initializers and methods*/
let loaf = {
    flour: 300,
    water: 210,
    hydration: function(){
        return this.water/(this.flour*100);
  }
};
console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());
/* 2. Iterating over an object's properties */
let foo = {
    foo: 'abc',
    bar: 23,
    fum: 'w',
    quux: 'Hello there',
    spam: false
};

for(let x in foo)
{
    console.log(x + ' : ' + foo[x]);
}

/* 3. Arrays in objects */
let food = {
    meals: [
        'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea',
        'dinner', 'supper']
};

console.log(food.meals[3]);

/* 4. Arrays of objects */
let person1 = {
    name: 'Bob The',
    jobTitle: 'Builder'
};

let person2 = {
    name: 'Homer Simpson',
    jobTitle: 'Nuclear Engineer'
};

let person3 = {
    name: 'Edward Elric',
    jobTitle: 'State Alchemist'
};

let person4 = {
    name: 'Leon Kennedy',
    jobTitle: 'RCPD Officer'
};

let person5 = {
    name: 'Spongebob Squarepants',
    jobTitle: 'Krabby Patty Fry Cook'
};

let people = [person1, person2, person3, person4, person5];

people.forEach((person) => console.log(person));

/* 5. Properties that aren't there */
people.map((person) => {
    if(person !== person3)
        person.boss = person3.name;
});

people.forEach((person) => {
    if(person.boss !== undefined)
        console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
    else
        console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
});

/* 6. Cracking the Code */
function decode(encoded)
{
    let cipher = {
        'a': 1,
        'A': 1,
        'b': 2,
        'B': 2,
        'c': 3,
        'C': 3,
        'd': 4,
        'D': 4
    };
    let decoded = encoded[cipher[encoded[0]]];
    if (decoded !== undefined)
        return decoded;
    else
        return ' ';
}

console.log(decode('cycle'));

function decodeWords(sentence)
{
    let split = sentence.trim().split(' ');
    let decoded = '';
    split.forEach((word) => decoded += decode(word));
    return decoded;
}

console.log(decodeWords('Brian took Bill\'s chlorine bevel drive. His boy Conor devours.'));

/* 7. Factory Functions with LOTR */
function createCharacter(name, nickname, race, origin, attack, defense){
    return{
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe: function(){
            console.log(`${name} is a ${race} from ${origin}`);
        },
        evaluateFight: function(createdCharacter){
            let dmgTaken = createdCharacter.attack - this.defense;
            let dmgInflicted =  this.attack - createdCharacter.defense;
            console.log(`Your opponent takes ${dmgInflicted} damage and you receive ${dmgTaken} damage`);
        }
    };

}

let characters = [
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 6));

let findChar = characters.find((char) => char.nickname === 'aragorn');
findChar.describe();

let hobbits = characters.filter((char) => {if (char.race === 'Hobbit') return char;});
console.log(hobbits);

let strongAttack = characters.filter((char) => {if (char.attack > 5) return char;});
console.log(strongAttack);

console.log('If I wanted to equip a weapong to each character, I would map through the characters array and set char.weapon to the name of the weapon. If I wanted to change how they are described, I would also add rewrite the describe function to include the weapon in the template string');
