import React, { Component } from "react";
import { render } from "react-dom";
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

export default class WeatherItem extends Component {
  render() {
    const getTime = (e) => {
      let date = e.split(" ");
      return date[1].slice(0, 5);
    };
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
        <p>{getTime(this.props.time)}</p>
        <img
          src={imgSrc(this.props.img)}
          alt={this.props.img}
          style={{ width: "6vw", height: "auto" }}
        />
        <p>{Math.round(this.props.meanTemperature - 273.15)}&#176;C</p>
      </div>
    );
  }
}
