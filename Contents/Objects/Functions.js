
// FACTORY FUNCTION
function createCircle(radius){
    return {
        radius,                                                            // radius: radius
        draw() {                                                           // draw: function(){ 
            console.log('Drawing a Circle of radius:',radius);             // console.log('Draw a Circle');
        }                                                                  // }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
// circle1.draw();
const circle2 = createCircle(12);
console.log(circle2);



// CONSTRUCTOR FUNCTION
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('Drawing a circle');
    }
}

const circle = new Circle(1);                    // Creates an empty JS Object
console.log(circle);