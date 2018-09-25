import React, { Component } from 'react';
import { renderDigitalClock } from './utils/digital';

export default class DigitalClock extends Component {
  static defaultProps = {
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

  componentDidMount() {
    const { id } = this.props;
    const node = document.getElementById(`digitalClock${id}`);
    const context = node.getContext('2d');
    renderDigitalClock(context, this.props);
  }

  render() {
    const { id, size } = this.props;
    return (
      <canvas id={`digitalClock${id}`} width={size} height={size} />
    )
  }
}