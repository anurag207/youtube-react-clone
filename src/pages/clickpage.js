import { useSearchParams } from "react-router-dom";
import { cardsData } from "../constants/cards-data";
import Navbar from "../components/navbar";
import "./clickpage.css";
import { sideVideoData } from "../constants/videolist-data";
import {useState} from "react";
import moment from "moment/moment.js";

const ClickPage = () => {
  const [searchParams, _] = useSearchParams();
    // console.log(searchParams);
  const videoIndex = searchParams.get("id");
  const [val,setVal]=useState();
  const [result,setResult]=useState();
  const [currentTime,setCurrentTime]=useState();
  function handleSubmit(e)
  {
    //var currrentTime=moment();
   e.preventDefault();
    setResult(val);
    setCurrentTime(moment().format("hh:mm:ss"));
    console.log("Function called");
  }
  function handChange(e)
  {
    setVal(e.target.value);
    //setResult("");
  }
  return (
    <div className="clickpage-main-container">
      <Navbar />
      <div className="grid-main-container">
        <div className="main-video-container">
          <iframe
          id="id-video"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/RrowwUGJB-o?si=pIyhIahqjt42EOVs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h2 class="main-video-title">{cardsData[videoIndex].title}</h2>
          <div className="comment-inputbox-container">
            <h2 className="comment-title">1 Comment</h2>
            <form method="post" onSubmit={handleSubmit}>
            <input onChange={handChange}
              class="input-comment-box"
              type="text"
              placeholder="Add a comment..."
            ></input>
            <button class="button-add-comment"type="sumbit">Add Comment</button>
            </form>
            <div class="comment-text"></div>
            <p>{currentTime} {result} </p>
          </div>
        </div>
        <div className="side-video-container">
          {cardsData.map((elem) => {
            return (
              <div className="video-list-container">
                <div className="side-video-item">
                <img
                  className="side-video item1"
                  src={elem.imgUrl}
                ></img>
              <img className="side-video item2" src={elem.imageHover}></img>
                  </div>
                <p>{elem.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ClickPage;
