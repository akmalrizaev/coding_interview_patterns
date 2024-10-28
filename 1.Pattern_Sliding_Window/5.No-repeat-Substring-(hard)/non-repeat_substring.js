/*

Problem Statement #

Given a string, find the length of the longest substring which has no repeating characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".

*/

function non_repeat_substring(str) {
    maxLength = 0;
    windowStart = 0;
    charIndexMap = {};
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charIndexMap) {
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        charIndexMap[rightChar] = windowEnd;
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);

    }

    return maxLength;
}

console.log(non_repeat_substring('aabccbb')); // 3

console.log(non_repeat_substring('abbbb'));