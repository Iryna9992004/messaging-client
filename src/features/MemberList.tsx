import React from "react";
import { MemberDto } from "../widgets/Profile/types/MemberDto";
import Member from "../components/Member";

interface MemberList{
    list:MemberDto[]
}
export default function MemberList({list}:MemberList) {
  return (
    <div className="w-full h-fit flex flex-col p-3 items-center mt-4 cursor-pointer">
        {list.map(item=><Member key={item.id} name={item.name} email={item.email} active={item.active} phone={item.phone}/>)}
    </div>
  );
}
