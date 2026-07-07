//Print Squares of Numbers
// 1 to 10

// for (let i =1; i <= 10; i++){
//     console.log(i*i*i)
// }


//sum of even Numbers
// 1 - 50 

// let sum = 0

// for (let i = 1; i <=20; i++){

//     if (i % 2 == 0){
//         console.log("even :",i)
//         sum = sum + i
//     }
// }

// console.log("Sum of even Numbers :",sum)



//sum of odd Numbers

// let sum = 0

// for (let i = 1; i <=20; i++){

//     if (i % 2 !== 0){
//         console.log("odd :",i)
//         sum = sum + i
//     }
// }

// console.log("Sum of odd Numbers :",sum)



//Numbers Divisible by 3
//1 - 1000

// for (let i =1; i <= 100;i++){

//     if(i %3 == 0){
//         console.log("number is divisible by 3",i)
//     }
// }

//Numbers Divisible by 3 & 5
//1 - 100

// for (let i =1; i <= 100;i++){

//     if(i %3 == 0 && i % 5 == 0){
//          console.log("number is divisible by 3 & 5",i)
//      }
// }



//Factorial Numbers
//4
//4*3*2*1

const prompt = require("prompt-sync")();
let num = prompt("Enter your Number :") 

let fact = 1

for (let i = 1; i <= num ; i++){
    fact = fact  * i 

}
console.log("Factorial =",fact)