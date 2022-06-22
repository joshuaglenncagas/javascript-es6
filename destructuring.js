//Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

//compare the original code below 

/*
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
*/

//-------------------------

//destructuring

const user = {name: 'John doe', age: '34'};

const { name, age} = user; //Here, the name and age variables will be created and assigned the values of their respective values from the user object
console.log(name);

//-------------------------

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;


