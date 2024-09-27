
showPrimes(10);

function showPrimes(limit){
    let count = 0;
    for (let i=2; i<=limit; i++){
        if (isPrime(i)) {
            console.log(i);
            count++;
        }
        // console.log('Total Primes=',count)                 // Gives Total Primes till the iteration
    }
    console.log('Total Primes=',count)                        // Gives Total Primes till the limit
}

function isPrime(input){
    for (let j=2; j<input; j++)
        if (input%j === 0)
            return false;
    return true;
}