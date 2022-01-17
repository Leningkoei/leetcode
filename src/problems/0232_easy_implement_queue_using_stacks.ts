/// Implement a first in first out (FIFO) queue using only two stacks. The
///     implemented queue should support all the function of a normal queue (
///     push, peek, pop and empty).
/// Implement the MyQueue class:
///     void push(int x): Pushes element x to the back of queue.
///     int pop(): Remove the element from the queue and returns it.
///     int peek(): Returns the element at the front of the queue.
///     boolean empty(): Returns true if the queue is empty, false otherwise.

export default class MyQueue {
    constructor() {
        this.queue = [];
    };

    private queue: number[] | null = null;

    public push(x: number) {
        this.queue.push(x);
    };
    public pop(): number {
        return this.queue.shift();
    };
    public peek(): number {
        return this.queue[0];
    };
    public empty(): boolean {
        return this.queue.length === o;
    };
};

