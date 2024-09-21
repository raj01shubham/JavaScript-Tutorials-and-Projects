let a = 10;
let b = 3;

console.log(a,b);

a -= b;
b += a;
a = b - a;

console.log(a,b);