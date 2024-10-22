/*

Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

Output: [2.2, 2.8, 2.4, 3.6, 2.8]

*/

function find_avareges_of_subarrays_brootforce(K, arr) {
    result = [];
    for (let i = 0; i < arr.length + 1 - K; i++) {
        sum = 0;
        for (let j = i; j < K + i; j++) {
            sum += arr[j];
                  }
        result.push(sum / K);
        
    }
    return result;
}

console.log(find_avareges_of_subarrays_brootforce(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));
