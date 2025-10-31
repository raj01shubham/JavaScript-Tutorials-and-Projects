
let x = { value: 10};
let y = x;

x.value = 20;

// console.log(x);
// console.log(x.value);
// console.log(y);
// console.log(y.value);


let number = 10;
function increase(number){
    number++;
}
increase(number);
console.log(number);            // 10

let number2 = {value: 10};
function increase(number2){
    number2.value++;
}

increase(number2);
console.log(number2);  