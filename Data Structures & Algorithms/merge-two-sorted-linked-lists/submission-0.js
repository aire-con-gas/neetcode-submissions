/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let l1 = list1;
        let l2 = list2;
        let dummy = new ListNode(-1);
        let currPtr = dummy;

        while (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                currPtr.next = l1;
                l1 = l1.next;
            } else {
                currPtr.next = l2;
                l2 = l2.next;
            }
            currPtr = currPtr.next;
        }

        currPtr.next = l1 !== null ? l1 : l2;

        return dummy.next;
    }
}
