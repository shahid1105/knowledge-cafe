import React, { useEffect, useState } from "react";
import Block from "../Block/Block";
import Bookmarked from "../Bookmarked/Bookmarked";
import SideBar from "../SideBar/SideBar";
import "./Cafe.css";

const Cafe = () => {
  const [cafeElements, setCafeElements] = useState([]);

  const [sideBar, setSideBar] = useState([]);

  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setCafeElements(data));
  }, []);

  const bookmarkedClicked = (cafeElements) => {
    const newBookmarked = [...bookmarked, cafeElements];
    setBookmarked(newBookmarked);
  };

  const clickHandler = (cafeElements) => {
    const newSideBar = [...sideBar, cafeElements];
    setSideBar(newSideBar);
  };

  return (
    <div className="main-container">
      <div className="block-container">
        {cafeElements.map((cafeElement) => (
          <Block
            bookmarkedClicked={bookmarkedClicked}
            clickHandler={clickHandler}
            cafeElement={cafeElement}
            key={cafeElement.id}></Block>
        ))}
      </div>
      <div className="Side-bar-container">
        <div className="spent-time-container">
          <SideBar elements={sideBar}></SideBar>
        </div>
        <div className="bookmarked-blogs">
          <Bookmarked bookmarked={bookmarked}></Bookmarked>
        </div>
      </div>
    </div>
  );
};

export default Cafe;
