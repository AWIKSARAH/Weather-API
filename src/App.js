import React, { Component } from "react";
import Search from "./components/Search";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import WeatherItem from "./components/WeatherItem";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import unknown from "./img/weather-icons/unknown.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "london",
      fakeWeatherData: null,
      loaded: false,
    };
    this.getWeatherData = this.getWeatherData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.imgSrc = this.imgSrc.bind(this);
  }

  handleInputChange = (value) => {
    this.setState({ city: value });
    this.componentDidMount(value);
  };

  imgSrc = (id) => {
    if (id < 300) {
      return storm;
    } else if (id >= 300 && id <= 499) {
      return drizzle;
    } else if (id >= 500 && id <= 599) {
      return rain;
    } else if (id >= 600 && id <= 699) {
      return snow;
    } else if (id >= 700 && id <= 799) {
      return fog;
    } else if (id === 800) {
      return clear;
    } else if (id === 801) {
      return partlycloudy;
    } else if (id > 801 && id <= 805) {
      return mostlycloudy;
    } else {
      return unknown;
    }
  };

  getWeatherData(cityName) {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=78a1b5a0d784c6c12292ea85e9a6eaa7`
    )
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {
        this.setState({ fakeWeatherData: data, loaded: true });
        console.log(this.state.fakeWeatherData);
        console.log(typeof this.state.fakeWeatherData.list[0].main.temp_min);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }

  componentDidMount() {
    this.getWeatherData(this.state.city);
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search handleInput={this.handleInputChange} />
        </header>
        <main className="app__main" style={{ height: "100vh" }}>
          <CurrentWeather
            handleImgSrc={this.imgSrc}
            loaded={this.state.loaded}
            data={
              this.state.fakeWeatherData ? this.state.fakeWeatherData : null
            }
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "75vw",
              marginTop: "50px",
            }}
          >
            {this.state.loaded
              ? this.state.fakeWeatherData.list.map((e, i) => {
                  if (i < 8 && i > 0)
                    return (
                      <WeatherItem
                        key={i}
                        loaded={this.state.loaded}
                        meanTemperature={e.main.temp}
                        img={e.weather[0].id}
                        time={e.dt_txt}
                        handleImgSrc={this.imgSrc}
                      />
                    );
                })
              : null}
          </div>
        </main>
      </div>
    );
  }
}
export default App;
