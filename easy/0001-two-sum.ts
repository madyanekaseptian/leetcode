// 1. Two Sum
// Difficulty: Easy
// https://leetcode.com/problems/two-sum/
// Runtime: 1 ms | Memory: 62.6 MB

function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number>()
  for(let i = 0; i < nums.length; i++) {
    const cur = nums[i]!
    // cur + x = target
    // x = target - cur
    const x = target - cur
    if (numsMap.has(x)) return [i, numsMap.get(x)!]
    numsMap.set(cur, i)
  }
  return []
};
