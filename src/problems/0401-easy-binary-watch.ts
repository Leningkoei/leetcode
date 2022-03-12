/// A binary watch has 4 LEDs on the top which represent the hours (0 - 11), and
/// 6 LEDs on the bottom represent the minutes (0 - 59). Each LED represents a
/// zero or one, with the least significant bit on the right.
///
/// Given an integer `turnedOn` which represents the number of LEDs that are
/// currently on, return all possible times the watch could represent. You may
/// return the answer in any order.

export default function readBinaryWatch(turnedOn: number): string[] {
  const result = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (h.toString(2).replaceAll("0", "").length +
          m.toString(2).replaceAll("0", "").length == turnedOn) {
        result.push(h + ":" + (m < 10? "0": "") + m);
      };
    };
  };

  return result;
};

