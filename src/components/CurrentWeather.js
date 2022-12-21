import React from "react";
import { render } from "react-dom";
import { Component } from "react";
import "../App.js";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import unknown from "../img/weather-icons/unknown.svg";

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let imgSrc = (img) => {
      switch (img) {
        case "clear":
          return clear;
        case "clouds":
          return cloudy;
        case "drizzle":
          return drizzle;
        case "fog":
          return fog;
        case "storm":
          return storm;
        case "mostlycloudy":
          return mostlycloudy;
        case "partlycloudy":
          return partlycloudy;
        case "rain":
          return rain;
        case "snow":
          return snow;
        case "unknown":
          return unknown;
          break;
      }
    };
    return (
      <div
        style={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={imgSrc(this.props.img)}
          alt={this.props.img}
          style={{ width: "300px", height: "auto" }}
        />
        <h2 style={{ color: "white" }}>overcast {this.props.img}</h2>
        <div
          className="temp"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h2>Temperature </h2>
          <span style={{ fontSize: "1.5em", padding: "20px" }}>
            {Math.round(this.props.temp_min - 273.15)}&#176; to{" "}
            {Math.round(this.props.temp_max - 273.15)}&#176;C
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
