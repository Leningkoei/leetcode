/// Given the head of a linked list and an integer val, remove all the nodes of
///     the linked list that has Node.val == val, and return the new head.

export default function removeElements(
    head: ListNode | null, val: number
): ListNode | null {
    if (head) {
        while (head && head.val == val) {
            head = head.next;
        };

        const headCopy: ListNode = head;

        while(head && head.next) {
            if (head.next.val == val) {
                head.next = head.next.next;
            } else {
                head = head.next;
            };
        };

        return headCopy;
    } else {
        return null;
    };
};

