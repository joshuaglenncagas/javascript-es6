//In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
// works similar to Array.prototype.slice()

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

//The console would display the values 1, 2 and [3, 4, 5, 7]. 
//NOTE: The rest element (...arr) only works correctly as the last variable in the list.

//----------------------------------------
//Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b,...arr] = list; // Change this line
  return arr;
}
const arr1 = removeFirstTwo(source);