
const movie = {
    title: "Kuch to Hua Hai",
    releaseYear: 2020,
    rating: 5,
    director: "Raj"
}

showProperties(movie);

function showProperties(input){
    for (let i in input){
        if(typeof(input[i]) === "string"){
            console.log(i,input[i]);
        }
    }
}