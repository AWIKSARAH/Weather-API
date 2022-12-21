import React, { Component } from "react";
import Search from "./components/Search";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import WeatherItem from "./components/WeatherItem";

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
  }

  handleInputChange = (value) => {
    this.setState({ city: value });
    this.componentDidMount(value);
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
                  if (i < 7)
                    return (
                      <WeatherItem
                        loaded={this.state.loaded}
                        meanTemperature={e.main.temp}
                        img={e.weather[0].main.toLocaleLowerCase()}
                        time={e.dt_txt}
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
