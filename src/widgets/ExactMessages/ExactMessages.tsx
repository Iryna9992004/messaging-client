import React, { useState } from "react";
import { ReactComponent as UnreadMessage } from "../../assets_socket/UnreadMessage.svg";
import { Video, Phone, Slash } from "react-feather";
import More from "../../assets_socket/More";
import { MessageDto } from "./types/MessageDto";

export default function ExactMessages() {
  const [messages, setMessages]=useState<MessageDto[]>([{
    id:'1',
    text:'hello!',
    date:'12:40',
    owner:'me'
  }])
  return (
    <div
      className="fixed left-[364px] bg-[#FAFAFA] h-full flex flex-col"
      style={{ width: `calc(100vw - 364px)` }}
    >
      <nav className="sticky top-0 w-full h-[65px] bg-white flex items-center justify-between px-4 py-4 border-b border-gray-300 pr-10">
        <div className="flex gap-3 items-start cursor-pointer">
          <div className="w-[45px] h-[45px] bg-green-500 rounded-full" />
          <div className="flex flex-col">
            <span className="font-medium text-lg font-oswald">
              Travis Barker
            </span>
            <span className="text-customGreen text-sm">Online</span>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <Slash className="stroke-gray-400 cursor-pointer hover:stroke-gray-500 duration-500" />
          <Phone className="stroke-gray-400 cursor-pointer hover:stroke-gray-500 duration-500" />
          <Video className="stroke-gray-400 cursor-pointer hover:stroke-gray-500 duration-500" />
        </div>
      </nav>

      <div className="flex-1 flex flex-col pt-[10px] px-5 pr-10 justify-end mb-[50px]">
        <div
          className="grid gap-1 items-center mt-10 mb-10"
          style={{ gridTemplateColumns: "1fr 70px 1fr" }}
        >
          <div className="h-[1px] bg-[#EEEEEE]"></div>
          <div className="w-[70px] flex justify-center">
            <span className="text-sm text-[#000000] opacity-45">Today</span>
          </div>
          <div className="h-[1px] bg-[#EEEEEE]"></div>
        </div>

        <div className="flex flex-col self-start bg-[#F4F4F7] rounded-xl h-fit w-fit py-3 px-4">
          <span className="text-[#000000] text-sm mb-1">
            See you at office tomorrow!
          </span>
          <span className="text-[#000000] opacity-45 font-medium text-xs">
            15:42
          </span>
        </div>

        <div className="flex flex-col self-end bg-[#F4F4F7] rounded-xl h-fit w-fit py-3 px-4">
          <span className="text-[#000000] text-sm mb-1">
            See you at office tomorrow!
          </span>
          <div className="flex items-center gap-2 self-end">
            <UnreadMessage />
            <span className="text-[#000000] opacity-45 font-medium text-xs">
              15:42
            </span>
          </div>
        </div>
      </div>

      <nav className="sticky bottom-0 bg-white h-[48px] border-t border-gray-300 px-5 py-2 pr-10 flex items-center gap-5">
        <More />

        <div className="relative w-full">
          <input className="bg-white rounded-lg w-full outline-none text-md text-gray-500" />
          <span className="absolute left-0 text-[#000000] opacity-45 text-sm pointer-events-none top-[3px]">
            Type a message here...
          </span>
          <a className="absolute right-0 text-customGreen text-sm font-medium cursor-pointer">
            Send a message
          </a>
        </div>
      </nav>
    </div>
  );
}
