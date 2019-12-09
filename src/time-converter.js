import HourPosition from "./hour-position";
import TextBuilder from "./text-builder";

const TimeConverter = (function timeConverter() {
  function convertTimeToWords(hour, minutes) {
    if (invalidhour(hour)) return "Sorry, I can only handle hours 0-12";
    if (invalidMinutes(minutes)) return "Sorry, I can only handle minutes 0-59";

    hour = handleZeroHours(hour);

    if (HourPosition.onTheHour(minutes)) return TextBuilder.onTheHourText(hour);

    if (HourPosition.middleOfTheHour(minutes))
      return TextBuilder.middleOfTheText(hour);

    if (HourPosition.firstQuarterOfTheHour(minutes))
      return TextBuilder.firstQuarterOfTheHourText(hour);

    if (HourPosition.lastQuarterOfTheHour(minutes))
      return TextBuilder.lastQuarterOfTheHourText(hour);

    if (HourPosition.topOfTheHour(minutes))
      return TextBuilder.topOfTheHourText(hour, minutes);

    if (HourPosition.bottomOfTheHour(minutes))
      return TextBuilder.bottomOfTheHourText(hour, minutes);

    return "Sorry there is an issue with the time converter, please pray for me!";
  }

  function invalidhour(hour) {
    return !(Number.isInteger(hour) && hour >= 0 && hour < 13);
  }

  function invalidMinutes(minutes) {
    return !(Number.isInteger(minutes) && minutes >= 0 && minutes < 60);
  }

  function handleZeroHours(hour) {
    return hour === 0 ? 12 : hour;
  }

  return {
    convertTimeToWords: convertTimeToWords
  };
})();

export default TimeConverter;
