import './App.scss';
import Home from './Pages/Home/Home'
//import VideoPlayer from './Pages/VideoPlayer/VideoPlayer';
import Upload from './Pages/Upload/Upload'
import{BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from "react"
import Header from './Components/Header/Header';
import Video from "./Components/Video/Video"
import VideoList from "./Components/VideoList/VideoList"
import VideoDetails from './Components/VideoDetails/VideoDetails';
import videoData from "./data/video-details.json"


function App() {

  return (

    <div className='App'>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path ="/" element= {<Home/>}/>
          <Route path ="/videos" element= {<Home/>}/>
          <Route path ="/videos/:id" element= {<Home/>}/>
          <Route path = "/upload" element= {<Upload/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;