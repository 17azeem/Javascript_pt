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