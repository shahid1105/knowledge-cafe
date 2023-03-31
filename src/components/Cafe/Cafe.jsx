import React, { useEffect, useState } from "react";
import Block from "../Block/Block";
import SideBar from "../SideBar/SideBar";
import "./Cafe.css";

const Cafe = () => {
  const [cafeElements, setCafeElements] = useState([]);

  const [sideBar, setSideBar] = useState([]);

  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setCafeElements(data));
  }, []);

  const clickHandler = (cafeElements) => {
    const newSideBar = [...sideBar, cafeElements];
    setSideBar(newSideBar);
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
      <div className="Side-bar-container">
        <SideBar elements={sideBar}></SideBar>
      </div>
    </div>
  );
};

export default Cafe;
