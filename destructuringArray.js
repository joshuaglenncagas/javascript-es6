/*
Use Destructuring Assignment to Assign Variables from Arrays
ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:
*/

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

// Output: 1,2, 5


//--------------------
//Use destructuring assignment to swap the values of d and e so that d receives the value stored in e, and e receives the value stored in d

let d = 8, e = 6;

[d, e] = [e, d];

