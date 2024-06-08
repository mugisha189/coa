function transformString(input) {
    // Get the length of the input string
    const length = input.length;

    // Check if the length is divisible by both 3 and 5 (i.e., 15)
    if (length % 15 === 0) {
        // If divisible by 15, reverse the string first
        input = reverseString(input);
        // Then replace each character with its ASCII code
        input = convertToASCII(input);
    } else if (length % 3 === 0) {
        // If only divisible by 3, reverse the string
        input = reverseString(input);
    } else if (length % 5 === 0) {
        // If only divisible by 5, replace each character with its ASCII code
        input = convertToASCII(input);
    }

    return input;
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to convert each character of a string to its ASCII code
function convertToASCII(str) {
    return str.split('').map(char => char.charCodeAt(0)).join(' ');
}

// Example usage
const input1 = "Hello World You";
console.log(transformString(input1));  // Output based on the length of the string

const input2 = "Exampl";
console.log(transformString(input2));  // Output based on the length of the string
