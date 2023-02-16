'use strict';

const firstName = 'Prabu';

function calcAge(birthYear) {
  const age = 2061 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW Variable with same name as outer scope's variables
      const firstName = 'Steve';
      let str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));

      // Reassigning outer scope's variable
      output = 'New Output!';
    }
    console.log(output);
    console.log(millenial);
  }
  printAge();

  return age;
}

console.log(calcAge(1996));
// console.log(printAge);
// printAge();
