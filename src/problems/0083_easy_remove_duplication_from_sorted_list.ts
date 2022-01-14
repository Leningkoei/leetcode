/// Given the head of a sorted linked list, delete all duplicates such that each
///     element appears only once. Return the linked list sorted as well.

import ListNode from '../lib/ListNode.js'

export default function deleteDuplicates(
    head: ListNode | null
): ListNode | null {
    if (head) {
        let p: ListNode = head

        while (p.next) {
            const currentNodeVal: number = p.val
            const nextNodeVal: number = p.next.val

            if (currentNodeVal === nextNodeVal) {
                p.next = p.next.next
            } else {
                p = p.next
            }
        }
    }

    return head
}
