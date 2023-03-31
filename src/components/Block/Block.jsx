import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./Block.css";

const Block = (props) => {
  const { time, title, date, authorName, bgUrl, personImg } = props.cafeElement;

  const clickHandler = props.clickHandler;

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
            {time} min read <FontAwesomeIcon icon={faBookmark} />
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
