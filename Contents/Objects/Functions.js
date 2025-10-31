
// FACTORY FUNCTION
function createCircle(radius){
    return {
        radius,                                                            // radius: radius
        draw() {                                                           // draw: function(){ 
            console.log('Drawing a Factory Circle of radius:',radius);     // console.log('Draw a Circle');
        }                                                                  // }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(12);
console.log(circle2);
console.log(circle2.draw);
circle2.draw();



// CONSTRUCTOR FUNCTION
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('Drawing a Constructor Circle with radius:',this.radius);
        console.log('Drawing a Constructor Circle with radius:',radius);
    }
    return this;
}

const circle3 = new Circle(20);                    // Creates an empty JS Object
console.log(circle3);
console.log(circle3.draw);                         // Prints the contents of the function (if brackets are not used after function name)
console.log(circle3.draw());                       // Prints the what the function intends to print