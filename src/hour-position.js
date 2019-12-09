const HourPosition = (function hourPosition() {
  function onTheHour(minutes) {
    return minutes === 0;
  }

  function middleOfTheHour(minutes) {
    return minutes === 30;
  }

  function firstQuarterOfTheHour(minutes) {
    return minutes === 15;
  }

  function lastQuarterOfTheHour(minutes) {
    return minutes === 45;
  }

  function topOfTheHour(minutes) {
    return minutes < 30;
  }

  function bottomOfTheHour(minutes) {
    return minutes > 30;
  }

  return {
    onTheHour: onTheHour,
    middleOfTheHour: middleOfTheHour,
    firstQuarterOfTheHour: firstQuarterOfTheHour,
    lastQuarterOfTheHour: lastQuarterOfTheHour,
    topOfTheHour: topOfTheHour,
    bottomOfTheHour: bottomOfTheHour
  };
})();

export default HourPosition;
