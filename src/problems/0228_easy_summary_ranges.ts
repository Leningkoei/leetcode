/// You are given a sorted unique integer array nums.
/// Return the smallest sorted list of ranges that cover all the numbers in the
///     array exactly. That is, each element of nums is covered by exactly one
///     of the ranges, and there is no integer x such that x is in one of the
///     ranges but not in nums.
/// Each range [ a, b ] in the list should be output as:
///     * "a -> b": if a != b;
///     * "a": if a == b;

export default function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];

    let i: number = 0;
    while (i < nums.length) {
        const currentNum: number = nums[i];
        let nextNum: number = nums[i];

        while (i < nums.length && nums[i] - nextNum <= 1) {
            nextNum = nums[i];
            i++;
        };

        if (currentNum == nextNum) {
            result.push(currentNum.toString());
        } else {
            result.push(`${currentNum}->${nextNum}`);
        };
    };

    return result;
};

