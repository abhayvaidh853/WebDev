// 1.forEach() methode


// example 1

// let numbers = [10,20,40,50]

// numbers.forEach((num => {
//     console.log(num+2)
// }))
// example 2
// let fruits = ["Aplle", "banana","mango"]
// fruits.forEach((fruits, index) => {

//     console.log(index,fruits)
// })

// example3

// let numbers = [10,20,30]

// let sum = 0
// numbers.forEach((num) => {
//     sum = sum + num
// })

// console.log("sum of array elements :" ,sum)

// 2. map

// har element ko modify krke new array bananta h

// syntax 

// Array.map((value) => 
//      console.log()
// }


// let numbers = [10,20,30,40,]

// let newarr = numbers.map(num => num+1)

// console.log (numbers)
// console.log(newarr)

// let prices = [100,200,300]

// let gst = prices.map(price => price + 18)

// console.log(gst)

// 3. filter



// let numbers = [10,15,20,25,30,40]

// let even = numbers.filter(num => num%2 ==0)

// console.log(even)
// console.log(numbers)

// example 2

// let marks = [35,80,90,25,70]

// let pass = marks.filter(mark => mark >= 40)

// console.log(pass)

// let age = [15,18,20,12,25]
// let adult = age.filter(a => a >= 18)
// console.log(adult)


// 4.find

// purpose : sirf phela matching eliment return krta h

// let numbers = [10, 24 ,34 ,45]

// let  result = numbers.find(num => num > 20)

// console.log(result)

// REDUCE()

// let numbers = [10,20,30,40]

// let sum = numbers.reduce((total,num) => total + num ,0)
 
// console.log(sum)


// boolean methods

// some ()
// At least one element should satisfy condition

// let numbers = [10,20,30]

// console.log(numbers.some(num => num > 33 ))


// every()

// let numbers = [10,20,30]

// console.log(numbers.every(num => num > 5))