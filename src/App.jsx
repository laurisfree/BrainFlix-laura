import './App.scss';
import {useState} from "react"
import Header from './Components/Header/Header';
import Video from "./Components/Video/Video"
import VideoList from "./Components/VideoList/VideoList"
import VideoDetails from './Components/VideoDetails/VideoDetails';
import videoData from "./data/video-details.json"


function App() {
  const [playingVideo, setPlayingVideo] = useState (videoData[0]);
  const [videoList, setVideoList] = useState (videoData);
 

  const handleVideoSelection = (selectedId) => {
    const foundVideo = videoList.find(
      (video) => video.id === selectedId
    );
    setPlayingVideo(foundVideo);
  };
  
  return (
    <div className='App'>
      <Header />
    

      <Video playingVideo={playingVideo} />
      <div className='video-flex'>
        <VideoDetails playingVideo={playingVideo}/>
        <VideoList handleVideoSelection={handleVideoSelection} videoList={videoList} playingVideo={playingVideo} />
      </div>
    </div>
  );
    }


export default App;