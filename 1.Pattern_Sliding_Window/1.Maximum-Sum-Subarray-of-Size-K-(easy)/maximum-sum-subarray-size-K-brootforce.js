/*

Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/

function maximum_sum_subarray_size_K_brootforce(K, arr) {
    let maxSum = 0;
    windowSum = 0;
    
    for (i = 0; i < arr.length - K + 1; i++) {
        windowSum = 0;
        for (j = i; j < i + K; j++) {
            windowSum += arr[j];
        }
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;

}