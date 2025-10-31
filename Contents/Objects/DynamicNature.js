
const circle = {
    radius: 1
};
console.log(circle);

circle.color = 'yellow';
console.log(circle);

circle.draw = function() {console.log('Drawing!');}
console.log(circle);
console.log(circle.draw);
circle.draw();

delete circle.color;
console.log(circle);

delete circle.draw;
console.log(circle);