
showNumbers(10);

function showNumbers(limit){
    console.log("Method 1: Using While Loop");
    let i = 1;
    while (i <= limit){
        (i%2 === 0) ? console.log(i,"EVEN") : console.log(i,"ODD")
        i++;
    }

    console.log("----------------");

    console.log("Method 2: Using For Loop");
    for (let i = 1; i <= limit; i++){
        const message = (i%2 === 0) ? "EVEN" : "ODD";
        console.log(i,message);
    }
}