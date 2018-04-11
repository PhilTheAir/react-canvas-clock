import { setTimeFormat, setDateFormat } from './accessory';

export const renderAutomaticClock = (context, props) => {
  const {
    size,
    bgColor,
    borderColor,
    indicateColor,
    timeoffset,
    dialColorHour,
    dialColorMinute,
    dialColorSecond,
    showBorder,
    showHourText,
    showMinuteText,
    showSecondText,
    dialFontSize,
    time24h
  } = props;

  context.clearRect(0, 0, size, size);
  context.beginPath();

  // draw background
  context.fillStyle = bgColor;
  context.rect(0, 0, size, size);
  context.fill();
  context.closePath();

  // draw indicator
  context.strokeStyle = indicateColor;
  context.lineWidth = 2;
  for (let a = 0; a < 12; a++) {
    const r = parseInt(a, 10) * 0.523;
    const calc = Math.cos(r - 1.57);
    const y = Math.sin(r - 1.57);
    let extra = 0;
    if (a % 3 === 0) extra = size / 50;
    context.beginPath();
    context.moveTo(calc * (size / 3 + extra) + (size / 2), y * (size / 3 + extra) + (size / 2));
    context.lineTo(calc * size / 3.25 + (size / 2), y * size / 3.25 + (size / 2));
    context.stroke();
    context.fill();
    context.closePath();
  }

  const now = new Date();
  now.setTime(now.getTime() + timeoffset * 3600000);
  const miliSec = now.getMilliseconds();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  let hour = time24h ? now.getHours() : now.getHours() % 12;

  // draw second dial 
  context.fillStyle = dialColorSecond;
  context.strokeStyle = dialColorSecond;
  context.lineCap = "round";
  context.beginPath();
  context.lineWidth = 1;
  context.moveTo((size / 2), (size / 2));
  context.arc((size / 2), (size / 2), size / 3.2, -1.57 + sec * 0.1046 + miliSec / 1000 * 0.1046, -1.569 + sec * 0.1046 + miliSec / 1000 * 0.1046, 0);
  context.stroke();
  context.closePath();

  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = dialFontSize + "px Arial";
  if (showSecondText) context.fillText(sec, Math.cos(-1.57 + sec * 0.1046 + miliSec / 1000 * 0.1046) * size / 3 + (size / 2), Math.sin(-1.57 + sec * 0.1046 + miliSec / 1000 * 0.1046) * size / 3 + (size / 2));

  // draw minute dial 
  context.fillStyle = dialColorMinute;
  context.strokeStyle = dialColorMinute
  context.beginPath();
  context.lineWidth = 4;
  context.moveTo((size / 2), (size / 2));
  context.arc((size / 2), (size / 2), size / 3.2, -1.57 + min * 0.1046 + sec / 60 * 0.1046, -1.569 + min * 0.1046 + sec / 60 * 0.1046, 0);
  context.stroke();
  context.closePath();
  if (showMinuteText) context.fillText(min, Math.cos(-1.57 + min * 0.1046 + sec / 60 * 0.1046) * size / 3 + (size / 2), Math.sin(-1.57 + min * 0.1046 + sec / 60 * 0.1046) * size / 3 + (size / 2));

  // draw hour dial 
  context.fillStyle = dialColorHour;
  context.strokeStyle = dialColorHour;
  context.beginPath();
  context.lineWidth = 4;
  context.moveTo((size / 2), (size / 2));
  context.arc((size / 2), (size / 2), size / 5, -1.57 + hour * 0.523 + min / 60 * 0.523, -1.569 + hour * 0.523 + min / 60 * 0.523, 0);
  context.stroke();
  context.closePath();
  if (showHourText) context.fillText(hour, Math.cos(-1.57 + hour * 0.523 + min / 60 * 0.523) * size / 3.5 + (size / 2), Math.sin(-1.57 + hour * 0.523 + min / 60 * 0.523) * size / 4 + (size / 2));

  // draw border
  if (showBorder) {
    context.strokeStyle = borderColor;
    context.beginPath();
    context.lineWidth = 2;
    context.arc((size / 2), (size / 2), size / 2.8, 0, 6.28, 0);
    context.stroke();
    context.closePath();
  }

  // draw time text
  setTimeFormat(context, props);
  // draw date text
  setDateFormat(context, props);

  setTimeout(() => renderAutomaticClock(context, props), 50);
}