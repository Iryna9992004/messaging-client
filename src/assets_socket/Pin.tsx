import React, { useState } from "react";

export default function Pin() {
    const [isHover, setIsHover]=useState(false)
  return (
    <button onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.157 5.086L9.44949 5.793L9.09599 5.4395L6.97499 7.5605L6.62149 9.3285L5.91399 10.0355L3.79299 7.914L1.31799 10.389L0.610992 9.682L3.08599 7.207L0.964492 5.086L1.67149 4.3785L3.43999 4.025L5.56099 1.904L5.20749 1.5505L5.91449 0.843L10.157 5.086Z"
        fill="black"
        fill-opacity={isHover?"0.65":"0.45"}
      />
    </svg>
    </button>
  );
}
