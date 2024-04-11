function divideNumbers(arr) {
    const result = [];
    const length = arr.length;

    // Divide each number by the next number
    for (let i = 0; i < length - 1; i++) {
        try {
            if (arr[i + 1] === 0) {
                throw "Division by zero";
            }
            result.push(arr[i] / arr[i + 1]);
        } catch (error) {
            result.push(error);
        }
    }

    // Divide the last number by the first number of the array
    try {
        if (arr[0] === 0) {
            throw "Division by zero";
        }
        result.push(arr[length - 1] / arr[0]);
    } catch (error) {
        result.push(error);
    }

    return result;
}

// Test the function with the given array
const arr = [9, 33, 0, 7, 2, 82, 77];
const result = divideNumbers(arr);
console.log(result);