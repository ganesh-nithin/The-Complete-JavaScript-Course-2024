"use strict";

// dummy();

// // Function Declaration
// function dummy() {
//   console.log("Hello");
// }

// // dummyFunc(); // Error

// // Function Expression
// const dummyFunc = function () {
//   console.log("Hello");
// };

// dummyFunc();

// // Arrow Function
// const dummyArrow = () => {
//   console.log("Hello");
// };

// dummyArrow();

// // literal syntax for arrays
// const friends = ["Michael", "Steven", "Peter"];

// // using the Array constructor
// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends);

// console.log(friends[0]); // Michael
// console.log(friends[100]); // undefined
// console.log(friends["asdasd"]); // undefined

// const bestFriends = friends;

// bestFriends[1] = "Jay";

// console.log(friends);

// const nithin = ["Nithin", 2024 - 2002, "Project Engineer", friends];

// console.log(nithin, nithin.length);
// console.log(nithin + 10); // Nithin,22,Project Engineer,Michael,Jay,Peter10
// console.log(nithin - 10); // NaN

// // Array Methods

// // Add elements (returns length of array)
// // Insert at the end
// console.log(friends.push("Jay"), friends); // 4 ["Michael", "Jay", "Peter", "Jay"]
// // Insert at the beginning
// console.log(friends.unshift("John"), friends); // 5 ["John", "Michael", "Jay", "Peter", "Jay"]

// // Remove elements (returns the element removed)
// // Remove from the end
// console.log(friends.pop(), friends); // Jay ["John", "Michael", "Jay", "Peter"]
// // Remove from the beginning
// console.log(friends.shift(), friends); // John ["Michael", "Jay", "Peter"]

// // Find index of an element
// console.log(friends.indexOf("Jay")); // 1
// console.log(friends.indexOf("None")); // -1

// friends.push(123);

// // Check if an element is in the array
// console.log(friends.includes("Jay")); // true
// console.log(friends.includes("None")); // false

// console.log(friends.includes("123")); // false
// console.log(friends.includes(123)); // true

// // Objects

// // Object Literal Syntax
// const nithin = {
//   firstName: "Nithin",
//   lastName: "Ganesh",
//   age: 2024 - 2002,
//   job: "Project Engineer",
//   friends: ["Michael", "Steven", "Peter"],
// };

// console.log(nithin);
// // Dot Notation
// console.log(nithin.lastName);
// // Bracket Notation
// console.log(nithin["lastName"]);

// console.log(nithin.abcd); // undefined

// const nameKey = "Name";
// console.log(nithin["first" + nameKey]);
// console.log(nithin["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Nithin? Choose between firstName, lastName, age, job, and friends"
// );

// console.log(interestedIn, nithin[interestedIn] ?? "Wrong request");

// nithin.location = "India";
// nithin["twitter"] = "@nithinganesh";
// console.log(nithin);

// console.log(
//   `${nithin.firstName} has ${nithin.friends.length} friends, and his best friend is called ${nithin.friends[0]}`
// );

// const nithin = {
//   firstName: "Nithin",
//   lastName: "Ganesh",
//   birthYear: 2002,
//   job: "Project Engineer",
//   friends: ["Michael", "Steven", "Peter"],
//   hasDriversLicense: true,
//   localStorage: this.localStorage, // here this keyword will take the value from the global (parent) scope
//   windowObject: () => {
//     // Arrow function does not have this keyword, it will take the value from the global (parent) scope
//     console.log(this.location);
//     return this;
//   },
//   getNithinObject: function () {
//     // Regular function has this keyword, it will take the value from the caller object
//     console.log(this.friends);
//     // console.log(nithin.birthYear); // This will violates the DRY principle (we may change nithin variable name in future)
//     return this;
//   },
//   calculateAge: function () {
//     this.age = 2024 - this.birthYear; // To decrease number of computations if we use this multiple times
//     // Regular function has this keyword, it will take the value from the caller object
//     return this.age;
//   },
//   // age: 2024 - this.birthYear, // this won't work as this keyword will take the value from the global (parent) scope
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calculateAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} diver's license`;
//   },
// };

// nithin.windowObject();
// nithin["getNithinObject"]();
// console.log(nithin.localStorage, nithin.calculateAge());
// console.log(nithin.age);
// console.log(nithin.getSummary());

const nithin = [
  "Nithin",
  "Ganesh",
  2024 - 2002,
  "Project Engineer",
  ["Michael", "Peter", "Steven"],
];

// Object.keys(nithin).forEach(key => {
//   console.log(`${key}: ${nithin[key]}`);
// });
// console.log(Array.prototype);

class CustomArray extends Array {
  constructor(...elements) {
    // Add elements to the instance
    super(...elements);
    // Set the length property
    // this.length = elements.length;
  }
  // CustomArray.prototype.constructor = CustomArray;
  // Add a custom method
  getSummary() {
    return `CustomArray with ${this.length} elements.`;
  }
}

// Inherit from Array.prototype
// CustomArray.prototype = Array.prototype;

// Create an instance
const myArray = new CustomArray("Nithin", "Ganesh", 22, "Project Engineer", [
  "Michael",
  "Peter",
  "Steven",
]);

// Log elements
// Object.keys(myArray).forEach((key) => {
//   console.log(`${key}: ${myArray[key]}`);
// });

// // Log prototype methods and properties
// console.log(Array.prototype);
// console.log(myArray, nithin);

// console.log("----ONLY STRINGS----");

// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] !== "string") continue;

//   console.log(myArray[i], typeof myArray[i]);
// }

// console.log("-----BREAK WITH NUMBERS");

// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] === "number") break;

//   console.log(myArray[i], typeof myArray[i]);
// }

// console.log("---LOOP BACKWARD----");

// for (let i = myArray.length - 1; i >= 0; i--) {
//   console.log(i, myArray[i]);
// }

// let dice = Math.floor(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);

//   dice = Math.floor(Math.random() * 6) + 1;
// }
// console.log("You got 6!");
