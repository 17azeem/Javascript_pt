let myDate = new Date()
console.log(myDate.toString())//mostly used Mon Jul 14 2025 14:37:14 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())//mostly used Mon Jul 14 2025
console.log(myDate.toLocaleDateString())//7/14/2025
console.log(typeof myDate);//object

let myCreatedDate= new Date(2023,0,23)//month start from 0
console.log(myCreatedDate.toDateString())//Mon Jan 23 2023

let myCreatedDate2= new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString())//1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate2.getTime())

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)//because month start from 0
console.log(newDate.getDay())