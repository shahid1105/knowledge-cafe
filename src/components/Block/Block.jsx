import React from "react";
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
            <h3>{authorName}</h3>
            <p>{date}</p>
          </div>
        </div>
        <div>
          <p>{time} min read</p>
          <p></p>
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
