import React, { useState } from "react";
import Pin from "../assets_socket/Pin";
import { ReactComponent as ReadMessage } from "../assets_socket/ReadMessage.svg";
import { ReactComponent as UnreadMessage } from "../assets_socket/UnreadMessage.svg";
import ChatSideBar from "../components/ChatSideBar";

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
export default function Messages() {
  const [chatList, setChatList] = useState<ChatItem[]>([
    {
      id: "1",
      isPinned: true,
      firstName: "Vasyl",
      lastName: "Petrenko",
      sendingTime: "16:40",
      lastMessage: "How are you?",
      readList: ["Vasyl", "Petro", "Stepan"],
      newMessages: ["Hello!", "How are you?"],
    },
    {
      id: "2",
      isPinned: true,
      firstName: "Vasyl",
      lastName: "Petrenko",
      sendingTime: "16:40",
      lastMessage: "How are you?",
      readList: ["Vasyl", "Petro", "Stepan"],
      newMessages: [],
    },
    {
      id: "3",
      isPinned: true,
      firstName: "Vasyl",
      lastName: "Petrenko",
      sendingTime: "16:40",
      lastMessage: "How are you?",
      readList: [],
      newMessages: ["Hello!", "How are you?"],
    },
  ]);
  return (
    <div className="flex flex-col mt-3">

      {chatList.map((item) => (
        <ChatSideBar
          id={item.id}
          isPinned={item.isPinned}
          firstName={item.firstName}
          lastName={item.lastName}
          lastMessage={item.lastMessage}
          sendingTime={item.sendingTime}
          readList={item.readList}
          newMessages={item.newMessages}
        />
      ))}
      <div className="flex py-2 w-full h-fit hover:bg-gray-100 px-2 rounded-md cursor-pointer duration-500">
        <div className="w-[36px] h-[36px] bg-blue-400 rounded-full" />
        <div className="flex flex-col ml-3 w-[200px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="mr-1">
                <Pin />
              </div>
              <div className="text-sm font-medium">John Doe</div>
            </div>
            <div className="text-sm text-[#000000] opacity-65 font-light">
              16:45
            </div>
          </div>

          <div className="flex items-center w-full justify-between">
            <div className="text-sm text-customGreen">... is typing</div>
            <div className="bg-customGreen w-[16px] h-[16px] rounded-full flex items-center justify-center p-[7px]">
              <div className="text-[9px] text-white">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
