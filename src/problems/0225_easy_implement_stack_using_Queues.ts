/// Implement a last-in-first-out(LIFO) stack using only two queues. The
///     implemented stack should support all the functions of a normal stack(
///     push, top, pop, and empty).
/// Implement the MyStack class:
///     * void push (int x): Pushes element x to the top of the stack.
///     * int pop(): Removes the element on the top of the stack and returns
///         it.
///     * int top(): Returns the element on the top of the stack.
///     * boolean empty(): Returns true if the stack is empty, false otherwise.
/// Notes:
///     * You must use only standard operations of a queue, which means that
///         only push to back, peek/pop from front, size, and is empty
///         operations are valid.
///     * Depending on your language, the queue may not be supported natively.
///         You may simulate a queue using a list or deque(double-ended queue)
///         as long as you use only a queue's standard operations.

export default class MyStack {
    constructor() {
        this.stack = [];
    };

    private stack: number[] = null;

    public push(x: number) {
        this.stack.push(x);
    };
    public pop(): number {
        return this.stack.pop();
    };
    public top(): number {
        return this.stack[this.stack.length - 1];
    };
    public empty(): boolean {
        return this.stack.length === 0;
    };
};

