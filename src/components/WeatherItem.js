import React, { Component } from "react";
import { render } from "react-dom";

export default class WeatherItem extends Component {
  render() {
    return (
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ display: this.props.timeDisplay }}>3:00</p>
        <img
          src={this.props.imgSrc}
          alt="storm icon"
          style={{ width: this.props.width, height: "auto" }}
        />
        <p style={{ display: this.props.timeDisplay }}>
          {this.props.meanTemperature}&#176;C
        </p>
        <h2 style={{ color: "white", display: this.props.THPDisplay }}>
          overcast clouds
        </h2>

        <div
          className="temp"
          style={{
            display: this.props.THPDisplay,
            alignItems: "center",
          }}
        >
          <h2>Temperature </h2>
          <span style={{ fontSize: "1.5em", padding: "20px" }}>
            {this.props.lowerTemperature}&#176; to{" "}
            {this.props.higherTemperature}&#176;C
          </span>
        </div>

        <div
          className="temp"
          style={{
            display: "flex",
            alignItems: "center",
            display: this.props.THPDisplay,
          }}
        >
          <h3>Humidity </h3>
          <span style={{ fontSize: "1em", padding: "20px" }}>
            {this.props.humidity}%
          </span>
          <h3>Pressure </h3>
          <span style={{ fontSize: "1em", padding: "20px" }}>
            {this.props.pressure}
          </span>
        </div>
      </div>
    );
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
        Hello {this.props.city}
      </div>
    );
  }
}
