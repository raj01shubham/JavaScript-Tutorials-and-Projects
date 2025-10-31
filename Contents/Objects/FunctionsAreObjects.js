
function Circle (radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw a Circle!');
    }
}

// const Circle1 = new Function('radius',`
//     this.radius = radius;
//     this.draw = function() {
//         console.log('Draw a Circle!');
//     }
//     `);

// const circle = new Circle1(5);

Circle.call({}, 9);
Circle.apply({}, [6,7,8]);

const another = new Circle(1);