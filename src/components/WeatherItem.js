import React, { Component } from "react";

export default class WeatherItem extends Component {
  constructor(props) {
    super(props);
    this.getTime = this.getTime.bind(this);
  }

  getTime(e) {
    let date = e.split(" ");
    return date[1].slice(0, 5);
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
        <p>{this.getTime(this.props.time)}</p>
        <img
          src={this.props.handleImgSrc(this.props.img)}
          alt={this.props.img}
          style={{ width: "6vw", height: "auto" }}
        />
        <p>{this.props.meanTemperature}&#176;C</p>
      </div>
    ) : (
      <h1>LOADING ...</h1>
    );
  }
}
