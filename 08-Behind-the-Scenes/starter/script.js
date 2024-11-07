'use strict';

function calAge(birthYear) {
  console.log(firstName, age);
  age = 2024 - birthYear;
}

const firstName = 'Jonas';
let age = 10;
// calAge(2002);
// console.log(age);

class init {
  constructor() {
    this.year = 2020;

    this.nithin = {
      name: 'nithin',
      year: 2002,
      calAgeFn: function () {
        return 2037 - this.year; // year = 2002
      },
      calcAgeArr: () => {
        return 2037 - this.year; // year = 2020
      },
    };
  }
}

const obj = new init();
const dumm = new init();

const fn = obj.nithin.calAgeFn;
const arrow = obj.nithin.calcAgeArr;

dumm.nithin.newFun = arrow;

console.log(fn.call({ year: 3000 }));
obj.year = 100;
console.log(dumm.nithin.newFun(), dumm);

class Animal {
  animal = 'Dog';

  static getAnimalFn() {
    return this.animal;
  }

  static getAnimalArrow = () => {
    return this.animal;
  };

  normalObject() {
    return this.getAnimalArrow();
  }
}

const animal = new Animal();

const cat = {
  animal: 'Cat',
};

// cat.getAnimalFn = animal.getAnimalFn;
// cat.getAnimalArrow = animal.getAnimalArrow;
console.log(Animal.getAnimalFn());
console.log(Animal.getAnimalArrow());

const argumentsFnEx = function (...arr) {
  console.log(arguments, arr);

  return arr.reduce((acc, val) => acc + val, 0);
};

console.log(argumentsFnEx(1, 2, 3, 4, 6));

const nithin = {
  name: 'nithin',
  summary: {
    name: 'Ganesh',
  },
};

const copy = Object.assign({}, nithin);

nithin.name = 'Changed';
nithin.summary.name = 'Modified';

console.log(copy.name, copy.summary.name);
