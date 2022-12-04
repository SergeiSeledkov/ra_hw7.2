import HightlightPopularAndNew from "./HightlightPopularAndNew";

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

export default HightlightPopularAndNew(Video);