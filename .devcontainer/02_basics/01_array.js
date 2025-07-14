//array
const example = [0,1,2,3,4,true,"azeem"]

const myArr=[1,2,3,4,5,6]

console.log(myArr[0])

const myArr2=new Array(1,2,3,4)

//array methods
//add last
myArr.push(7)
console.log(myArr)//[1, 2, 3, 4,5, 6, 7]
//delete last
myArr.pop()
console.log(myArr)/*[ 1, 2, 3, 4, 5, 6 ] */
//add at first
myArr.unshift(9)
console.log(myArr)/*[
  9, 1, 2, 3,
  4, 5, 6
] */
//del at first
myArr.shift()
console.log(myArr)//[ 1, 2, 3, 4, 5, 6 ]

//is vlaue included in the array?
console.log(myArr.includes(9))//return boolean, true or false
//return the index of the value
console.log(myArr.indexOf(3))//2

//Adds all the elements of an array into a string, separated by the specified separator string.
const newArr=myArr.join()
console.log(myArr)
console.log(newArr)//1,2,3,4,5,6
console.log(typeof newArr)//string

//slice
console.log("A ",myArr)
//slice: Returns a copy of a section of an array. 
const myn1=myArr.slice(1,3)//index 3 is not included
console.log(myn1)//[ 2, 3 ] doesn't change original array

//used to remove elements from an array. This is done by providing the startIndex and the deleteCount 
const myn2=myArr.splice(1,3)
console.log(myn2)//[ 2, 3, 4 ]
console.log(myArr)//[ 1, 5, 6 ] change the original array