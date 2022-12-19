import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import storm from "./img/weather-icons/storm.svg";
// import clear from "./img/weather-icons/clear.svg";
// import cloudy from "./img/weather-icons/cloudy.svg";
// import drizzle from "./img/weather-icons/drizzle.svg";
// import fog from "./img/weather-icons/fog.svg";
// import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
// import partlycloudy from "./img/weather-icons/partlycloudy.svg";
// import rain from "./img/weather-icons/rain.svg";
// import snow from "./img/weather-icons/snow.svg";
// import rain from "./img/weather-icons/rain.svg";
// import unknown from "./img/weather-icons/unknown.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      lowerTemperature: "",
      higherTemperature: "",
      humidity: "",
      pressure: "",
      imgSrc: "",
    };
  }

  handleInputChange = (value) => {
    this.setState({ city: value });
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search handleInput={this.handleInputChange} />
        </header>
        <main className="app__main" style={{ height: "100vh" }}>
          <SayHi
            width="300px"
            timeDisplay="none"
            THPDisplay="flex"
            lowerTemperature="10"
            higherTemperature="11"
            humidity="78"
            pressure="1008.48"
            imgSrc={storm}
            name={this.state.city}
          />
          {/* <SayHello color="#010745" name={this.state.city} /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "75vw",
              marginTop: "50px",
            }}
          >
            <SayHi
              THPDisplay="none"
              width="6vw"
              meanTemperature="11"
              imgSrc={storm}
            />
            <SayHi
              width="6vw"
              THPDisplay="none"
              meanTemperature="11"
              imgSrc={storm}
            />
            <SayHi
              width="6vw"
              THPDisplay="none"
              meanTemperature="11"
              imgSrc={storm}
            />
            <SayHi
              width="6vw"
              THPDisplay="none"
              meanTemperature="11"
              imgSrc={storm}
            />
            <SayHi
              width="6vw"
              THPDisplay="none"
              meanTemperature="11"
              imgSrc={storm}
            />
            <SayHi
              width="6vw"
              THPDisplay="none"
              meanTemperature="11"
              imgSrc={storm}
            />
            <SayHi
              width="6vw"
              THPDisplay="none"
              meanTemperature="11"
              imgSrc={storm}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
