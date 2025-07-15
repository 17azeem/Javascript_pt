//object literals
//Js consider key as string
const mySym=Symbol("key1")
const JsUser={
    name:"azeem",
    "full name":"Md Azeem",//it is only access by using way 2
    [mySym]:"mykey1",//it is also access using way 2
    age:20,
    location:"Hyd",
    email:"azeem@google.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Saturday"]
}

//access
//1 way
console.log(JsUser.email)
//2 way
console.log(JsUser["email"])
console.log(JsUser["full name"])
//printing symbol present in object
console.log(JsUser[mySym])

//changing the value
JsUser.email="azeem@chatgpt.com"

// Object.freeze(JsUser)//lock object and don't allow changes in the object
// JsUser.email="azeem@microsoft.com"//no change bcz of freeze
// console.log(JsUser)

//function in object
JsUser.greeting=function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting())