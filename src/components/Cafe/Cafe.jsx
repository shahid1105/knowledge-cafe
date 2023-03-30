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
  return (
    <div className="main-container">
      <div className="block-container">
        {cafeElements.map((cafeElement) => (
          <Block cafeElement={cafeElement} key={cafeElement.id}></Block>
        ))}
      </div>
      <div className="Bookmarked-container">
        <h3>iodjafraeihtfoarijf;lasdkjfashfoawif</h3>
      </div>
    </div>
  );
};

export default Cafe;
