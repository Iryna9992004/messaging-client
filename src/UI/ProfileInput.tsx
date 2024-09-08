import React, { useState } from "react";

interface ProfileProps {
  placeholder: string;
}

export default function ProfileInput({ placeholder }: ProfileProps) {
  const [text, setText] = useState("");
  return (
    <div className="relative w-full">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-[#F9F9F9] p-3 rounded-md w-full px-8 text-sm border border-gray-300 outline-none focus:border-blue-300"
      />
      <span className="absolute top-[13px] left-8 text-sm text-gray-500">
        {text==="" ?placeholder:''}
      </span>
    </div>
  );
}
