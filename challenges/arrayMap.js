/**
 * Checks if there is a contiguous subarray within a given array `nums` that sums to `target`.
 *
 * @param {number[]} nums - The array of numbers to check.
 * @param {number} target - The target sum for the subarray.
 * @returns {boolean} - Returns true if such a subarray is found, otherwise false.
 */
function hasContiguousSubarrayWithSum(nums, target) {
    // Initialize the left pointer to the start of the array
    let left = 0;

    // Initialize the current sum to 0
    let currentSum = 0;

    // Iterate through the array using the right pointer
    for (let right = 0; right < nums.length; right++) {
        // Add the current element to the current sum
        currentSum += nums[right];

        // Adjust the left pointer and current sum if the current sum exceeds the target
        while (currentSum > target && left <= right) {
            // Subtract the element at the left pointer from the current sum
            currentSum -= nums[left];
            // Move the left pointer to the right
            left++;
        }

        // Check if the current sum is equal to the target
        if (currentSum === target) {
            // If a subarray with the target sum is found, return true
            return true;
        }
    }

    // If no subarray with the target sum is found, return false
    return false;
}

// Example usage
const nums = [1, 2, 3, 4, 5];
const target = 89;
console.log(hasContiguousSubarrayWithSum(nums, target));  // Output: true
