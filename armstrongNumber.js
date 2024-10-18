let n = 27; // The given number to check if it's an Armstrong number
let n1 = String(n); // Convert the number to a string to calculate the length (number of digits)
let len = n1.length; // Get the number of digits in the given number
let res = 0; // Initialize a variable 'res' (not used in this case)
let org = n; // Store the original number in 'org' so we can compare later
let sum = 0; // Initialize the sum variable to accumulate the sum of the digits raised to the power of the number of digits

// Loop through each digit of the number
while (n > 0) {
    let r = n % 10; // Get the last digit of the number
    sum += Math.pow(r, len); // Raise the digit to the power of the number of digits and add it to the sum
    n = Math.trunc(n / 10); // Remove the last digit from the number (integer division by 10)
}

// After the loop, compare the sum with the original number
if (sum === org) {
    console.log(`${org} is an armstrong number`); // If the sum equals the original number, it's an Armstrong number
} else {
    console.log(`${org} is not an armstrong number`); // Otherwise, it's not an Armstrong number
}
