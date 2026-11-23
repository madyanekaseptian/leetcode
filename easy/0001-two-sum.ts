// 1. Two Sum
// Difficulty: Easy
// https://leetcode.com/problems/two-sum/
// Runtime: 98 ms | Memory: 62.5 MB

function twoSum(nums: number[], target: number): number[] {
  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
      if (x === y) continue
      if (nums[x]! + nums[y]! === target) return [x, y]
    }
  }
  return []
};
