import axios from 'axios';
import './Home.scss';
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Video from "../../Components/Video/Video";
import VideoDetails from "../../Components/VideoDetails/VideoDetails";
import VideoList from "../../Components/VideoList/VideoList";



function App() {
  const [playingVideo, setPlayingVideo] = useState ({});
  const [videoList, setVideoList] = useState ([]);
  const params = useParams ();
  console.log(params)

  useEffect(()=> {
    axios 
      .get("https://project-2-api.herokuapp.com/videos?api_key=4c35f79e-fbfe-4337-915f-11aaf23a1858")
      .then((response)=>{
        setVideoList (response.data)
        console.log(response.data)
      })
      .catch (err=>console.log(err))
  }, [])

  useEffect(()=>{
    if(params.id){
      axios 
      .get(`https://project-2-api.herokuapp.com/videos/${params.id}?api_key=4c35f79e-fbfe-4337-915f-11aaf23a1858`)
      .then((response)=>{
        setPlayingVideo(response.data)
      
        console.log(response.data)
      })
      .catch ()
    } else {
      axios 
      .get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=4c35f79e-fbfe-4337-915f-11aaf23a1858`)
      .then((response)=>{
        setPlayingVideo(response.data)
      
        console.log(response.data)
      })
      .catch ()
    }
  }, [params]);

  // const handleVideoSelection = (selectedId) => {
  //   const foundVideo = videoList.find(
  //     (video) => video.id === selectedId
  //   );
  //   setPlayingVideo(foundVideo);
  // };
  
  return (
    <div className='App'>
    

      <Video playingVideo={playingVideo} />
      <div className='video-flex'>
        <VideoDetails playingVideo={playingVideo}/>
        <VideoList 
        // handleVideoSelection={handleVideoSelection} 
        videoList={videoList} 
        playingVideo={playingVideo} 
        />
      </div>
    </div>
  );
    }


export default App;

