const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

//Hello Anonymous is our default output assuming no argument is given 

//------------------------------------------//

/* Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified. */
const increment = (number, value = 1) => number + value;