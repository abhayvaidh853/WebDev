// Object : deffernt data types kee values ko handle karne ke liye 

// Ek hee varible me realted data ko store karte hai


// let student = {
//     name : "Rahul",
//     age : 20,
//     city : "Delhi",
//     course : "javascript",
//     marks : 95

// }

// // add new properties

// student.email = "rahul@gmail.com"
// student.city = "Mumbai"

// delete student.course

// // accessing values

// // console.log(student.name)
// // console.log(student.email)
// console.log(student)


// let employee = {
    // ID : 101,
    // name : "Aman",
    // salary : 25000,
    // Role : "Manager"
// }

// console.log(employee.name)
// console.log(employee.salary)
// console.log(employee)


// why object 

// to keep related information together
// related info ko sath me rakhne ke liye


// check propert exist

// console.log("name" in employee)


// let student = {
//     name : "Rahul",
//     age : 20,
//     city : "Balaghat"
// }

// console.log(Object.keys(student).length)

// console.log(Object.keys(student))
// console.log(Object.values(student))

// console.log(Object.entries(student))
// console.log(student)


// Looping Object


// let student = {
//     name : "Rahul",
//     age : 20,
//     city : "Balaghat"
// }

// for (let key in student) {
//     console.log(key)
// }


// create a mobile object
// band modal price launch year stock



// let mobile = {
//     band : "realme",
//     modal : "C67",
//     price : 18999,
//     launchyear : 2024,
//     stock : "16 box",

// }

// mobile.price = 20999
// mobile.stock = "25 box"

// console.log(mobile)




// let student = {
//     name : "Rahul",
//     age : 20,
//     address : {
//         city : "Balaghat",
//         word_No : 15 
//     }
// }

// console.log(student)


// Array of object

// let student = [

//     {
//         name : "Rahul",
//         age : 20
//     },

//     {
//         name : "Aman",
//         age : 24
//     },

//     {
//         name : "Neha",
//         age : 19
//     }
// ]

// // console.log(student[0])
// console.log(student[2].name)


// function inside object

// let student = {

//     name : "Rahul",

//     greet : function(){
//         console.log("Hello")
//     },

//     add : function() {
//         console.log(2 + 6)
//     }

// }

// student.greet()
// student.add()


// "ṭhis" keyword
// ye reffer karta hai current object ko

// let student = {
//     name : "Rahul",

//     greet : function() {
//         console.log(this.name)
//     }
// }

// student.greet()


// Problem

// let student = {
//     name : "Rahul",

//     greet : function() {
//         console.log(student.name)

//     }
// }

// student.greet()


// let student = {
//     name : "Aman",
//     age : 27,

//     greet() {
//         console.log(this.age,this.name)
    // }
// }

// console.log(student.name)
// student.greet()


// Object destrutring


// let student = {
//     name : "rahul",
//     age : 20,
//     city : "Delhi"
// }

// let name = student.name
// let age = student.age
// let city = student.city

// console.log(name)
// console.log(age)
// console.log(city)


// with destrutring

//  let student = {
//     name : "rahul",
//     age : 20,
//     city : "Delhi"
// }

// let {name , age , city} = student

// console.log(name)
// console.log(age)
// console.log(city)


// spread operator....phailane ka kam karta hai
// (...)

// let student = {

//     name : "Rahul",
//     age : 20,
//     roll : 123,
//     course : "Python"
// }

// let details = {
//     ...student,
//     city : "Delhi"
// }

// console.log(details)


// rest operator (Object)....ek jagah jama karta hai

// let student = {
//     name : "Rahul",
//     age : 20,
//     city : "Delhi",
//     course : "JS"
// }

// let {...rest} = student

// console.log(rest)
// console.log(name)
