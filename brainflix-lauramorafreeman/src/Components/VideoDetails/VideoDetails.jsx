import CommentsList from "../CommentsList/CommentsList";
import heart from "../../../src/icons/likes.svg"
import views from "../../../src/icons/views.svg"
import image from '../../../src/image/Mohan-muruge.jpg'


function VideoDetails (props){
    let currentDate = new Date(props.playingVideo.timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    })
    
    return(
        <div className="video-details">
            <p className="video__title">{props.playingVideo.title}</p>
            <div className="video__info-wrapper">
                <div className="video__text-wrapper">
                    <p className="video__channel">{props.playingVideo.channel}</p>
                    <p className="video__time-stamps">{currentDate}</p>
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
            <form className="video__form" onSubmit={(event)=>{props.handleSubmitForm(event, event.target.comment.value)}}>
                <div className="video__form-wrapper1">
                    <img className="video__form-avatar-2" src={image} alt="brainflix-avatar"/>
                </div>
                <div className="video__form-wrapper2">
                    <label className="video__label-form" htmlFor="comment"> JOIN THE CONVERSATION</label>
                    <input id="comment" name="comment" className="video__form-input" type="text" placeholder="Add a new comment" />
                    <button type="submit" className ="video__comment-btn">COMMENT</button>
                </div>
            </form>
            {props.playingVideo.comments && props.playingVideo.comments.map((comment) => (
                <CommentsList
                    name={comment.name}
                    key={comment.id}
                    date={comment.timestamp}
                    comment={comment.comment}
                />
        ))}
        </div>
    )
}

export default VideoDetails;