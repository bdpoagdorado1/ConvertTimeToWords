import Utilities from "./utilities";

const TextBuilder = (function textBuilder() {
  function onTheHourText(hour) {
    return `${Utilities.getNumberText(hour)} o' clock`;
  }

  function middleOfTheText(hour) {
    return `half past ${Utilities.getNumberText(hour)}`;
  }

  function firstQuarterOfTheHourText(hour) {
    return `quarter past ${Utilities.getNumberText(hour)}`;
  }

  function lastQuarterOfTheHourText(hour) {
    return `quarter to ${Utilities.getNumberText(Utilities.getNextHour(hour))}`;
  }

  function topOfTheHourText(hour, minutes) {
    return minutes === 1
      ? `one-minute past ${Utilities.getNumberText(hour)}`
      : `${Utilities.getMinutesText(
          minutes
        )} minutes past ${Utilities.getNumberText(hour)}`;
  }

  function bottomOfTheHourText(hour, minutes) {
    return minutes === 59
      ? `one-minute to ${Utilities.getNumberText(Utilities.getNextHour(hour))}`
      : `${Utilities.getMinutesText(
          Utilities.roundMinutesToNextHour(minutes)
        )} minutes to ${Utilities.getNumberText(Utilities.getNextHour(hour))}`;
  }

  return {
    onTheHourText: onTheHourText,
    middleOfTheText: middleOfTheText,
    firstQuarterOfTheHourText: firstQuarterOfTheHourText,
    lastQuarterOfTheHourText: lastQuarterOfTheHourText,
    topOfTheHourText: topOfTheHourText,
    bottomOfTheHourText: bottomOfTheHourText
  };
})();

export default TextBuilder;
