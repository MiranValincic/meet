/** @format */

import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChange = (event) => {
    if (event.target.value >= 33 || event.target.value <= 0) {
      this.setState({
        numberOfEvents: event.target.value,
        errorText: "Specified number is not allowed",
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        errorText: "",
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert id="errorAlert" text={this.state.errorText} />
        <input
          type="number"
          className="numberinput"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
