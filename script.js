// setInterval(() => {
//   console.log(new Date());
// }, 1000).then;
// setTimeout(function () {
//   console.log(dateObj);
// }, 1000);

let clock = () => {
  setInterval(() => {
    let dateObject = new Date();
    let weekDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "DEC",
    ];
    let currDay = weekDays[dateObject.getDay() - 1];
    let currMonth = months[dateObject.getMonth()];
    let currDate = dateObject.getDate();
    let currYear = dateObject.getFullYear();
    let currHour = dateObject.getHours();
    let currMinute = dateObject.getMinutes();
    let currSecond = dateObject.getSeconds();
    let period = "AM";
    if (currHour > 11) {
      period = "PM";
      if (currHour > 12) {
        currHour -= 12;
      }
    }
    if (currHour < 10) {
      currHour = "0" + currHour;
    }
    if (currMinute < 10) {
      currMinute = "0" + currMinute;
    }
    if (currSecond < 10) {
      currSecond = "0" + currSecond;
    }
    document.getElementById("days").innerHTML = currDay;
    document.getElementById("month").innerHTML = currMonth;
    document.getElementById("date").innerHTML = currDate;
    document.getElementById("year").innerHTML = currYear;
    document.getElementById("hour").innerHTML = currHour;
    document.getElementById("minute").innerHTML = currMinute;
    document.getElementById("second").innerHTML = currSecond;
    document.getElementById("periods").innerHTML = period;
    document.getElementById("blinker-1").style.color = "white";
    document.getElementById("blinker-2").style.color = "white";
  }, 1000);
};
clock();
setInterval(() => {
  document.getElementById("blinker-1").style.color = "red";
  document.getElementById("blinker-2").style.color = "red";
}, 2000);
