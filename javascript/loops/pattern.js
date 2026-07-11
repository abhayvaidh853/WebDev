// * * * * *

// for (let i = 1; i <= 5; i ++){
//     process.stdout.write("* ")
// }
// console.log()

// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for (let i = 1; i <= 4; i++){

//     for (let j = 1; j <= 4; j++){
//         process.stdout.write("* ")

//     }
//     console.log()
// }


// 1 2 3 4

// for (let i = 1; i <= 4; i++){

//     for (let j = 1; j <= 4; j++){
//        process.stdout.write(j + " ")

//     }
//     console.log()
// }


// *
// * *
// * * *
// * * * *

// for(let i = 1; i <= 4; i++){
//     for(let j = 1; j <= i ; j++){
//         process.stdout.write("💀 ")
//     }
//     console.log()
// }

// * * * * 
// * * *
// * * 
// * 

// for(let i = 4; i <= 1; i--){
//     for(let j = 1; j <= i ; j++){
//         process.stdout.write("💀 ")
//     }
//     console.log()
// }


//         *
//       * *
//     * * *
//   * * * *


// for (i = 1; i <=4; i++){

//     //print spaces

//     for(j = 1; j <= 4-i; j++){
//         process.stdout.write("  ")
//     }
//     //print star
//     for(let k = 1; k <= i; k++)[
//         process.stdout.write("* ")
//     ]
//     console.log()

// }




// * * * * 
//   * * * 
//     * *
//       *

// for (i = 4; i >=1; i--){

//     //print spaces

//     for(j = 1; j <= 4-i; j++){
//         process.stdout.write("  ")
//     }
//     //print star
//     for(let k = 1; k <= i; k++)[
//         process.stdout.write("* ")
//     ]
//     console.log()

// }


//         *
//      *  *  *
//   *  *  *  *  *
//*  *  *  *  *  *  *

// let n = 1

// for (let i = 5; i >= n; i--){

//     //spaces

//     for (let j = 1; j <= n-i; j++){
//         process.stdout.write(" ")
//     }

//     //spaces

//     for(let k = 1; k <= (2 * i - 1); k++){
//         process.stdout.write("*")
//     }
//     console.log()
// }


// let n = 5;
// for(i = 1; i <= 5; i++){
//     let row = ""
//     for(let j = 1; j <= n - i; j++)row += " ";
//     for(let j = 1; j <= (2 * i -1 ); j++) row += "* ";
//     console.log(row)
// }
// for(let i = n - 1; i >= 1; i++){
//     let row = "";
//     for(let j = 1; j <= n - i; j++) row += " ";
//     for(let j = 1; j <= (2 * i - 1); j++) row += "* ";
//     console.log(row)
// }


//print a right align triangle

// let n = 5

// for (let i = 1; i <= n; i++){

//     //spaces
//     for (let j = 1; j <= n - i; j++){
//         process.stdout.write(" ")
//     }
//     //stars
//     for (let k = 1; k <= i; k++){
//         process.stdout.write("*")
//     }
//     console.log()
// }


//Hollow Square

// let n = 10

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {

//         if (i == 1 || i == n || j == 1 || j == n) {
//             process.stdout.write(" * ")
//         }
//         else {
//             process.stdout.write("   ")
//         }
//     }
//     console.log()
// }


//Hollow Triangle

let n = 5
for (let i = 1; i <= n; i++){

    for(let j = 1; j <= i; j++){

        if (j == 1 || j == i || i == n){
            process.stdout.write("* ")

        }else{
            process.stdout.write("  ")
        }
    }
    console.log()       
}