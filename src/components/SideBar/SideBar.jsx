import React from "react";

const SideBar = ({ elements }) => {
  let time = 0;
  for (const element of elements) {
    time = time + element.time;
  }
  return (
    <div>
      <div className="spent-time-container">
        <h3 className="spent-time">Spent time on read : {time} min</h3>
      </div>
      <div className="bookmarked-blogs">
        <h2 className="blogs">Bookmarked Blogs : </h2>
        <div></div>
      </div>
    </div>
  );
};

export default SideBar;
