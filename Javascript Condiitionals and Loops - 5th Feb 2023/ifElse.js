// billAmount = 20000.00;
// discount = 0.05;
// finalAmount = billAmount;

// if(billAmount>=50000.00){
//     console.log("Discount applied");
//     finalAmount = billAmount - (billAmount*discount);
// } else {
//     console.log("Discount not applied");
// }

// console.log("Your final bill is : "+finalAmount);

// ---------------------------------

// billAmount > 5000, 10% discount
// billAmount > 4000, 5% discount
// billAmount > 3000, 3% discount

// Else-If Ladder

billAmount = 20000.00;
discount = 0.05;

if(billAmount>5000.00){
    console.log("10% discount applied.");
    discount = 0.10;
} else if (billAmount>4000.00){
    console.log("5% discount applied.");
    discount = 0.05;
} else if(billAmount>3000.00){
    console.log("3% discount applied.");
    discount = 0.03;
} else {
    console.log("No discount applied.");
    discount = 0;
}

finalAmount = billAmount - (billAmount*discount);
console.log("Your final bill is : "+finalAmount);