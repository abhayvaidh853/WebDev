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

// let num = 121
// let original = num
// let reverse = 0

// while(num > 0){
//     let digit = num % 10
//     reverse = reverse * 10 + digit
//     num = Math.floor(num / 10)
// }

// if (original == reverse){
//     console.log("Palindrome")
// }else{
//     console.log("Not Palindrome")
// }


//Login password retry System

// const prompt = require("prompt-sync")();

// let password = ""
// let attempts = 3

// while(attempts > 0 ){
//     password = prompt("Enter your password :")

//     if (password == "1234"){
//         console.log("Login Successful")
//         break;
//     }else{
//         attempts--
//         console.log("Wrong password")
//         console.log("Remaining attempts :",attempts)
//     }
// }

// if(attempts == 0){
//     console.log("Account Locked")
// }


//Question = Number Guessing Game

// const prompt = require("prompt-sync")();

// let randomeNum = Math.floor(Math.random () * 10)+1

// let guess = 0;
// let attempts = 0;
// while (guess !== randomeNum){
//     guess = Number(prompt("Guess a number :"))
//     attempts++


//     if (guess > randomeNum){
//         console.log("Too High")
//     }
//     else if (guess < randomeNum){
//         console.log("Too Low")
//     }
//     else{
//         console.log("Congratulations ! You Have Guesse it Correctly")
//         console.log("attempts ",attempts)
//     }
// }


// Library Book Search System

const prompt = require("prompt-sync")();

let search = ""

while (search !== "exit"){
    search = prompt("/nEnter Book Name ( or type ' exit)");

    if (search.toLocaleLowerCase() == "javascript"){
        confirm.log("javascript book found")
    }
    else if (search.toLocaleLowerCase() == "python"){
        confirm.log("python book found")
    }
    else if (search.toLocaleLowerCase() == "java"){
        confirm.log("java book found")
    }
    else if (search.toLocaleLowerCase() == "C++"){
        confirm.log("C++ book found")
    }
    else if (search.toLocaleLowerCase() == "exit"){
        confirm.log("Thank You ! visit Again")
    }
    else{
        console.log("Book Nor Available")
    }
    
}

