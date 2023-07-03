//this is a constant variable meaning no other value can be assigned to variable
const kelvin =300; 
// by subtracting 273 from 293 we have the value of celsius.
const celsius = kelvin-273;
// Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;
fahrenheit= Math.floor(fahrenheit);
// interpolates fahrenheit to the string
console.log(`The temperature is ${fahrenheit}`)
//converts celcius to the newton scale
let newton = celsius * (33/100) ;
//results will only be whole numbers
newton = Math.floor(newton);
console.log(newton);





