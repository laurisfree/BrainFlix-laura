import axios from 'axios';
import './Home.scss';
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Video from "../../Components/Video/Video";
import VideoDetails from "../../Components/VideoDetails/VideoDetails";
import VideoList from "../../Components/VideoList/VideoList";



function App() {
  const [playingVideo, setPlayingVideo] = useState({});
  const [videoList, setVideoList] = useState([]);
  const params = useParams();
  // console.log(params)

  useEffect(()=> {
    axios 
      .get("http://localhost:5003/videos")
      .then((response)=>{
        setVideoList (response.data)
        // console.log(response.data)
      })
      .catch (err=>console.log(err))
  }, [])

  useEffect(()=>{
    if(params.id){
      axios 
      .get(`http://localhost:5003/videos/${params.id}`)
      .then((response)=>{
        console.log(response.data)
        setPlayingVideo(response.data)
      })
      .catch ()
    } else {
      axios 
      .get(`http://localhost:5003/videos/84e96018-4022-434e-80bf-000ce4cd12b8`)
      .then((response)=>{
        setPlayingVideo(response.data)
      
        // console.log(response.data)
      })
      .catch ()
    }
  }, [params.id, videoList]);

  // const handleVideoSelection = (selectedId) => {
  //   const foundVideo = videoList.find(
  //     (video) => video.id === selectedId
  //   );
  //   setPlayingVideo(foundVideo);
  // };

  // submit function

  const handleSubmitForm = function(event, comment){
    event.preventDefault();
    const newObject = {name: "Laura", comment: comment}
    axios.post(`https://project-2-api.herokuapp.com/videos/${playingVideo.id}/comments?api_key=4c35f79e-fbfe-4337-915f-11aaf23a1858`, newObject)
    .then(response =>{
      axios.get(`https://project-2-api.herokuapp.com/videos/${playingVideo.id}?api_key=4c35f79e-fbfe-4337-915f-11aaf23a1858`)
      .then(response=>{setPlayingVideo(response.data)})
      
    })
  }
  
  return (
    <div className='App'>
    
    {playingVideo && <Video playingVideo={playingVideo} />}
      <div className='video-flex'>
        {playingVideo && <VideoDetails playingVideo={playingVideo}
                      handleSubmitForm={handleSubmitForm}
        />}
        {videoList && playingVideo && <VideoList 
        // handleVideoSelection={handleVideoSelection} 
        videoList={videoList} 
        playingVideo={playingVideo} 
        />}
      </div>
    </div>
  );
    }


export default App;

