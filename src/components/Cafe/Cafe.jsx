import React, { useEffect, useState } from "react";
import Block from "../Block/Block";
import "./Cafe.css";

const Cafe = () => {
  const [cafeElements, setCafeElements] = useState([]);

  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setCafeElements(data));
  }, []);

  const clickHandler = (readMore) => {
    console.log(readMore);
  };

  return (
    <div className="main-container">
      <div className="block-container">
        {cafeElements.map((cafeElement) => (
          <Block
            clickHandler={clickHandler}
            cafeElement={cafeElement}
            key={cafeElement.id}></Block>
        ))}
      </div>
      <div className="Bookmarked-container">
        <div className="spent-time-container">
          <h3 className="spent-time">Spent time on read : min</h3>
        </div>
        <div className="bookmarked-blogs">
          <h2 className="blogs">Bookmarked Blogs : </h2>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;
