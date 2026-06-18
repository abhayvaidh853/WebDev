//Condition statement


// const prompt = require ("require-syns")();
// let age = prompt("Enter ur Age:")

// let age = 25

// if (age >= 18) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("Not a eligible")

// }

// const prompt = require("prompt-sync")();
// let marks = prompt("enter ur marks")

// let marks = 75


// if (marks >=90) {
//     console.log("Grade A")
// }
// else if (marks >= 70) {
//     console.log("Grade B")
// }
// else if (marks >= 50){
//     console.log("Grade C")
// }
//  else {
//     console.log("Fail")
// }


//Largest of three number

// let a = 10
// let b = 50
// let c = 40

// if (a > b && a > c) {
//     console.log("a is greater")
// }else if (b > a && b > c){
//     console.log("B is greater")
// }else {

// }console.log("c is greater")


//ATM Machine System

// let balance = 5000


// const prompt = require ("prompt-sync")();
// let pin = Number(prompt("Enter ur Pin:"))
// let withdraw = prompt("Enter ur withdraw ammount;")


// if (pin == 1234){

//     let withdraw = Number(prompt("Enter ur withdraw amount"))
//     if (withdraw <= balance) {

//         balance = balance - withdraw;
//         console.log("withdraw successful")
//         console.log("Available balance is :",balance)
//     }else{
//     console.log("Insufficient balance")
//     }
    
// }else{
//     console.log("Enter correct pin")
// }

// let balance = 5000

// const prompt = require("prompt-sync")();
// let pin = Number(prompt("Enter ur Pin: "))


// if (pin == 1234) {

//     let withdraw = Number(prompt("Enter ur withdraw amount: "))

//     if (withdraw <= balance) {


//         balance = balance - withdraw;
//         console.log("Withdraw successful")
//         console.log("Available balance is:", balance)
//     } else {
//         console.log("Insufficient balance")
//     }

// } else {
//     console.log("Enter correct pin")
// }


//Movie Ticket Price

// const prompt = require("prompt-sync")();
// let age = Number(prompt("Enter ur age"))

// if (age <5 ){

//     console.log("Free Ticket")

// }else if (age <=10){

//     console.log("Ticket Price 100$")
// }else{
    
//     console.log("Ticket Pirce 200$")
// }



// login system 

// let username = "Admin"
// let password = "1234"

// const prompt = require ("prompt-sync")();
// let username = prompt("Enter ur username")
// let password = prompt("Enter ur password :")



// if (username == "Abhay" && password === "0000"){
//     console.log("Login Successful")

// }else{
//     console.log("Invalid Credantials")
// }


//Discount Calculator System

// const prompt = require ("prompt-sync")();
// let amount = prompt("Enter ur amount shopping")
// // let amount = 6000
// let discount = 0
// let finalamount

// if (amount > 5000){

//     discount = amount * 20 / 100
//     finalamount = amount - discount(amount * 10 /100)
// }
// else if(amount > 2000) {
//     discount = amount * 10 / 100
//     finalamount = amount - discount
// }
// else{
//     finalamount = amount
// }

// console.log("Original Amount :",amount)
// console.log("Discount Amount :",discount)
// console.log("Final Amount :",finalamount)


//Electricity Bill

// const prompt = require ("prompt-sync")();
let units = 250
let bill

if (units <= 100){
    bill = units * 5

}

else if (units <= 200){
    bill = units * 7
}

else{
    bill = units * 10
}

console.log("Bill Amount:",bill)