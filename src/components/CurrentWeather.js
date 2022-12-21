import React, { Component } from "react";

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.loaded ? (
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={this.props.handleImgSrc(this.props.data.list[0].weather[0].id)}
          alt={this.props.data.list[0].weather[0].main.toLowerCase()}
          style={{ width: "300px", height: "auto" }}
        />
        <h2 style={{ color: "white" }}>
          overcast {this.props.data.list[0].weather[0].main.toLowerCase()}
        </h2>
        <div
          className="temp"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h2>Temperature </h2>
          <span style={{ fontSize: "1.5em", padding: "20px" }}>
            {Math.round(this.props.data.list[0].main.temp_min)}&#176; to{" "}
            {Math.round(this.props.data.list[0].main.temp_max)}&#176;C
          </span>
        </div>
        <div
          className="temp"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3>Humidity </h3>
          <span style={{ fontSize: "1em", padding: "20px" }}>
            {this.props.data.list[0].main.humidity}%
          </span>
          <h3>Pressure </h3>
          <span style={{ fontSize: "1em", padding: "20px" }}>
            {this.props.data.list[0].main.pressure}
          </span>
        </div>
      </div>
    ) : (
      <h1>Loading</h1>
    );
  }
}
