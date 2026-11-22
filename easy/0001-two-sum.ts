// 1. Two Sum
// Difficulty: Easy
// https://leetcode.com/problems/two-sum/
// Runtime: 463 ms | Memory: 68.2 MB

function twoSum(nums: number[], target: number): number[] {
  for (const [index, num] of nums.entries()) {
    for (const [index2, num2] of nums.entries()) {
      if (index === index2) continue
      if (num + num2 === target) return [index, index2]
    }
  }
  return []
};
