import "./cards.css";
import playListIcon from "../../icons/playlist.svg";
import scheduleIcon from "../../icons/schedule.svg";
import { useNavigate } from "react-router-dom";
import { cardsData } from "../constants/cards-data";

// import { useSearchParams } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  //   const [searchParams, s;etSearchParams] = useSearchParams();
  //   console.log("-------", searchParams);
  return (
    <div className="cards-main-container">
      {cardsData.map((elem, idx) => {
        return (
          <div
            className="cards-item"
            onClick={() => navigate(`/click?id=${idx}`)}
          >
            <div className="image-container">
              <img className="card-img1" src={elem.imgUrl}></img>
              <img className="card-img2" src={elem.imageHover}></img>
              <div className="video-duration">9:30</div>
              <div className="watch-icon-container">
                <img className="watch-icon" src={scheduleIcon}></img>
              </div>
              <div className="playlist-icon-container">
                <img className="playlist-icon" src={playListIcon}></img>
              </div>
            </div>
            <p className="title1">{elem.title}</p>
            <div className="heading-container">
              <span className="days1">{elem.views}</span>
              <div className="dot"></div>
              <span className="views1">{elem.days}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Cards;
// const Cards = () => {
//   return (
//     <div className="cards-main-container">
//       <div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div>
//         <div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div><div className="cards-item">
//         <img className="card-img" src="https://i.ytimg.com/vi/RGT9D_hFtnI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApMdFo8Z5K7OacZqh1Wv3WeBUK-g"></img>
//         <p className="title1">5 Design Patterns to Learn Before Your Interview</p>
//         <span className="views1">131 views . </span>
//         <span className="days1">1 day ago</span>
//         </div>
//       This is cards
//     </div>
//   );
// };
