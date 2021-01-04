import React from "react";

const Emoji = (props) => {
  return (
    <div className="line">
      <span>
        {props.title} {props.symbol}
      </span>
    </div>
  );
};

export default Emoji;
