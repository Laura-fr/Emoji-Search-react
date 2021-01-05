import React, { useState } from "react";

const Emoji = (props) => {
  const [hoverLine, setHoverLine] = useState(false);

  return (
    <div
      className="line"
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
      onClick={() => {
        navigator.clipboard.writeText(props.symbol);
      }}
    >
      <span>
        {props.title} {props.symbol}
      </span>
      {hoverLine && <span className="copy">Click to copy !</span>}
    </div>
  );
};

export default Emoji;
