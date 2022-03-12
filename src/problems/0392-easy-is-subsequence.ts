/// Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`,
/// or `false` otherwise.
///
/// A subsequence of a string is a new string that is formed from the original
/// string by deleting some (can be none) of the characters without disturbing
/// the relative positions of the remaining characters. (i.e., `"ace"` is a
/// subsequence of `"abcde"` while `"aec"` is not).

export default function isSubsequence(s: string, t: string): boolean {
  let sCurrentIndex = 0;
  let tCurrentIndex = 0;

  while (sCurrentIndex < s.length && t.CurrentIndex < t.length) {
    if (s[sCurrentIndex] == t[tCurrentIndex]) {
      sCurrentIndex++;
    };

    tCurrentIndex++;
  };

  return sCurrentIndex == s.length;
};

