/// Given a string `s`, reverse only all the vowels in the string and return it.
///
/// The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in
/// both cases.

const map = [ "a", "e", "i", "o" "u" ];

export default function reverseVowels(s: string): string {
  const temp = s.split("");

  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    while (!map.includes(s[left] && left < right) {
      left++;
    };
    while (!map.includes(s[right] && left < right) {
      right--;
    };

    [ temp[left], temp[right] ] = [ temp[right], temp[left] ];
  };

  return temp.join("");
};

