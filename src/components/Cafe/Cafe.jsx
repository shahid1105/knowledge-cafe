import React, { useEffect, useState } from "react";
import Block from "../Block/Block";
import Bookmarked from "../Bookmarked/Bookmarked";
import QuestionAnswer from "../Question/QuestionAnswer";
import SetTitle from "../setTitle/SetTitle";
import SideBar from "../SideBar/SideBar";
import "./Cafe.css";

const Cafe = () => {
  const [cafeElements, setCafeElements] = useState([]);

  const [sideBarTime, setSideBar] = useState([]);

  const [bookmarkedCount, setBookmarked] = useState([]);

  const [bookmarkedTitle, setBookmarkedTitle] = useState([]);

  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setCafeElements(data));
  }, []);

  const bookmarkedClicked = (cafeElements) => {
    const newBookmarked = [...bookmarkedCount, cafeElements];
    setBookmarked(newBookmarked);
    const newBookmarkedTitle = [...bookmarkedTitle, cafeElements];
    setBookmarkedTitle(newBookmarkedTitle);
  };

  const clickHandler = (cafeElements) => {
    const newSideBar = [...sideBarTime, cafeElements];
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
          <SideBar elements={sideBarTime}></SideBar>
        </div>
        <div className="bookmarked-blogs">
          <Bookmarked bookmarkedCount={bookmarkedCount}></Bookmarked>
          <div className="setTitle">
            {bookmarkedTitle.map((titleElement) => (
              <SetTitle
                titleElement={titleElement}
                key={titleElement.id}></SetTitle>
            ))}
          </div>
        </div>
      </div>
      <div>
        <QuestionAnswer></QuestionAnswer>
      </div>
    </div>
  );
};

export default Cafe;
