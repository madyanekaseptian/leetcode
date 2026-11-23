// 2. Add Two Numbers
// Difficulty: Medium
// https://leetcode.com/problems/add-two-numbers/
// Runtime: 4 ms | Memory: 67.4 MB

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function arrayToList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null

  const head = new ListNode(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i])
    current = current.next
  }

  return head
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0)
  let current = dummy
  let carry = 0

  const hasModeNodes = () => l1 !== null || l2 !== null || carry > 0
  while (hasModeNodes()) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0

    const sum = val1 + val2 + carry
    const digit = sum % 10
    carry = Math.floor(sum / 10)

    current.next = new ListNode(digit)
    current = current.next

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }
  
  return dummy.next
};
