let score="33"
console.log(score)
console.log(typeof(score))
let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof(valueInNumber))

//"33" => 33
/*
"33abc" => NaN
true=>1 false=>0

*/
//boolean conversion
/*
1=> true; 0=>false
""=> false
"azeem"=>true
*/

//string conversion
let n=33
let string=String(n)
console.log(string)
console.log(typeof(string))

//**********operations */
//arithmetic operations
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)//quotient
console.log(2%2)//remainder

//string operations
let str1="hello"
let str2=" azeem"
console.log(str1+str2)

//the presence of a string in an addition operation with a number (or other primitive) will always result in string concatenation, as the non-string operand is coerced to a string. For other arithmetic operations, strings are coerced to numbers.
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")
