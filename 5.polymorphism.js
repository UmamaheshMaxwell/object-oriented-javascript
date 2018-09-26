/*********************************** Polymorphism **********************************
Polymorphism means "many forms" and in programming describes the ability
for objects to present the same interface for different behaviors.
***********************************************************************************/
function Shape() {

}

Shape.prototype.draw = function() {
    return "I am generic shape"
}

// Circle 
function Circle() {}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
    return "I am a Circle"
}

// Square 
function Square() {}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function() {
    return "I am a Square"
}

// Triangle 
function Triangle() {}

Triangle.prototype = Object.create(Shape.prototype);
// Here we are not going to override draw method of Shape 
// so it will just call draw method of Shape 
// Triangle.prototype.draw = function() {
//     return "I am a Triangle"
// }

const shapes = [new Shape(), new Circle(), new Square(), new Triangle()];
shapes.forEach(function(shape) {
    console.log(shape.draw())
});