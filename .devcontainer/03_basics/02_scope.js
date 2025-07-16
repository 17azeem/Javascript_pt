//{} -> scope
//block scope
//global scope
let a=50;//global scope
if(true){
    let a=10//block scope
    const b=20
    console.log("Inner ", a)//10
}
console.log("Outer: ",a)//50

function one(){
    const username="azeem"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website) not access out of scope
    two()
}
one()