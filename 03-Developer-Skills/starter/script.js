// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log(12345678);

// // Temperature challenge (Non efficient because it contains 3 O(n) for loops)

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const getMaxTemperature = (temperatures) => {
//   let [maxTemperature] = temperatures;

//   for (let index = 1; index < temperatures.length; index++) {
//     const temperature = temperatures[index];

//     if (maxTemperature < temperature) {
//       maxTemperature = temperature;
//     }
//   }

//   return maxTemperature;
// };

// const getMinTemperature = (temperatures) => {
//   let [minTemperature] = temperatures;

//   for (let index = 1; index < temperatures.length; index++) {
//     const temperature = temperatures[index];

//     if (minTemperature > temperature) {
//       minTemperature = temperature;
//     }
//   }

//   return minTemperature;
// };

// const removeNonNumberValuesInArray = (array) => {
//   const numbersArray = [];

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     if (typeof element === "number") {
//       numbersArray.push(element);
//     }
//   }

//   return numbersArray;
// };

// const calcTemperatureAmplitude = (temperatures) => {
//   if (!temperatures && temperatures.length && temperatures.length < 2) {
//     return -1;
//   }

//   const numbersArray = removeNonNumberValuesInArray(temperatures);

//   if (!numbersArray.length) {
//     return -1;
//   }

//   const maxTemperature = getMaxTemperature(temperatures);
//   const minTemperature = getMinTemperature(temperatures);

//   return maxTemperature - minTemperature;
// };

// console.log(calcTemperatureAmplitude(temperatures));

// // Temperature challenge (Efficient because it contains 1 O(n) for loop)

// const calcTemperatureAmplitudeEff = (temperatures) => {
//   if (!temperatures && temperatures.length && temperatures.length < 2) {
//     return -1;
//   }

//   const numbersArray = removeNonNumberValuesInArray(temperatures);

//   if (!numbersArray.length) {
//     return -1;
//   }

//   // Here assume temperatures cannot be MAX_NUMBER & MIN_NUMBER
//   let minTemperature = Number.MAX_SAFE_INTEGER;
//   let maxTemperature = Number.MIN_SAFE_INTEGER;

//   for (let index = 1; index < temperatures.length; index++) {
//     const temperature = temperatures[index];

//     if (typeof temperature !== "number") continue;

//     if (maxTemperature < temperature) {
//       maxTemperature = temperature;
//     } else if (minTemperature > temperature) {
//       minTemperature = temperature;
//     }
//   }

//   if (
//     minTemperature === Number.MAX_SAFE_INTEGER ||
//     maxTemperature === Number.MIN_SAFE_INTEGER
//   ) {
//     return -1;
//   }

//   return maxTemperature - minTemperature;
// };

// console.log(calcTemperatureAmplitudeEff(temperatures));

// Challenge

const printForecast = (temperatures) => {
  if (!temperatures || !temperatures.length) {
    return -1;
  }

  let forecastString = "...";

  for (let index = 0; index < temperatures.length; index++) {
    const element = temperatures[index];

    if (typeof element !== "number") continue;

    forecastString += ` ${element}°C in ${index + 1} days ... `;
  }

  return forecastString;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
