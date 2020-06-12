import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import YouTubeSubscribe from "./YoutubeSubscribe";

class YouTube extends Component {
    render() {
        return (
            <div style={{ width: '100%' }} align="center">
                <br/><br/>
                <YouTubeSubscribe
                    // channelName={channelName}
                    channelid="UCYvWFgmbROhfiE4eOhxX-4A"
                    theme={"default"}
                    layout={"full"}
                    count={"default"}
                />
                <div style={{ margin: 'auto' }} align="center">
                    <div>
                        <ReactPlayer
                            height="600px"
                            width="80%"
                            url="https://www.youtube.com/watch?v=44hMF_EzlQo"
                            controls="true"
                            muted="false"
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default YouTube;