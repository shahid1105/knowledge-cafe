import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Block.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Block = (props) => {
  const { id, time, title, date, authorName, bgUrl, personImg } =
    props.cafeElement;
  const clickHandler = props.clickHandler;
  const bookmarkedClicked = props.bookmarkedClicked;

  const handleToast = () => {
    toast("wow!!!");
  };

  return (
    <div className="block-card">
      <img className="bg-url" src={bgUrl} alt="" />
      <div className="person-time">
        <div className="person-container">
          <div>
            <img className="person-img" src={personImg} alt="" />
          </div>
          <div>
            <h3 className="name">{authorName}</h3>
            <p className="date">{date}</p>
          </div>
        </div>
        <div>
          <p>
            {time} min read{" "}
            <button onClick={() => bookmarkedClicked(title)}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </p>
        </div>
      </div>
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <div className="hash-tag">
        <p>#beginners</p>
        <p>#programming</p>
      </div>
      <p className="mark-as" onClick={() => clickHandler(props.cafeElement)}>
        Mark as read
      </p>
      <hr className="border-bottom" />
    </div>
  );
};

export default Block;
