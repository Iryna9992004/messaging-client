import React, { useEffect} from "react";
import SideBar from "../widgets/SideBar";
import Messages from "../widgets/Messages";

import Profile from "../widgets/Profile/Profile";
import SearchForm from "../components/SearchForm";
import Loader from "../components/Loader";

export default function MessagePage() {

  return (
    <div className="relative w-[100vw] h-[100vh] bg-white">
      
      <div className="fixed w-[64px] bg-[#FAFAFA] h-full flex items-center px-3 py-8 pb-2 flex-col">
        <a className="w-[32px] h-[32px] bg-blue-500 rounded-full mb-5 cursor-pointer"></a>
        <div className="bg-[#000000] opacity-10 h-[1px] w-full"></div>

        <SideBar />
      </div>

      <div className="fixed left-[64px] w-[300px] border-r border-gray-300 h-full bg-white px-4 py-8 flex flex-col">
        <div className="text-2xl font-oswald font-medium mb-5">Messages</div>

        <SearchForm />

        <Messages />
      </div>

      <Profile />
    </div>
  );
}
