function sumAndLastDivisibleBy3(string) {
    const numbers = string.match(/\d+/g); // Extract all numbers from the string
    const divisibleBy3 = numbers.filter(num => parseInt(num) % 3 === 0); // Filter numbers divisible by 3

    if (divisibleBy3.length > 0) {
        const totalSum = divisibleBy3.reduce((acc, num) => acc + parseInt(num), 0); // Calculate sum
        const lastDivisibleBy3 = parseInt(divisibleBy3[divisibleBy3.length - 1]); // Get last divisible number
        return { sum: totalSum, last: lastDivisibleBy3 };
    } else {
        return { sum: 0, last: null };
    }
}

// Example usage with dynamic input:
const inputString = prompt("Enter a string containing numbers:");
const { sum, last } = sumAndLastDivisibleBy3(inputString);
console.log("Sum of numbers divisible by 3:", sum);
console.log("Last number divisible by 3:", last);