//function
function sayMyName(){
    console.log("a");
    console.log("z");
    console.log("e");
    console.log("e");
    console.log("m");
}
//execute
sayMyName()

// //function to add numbers
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }
// const result=addTwoNumbers(3,4)//7
// console.log("Result:",result)//Result: undefined

function addTwoNumbers(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2
}
const result=addTwoNumbers(3,5)
console.log("Result:",result)


function loginUsermessage(username){
    return `${username} just logged in`
}
console.log(loginUsermessage("azeem"))

//when the function number of parameter is not defined
//rest operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))

//passing object as parameter
const user={
    username:"azeem",
    price:"299"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
console.log(handleObject(user))

//passing array as parameter
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))