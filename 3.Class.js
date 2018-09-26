/*********************************** The Class **********************************
JavaScript is a prototype-based language which contains no class statement, 
such as is found in C++ or Java. This is sometimes confusing for programmers 
accustomed to languages with a class statement. Instead, JavaScript uses 
functions as classes. 
********************************************************************************/

function Student() {}

/*********************************** The Object **********************************
To create a new instance of an object we use the statement new object, assigning 
the result to a variable to access it later. 
***********************************************************************************/

function Person() {}
let person1 = new Person(); // person1 is an object
let person2 = new Person(); // person2 is an object

/*********************************** The Constructor ******************************
The constructor is called at the moment of instantiation (the moment when the object 
instance is created). The constructor is a method of the class. In JavaScript, 
the function serves as the constructor of the object; therefore, there is no need 
to explicitly define a constructor method. Every action declared in the class gets 
executed at the time of instantiation.
***********************************************************************************/

function Order() {
    console.log('Order instantiated');
}

let order1 = new Order(); // Order() is a constructor of class Customer
let order2 = new Order();

/*********************************** The Property **********************************
Properties are variables contained in the class; every instance of the object has 
those properties. Properties should be set in the prototype property of the class 
(function) so that inheritance works correctly.

Working with properties from within the class is done by the keyword this, which 
refers to the current object. Accessing (reading or writing) a property outside 
of the class is done with the syntax: InstanceName.Property; this is the same 
syntax used by C++, Java, and a number of other languages. (Inside the class the 
syntax this.Property is used to get or set the property’s value.)
************************************************************************************/
function Customer(gender) {
    this.gender = gender;
    console.log('Customer instantiated');
}

var customer1 = new Customer('Male');
var customer2 = new Customer('Female');

//display the customer1 gender
console.log('customer1 is a ' + customer1.gender); // customer1 is a Male

/*********************************** The Method **********************************
Methods follow the same logic as properties; the difference is that they are 
functions and they are defined as functions. Calling a method is similar to 
accessing a property, but you add () at the end of the method name, possibly 
with arguments. To define a method, assign a function to a named property of 
the class’s prototype property; the name that the function is assigned to is 
the name that the method is called by on the object.
***********************************************************************************/

function Student(gender) {
    this.gender = gender;
    console.log('Student instantiated');
}

Student.prototype.sayHello = function() {
    console.log('hello');
};

var student1 = new Student('Male');
var student2 = new Student('Female');

// call the Student sayHello method.
student1.sayHello(); // hello