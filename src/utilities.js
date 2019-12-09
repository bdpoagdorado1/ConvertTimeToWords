const Utilities = (function utilities() {
  function getNumberText(number) {
    const numberDictionary = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty"
    };

    return numberDictionary[number];
  }

  function getNextHour(hour) {
    return hour === 12 ? 1 : hour + 1;
  }

  function roundMinutesToNextHour(minutes) {
    return 60 - minutes;
  }

  function getMinutesText(minutes) {
    return minutes > 20
      ? `twenty-${getNumberText(minutes - 20)}`
      : getNumberText(minutes);
  }

  return {
    getNumberText: getNumberText,
    getNextHour: getNextHour,
    roundMinutesToNextHour: roundMinutesToNextHour,
    getMinutesText: getMinutesText
  };
})();

export default Utilities;
