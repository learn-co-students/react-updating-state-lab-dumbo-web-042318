import React from 'react'

class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  timesClicked = (e) => {
    return this.setState({
     timesClicked: this.state.timesClicked += 1
   })
    // this.setState(this.state.timesClicked += 1);
    // console.log(e.target.innerHTML ++);
  }

  render() {
    return (
      <button onClick={this.timesClicked}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
