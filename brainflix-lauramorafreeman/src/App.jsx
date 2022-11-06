import './App.css';
import {useState} from "react"
import Header from './Components/Header/Header';
import Video from "./Components/Video/Video"
import VideoList from "./Components/VideoList/VideoList"
import videoData from "./data/video-details.json"

function App() {
  const [playingVideo, setPlayingVideo] = useState (videoData[0]);
  const [videoList, setVideoList] = useState (videoData);
  // const [videoList] = useState(videoData);
  // const [commentList, setCommentList] = useState (videoData[0])
  // const handleClick = (title) => {
  //   console.log(title);
  //   const foundVideo = videoList.find( (title) => title.title === title );
  //   console.log(foundVideo);
  //   setPlayingVideo(foundVideo);

  const handleVideoSelection = (selectedId) => {
    const foundVideo = videoList.find(
      (video) => video.id === selectedId
    );
    setPlayingVideo(foundVideo);
  };
  
  return (
    <div className='App'>
    <Header />
    {/* <CommentsList playingVideo = {playingVideo}/> */}
    {/* <VideoInfo video={playingVideo}/> */}
    {/* videoArr = {videoArr} */}

    <Video playingVideo={playingVideo} />
    <VideoList handleVideoSelection={handleVideoSelection} videoList={videoList} playingVideo={playingVideo} />
    {/* // selectedVideo={selectedVideo}
    // handleVideoSelection={handleVideoSelection} */}
  
    {/* <Video videoList={videoList.filter( (title) => title.title !== playingVideo.title)} 
      handleVideoClick={handleClick} /> */}
    </div>
  );
    }


export default App;