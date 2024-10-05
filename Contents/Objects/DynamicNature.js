
const circle = {
    radius: 1
};
console.log(circle);

circle.color = 'yellow';
console.log(circle);

circle.draw = function() {}
console.log(circle);

delete circle.color;
console.log(circle);

delete circle.draw;
console.log(circle);