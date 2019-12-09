import "./styles.css";
import timeConverter from "./time-converter";

document.getElementById("submit-time").addEventListener("click", function() {
  let hour = document.getElementById("hour").value;
  let minutes = document.getElementById("minutes").value;
  if (hour !== "") hour = +hour;
  if (minutes !== "") minutes = +minutes;
  let result = timeConverter.convertTimeToWords(hour, minutes);
  document.getElementById("result").innerHTML = `Time in Words: ${result}`;
});
