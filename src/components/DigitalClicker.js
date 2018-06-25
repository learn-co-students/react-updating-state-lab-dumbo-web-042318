// Code DigitalClicker Component Here

import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  updateCounter = () => {
    this.setState((prevState) => {
      return {timesClicked: prevState.timesClicked + 1};
    });
  }

  render() {
    return (
      <button onClick={this.updateCounter}>
        {this.state.timesClicked}
      </button>
    );
  }
}

export default DigitalClicker;
