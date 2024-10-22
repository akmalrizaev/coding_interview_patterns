/*

Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

Output: [2.2, 2.8, 2.4, 3.6, 2.8]

*/

function find_avarages_of_subarrays_sliding_window(K, arr) {
    result = [];
    windowSum = 0;
    windowStart = 0;

    for (let windowStop = 0; windowStop < arr.length; windowStop++) {
        windowSum += arr[windowStop];
        if (windowStop >= K - 1) {
            result.push(windowSum / K);
            windowSum -= arr[windowStart];
            windowStart++
            
        }
    }


    return result;
}

console.log( find_avarages_of_subarrays_sliding_window(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]))