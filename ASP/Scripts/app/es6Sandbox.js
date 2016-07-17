'use strict';

// strings
let firstName = 'FirstName';
let lastName = 'LastName';
let multilineText = `this is a \n
    multiline text with ' and " for ${firstName}`;

function getValues(strings, ...values){
    return 'got the values: ' + values.join(',');
}

let values = getValues `some string with ${firstName} and ${lastName}`;

// lambda
let doubleFunction = item => item * 2; 
let getThis = () => this; // 'this' is captured
let thisEQ = this === getThis();
let getArguments = (function() {
    return (x, y) => arguments; // no arguments (taken from outside)
}());

// arrays
let arr = [1, 2, 3];
let doubledArr = Array.from([1, 2, 3], doubleFunction);

// destructuring
arr = [1, 2, 3];
let ob = { d: 1, e: 2 };

let [ a, b, c ] = arr;
let { d, e } = ob; // a, b, c, d, e are now local variables coppied from array and object


let { d: d2, e: e2 } = { d, e }; // d2 and e2 are now local variables coppied {d, e}

function rectArea({width: w = 0, height: h = 0} = {}){
    return h * w;
}

let ra1 = rectArea({width: 10, height: 20});
let ra2 = rectArea({height: 10});
let ra3 = rectArea();

// function name
function myFunc1(){}
let myFunc2 = function(){}

let func1Name = myFunc1.name;
let func2Name = myFunc2.name;

// default parameters
//function modulo(value, deliminer = 2){
//   return value % deliminer;
//}

// rest parameters
function sum(value, ...values){
    let sum = value;

    if (values.length) {
        sum += values.reduce((i, j) => i + j);
    }

    return sum;
}

// visibility
{
   function BlockFunc() { }
}
//BlockFunc(); // error

{
    class MyClass { };
}
//new MyClass() // error


// spread
let arr1 = [3, 4, 5];
let arr2 = [1, 2, ...arr1];
let max = Math.max(...arr2); // invokes Math.max(1,2,3,4,5);

// for-of loop
let forOfResult = [];
for (var i of [1, 2, 3]) {
    forOfResult.push(i);
}

// generators
function* generator(obj) {
    for (var key in obj) {
        yield [key, obj[key]]
    }
}

let generatorResult = [];

for (var [key, value] of generator({a:5, b:10})) {
    generatorResult.push([key, value]);
}

Object.defineProperty(Object.prototype, Symbol.iterator, {
    value: generator
});

for (var [key, value] of {c:25, d:50}) {
    generatorResult.push([key, value]);
}

    // object declaration
let name = 'my name';
let newObject = {
    name, // short declaration
    [name + 1]: name + 1, // calculated property
    objectMethod() { },
    get fullName() { // getter for fullName property
        return this.fullName;
},
    set fullName(value){
        this.fullName = value;
}
};
let newDerivedObject = {
    __proto__: newObject, // added to standart
    derivedObjectMethod(){
        let base = super.fullName(); // link to __proto__
}
};

Object.assign(newObject, {a: 10}); // copies self enumerable propertries to newObject
Object.is(NaN, NaN); // true