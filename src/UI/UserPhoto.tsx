import React, { useState } from "react";
import { Edit2 } from "react-feather";

export default function UserPhoto() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative w-fit h-fit"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="h-[100px] w-[100px] rounded-full bg-blue-400 flex items-center justify-center pointer-events-none cursor-pointer">
        {hover ? <Edit2 className="stroke-gray-300 cursor-pointer" /> : null}
      </div>
      <input
        type="file"
        className="w-[100px] h-[100px] rounded-full absolute top-0 left-0 right-0 bottom-0 z-[10000] opacity-0"
      />
    </div>
  );
}
