import { setDateFormat } from './accessory';

export const renderDigitalClock = (context, props) => {
  const {
    size,
    bgColor,
    timeoffset,
    dialColor,
    time24h,
    dialFontSize
  } = props;

  const now = new Date();
  now.setTime(now.getTime() + timeoffset * 1000);
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hour = time24h ? now.getHours() : now.getHours() % 12;

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  context.clearRect(0, 0, size, size);
  context.beginPath();
  context.fillStyle = bgColor;
  context.rect(0, 0, size, size);
  context.fill();
  context.closePath();

  context.fillStyle = dialColor;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = dialFontSize + "px Arial";
  context.fillText(hour + ":" + min + ":" + sec, (size / 2), size / 2.5);

  setDateFormat(context, props);

  setTimeout(() => renderDigitalClock(context, props), 50);
}
