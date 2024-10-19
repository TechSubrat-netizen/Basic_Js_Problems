let n = 5; // The given number to check if it's an Automorphic number
let sq = n * n; // Calculate the square of the number
let res = 0; // Initialize 'res' (not used in this case)
let org = n; // Store the original number for comparison
let count = 0; // Initialize count to keep track of the number of digits in the original number

// Loop to count the number of digits in the original number
while (n > 0) {
    count++; // Increment the count for each digit
    n = Math.trunc(n / 10); // Remove the last digit from the number (integer division by 10)
}

let d = Math.pow(10, count); // Calculate 10 raised to the power of the number of digits

// Check if the last digits of the square of the number match the original number
if (sq % d === org) {
    console.log("Automorphic"); // If the last digits match, it's an Automorphic number
} else {
    console.log("Not Automorphic"); // If the last digits don't match, it's not an Automorphic number
}
c