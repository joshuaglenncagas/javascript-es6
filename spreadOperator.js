// NOTE spread only works in function arguments or as an array literal

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
//spreads the array and Math.max is a function that checks the largest value

console.log(maximus);



