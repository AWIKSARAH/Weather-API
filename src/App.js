import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./data/FakeWeatherData-2.json";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import WeatherItem from "./components/WeatherItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  handleInputChange = (value) => {
    this.setState({ city: value });
  };

  render() {
    console.log(fakeWeatherData.list[0].weather[0].main.toLowerCase());
    // console.log(fakeWeatherData.list[0].dt_txt.getTime());

    return (
      <div className="app">
        <header className="app__header">
          <Search handleInput={this.handleInputChange} />
        </header>
        <main className="app__main" style={{ height: "100vh" }}>
          <CurrentWeather
            temp_min={fakeWeatherData.list[0].main.temp_min}
            temp_max={fakeWeatherData.list[0].main.temp_max}
            humidity={fakeWeatherData.list[0].main.humidity}
            pressure={fakeWeatherData.list[0].main.pressure}
            img={fakeWeatherData.list[0].weather[0].main.toLowerCase()}
            name={this.state.city}
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
            {fakeWeatherData.list.map((e, i) => {
              if (i < 7) {
                return (
                  <WeatherItem
                    meanTemperature={e.main.temp}
                    img={e.weather[0].main.toLocaleLowerCase()}
                    time={fakeWeatherData.list[i].dt_txt}
                  />
                );
              }
              console.log(this.props.time);
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
