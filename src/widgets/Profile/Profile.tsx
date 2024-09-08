import React, { useEffect, useState } from "react";
import { Bell, Copy, Edit2 } from "react-feather";
import SearchForm from "../../components/SearchForm";
import SelectActivity from "../../UI/SelectActivity";
import ProfileInput from "../../UI/ProfileInput";
import MemberList from "../../features/MemberList";
import { MemberDto } from "./types/MemberDto";
import UserPhoto from "../../UI/UserPhoto";
import ProfileNavbar from "../../features/ProfileNavbar";

export default function Profile() {
  const [memberList, setMemberList] = useState<MemberDto[]>([
    {
      id: "1",
      name: "John Me",
      email: "john@gmail.com",
      phone: "08734566",
      active: true,
    },
    {
      id: "2",
      name: "John Me",
      email: "john@gmail.com",
      phone: "08734566",
      active: false,
    },
    {
      id: "3",
      name: "John Me",
      email: "john@gmail.com",
      phone: "08734566",
      active: true,
    },
  ]);
  const [userData, setUserData] = useState<any>({});
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserData(parsedUser);
      if (parsedUser.companyName) {
        setUserName(parsedUser.companyName);
      } else if (parsedUser.firstName && parsedUser.lastName) {
        setUserName(`${parsedUser.firstName} ${parsedUser.lastName}`);
      }
    }
  }, []);

  return (
    <div
      className="fixed left-[364px] bg-[#FAFAFA] h-full flex flex-col px-6 pr-10 overflow-auto"
      style={{ width: `calc(100vw - 364px)` }}
    >
      <div className="sticky top-0 h-[100px] w-full flex items-center  py-4 justify-between bg-[#FAFAFA] z-[1000]">
        <ProfileNavbar />

        <div className="flex items-center gap-2">
          <div className="w-[46px] h-[46px] bg-blue-300 rounded-md"></div>

          <div className="w-[46px] h-[46px] bg-white rounded-md flex items-center justify-center cursor-pointer">
            <Bell className="stroke-[#ADA7A7]" />
          </div>
        </div>
      </div>

      <div className="bg-white pb-8 rounded-br-lg rounded-bl-lg">
        <div
          className="h-[100px] w-full opacity-60 rounded-tr-lg rounded-tl-lg"
          style={{
            background: "linear-gradient(135deg, #00bfff 0%, #87cefa 100%)",
          }}
        ></div>

        <div className="mt-5 flex items-center justify-between p-3">
          <div className="flex gap-4 items-center">
            <UserPhoto />

            <div className="flex flex-col">
              <div className="text-gray-700 flex items-center gap-4">
                <div className="font-oswald font-semibold text-lg">
                  {userName}
                </div>{" "}
                <Copy className="stroke-gray-400 hover:stroke-gray-600 cursor-pointer duration-500" />
              </div>
              <div className="font-medium text-sm text-gray-600">
                {userData.email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[5px]">
            <button className="bg-[#4182F9] w-[93px] text-white rounded-md text-sm px-3 py-3 duration-500 hover:bg-blue-600">
              Save
            </button>
          </div>
        </div>

        {userData.role==="company"?<div className="flex p-3 flex-col gap-3">
          <ProfileInput placeholder="Company Name" />
        </div>:null}

        {userData.role==="worker"?<div className="flex p-3 flex-col gap-3">
          <ProfileInput placeholder="First Name" />
          <ProfileInput placeholder="Last Name" />
        </div>:null}

        <div className="flex flex-col p-3 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="text-[#000000] text-xl font-oswald ml-3">
              All members
            </div>

            <div className="flex gap-3">
              <div className="w-[250px] ">
                <SearchForm />
              </div>

              <SelectActivity />
            </div>
          </div>

          <MemberList list={memberList} />
        </div>
      </div>
    </div>
  );
}
