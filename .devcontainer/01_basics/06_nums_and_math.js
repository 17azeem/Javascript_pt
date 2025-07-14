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
