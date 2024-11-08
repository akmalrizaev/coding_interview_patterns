/*

Triplets with Smaller Sum (medium)

Problem Statement #

Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

Example 2:

Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

*/

function threeSumClosest(nums, target) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Initialize the closest sum to a large value
    let closestSum = Infinity;

    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        // Step 3: Use two-pointer technique
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // Update the closest sum if the current one is closer
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Move the pointers based on the comparison with the target
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If the current sum is exactly equal to the target, return it
                return currentSum;
            }
        }
    }

    return closestSum;
}

// Example usage:
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
console.log(threeSumClosest([0, 0, 0], 1)); // Output: 0
