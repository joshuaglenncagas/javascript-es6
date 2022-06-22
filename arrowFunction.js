
/*
var magic = function() {
  return new Date();
}; 
*/

const magic = () => new Date();

const doubler = (item) => item*2; //if only one argument you can remove parentheses
console.log(doubler(4));

const multiplier = (item, multi) => item * multi;
console.log(multiplier(4, 2));

/* Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax. */

/*
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
}; 
*/

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));