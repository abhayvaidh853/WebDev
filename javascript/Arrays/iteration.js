// Example 1. array ke har element pr operation perform krta h Ex. - +, 

// forEach() method

// let numbers = [10,20,30,40]

// numbers.forEach((num => {
//     console.log(num-2)
// }))


//Example 2.

// let fruits = ["apple","banana","aam"]

// fruits.forEach((fruits, index) => {
//     console.log(index,fruits)
// })


//Exmaple 3.

// let numbers = [10,20,30]

// let sum = 0

// numbers.forEach((num) => {
//     sum = sum + num
// })

// console.log("Sum of array elements :",sum)


// 2.MAP array ki har value pr opertaion perform krta h 
// har element ko modify krke new array bnana

//syntax

// array.map((value)=>}
    // console.log()


// let numbers = [10,20,30,40]

// let newarr = numbers.map(num => num +1)

// console.log(numbers)
// console.log(newarr)

// let prices = [100,200,300]

// let gst = prices.map(price => price + 18)

// console.log(gst)


//3.Filter har element pr  

// 3. filter ()....! condition ke basis par element ko select karta hai

// let numbers = [10,15,20,25,30,35,40,45,60,80,75]

// let even = numbers.filter(num => num % 2 == 0)

// console.log("new modified array after filter method :",even)
// console.log("original array with no changes :",numbers)


// let marks = [35,80,90,70]

// let pass = marks.filter(mark => mark >= 40)
// console.log(pass)


// let age = [15,18,20,12,25]

// let adults = age.filter(a => a >= 18)
// console.log(adults)


//4. Find() sirf first element return krta 

// let numbers = [10,20,30,40]

// let result = numbers.find(num => num > 20)

// console.log(result)


//Reduce method()


// let numbers = [10,20,30,40]

// let sum = numbers.reduce((total,num) => total + num,0)
// console.log(sum)


//Boolean methods
//some ()
//At least one element shoyld satisfy condition

// let numbers = [10,20,30,40]

// console.log(numbers.some(num => num > 31))


//every()isme sari condition true honni chahiy

// let numbers = [10,20,30,40,50]

// console.log(numbers.every(num => num > 33))
