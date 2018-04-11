import { strFormat } from 'ymd-hms';

export const dayEng = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const dayChi = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
];

export const monthEng = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const monthChi = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月"
];

export const setTimeFormat = (context, props) => {
  const { size, timeoffset, timeTextColor, timeFormat, dateTextSize } = props;
  if (!timeFormat) return;
  const x = size / 2;
  const y = size / 5 * 3;

  const now = new Date();
  now.setTime(now.getTime() + timeoffset * 1000);
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hour = timeFormat.endsWith("24") ? now.getHours() : now.getHours() % 12;

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  context.lineWidth = 1;
  context.fillStyle = timeTextColor;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = dateTextSize + "px Arial";

  switch (timeFormat) {
    case "hm12":
      context.fillText(hour + ":" + min, x, y);
      break;
    case "hms12":
      context.fillText(hour + ":" + min + ":" + sec, x, y);
      break;
    case "hm24":
      context.fillText(hour + ":" + min, x, y);
      break;
    case "hmy24":
    default:
      context.fillText(hour + ":" + min + ":" + sec, x, y);
      break;
  }
}

export const setDateFormat = (context, props) => {
  const { size, timeoffset, dateTextColor, dateFormat, dateTextSize } = props;
  if (!dateFormat) return;
  const x = size / 2;
  const y = size / 5 * 3 + size / 10;

  const now = new Date();
  now.setTime(now.getTime() + timeoffset * 1000);
  let day = now.getDate();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;

  if ((month) < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  context.lineWidth = 1;
  context.fillStyle = dateTextColor;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = dateTextSize + "px Arial";

  switch (dateFormat) {
    case strFormat.ddmmyyyySlash:
      context.fillText(day + "/" + month + "/" + year, x, y);
      break;
    case strFormat.mmddyyyySlash:
      context.fillText(month + "/" + day + "/" + year, x, y);
      break;
    case "mmdd":
      month = now.getMonth();
      context.fillText(monthEng[month] + " " + day, x, y);
      break;
    case "mmddChi":
      month = now.getMonth();
      context.fillText(monthChi[month] + " " + day, x, y);
      break;
    case "ddmm":
      month = now.getMonth();
      context.fillText(day + " " + monthEng[month], x, y);
      break;
    case "ddmmChi":
      month = now.getMonth();
      context.fillText(day + " " + monthChi[month], x, y);
      break;
    case "dayChi":
      day = now.getDay();
      context.fillText(dayChi[day], x, y);
      break;
    case "day":
      day = now.getDay();
      context.fillText(dayEng[day], x, y);
      break;
    case "mmddDay":
      month = now.getMonth();
      day = now.getDay();
      context.fillText(monthEng[month] + " " + day + " " + dayEng[day], x, y);
      break;
    case "mmddDayChi":
    default:
    month = now.getMonth();
    day = now.getDay();
    context.fillText(monthChi[month] + " " + day + " " + dayChi[day], x, y);
    break;
  }
}
