const statisticsChars = (str: string): Map<string, number> => {
  const result: Map<string, number> = new Map<string, number>();

  str.split("")
     .forEach((char: string): void => {
       result.has(char)?
         result.set(char, result.get(char) + 1):
         result.set(char, 1);
     });

  return result;
};

