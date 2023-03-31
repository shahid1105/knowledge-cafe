import React from "react";
import "./SideBar.css";

const SideBar = ({ elements }) => {
  let time = 0;
  for (const element of elements) {
    time = time + element.time;
  }
  return (
    <div>
      <h3 className="spent-time">Spent time on read : {time} min</h3>
    </div>
  );
};

export default SideBar;
