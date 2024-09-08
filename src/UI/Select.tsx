import React, { useState } from "react";
import { Aperture, ChevronDown } from "react-feather";

type Role = "worker" | "company";

interface SelectProps {
  list: string[];
  text: string;
  selectRole: (item: string) => void;
}
export default function Select({ list, text, selectRole }: SelectProps) {
  const [isListOpened, setIsListOpened] = useState(false);

  const handleSelectRole = (item: string) => {
    selectRole(item);
    setIsListOpened(false);
  }
  return (
    <div className="relative w-full">
      <div className="w-full outline-none h-[40px] rounded-full shadow-sm text-xs text-gray-400 border border-gray-300 px-11 relative bg-gray-100 cursor-pointer" onClick={() => setIsListOpened(true)}>
        <div className="absolute top-[10px] font-medium">{text}</div>
        <div className="absolute left-[10px] h-2 w-2 top-[7px]"><Aperture /></div>
        <div className="absolute right-[10px] top-[13px]"><ChevronDown className="h-[15px]" style={isListOpened? {transform: 'rotate(180deg)'}:{}}/></div>
      </div>

      {isListOpened?<div className="w-full bg-white p-2 rounded-lg z-[10000] shadow-md absolute top-[45px]">
        {list.map((item) => (
          <div
            key={item}
            onClick={() => {handleSelectRole(item)}}
            className="w-full hover:bg-gray-100 rounded-lg p-1 text-[12px] text-gray-500 px-2 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>:null}

    </div>
  );
}
