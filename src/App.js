import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import WeatherItem from "./components/WeatherItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "london",
      fakeWeatherData: [],
    };
  }

  handleInputChange = (value) => {
    this.setState({ city: value });
  };
  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&cnt=8&units=metric&appid=78a1b5a0d784c6c12292ea85e9a6eaa7`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          fakeWeatherData: data,
        });
        console.log(this.state.fakeWeatherData);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search handleInput={this.handleInputChange} />
        </header>
        <main className="app__main" style={{ height: "100vh" }}>
          <CurrentWeather
            temp_min={this.state.fakeWeatherData.list[0].main.temp_min}
            temp_max={this.state.fakeWeatherData.list[0].main.temp_max}
            humidity={this.state.fakeWeatherData.list[0].main.humidity}
            pressure={this.state.fakeWeatherData.list[0].main.pressure}
            img={this.state.fakeWeatherData.list[0].weather[0].main.toLowerCase()}
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
            {console.log(this.state.fakeWeatherData.componentDidMount())}
            {this.state.fakeWeatherData.list.map((e, i) => {
              if (i < 7)
                return (
                  <WeatherItem
                    meanTemperature={e.main.temp}
                    img={e.weather[0].main.toLocaleLowerCase()}
                    time={this.state.fakeWeatherData.list[i].dt_txt}
                  />
                );
            })}
          </div>
        </main>
      </div>
    );
  }
}
export default App;
