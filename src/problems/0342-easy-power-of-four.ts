/// Given an integer `n`, return true if it is a power of four. Otherwise,
/// return `false`.
/// An integer `n` is a power of four, if there exists an integer `x` such that
/// `n == 4^x`.

export default function isPowerOfFour(n: number): boolean {
  if (n == 1) {
    return true;
  };

  let current = 4;
  while (current < n) {
    current *= 4;
  };

  return current == n;
};

