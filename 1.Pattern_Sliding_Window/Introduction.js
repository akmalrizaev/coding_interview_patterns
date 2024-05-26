// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

// Let’s understand this problem with a real input:
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], (K = 5);
// Here, we are asked to find the average of all contiguous subarrays of size ‘5’ in the given array. Let’s solve this:

//     For the first 5 numbers (subarray from index 0-4), the average is: (1+3+2+6−1)/5=>2.2(1+3+2+6−1)/5=>2.2
//     The average of next 5 numbers (subarray from index 1-5) is: (3+2+6−1+4)/5=>2.8(3+2+6−1+4)/5=>2.8
//     For the next 5 numbers (subarray from index 2-6), the average is: (2+6−1+4+1)/5=>2.4(2+6−1+4+1)/5=>2.4
//     …

// Here is the final output containing the averages of all contiguous subarrays of size 5:
// Output: [2.2, 2.8, 2.4, 3.6, 2.8];

// A brute-force algorithm will be to calculate the sum of every 5-element contiguous subarray of the given
// array and divide the sum by ‘5’ to find the average. This is what the algorithm will look like:

function find_averages_of_subarrays(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    // find sum of next 'K' elements
    sum = 0.0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K); // calculate average
  }
  return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

// Output:
// Average of subarrays of size K: 2.2,2.8,2.4,3.6,2.8
