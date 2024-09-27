
// For Loop
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
const person = {
    name : 'Raj',
    age: 24
}
for (let key in person){
    console.log(key,':',person[key])
}

// For...Of
let colors = ['red','yellow','green'];
for (let color of colors){
    console.log(color)
}