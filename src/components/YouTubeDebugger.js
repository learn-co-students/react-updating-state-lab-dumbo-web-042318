// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.
// This component has several state properties. The initial state shape looks like this: js { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();

        this.state = {
            errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
        }
    };

    // handleClick = e => {
    //     if (e.target.className === 'bitrate') {
    //         this.setState({
    //             settings: {
    //                 ...this.state.settings,
    //                 bitrate: 12
    //             }
    //         }, () => console.log(this.state.settings))
    //     } else if (e.target.className === 'resolution') {
    //         this.setState({
    //           settings: Object.assign({}, this.state.settings, {
    //             video: {
    //                 ...this.state.settings.video,
    //                 resolution: '720p'
    //             }
    //           })
    //         }, () => console.log(this.state.settings.video))
    //     }
    // }

    handleChangeBitrate = () => {
        this.setState({
          settings: Object.assign({}, this.state.settings, {
            bitrate: 12
          }),
        });
    };
    
    handleChangeResolution = () => {
        this.setState({
          settings: Object.assign({}, this.state.settings, {
            video: Object.assign({}, this.state.settings.video, {
              resolution: '720p'
            })
          }),
        });
    };

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleChangeBitrate}>12 bitrate</button>
                <button className='resolution' onClick={this.handleChangeResolution}>720p</button>
            </div>
        )
    }

}

export default YouTubeDebugger;