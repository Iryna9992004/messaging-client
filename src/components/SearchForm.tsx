import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets_socket/Search.svg";

export default function SearchForm() {
  const [searchText, setSearchText]=useState("")
  return (
    <div className="relative h-[30px] w-full">
      <SearchIcon className="absolute top-[14px] left-5 cursor-pointer" />
      <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} className="w-full bg-[#EEEEEE] border border-gray-200 h-[36px] rounded-xl outline-none focus:border-blue-300 p-5 pl-11 text-sm text-gray-600" />
      <span className="absolute left-11 top-[11px] text-sm text-[#000000] opacity-45 pointer-events-none">
        {searchText===""?'Search':''}
      </span>
    </div>
  );
}
