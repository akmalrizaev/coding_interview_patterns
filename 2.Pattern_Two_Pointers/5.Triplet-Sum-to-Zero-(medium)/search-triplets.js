/*

Triplet Sum to Zero (medium)

Problem Statement #

Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.

Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.

*/

const search_triplets = function(arr) {
    arr.sort((a, b) => a - b);
    triplets = [];
    for (i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
            continue;
        }
        search_pair(arr, -arr[i], i + 1, triplets);
    }

    return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
    let right = arr.length - 1;
    while (left < right) {
        const current_sum = arr[left] + arr[right];
        if (current_sum === target_sum) { // found the triplet
            triplets.push([-target_sum, arr[left], arr[right]]);
            left += 1;
            right -= 1;
            while( left < right && arr[left] === arr[left - 1]) {
                left += 1;  // skip same element to avoid duplicate triplets
            }
            while ( left < right && arr[right] === arr[right + 1]) {
                right -= 1; // skip same element to avoid duplicate triplets
            }

        } else if (target_sum > current_sum) {
            left += 1;  // we need a pair with a bigger sum
        } else {
            right -= 1;  // we need a pair with a smaller sum
        }
    }
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));