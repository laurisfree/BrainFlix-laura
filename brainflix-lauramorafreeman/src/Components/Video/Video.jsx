import "./Video.scss";


function Video(props) {
    return (
        <div>
          {/* {props.videoList.map( (item) => ( */}
        {/* <li className="video__item"> */}
            <video
            className="video__image"
            poster={props.playingVideo.image}
            controls
            ></video>
            
        {/* </li> */}
        </div>
    );
    }
    
    export default Video;