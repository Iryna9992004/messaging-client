import React, { useState } from "react";

export default function Send() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <button
      onFocus={() => setIsSelected(true)}
      onBlur={() => setIsSelected(false)}
      onMouseEnter={() => setIsSelected(true)}
      onMouseLeave={() => setIsSelected(false)}
      style={
        isSelected
          ? {
              padding: 15,
              borderRadius: 16,
              background: "#27AE60",
              transition: "0.6s",
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }
          : {
              padding: 15,
              borderRadius: 16,
              background: "#FAFAFA",
              transition: "0.6s",
            }
      }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isSelected ? "white" : "#27AE60"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    </button>
  );
}
