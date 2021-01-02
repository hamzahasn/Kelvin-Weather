/* eslint-disable */
import "bootstrap";
import "./style.css";

// Current temperature in kelvin degrees.
const kelvin = 0;
// Converting kelvin to celsius.
const celsius = kelvin - 273;
// Convert Celsius to fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
// Rounds down fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33 / 100);
// Rounds down fahrenheit variable.
newton = Math.floor(newton);
console.log(`The temperature ${newton} degrees Fahrenheit.`);
