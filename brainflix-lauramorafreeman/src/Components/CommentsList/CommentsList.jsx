import "./CommentsList.scss"

const CommentsList = function (props){

    let currentDate = new Date(props.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    })

    return (
        <>
        <ul className="comments">
        <div className="comments__photo"></div>
        <li className="comments__list">
            <div className="commnets__list-wrapper1">
            <div className="comments__avatar-holder"></div>
            </div>
            <div className="comments__list-wrapper2">
                <div className="comments__list-wrapper2-info">
                    <p className="comments__name">{props.name}</p>
                    <p className="comments__date">{currentDate}</p>
                </div>
            <p className="comments__text">{props.comment}</p>
            </div>
        </li>
        </ul>
        </>
    )
}

export default CommentsList;