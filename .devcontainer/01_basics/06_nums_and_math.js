//***********nums******** */
const score=400
console.log(score)
//explicitly defining a number variable
const balance=new Number(100)
console.log(balance)
//converting num to str
console.log(balance.toString().length)
//toFixed :  formatted to a specified number of decimal places using fixed-point notation. 
console.log(balance.toFixed(2))// two decimal places 
//o/p: 100.00

const otherNumber=123.8966
// toPrecision: formatted to a specified number of significant digits (precision).
console.log(otherNumber.toPrecision(4))// 123.9

const hundreds=1000000
console.log(hundreds.toLocaleString())//international number system
console.log(hundreds.toLocaleString('en-IN'))
//Indian number system

/*++++++++++++math++++++++++++++ */
console.log(Math);//run in console to see the properties
//Returns the absolute value of a number
console.log(Math.abs(-4))// o/p : 4
//Returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.round(4.6)) // op: 5
//Returns the smallest integer greater than or equal to its numeric argument.
console.log("ceil")
console.log(Math.ceil(4.2))//5

//Returns the greatest integer less than or equal to its numeric argument.
console.log("floor")
console.log(Math.floor(4.9))//4

console.log(Math.min(4,3,6,8))//min : 3
console.log(Math.max(4,3,6,8))// max : 8

//generating random values
console.log(Math.random()); // generate values b/w 0 and 1
console.log((Math.random()*10)+1);//start from 1
console.log(Math.floor(Math.random()*10)+1)//remove decimal value

//formula for generating random no's in range
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
