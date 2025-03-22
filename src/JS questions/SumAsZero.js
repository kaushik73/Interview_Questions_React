// Link : https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1

// Given an integer array arr, return all the unique pairs [arr[i], arr[j]] such that i != j and arr[i] + arr[j] == 0.

// Note: The pairs must be returned in sorted order, the solution array should also be sorted, and the answer must not contain any duplicate pairs.

// Examples:

// Input: arr = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, 1]]
// Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
// arr[2] + arr[4] = 1 + (-1) = 0.
// The distinct duplet is [-1,1].

function getPairs(arr) {
  // code here

  // Step 1: Sort the array
  arr.sort((a, b) => a - b);

  const result = [];
  const seen = new Set();

  // Step 2: Loop through the array
  for (let i = 0; i < arr.length; i++) {
    const target = -arr[i];

    // Skip duplicate elements
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    // Use a set to find pairs
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === target && !seen.has(`${arr[i]},${arr[j]}`)) {
        result.push([arr[i], arr[j]]);
        seen.add(`${arr[i]},${arr[j]}`);
        break;
      }
    }
  }
  return result;
}
