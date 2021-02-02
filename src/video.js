import React, { useRef, useState } from 'react';
import './video.css';
import VideoFooter from './videoFooter';
import VideoSidebar from './videoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
    const [play, setPlay] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}>
            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video;
