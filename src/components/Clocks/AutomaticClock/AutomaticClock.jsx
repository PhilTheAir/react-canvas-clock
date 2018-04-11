import React, { Component } from 'react';
import { renderAutomaticClock } from '../../../utils/automatic';

export default class AutomaticClock extends Component {
  static defaultProps = {
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

  componentDidMount() {
    const { id } = this.props;
    const node = document.getElementById(`automaticClock${id}`);
    const context = node.getContext('2d');
    renderAutomaticClock(context, this.props);
  }

  render() {
    const { id, size } = this.props;
    return (
      <canvas id={`automaticClock${id}`} width={size} height={size} />
    )
  }
}