// console.log("hello" + [23, 45, 67]); // hello23,45,67

// const X3e = Symbol(23);
// const abc = Symbol(23);

// console.log(X3e === abc); // false

// // const abcd = new Symbol(23); // TypeError: Symbol is not a constructor

// console.log(X3e); // Symbol(23)
// // console.log(abcd); // Uncaught TypeError: Symbol is not a constructor
// console.log(typeof X3e, typeof Symbol);

// const stringClass = new String("Hello");
// const stringFunction = String("Hello");

// console.log(typeof stringClass, typeof stringFunction); // String {"Hello"}
// console.log(typeof new String(), typeof String); // object function

// let declare;
// console.log(typeof declare, typeof string); // undefined

// const a = 10;

// console.log(typeof a, typeof null, typeof new Number());

// variable();
// console.log(dummyFunctionGlobal);
// var dummyFunctionGlobal = 10;
// console.log(dummyFunctionGlobal);

// function variable() {}

// let y = 2,
//   z = 100;

// console.log(y, z);

// const multiLine =
//   "This is a multi line string\n" +
//   "This is a multi line string\n" +
//   "This is a multi line string\n";

// console.log(multiLine);

// const multiLine2 =
//   "This is a multi line string \n\
// This is a multi line string \n\
// This is a multi line string";

// console.log(multiLine2);

// const multiLine3 = `This is a multi line string
// This is a multi line string
// ${multiLine2} ${multiLine}
// This is a multi line string`;

// console.log(multiLine3);

// // type conversion
// console.log(String(23));

// // type coercion
// console.log(23 + "100" + 21);
// console.log("200" - 100 - -"23" - 100 - "23");
// console.log("23" * "2");
// console.log("23" / "2");
// console.log(-1 + "10");

// console.log(-(-(-(-23))));

// truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(-10));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean("hello"));
