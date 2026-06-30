// // Amazon Checkout Sheet

const PromptSync = require("prompt-sync");

// const cart = [
//   { id: 1, name: "Wireless Headphones", price: 79.99, quantity: 1 },
//   { id: 2, name: "USB-C Cable", price: 12.99, quantity: 2 },
//   { id: 3, name: "Phone Case", price: 24.99, quantity: 1 }
// ];

// const user = {
//   isPrime: true,
//   memberSince: "2022",
//   location: "US"
// };

// // Calculate subtotal
// function calculateSubtotal() {
//   return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
// }

// // Apply discount based on Prime membership
// function applyDiscount(subtotal) {
//   if (user.isPrime) {
//     return subtotal * 0.95; // 5% Prime discount
//   }
//   return subtotal;
// }

// // Calculate shipping
// function calculateShipping(subtotal) {
//   if (user.isPrime) {
//     return 0; // Free shipping for Prime
//   }
//   if (subtotal > 25) {
//     return 5.99;
//   }
//   return 9.99;
// }

// // Calculate tax
// function calculateTax(amount) {
//   return amount * 0.08; // 8% tax
// }

// // Generate checkout summary
// function checkout() {
//   const subtotal = calculateSubtotal();
//   const discounted = applyDiscount(subtotal);
//   const shipping = calculateShipping(subtotal);
//   const tax = calculateTax(discounted + shipping);
//   const total = discounted + shipping + tax;

//   console.log("=== Amazon Checkout ===");
//   console.log("Items:");
//   cart.forEach(item => {
//     console.log(`  ${item.name} x${item.quantity}: $${(item.price * item.quantity).toFixed(2)}`);
//   });
//   console.log(`\nSubtotal: $${subtotal.toFixed(2)}`);
  
//   if (user.isPrime) {
//     console.log(`Prime Discount (5%): -$${(subtotal - discounted).toFixed(2)}`);
//   }
  
//   console.log(`Shipping: $${shipping.toFixed(2)}`);
//   console.log(`Tax: $${tax.toFixed(2)}`);
//   console.log(`\nTotal: $${total.toFixed(2)}`);
  
//   return total;
// }

// // Run checkout
// checkout();


const prompt=require ("prompt-sync")();
console.log("=== PRODUCTS ===");
console.log(("1. Laptop -- 40000"));
console.log("2. mouse -- 500");
console.log("3. keyboard -- 1000");
console.log("4. headphone-- 1500");

let choice= Number(prompt("Select product(1-4) "))
let qty =Number(Prompt)

if (choice === 1){
  price =40000
}
else if (choice===2){price=500}
else if (choice===3){price=1000}
