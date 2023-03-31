import React from "react";
import "./SetTitle.css";

const SetTitle = ({ titleElement }) => {
  return (
    <div>
      <p className="title-side-bar">{titleElement}</p>
    </div>
  );
};

export default SetTitle;
