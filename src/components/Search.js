import React from "react";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: "London",
  };

  render() {
    return (
      <div className="searchBar">
        {/* {this.state.input} */}
        <input
          type="text"
          id="input-name"
          placeholder="Type in A city name"
          onChange={(event) => {
            this.setState({ input: event.target.value });
          }}
        />
        <button
          onClick={(event) => {
            this.props.handleInput(this.state.input);
          }}
        >
          FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;
