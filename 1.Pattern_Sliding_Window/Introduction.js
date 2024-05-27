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

/*
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
*/

// Output:
// Average of subarrays of size K: 2.2,2.8,2.4,3.6,2.8

// Time complexity: Since for every element of the input array, we are calculating the sum of its next ‘K’
// elements, the time complexity of the above algorithm will be O(N∗K)O(N∗K) where ‘N’ is the number of
// elements in the input array.

// Can we find a better solution? Do we see any inefficiency in the above approach?

// The inefficiency is that for any two consecutive subarrays of size ‘5’, the overlapping part (which will
// contain four elements) will be evaluated twice.

// The efficient way to solve this problem would be to visualize each contiguous subarray as a sliding
// window of ‘5’ elements. This means that when we move on to the next subarray, we will slide the
// window by one element. So, to reuse the sum from the previous subarray, we will subtract the element
// going out of the window and add the element now being included in the sliding window. This will save us
// from going through the whole subarray to find the sum and, as a result, the algorithm complexity will reduce to O(N).

// Here is the algorithm for the Sliding Window approach:

function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; //add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'K'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }
  return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

// Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8
