
const marks = [80, 100, 100]

console.log(getGrade(marks));

function getGrade(input){
    let average = getAverage(input);
    
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function getAverage(input){
    let total = 0;
    for( let i of input){
        total += i;
    }
    return total / input.length;
}