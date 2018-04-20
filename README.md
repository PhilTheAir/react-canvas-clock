# react-canvas-clock: Provide automatic and digital clock component using React.js.

## Installation

npm install react-canvas-clock

## Usage
```
import { AutomaticClock , DigitalClock } from 'react-canvas-clock';

<AutomaticClock id="clock1" size="200" />

<DigitalClock id="clock2" size="200" />

AutomaticClock.defaultProps = {
  size: 200, 
  bgColor: "#ffffff",
  borderColor: "#000000",
  timeoffset: 0,
  indicateColor: "#555ddd",
  dialColorHour: "#555ddd",
  dialColorMinute: "#555ddd",
  dialColorSecond: "#555ddd",
  showBorder: true,
  showHourText: true,
  showSecondText: true,
  showMinuteText: true,
  time24h: true,
  timeTextColor: "#333333",
  dateTextColor: "#333333",
  dialFontSize: 20,
  dateTextSize: 20,
  timeFormat: "hmy12",
  dateFormat: "mmddDay",
}

DigitalClock.defaultProps = {
  size: 200, 
  bgColor: "#ffffff",
  timeoffset: 0,
  dialColor: "#555ddd",
  dialFontSize: 32,
  dateTextColor: "#555ddd",
  dateTextSize: 16,
  timeFormat: "hmy12",
  dateFormat: "mmddDay",
  time24h: true,
}
```
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History


## Credits


## License

ISC
