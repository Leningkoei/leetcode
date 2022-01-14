/// Given an integer array nums and an integer k, return true if there are two
///     distinct indices i and j in the array such that nums[i] == nums[j] and
///     abs(i - j) <= k.

export default function containsNearByDuplicate(
    nums: number[],
    k: number
): boolean {
    const map: Map<number, number> = new Map();

    for (let i: number = 0; i < nums.length; i++) {
        const j: number = map.get(nums[i]);

        if (j !== undefined) {
            if(i - j <= k) {
                return true;
            } else {
                map.set(nums[i], i);
            };
        } else {
            map.set(nums[i], i);
        };
    };

    return false;
};

