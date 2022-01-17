/// Given a singly linked list, return a random node's value from the linked
///     list. Each node must have the same probability of being chosen.
/// Implement the Solution class:
///     * Solution(ListNode head): Initializes the object with the integer
///         array nums.
///     * int getRandom(): Chooses a node randomly from the list and returns
///         its value. All the nodes of the list should be equally likely to be
///         choosen.

import ListNode from "../lib/ListNode";

export default class Solution {
    constructor(head: ListNode | null) {
        while (head) {
            this.nodes.push(head.val);

            head = head.next;
        };
    };

    private nodes: number[] = [];

    public getRandom(): number {
        return this.nodes[Math.random() * this.nodes.length];
    };
};

