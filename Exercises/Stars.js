
showStars(3);

function showStars(limit){
    for(let i=1; i<=limit; i++){
        let pattern = '';
        for (let j=0; j<i; j++){
            pattern += '*'
        }
        console.log(pattern);
    }
}
