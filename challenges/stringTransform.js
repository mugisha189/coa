/**
 * Transforms an input string based on its length.
 * - If the length is divisible by both 3 and 5 (i.e., 15), reverse the string and convert each character to its ASCII code.
 * - If the length is only divisible by 3, reverse the string.
 * - If the length is only divisible by 5, convert each character to its ASCII code.
 *
 * @param {string} input - The input string to be transformed.
 * @returns {string} - The transformed string.
 */
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

/**
 * Reverses a given string.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Converts each character of a given string to its ASCII code.
 *
 * @param {string} str - The string to convert.
 * @returns {string} - A string of ASCII codes separated by spaces.
 */
function convertToASCII(str) {
  return str
    .split("")
    .map((char) => char.charCodeAt(0))
    .join(" ");
}

// Example usage
const input1 = "Hello World You";
console.log(transformString(input1)); // Output based on the length of the string of 15 it will return the string reversed and in ASCII codes

const input2 = "Exampl";
console.log(transformString(input2)); // Output will be a reversed string as the length of the string is divisible by 3
