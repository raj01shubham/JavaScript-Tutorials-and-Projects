
const arrayList = [0, 1, 2, undefined, '', 3, true, 'Shubham', NaN];
console.log(countTruthy(arrayList));

function countTruthy(input){
    let count = 0;
    for (let values of input){
        if (values){
            count++;
        }
    }
    return count
}