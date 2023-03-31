import React from "react";
import "./SetTitle.css";

const SetTitle = (props) => {
  const { title } = props.cafeElement;
  return (
    <div className="title-side-bar">
      <p>{title}</p>
    </div>
  );
};

export default SetTitle;
