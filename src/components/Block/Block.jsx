import React from "react";
import "./Block.css";

const Block = (props) => {
  const { title, date, authorName, bgUrl, personImg } = props.cafeElement;

  console.log(bgUrl);
  return (
    <div className="block-card">
      <img className="bg-url" src={bgUrl} alt="" />
      <div>
        <div className="person-container">
          <div>
            <img className="person-img" src={personImg} alt="" />
          </div>
          <div>
            <h3>{authorName}</h3>
            <p>{date}</p>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <div className="hash-tag">
        <p>#beginners</p>
        <p>#programming</p>
      </div>
      <p className="mark-as">Mark as read</p>
      <hr className="border-bottom" />
    </div>
  );
};

export default Block;
