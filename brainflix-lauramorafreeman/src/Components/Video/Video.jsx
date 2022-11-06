import "./Video.scss";
import CommentsList from "../CommentsList/CommentsList";
import heart from "../../../src/icons/likes.svg"
import views from "../../../src/icons/views.svg"
import image from '../../../src/image/Mohan-muruge.jpg'

function Video(props) {
    return (
        <div>
          {/* {props.videoList.map( (item) => ( */}
        <li className="video__item">
            <video
            className="video__image"
            poster={props.playingVideo.image}
            controls
            ></video>
            <p className="video__title">{props.playingVideo.title}</p>
            <div className="video__info-wrapper">
            <div className="video__text-wrapper">
                <p className="video__channel">{props.playingVideo.channel}</p>
                <p className="video__time-stamps">{props.playingVideo.timestamp}</p>
            </div>
            <div className="video__icons-wrapper">
                <p className="video__views">{props.playingVideo.views}
                <img src={views} alt="views-icon"/>
                </p>
                <p className="video__likes">{props.playingVideo.likes}
                <img src={heart} alt="heart-icon"/>
                </p>   
            </div>
            </div>
            <p className="video__time-description">
            {props.playingVideo.description}
            </p>
        </li>
        <form className="video__form">
            <div className="video__form-wrapper1">
            <img className="header__form__avatar" src={image} alt="brainflix-avatar"/>
            </div>
            <div className="video__form-wrapper2">
            <label htmlFor=""> JOIN THE CONVERSATION</label>
            <input className="video__form-input" type="textarea" placeholder="Add a new comment" />
            <button className ="video__comment-btn">COMMENT</button>
            </div>
        </form>
        {props.playingVideo.comments.map((comment) => (
            <CommentsList
            name={comment.name}
            key={comment.id}
            date={comment.timestamp}
            comment={comment.comment}
            />
        ))}
        </div>
    );
    }
    
    export default Video;