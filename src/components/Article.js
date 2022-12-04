import HightlightPopularAndNew from "./HightlightPopularAndNew";

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

export default HightlightPopularAndNew(Article);