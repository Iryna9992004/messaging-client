import React from "react";
import Pin from "../assets_socket/Pin";
import { ReactComponent as ReadMessage } from "../assets_socket/ReadMessage.svg";
import { ReactComponent as UnreadMessage } from "../assets_socket/UnreadMessage.svg";

interface ChatItem {
  id: string;
  isPinned: boolean;
  firstName: string;
  lastName: string;
  sendingTime: string;
  lastMessage: string;
  readList: string[];
  newMessages: string[];
}

export default function ChatSideBar({id, isPinned, firstName, lastName, sendingTime, lastMessage, readList, newMessages}:ChatItem) {
  return (
    <div className="flex py-2 w-full h-fit hover:bg-gray-100 px-2 rounded-md cursor-pointer duration-500">
        <div className="w-[36px] h-[36px] bg-blue-400 rounded-full" />
        <div className="flex flex-col ml-3 w-[200px]">
          
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="mr-1">
                <Pin />
              </div>
              <div className="text-sm font-medium">{firstName} {lastName}</div>
            </div>
            <div className="text-sm text-[#000000] opacity-65 font-light">
              {sendingTime}
            </div>
          </div>

          <div className="flex items-center w-full justify-between">
            <div className="text-sm text-[#000000] opacity-45">
              {lastMessage}
            </div>
            {readList.length !==0 && newMessages.length ===0? <ReadMessage />:null}
            {readList.length ===0 && newMessages.length ===0? <UnreadMessage />:null}
            {newMessages.length!==0?<div className="bg-customGreen w-[16px] h-[16px] rounded-full flex items-center justify-center p-[7px]">
              <div className="text-[9px] text-white">{newMessages.length}</div>
            </div>:null}
          </div>
        </div>
      </div>
  );
}
