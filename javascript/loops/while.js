//whgile Loop
//Syntax

// //Initialization
// while (condition){
//     //Code
//     //inc/dec
// }

//print 1 to 5 

// let i = 5
// while(i >= 1){
//     console.log("i = ",i)
//     i--
// }


//even Numbers
//range 20 -40

// let i  = 20
// let count = 0

// while (i <= 40){
//     console.log("even Number",i)
//     count = count + 1
//     i = i + 2
// }

// console.log("Total even Numbers",count)


//count digits
//24576

// const propmpt = require("prompt-sync")();
// let num = propmpt("Enter Your Number")

// let count = 0

// let temp = num 

// while(num > 0){
//     count = count + 1
//     num = Math.floor(num / 10)
// }
// console.log("Number of digits in :",+temp +" :", count)

//Reverse Numbers IMP Que
//1234
//4321

// const propmpt = require("prompt-sync")();
// let num = propmpt("Enter Your Number")

// let reverse = 0

// while(num > 0){
//     let digit = num % 10 // Last digit nikalo
//     reverse = reverse * 10 + digit //reverse ko update kro
//     num = Math.floor(num / 10)//last digit ko remove kro
// }
// console.log(reverse)


//Sum of digits
//1234

// let num = 1234
// let sum = 0

// while(num>0){
//     let digit = num % 10 
//     sum = sum + digit 
//     num = Math.floor(num / 10)
// }

// console.log("Sum of Digits :",sum)


// Palindrome Number

let num = 121
let original = num
let reverse = 0

while(num > 0){
    let digit = num % 10
    reverse = reverse * 10 + digit
    num = Math.floor(num / 10)
}
