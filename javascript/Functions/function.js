// Function 

// function greet(name){
//     console.log("Welcome to Techno Skill",name)
// }

// greet("Abhay")

//Welcome Student , Abhay for Enroll
//Welcome Student , rishi Enroll
//Welcome Student , nishant for Enroll
//Welcome Student , rohit for Enroll
//Welcome Student , shubham for Enroll


//Function to print my details

// function myDetails(){
//     console.log("Name : Abhay")
//     console.log("City : Balaghat")
//     console.log("Course : JavaScript")
    
// }

// //Function ko call kr kr rhe h 

// myDetails()

// function college(){
//     console.log("Collge_Name : MCU")
//     console.log("Review : Bhut hi bakwas clg hai")
//     console.log("Advantage : Wi-fi h bass")
// }

// college()

// function teacher(){
//     console.log("Teacher_Name : Abhay")
//     console.log("Skill : Web Developer")
//     console.log("Address : Balaghat")
// }

// teacher()


//Function with parameter

// function greet(name,age,msg = "hello"){
//     console.log(msg,name,"my age is :",age )
// }

// greet("hii","Abhay",19)


//Function with return value

// function add(a,b){
//     return a + b
// }
// let result = add(7,4)
// let result1 = add(999,1)

// console.log(result,result1)


//Function Experation 

// const greet = function (){
//     console.log("Heloo Student")
// }

// greet()

//Anonymous Function
//jiska koi name nhi hota

// setTimeout(function(){
//     console.log("Hello")
// },5000)
// console.log("hiii")


//Arrow Function ES 6 2015 me
//Morden JS Functio

// const greet = () => {
//     console.log("Heloo Students")

// }
// greet()


// const greet = (name) => {
//     console.log("Hello World")
// }

// greet("Abhay")

//normal function
// function square(num){
//     return num * num
// }


//arrow function
// const square = num => num * num

// console.log(square(2))


//CallBack Function

// function greet(name){
//     console.log("Hello",name)
// }

// function process(callback){
//     callback("Rahul")
// }

// process(greet)


//Example of Callback Function

// function receipt(){
//     console.log("Receipt Printed")

// }
// function withdraw(callback){
//     console.log("Cash Withdraw")
//     callback()
// }

// function deposite(callback){
//     console.log("Cash Deposite")
//     callback()
// }

// deposite(receipt)

//Example 2. Car Service

// function CustomerCall(){
//     console.log("Calling Customer")
// }

// function repair(callback){
//     console.log("Repair Completed")
// }   callback()

// repair(CustomerCall)

//Example 3. Function Delivery

// function delivery(){
//     console.log("Pizza Delivered")
// }

// function makePizza(){
//     console.log("Makeing Pizz....")
//     console.log("PIzza Ready")
//     useCallback()
// }

// makePizza(delivery)


//Real Life Example of washing machine
//callbacl ek aisa function h jo pass kiya jata h dusre function ko as a argument !


// function beep(){
//     console.log("beep beep beep")
// }

// function washing(callback){
//     console.log("Kapde Dhote Jao Dhote Jao Dhote jao Dho....")
//     console.log("Kapde Dho kr Ho gye hai! ")

//     callback()
// }


// washing(beep)



//Recuesive Function - Jab function khud ko hi call krta h !
//Factorial function ko print krne ke kam me aata h


// function countdown(n){
//     if (n==0){
//         console.log("Done")
//         return
//     }

//     console.log(n)
//     countdown(n-1)
// }

// countdown(5)


//Default Default Parameter

// function greet(name = "Guest"){

//     console.log("Hello",name)
// }

// greet("abhay")


//Function with rest parameter 3 dot dene pr

// function print(...numbers){
//     console.log(numbers)
// }
// print(10,20,40,60,70,80)