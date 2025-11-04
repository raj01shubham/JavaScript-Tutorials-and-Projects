
// For Loop
console.log("For Loop")
for (let i=0; i<=5; i++){
    console.log(i)
}

// While Loop
console.log("While Loop")
let i=5
while (i>=0){
    console.log(i)
    i--;
}

// Do...While
console.log("Do...While Loop")
let j=0;
do {
console.log(j);
j++;
} while (j<=5)

// For...In
console.log("For...In Loop")
const person = {
    name : 'Raj',
    age: 25
}
for (let key in person){
    console.log("Only Key ->",key)
    console.log("Bracket Notation ->",key,':',person[key])
    console.log("Using Dollar Sign ->",`${key} : ${person[key]}`)
    console.log("Only Value ->",person[key])
    console.log("Dot Notation ->",key,':',person.key,"--> It can not be used because key is not a property of person object") //undefined
    console.log("-----")
}

// For...Of
console.log("For...Of Loop")
let colors = ['red','yellow','green'];
for (let color of colors){
    console.log(color)
}