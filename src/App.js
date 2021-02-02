import React, { useState, useEffect } from "react";
import Video from './video';
import db from './firebase.js';
import './App.css';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => setVideos(snapshot.docs.map(doc => doc.data())))
  }, [videos])

  return (
    <div className="App">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) =>
            < Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
        )}
        <Video />
        <Video />
        <Video />
      </div>

    </div>
  );
}

export default App;
