function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';                      // here we use let to state that i is only defined in this if block
    console.log('Block scope i is: ', i);       // 
  }
  console.log('Function scope i is: ', i);      // i here is defined as function scope since it is outside the if block
  return i;
}

checkScope();