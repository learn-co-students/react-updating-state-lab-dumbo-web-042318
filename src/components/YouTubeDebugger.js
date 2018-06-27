// Code YouTubeDebugger Component Here
import React from "react"

class YouTubeDebugger extends React.Component {
  constructor() {
    super() 
    this.state = {
      errors: [],
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      },
      user: null
    }
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
    console.log(this.state);
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}>Bitrate: {this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResolution}>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    )
  }
}

export default YouTubeDebugger
