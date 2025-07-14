const name="azeem"
const repoCount=50
//old method 
console.log(name+repoCount+"value")
//better syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

//defining string as object
const gameName= new String('azeemsk')
console.log(gameName[0])

console.log(gameName.length)
console.log(gameName.toUpperCase())
//char at index 
console.log(gameName.charAt(2))
//return index of a char
console.log(gameName.indexOf('e'))

const newString=gameName.substring(0,4) //index 4 is not included
console.log(newString)

const anotherString=gameName.slice(-8,4)//start from back to the index 4-1
console.log(anotherString)

//trim
const newStringOne="   azeem   "
console.log(newStringOne)
console.log(newStringOne.trim())
//replace
const url="https://azeem%20md.google.com"
console.log(url.replace('%20','-'))
console.log(url)
//includes() method is used to determine whether a string contains a specified substring. 
console.log(url.includes('azeem'))
console.log(url.split('-'))