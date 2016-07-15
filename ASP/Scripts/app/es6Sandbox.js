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
let doubleFunction = item => item * 2; //'this' is captured

// arrays
let arr = [1, 2, 3];
let doubledArr = Array.from([1, 2, 3], doubleFunction);


// destructuring
arr = [1, 2, 3];
let ob = { d: 1, e: 2 };

let [ a, b, c ] = arr;
let { d, e } = ob; //a, b, c, d, e are now local variables coppied from array and object


let { d: d2, e: e2 } = { d, e }; //d2 and e2 are now local variables coppied {d, e}

// default parameters
//function modulo(value, deliminer = 2){
//    return value % deliminer;
//}

// rest parameters
function sum(value, ...values){
    let sum = value;

    if (values.length) {
        sum += values.reduce((i, j) => i + j);
    }

    return sum;
}

// spread
let arr1 = [3, 4, 5];
let arr2 = [1, 2, ...arr1];
let max = Math.max(...arr2); // invokes Math.max(1,2,3,4,5);

// for-of loop
let forOfResult = [];
for (let i of [1, 2, 3]) {
    forOfResult.push(i);
}

// generators
function* generator(obj) {
    for (let key in obj) {
        yield [key, obj[key]]
    }
}

let generatorResult = [];

for (let [key, value] of generator({a:5, b:10})) {
    generatorResult.push([key, value]);
}

Object.defineProperty(Object.prototype, Symbol.iterator, {
    value: generator
});

for (let [key, value] of {c:25, d:50}) {
    generatorResult.push([key, value]);
}