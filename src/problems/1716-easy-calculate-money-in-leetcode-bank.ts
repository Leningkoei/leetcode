/// Hercy wants to save money for his first car. He puts money in the leetcode
///     bank every day.
/// He starts by putting in $1 on Monday, the first day. Every day from Tuesday
///     to Sunday, he will put in $1 more than the day before. On every
///     subsequent Monday, he will put in $1 more than the previous Monday.
/// Given n, return the total amount of money he will have in the leetcode bank
///     at the end of the $ n ^ th $ day.

export default function totalMoney(n: number): number {
    // let result: number = 0;
    let dayCount: number = n % 7;
    let weekCount: number = Math.floor(n / 7);

    return (1 + dayCount) * dayCount / 2 + weekCount * dayCount +
        (0 + weekCount - 1) * weekCount / 2 * 7 + weekCount * 28;

    // while (dayCount--) {
    //     result += dayCount + 1 + weekCount;
    // };

    // while (weekCount--) {
    //     result += weekCount * 7 + 28;
    // };

    // return result;
};

