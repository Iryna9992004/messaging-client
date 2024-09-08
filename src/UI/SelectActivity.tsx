import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "react-feather";

export default function SelectActivity() {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem]=useState("Status")
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-fit">
      <div
        style={isOpened?{border:'1px solid #4fbfff'}:{}}
        className="w-[160px] border border-gray-200 rounded-xl text-sm p-3 text-gray-400 outline-none relative h-[42px] cursor-pointer"
        onClick={() => setIsOpened(true)}
      >
        <ChevronDown style={isOpened?{transform:'rotate(180deg)', stroke:'#4fbfff'}:{}} className="absolute top-[15px] right-[10px] h-[15px] w-[15px]" />
        <div>{selectedItem}</div>
      </div>

      {isOpened ? (
        <div className="absolute bg-white shadow-md p-2 rounded-lg w-[160px] top-[50px]">
          <div onClick={()=>{setSelectedItem('Active'); setIsOpened(false)}} className="text-sm p-1 text-gray-500 hover:bg-gray-100 duration-500 rounded-md cursor-pointer flex items-center gap-[6px]">
            <div className="bg-green-600 h-[8px] w-[8px] rounded-full" />
            <div>Active</div>
          </div>
          <div onClick={()=>{setSelectedItem('Unactive'); setIsOpened(false)}} className="text-sm p-1 text-gray-500 hover:bg-gray-100 duration-500 rounded-md cursor-pointer flex items-center gap-[6px]">
            <div className="bg-red-600 h-[8px] w-[8px] rounded-full" />
            <div>Unactive</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

