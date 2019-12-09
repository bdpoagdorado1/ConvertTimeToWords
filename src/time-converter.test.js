import timeConverter from "./time-converter";

describe("Should convert time to words", () => {
  it("Should convert 8 hours 0 minutes to 'eight o' clock'", () => {
    let hours = 8;

    let minutes = 0;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("eight o' clock");
  });

  it("Should convert 8 hours 1 minutes to 'one-minute past eight'", () => {
    let hours = 8;

    let minutes = 1;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("one-minute past eight");
  });

  it("Should convert 8 hours 11 minutes to 'eleven minutes past eight'", () => {
    let hours = 8;

    let minutes = 11;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("eleven minutes past eight");
  });

  it("Should convert 8 hours 15 minutes to 'quarter past eight'", () => {
    let hours = 8;

    let minutes = 15;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("quarter past eight");
  });

  it("Should convert 8 hours 30 minutes to 'half past eight'", () => {
    let hours = 8;

    let minutes = 30;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("half past eight");
  });

  it("Should convert 8 hours 45 minutes to 'quarter to nine'", () => {
    let hours = 8;

    let minutes = 45;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("quarter to nine");
  });

  it("Should convert 8 hours 46 minutes to 'fourteen minutes to nine'", () => {
    let hours = 8;

    let minutes = 46;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("fourteen minutes to nine");
  });

  it("Should convert 8 hours 27 minutes to 'twenty-seven minutes past eight'", () => {
    let hours = 8;

    let minutes = 27;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("twenty-seven minutes past eight");
  });

  it("Should convert 0 hours 0 minute to 'twelve o' clock'", () => {
    let hours = 0;

    let minutes = 0;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("twelve o' clock");
  });

  it("Should convert 0 hours 1 minute to 'one-minute past twelve'", () => {
    let hours = 0;

    let minutes = 1;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("one-minute past twelve");
  });

  it("Should convert 12 hours 59 minute to 'one-minute to one'", () => {
    let hours = 12;

    let minutes = 59;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("one-minute to one");
  });

  it("Should convert 11 hours 59 minute to 'one-minute to twelve'", () => {
    let hours = 11;

    let minutes = 59;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("one-minute to twelve");
  });

  it("Should handle invalid hour input, empty string'", () => {
    let hours = "";

    let minutes = 27;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("Sorry, I can only handle hours 0-12");
  });

  it("Should handle invalid hour input, string'", () => {
    let hours = "hello";

    let minutes = 27;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("Sorry, I can only handle hours 0-12");
  });

  it("Should handle invalid hour input, negative number'", () => {
    let hours = -1;

    let minutes = 27;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("Sorry, I can only handle hours 0-12");
  });

  it("Should handle invalid hour input, number greater than 12'", () => {
    let hours = 13;

    let minutes = 27;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("Sorry, I can only handle hours 0-12");
  });

  it("Should handle invalid minute input, string'", () => {
    let hours = 1;

    let minutes = "hello";

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("Sorry, I can only handle minutes 0-59");
  });

  it("Should handle invalid minute input, negative number'", () => {
    let hours = 1;

    let minutes = -1;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("Sorry, I can only handle minutes 0-59");
  });

  it("Should handle invalid minute input, number greater than 59'", () => {
    let hours = 1;

    let minutes = 60;

    let result = timeConverter.convertTimeToWords(hours, minutes);

    expect(result).toEqual("Sorry, I can only handle minutes 0-59");
  });
});
