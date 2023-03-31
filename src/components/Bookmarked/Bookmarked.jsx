import React from "react";
import "./Bookmarked.css";

const Bookmarked = ({ bookmarked }) => {
  return (
    <div>
      <div>
        <h2 className="blogs">Bookmarked Blogs : {bookmarked.length}</h2>
      </div>
    </div>
  );
};

export default Bookmarked;
