/// Given a string `s` which consists of lowercase of uppercase letters, return
/// the length of the longest palindrome that can be built with those letters.
///
/// Letters are case sensitive, for example, `"Aa"` is not considered a
/// palindrome here.

import statisticsChars from "src/lib/statisticsChars.js";

export default function longestPalindrome(s: string): number {
  let result = 0;
  const map = statisticsChars(s);

  for (const value of map.values()) {
    result += Math.floor(value / 2);
  };

  result *= 2;

  return result == s.length? result: result + 1;
};

