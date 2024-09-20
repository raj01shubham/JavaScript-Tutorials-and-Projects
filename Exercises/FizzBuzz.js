// Divisible by 3 -> Fizz
// Divisible by 5 -> Buzz
// Divisible by 15 -> FizzBuzz
// Not Divisible by 3 or 5 -> Input
// Not a number -> Not a number

const output = fizzBuzz(34);
console.log(output);

function fizzBuzz(input){
    if ( (typeof(input) !== "number")){
        return NaN;
    }

    if ( (input % 3 == 0) && (input % 5 == 0) ){
        return "FizzBuzz";
    }

    if (input % 3 == 0){
        return "Fizz";
    }
    
    if (input % 5 == 0){
        return "Buzz";
    }

    return input;
}