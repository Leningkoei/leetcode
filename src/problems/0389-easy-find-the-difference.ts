/// You are given two strings `s` and `t`.
///
/// String t is generated by random shuffing string `s` and then add one more
/// letter at a random position.
///
/// Return the letter that was added to `t`.

import statisticsChars from "src/lib/statisticsChars.ts";

function findTheDifference(s: string, t: string): string {
  const sMap: Map<string, number> = statistics(s);
  const tArr = t.split("");

  for (const char of tArr) {
    if (sMap.has(char)) {
      const lessCount = sMap.get(char);

      if (lessCount) {
        sMap.set(char, lessCount - 1);
      } else {
        return char;
      };
    } else {
      return char;
    };
  };
};

export default function findTheDifference(s: string, t: string): string {
  let ret = 0;

  s.split("").forEach((char: string): number => ret ^= char.charCodeAt(0));
  t.split("").forEach((char: string): number => ret ^= char.charCodeAt(0));

  return String.fromCharCode(ret);
};

