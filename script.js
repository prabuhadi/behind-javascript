'use strict';

// Scoping Practice
// const firstName = 'Prabu';

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

//Hoisting and TDZ practice
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
let job = 'Developer';
const year = 1991;

// Function
console.log(typeof addDecl, addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   constAddArrow = (a, b) => a + b;
// };

// const addArrow = (a, b) => a + b;

// Example
console.log(typeof numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 1;

function deleteShoppingCart() {
  console.log('All Product Deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAges = function (birthYear) {
  console.log(2030 - birthYear);
  console.log(this);
};
calcAges(1994);

const calcAgeArrow = birthYear => {
  console.log(2030 - birthYear);
  console.log(this);
};
calcAgeArrow(1994);

// this keyword
const jonas = {
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2035 - this.year);
  },
};
jonas.calcAge();

const kaela = {
  year: 2001,
};
// Copy the function from another object
kaela.calcAge = jonas.calcAge;
kaela.calcAge();

const mauri = {
  year: 2023,
};
mauri.calcAge = jonas.calcAge;
mauri.calcAge();

const f = jonas.calcAge;
// f();

var firstName = 'Zeta';

const prabu = {
  firstName: 'prabu',
  year: 1999,
  calcAged: function () {
    // console.log(this);
    console.log(2030 - this.year);

    // Solution 1
    // const self = this; // self or this
    // const isGenerationX = function () {
    //   console.log(self.year);
    //   console.log(self.yaer !== 1999);
    // };

    // Solution 2
    const isGenerationX = () => {
      console.log(this.year);
      console.log(this.yaer !== 1999);
    };
    isGenerationX();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
// console.log(prabu);
prabu.greet();
prabu.calcAged();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

// arguments not work on arrow function
const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 4, 4);

let age = 24;
let oldAge = age;
age = 30;
console.log(oldAge);
console.log(age);

const me = {
  name: 'Prabu',
  age: 24,
};

const friend = me;
friend.name = 'Iofi';
friend.age = 28;
console.log(friend);

// Primitive Types
let lastName = 'William';
let oldLastName = lastName;
lastName = 'David';
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'William',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'David';
console.log('Before Married : ', jessica);
console.log('After Married : ', marriedJessica);
// marriedJessica = {};

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Skyblue',
  age: 27,
  family: ['Lasirena', 'Moreno'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Vanessa';
jessicaCopy.family.push('Ara');
jessicaCopy.family.push('Beta');
console.log('Before Married : ', jessica2);
console.log('After Married : ', jessicaCopy);
