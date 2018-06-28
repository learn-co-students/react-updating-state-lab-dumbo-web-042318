// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor(){
        super()

        this.state = {
            errors: [],
            user: null, 
            settings: { 
                bitrate: 8, 
                video: { 
                    resolution: '1080p',
                } 
            } 
        }
        }

        bitClick = (e) => {
            // const stateCopy = Object.assign({}, this.state)
            console.log(this.state);
            
            this.setState({
            //    ...this.state,
               settings: {
                    ...this.state.settings,
                   bitrate: 12
                  } 
               }) 
            }
            

        

        resClick = (e) => {
            this.setState({
                ...this.state,
                settings: {
                    ...this.state.settings,
                    video: {
                        ...this.state.settings.video,
                        resolution: '720p'
                    }
                }
               
            })

        }

        render() {
            return(
                <div>
                    <button className="bitrate" onClick={this.bitClick}>bitrate: {this.state.settings.bitrate} </button>
                    <button className="resolution" onClick={this.resClick}>resolution: {this.state.settings.video.resolution}</button>
                </div>
            );
    
        }
}

export default YouTubeDebugger;

   
