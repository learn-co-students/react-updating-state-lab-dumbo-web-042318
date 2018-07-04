// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor(){
    super()
    this.state ={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrateClick = ()=>{
      this.setState({
        settings: {
          ...this.state.settings,
            bitrate: 12
          }
      })
  }

  handleResolutionClick = () => {
      this.setState({
        settings: Object.assign({}, this.state.settings,{
          video: Object.assign({}, this.state.settings.video,{
          resolution: '720p'})
        })
        })
    }


    render(){
    return(
      <div>
        <label> Bitrate :  </label>
        <button className="bitrate" value={this.state.settings.bitrate}
            onClick={this.handleBitrateClick}>
            {this.state.settings.bitrate}</button>
        <br />
        <label> Resolution : </label>
        <button className="resolution" value={this.state.settings.video.resolution}
          onClick={this.handleResolutionClick}>
            {this.state.settings.video.resolution}</button>
      </div>
  )
}
}

export default YouTubeDebugger;
