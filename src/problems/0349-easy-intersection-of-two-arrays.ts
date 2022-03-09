/// Given two integer arrays `nums1` and `nums2`, return an array of their
/// intersection. Each element in the result must be unique and you may return
/// the result in any order.

export default function intersection(nums1: number[], nums2: number[]): number[] {
  const result = [];

  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (const num of set1) {
    if (set2.has(nums)) {
      result.push(nums);
    };
  };

  return result;
};

