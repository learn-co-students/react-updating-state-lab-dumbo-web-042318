// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor(){
    super()
    this.state= {errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p' } }
    }
  }
  // this.setState({ someProperty: { ...this.state.someProperty, flag: false} });

  changeBitRate= () =>{
    this.setState({
      settings: {...this.state.settings , bitrate: 12},
    })
  }
  changeRes= () =>{
    this.setState({
      settings: {...this.state.settings , video: {...this.state.settings.video , resolution: '720p'}},
    })
  }
  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.changeBitRate}>change bitrate</button>
        <p>bitrate: {this.state.settings.bitrate}</p>
      <button className='resolution' onClick={this.changeRes}>change res</button>
        <p>res: {this.state.settings.video.resolution}</p>
      </div>
    )
  }
}
