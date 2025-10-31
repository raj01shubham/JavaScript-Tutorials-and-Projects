
let person = {
    name : 'Raj',
    age: 25
}

console.log(person);

// Accessing the Object

// 1. Dot Notation
person.age = 1;

// 2. Bracket Notation
let key = "name"; // dynamic key
person[key] = "Ved";

console.log(person);