/*********************************** Inheritance **********************************
Inheritance is a way to create a class as a specialized version of one or more 
classes (JavaScript only supports single class inheritance). The specialized 
class is commonly called the child, and the other class is commonly called the 
parent. In JavaScript you do this by assigning an instance of the parent class 
to the child class, and then specializing it.
In JavaScript, inheritance is supported by using prototype object and this is also
called as Prototypal Inheriatance.
***********************************************************************************/

function Person() {
    this.firstName = "Umesh";
    this.lastName = "Meka";
};

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

function Student(age) {
    this.age = 36;
}

// Inherit the properties from SuperType
Student.prototype = new Person();

Student.prototype.getAge = function() {
    return this.age;
}

let stuObj = new Student();
console.log(stuObj.firstName);
console.log(stuObj.lastName);
console.log(stuObj.age);
console.log(stuObj.getFullName());
console.log(stuObj.getAge());