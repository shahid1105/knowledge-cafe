import React, { useEffect, useState } from "react";

const Block = () => {
  const [blockElements, setBlockElements] = useState([]);

  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="main-container">
      <div className="block-container">
        <h1>asdlkfjfdhoifg</h1>
      </div>
      <div className="blogs-container">
        <h3>iodjafraeihtfoarijf;lasdkjfashfoawif</h3>
      </div>
    </div>
  );
};

export default Block;
