import './Upload.scss'
// import Header from "../../Components/Header/Header";
import videoPreview from '../../image/Upload-video-preview.jpg';
import arrow from '../../icons/upload.svg';
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';


function VideoPlayer (){
    const navigate = useNavigate ();

        const [confirmTitle, setConfirmTitle] = useState("");
        const [confirmDescription, setConfirmDescription] = useState("");

        const handleTitle = (event) => {
            setConfirmTitle (event.target.value);
        }

        const handleDescription = (event) => {
            setConfirmDescription (event.target.value);
        }

        const isValidForm = ()=> {
            if (!confirmTitle) {
                return false
            }

            if (!confirmDescription) {
                return false
            }
            return true
        };

        function handleSubmit (event) {
            event.preventDefault ()
            if (isValidForm ()){
                // alert("Success");
                axios.post('http://localhost:5003/videos', 
                {title: confirmTitle, description: confirmDescription}).then(response =>{
                    console.log(response)
                    navigate ("/")
                })
            }
            else {
                alert ("Please try again")
            }
        }

        

    return (
            <form className="video-play" onSubmit={handleSubmit}>
                <h1 className="video-play__title">Upload Video</h1>
                <div className='video-play__main-wrapper'>
                    <div className="video-play__wrapper-1">
                        <h3 className="video-play__label-thumb">VIDEO THUMBNAIL</h3>
                        <img className="video-play__holder" src={videoPreview} alt="" />
                    </div>
                    <div className="video-play__wrapper-2">
                        <label className="video-play__label-your-video">TITLE YOUR VIDEO</label>
                        <input name="title" className="video-play__label-your-video-input" type="text" placeholder="Add a title to your video" onChange={handleTitle}/>
                        <label className="video-play__label-description">ADD A VIDEO DESCRIPTION</label>
                        <input name="description" className="video-play__label-your-video-description-input" type="text" placeholder="Add a description to your video" onChange={handleDescription}/>
                        <div className='video-play__btn-wrapper'>  
                            <button className="video-play__publish-btn" src={arrow}>PUBLISH</button>
                            <button className="video-play__cancel-btn">CANCEL</button>
                        </div>
                    </div>
                </div>
            </form>
    );
}

export default VideoPlayer;
