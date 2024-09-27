
// If... Else

// if (condition) {
//     statement;
// }
// else if (condition2) {
//     statement2;
// }
// .
// .
// .
// else{
//     statement3;
// }

let hour = 10;
if (hour>=6 && hour<=12) {
    console.log("Good Morning");
}


// Switch...Case
let role;
switch (role){
    case 'guest':
        console.log('Welcome');
        break;       
    case 'moderator':
        console.log('Welcome the Guest');
        break;    
    default:
        console.log('Who are you?')        // to come out of the condition
}