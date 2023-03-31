import React from "react";
import "./Bookmarked.css";

const Bookmarked = ({ bookmarkedCount }) => {
  return (
    <div>
      <div>
        <h2 className="blogs">Bookmarked Blogs : {bookmarkedCount.length}</h2>
      </div>
    </div>
  );
};

export default Bookmarked;
