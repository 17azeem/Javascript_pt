//const tinderUser= new Object()//singleton object
const tinderUser={}//non singleton
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false
console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"mohd",
            lastname:"azeem"
        }
    }
}
//accessing
console.log(regularUser.fullname.userfullname.lastname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//combine two objects
//1 way
// const obj3=Object.assign({},obj1,obj2)

//2 way , spread method
const obj3={...obj1,...obj2}
console.log(obj3)

//array object
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        emial:"i@gmail.com"
    }
]

users[1].email


console.log(tinderUser)
//accessing keys
console.log(Object.keys(tinderUser))
//accessing values
console.log(Object.values(tinderUser))
//entries: 
console.log(Object.entries(tinderUser))

//to check any property or key exist
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true



/* object destructure */
const course={
    coursename:"js in eng",
    price:"999",
    courseInstructor:"azeem"

}
//to make code clean
const {courseInstructor:instructor}=course
//inplace of course.courseInstructor we can write courseInstructor
console.log(instructor)//azeem
