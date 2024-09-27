
showNumbers(10);

function showNumbers(limit){
    let i = 0;
    while (i <= limit){
        (i%2 === 0) ? console.log(i,"EVEN") : console.log(i,"ODD")
        i++;
    }
}