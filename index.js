const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

const products = [
  {name: "Bubblegum", price: 2, total: 202},
  {name: "Toffee", price: 0.2, total: 118},
  {name: "Ice cream", price: 5, total: 2250},
  {name: "Milk chocolate", price: 4, total: 1680},
  {name: "Doughnut", price: 2.5, total: 1075},
  {name: "Pancake", price: 3.2, total: 80}
];

// Function to display products with prices
function displayPrices() {
  console.log("Prices:");
  products.forEach(product => {
    console.log(`${product.name}: $${product.price}`)
  });
}

function displayTotals() {
  console.log("Earned Amount:");
  products.forEach(product => {
    console.log(`${product.name}: $${product.total}`);
  });
}

const calculateIncome = () => {
    let income = 0;
    products.forEach(product => {
        income += product.total;
    });

return income;
}

displayPrices();
console.log("");
displayTotals();
console.log("");
const income = calculateIncome();
console.log(`Income: $${income}`);

let staffExpenses = Number(input("Staff Expenses:"));
let otherExpenses = Number(input("Other Expenses:"));

const netIncome = income - staffExpenses - otherExpenses;
console.log("")
console.log(`Net income: $${netIncome}`);
