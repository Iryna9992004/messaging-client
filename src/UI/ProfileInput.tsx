import React, { useState } from "react";

interface ProfileProps {
  placeholder: string;
  value: string;
  setValue: (item: string)=>void;
}

export default function ProfileInput({ placeholder, value, setValue }: ProfileProps) {
  
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-[#F9F9F9] p-3 rounded-md w-full px-8 text-sm border border-gray-300 outline-none focus:border-blue-300"
      />
      <span className="absolute top-[13px] left-8 text-sm text-gray-500">
        {value==="" ?placeholder:''}
      </span>
    </div>
  );
}
