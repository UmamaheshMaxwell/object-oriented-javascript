// Create an Object

// 1. Create using new Obejct()
let obj1 = new Object();
console.log(obj1);

// 2. Create using Obejct.create();
// create method requires a prototype to be passed
//  if there is no prototype you can pass null
let obj2 = Object.create(null) // you can pass obj1
console.log(obj2);

// 3. Create using Obejct literals
let obj3 = {};
console.log(obj3)

// 4. Create Object using function
function Person() {}
let obj4 = new Person();
console.log(obj4);

// Create properties for an object

let person = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    city: 'Bangalore'
}

person.age = 36;
console.log(person);

/* ************** Object.preventextensions **************
 we can edit and delete the properties
 but can't add new properties
*/

let preventObject = {
    name: 'mahesh',
    city: 'Boston',
    age: 25
}
Object.preventExtensions(preventObject);

preventObject.email = 'uma@mahesh.com'
preventObject.name = 'Umesh';
delete preventObject.age;

console.log(preventObject);

/* ************** Object.seal **************
 we can edit but can't add new properties 
 and can't delete existing properties
*/

let sealObject = {
    name: 'mahesh',
    city: 'Boston',
    age: 25
}
Object.seal(sealObject);

sealObject.email = 'uma@mahesh.com'
sealObject.name = 'Umesh';
delete sealObject.age;

console.log(sealObject);

/* ************** Object.freeze **************
 we can’t change a property, add a new one or delete one 
 Note: that nested objects won’t automatically be frozen, 
       In order to deep-freeze an object, we would have 
       to instead recursively freeze any object property 
       that happens to also be an object.
*/

let freezeObject = {
    name: 'mahesh',
    city: 'Boston',
    age: 25
}
Object.freeze(freezeObject);

freezeObject.email = 'uma@mahesh.com'
freezeObject.name = 'Umesh';
delete freezeObject.age;

console.log(freezeObject);

/* ********************* Object.assign *********************
  allows to easily copy values from one object to another
*/

const assignObj1 = {
    clown: '🤡',
    police: '👮',
    santa: '🎅',
    farmer: '👩‍🌾'
}

const assignObj2 = {};
Object.assign(assignObj2, assignObj1)
console.log(assignObj2);

/* ********************* Object.keys *********************
  returns an array with the property keys on an object
*/

const myKeysobj = {
    clown: '🤡',
    police: '👮',
    santa: '🎅',
    farmer: '👩‍🌾'
}

const objKeys = Object.keys(myKeysobj)
console.log(objKeys);

/* ********************* Object.values *********************
  takes an object and returns an array with the values
*/

const myValueObj = {
    piggy: '🐷',
    birdy: '🐦',
    bunny: '🐰'
};

const objValues = Object.values(myValueObj)
console.log(objValues);

/* ********************* Object.entries *********************
  returns an array with arrays of key-value pairs
*/

const myEntriesObj = {
    piggy: '🐷',
    birdy: '🐦',
    bunny: '🐰'
};

const objEntries = Object.entries(myEntriesObj)
console.log(objEntries);