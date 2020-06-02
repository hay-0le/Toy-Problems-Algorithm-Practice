/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let tempHead = head;
    let second = head.next;

    while (tempHead.next.next) {
        tempHead.next = tempHead.next.next;
    }

    tempHead.next = second;

    while (tempHead.next.next) {
        tempHead.next = tempHead.next.next;
    }

    return head;
};