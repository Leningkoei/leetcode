/// An ugly number is a positive integer whose prime factors are limited to 2,
///     3 and 5.
/// Given an integer n, return true, if n is an ugly number.

export default function isUgly(n: number): boolean {
    if (n < 1) {
        return false;
    } else if (n == 1) {
        return true;
    };

    while (n != 1) {
        if (!(n % 2)) {
            n /= 2;
        } else if (!(n % 3)) {
            n /= 3;
        } else if (!(n % 5)) {
            n /= 5;
        } else {
            return false;
        }
    };

    return true;
};

