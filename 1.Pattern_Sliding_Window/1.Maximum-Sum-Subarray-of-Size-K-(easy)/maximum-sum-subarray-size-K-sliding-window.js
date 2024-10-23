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

function maximum_sum_subarray_size_K_sliding_window(K, arr) {
    maxSum = 0;
    windowStart = 0;
    windowSum = 0;

    for (windowStop = 0; windowStop < arr.length; windowStop++) {
        windowSum += arr[windowStop];
        if (windowStop >= K - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart]
            windowStart += 1;
        }


    }
    return maxSum;

}

console.log(maximum_sum_subarray_size_K_sliding_window(3, [2, 1, 5, 1, 3, 2] ));