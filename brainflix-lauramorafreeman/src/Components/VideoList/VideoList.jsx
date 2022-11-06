import "./VideoList.scss";

function VideoList(props) {
    return (
    <section className="video">
        <h3 className="video__header">NEXT VIDEOS</h3>
        <ul className="video__list">
        {props.videoList
            .filter((item) => item.id !== props.playingVideo.id)
            .map((item) => (
            <li
                className="video__list-item"
                key={item.id}
                onClick={() => {
                props.handleVideoSelection(item.id);
                }}
            >
            <div className="video__list-wrapper1">
                <img
                className="video__list-image"
                src={item.image}
                alt="video-img"
                />
                </div>
                <div className="video__list-wrapper2">
                <p className="video__list-title">{item.title}</p>
                <p className="video__list-channel">{item.channel}</p>
                </div>
            </li>
        ))}
    </ul>
    </section>
);
}

export default VideoList;