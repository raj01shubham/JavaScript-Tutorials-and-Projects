
// Speed Limit = 70
// Every 5 kmph -> 1 Point
// 12 Points -> Suspended

checkSpeed(130);

function checkSpeed(speed){
    
    const speedLimit = 70;
    const perPointSpeed = 5;
    const suspendPoints = 12;
    
    if (speed <= speedLimit){
        console.log('Great Driving!');
    }
    else{
        const points = Math.floor((speed - speedLimit)/perPointSpeed);
        if (points >= suspendPoints){
            console.log('Hehehe... Suspended');
        }
        else{
            console.log('Points:',points,'\nDrive Slower!')
        }
    }
}