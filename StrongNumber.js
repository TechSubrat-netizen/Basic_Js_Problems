let n = 145; // The given number to check if it's a Strong number
let org = n; // Store the original number to compare later
let sum = 0; // Initialize the sum variable to accumulate the sum of factorials of the digits
let res = 0; // Initialize the variable 'res' to store each digit

// Loop through each digit of the number
while (n > 0) {
    let f = 1; // Initialize 'f' to calculate factorial for each digit
    res = n % 10; // Get the last digit of the number

    // Calculate the factorial of the digit
    for (let i = 1; i <= res; i++) {
        f = f * i; // Multiply to compute factorial
    }

    sum += f; // Add the factorial of the digit to the sum
    n = Math.trunc(n / 10); // Remove the last digit from the number (integer division by 10)
}

// After the loop, compare the sum with the original number
if (sum == org) {
    console.log("Strong Number"); // If the sum equals the original number, it's a Strong number
} else {
    console.log("It's not a Strong Number"); // Otherwise, it's not a Strong number
}
