/// We are playing the Guess Game. The game is as follows:
///
/// I pick a number from `1` to `n`. You have to guess which number I picked.
///
/// Every time you guess wrong, I will tell you whether the number I picked is
/// higher or lower than you guess.
///
/// You call a pre-defined API `int guess(int num)`, which returns three
/// possible results:
/// * -1: Your guess is higher than the number I picked (i.e. num > pick).
/// *  1: Your guess is lower  than the number I picked (i.e. num < pick).
/// *  0: Your guess is equal  to   the number I picked (i.e. num = pick).

export default function guessNumber(n: number): number {
  let left = 1;
  let right = n + 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const result = guess(mid);

    if (result) {
      if (result == -1) {
        right = mid;
      } else if (result == 1) {
        left = mid + 1;
      };
    } else {
      left = mid + 1;
    };
  };

  return left - 1;
};

