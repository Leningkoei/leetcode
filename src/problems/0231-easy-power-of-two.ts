/// Given an integer n, return true if it is a power of two. Otherwise, return
///     false.
/// An integer n is a power of two, if there exists an integer x such that $
///     n == 2 ^ x $.

export default function isPowerOfTwo(n: number): boolean {
    if (n < 0) {
        return false;
    };

    const nStr: string = n.toString(2);

    return new RegExp(`^10{${nStr.length - 1}}`).test(nStr);

