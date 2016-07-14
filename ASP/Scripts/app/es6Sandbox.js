'use strict';

//strings
let firstName = 'FirstName';
let lastName = 'LastName';
let multilineText = `this is a \n
    multiline text with ' and " for ${firstName}`;

function getValues(strings, ...values){
    return 'got the values: ' + values.join(',');
}

let values = getValues `some string with ${firstName} and ${lastName}`;

//lambda
let doubleFunction = item => item * 2;

//arrays
let arr = [1, 2, 3];
let doubledArr = Array.from([1, 2, 3], doubleFunction);


//Destructuring
arr = [1, 2, 3];
let ob = { d: 1, e: 2 };

let [ a, b, c ] = arr;
let { d, e } = ob;
//a, b, c, d, e are now local variables coppied from array and object

let { d: d2, e: e2 } = { d, e };
//d2 and e2 are now local variables coppied {d, e}