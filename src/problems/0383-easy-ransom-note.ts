/// Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote`
/// can be constructed from `magazine` and `false` otherwise.
///
/// Each letter in `magazine` can only be used once in `ransomNote`.

const statisticsChars =
  (str: string,
   map = new Map<string, number>()): Map<string, number> =>
    (str.split("")
        .forEach((char: string): Map<string, number> =>
          map.has(char)?
            map.set(char, map.get(char) + 1):
            map.set(char, 1)),
     map);

export default function canConstruct(ransomNote: string,
                                     magazine:   string): boolean {
  const magazineMap = statisticsChar(magazine);

  return ransomNote.split("")
                   .reduce((result: boolean, char: string): boolean =>
                     result?
                       magazineMap.has(char)?
                         magazineMap.get(char) > 0?
                           (magazineMap.set(char, magazineMap.get(char) - 1),
                            true):
                           (magazineMap.delete(char), false):
                         false:
                       false, true);
};

