import React from "react";
import { XCircle } from "react-feather";

interface MemberProps{
    name:string,
    email:string,
    phone:string,
    active:boolean
}

export default function Member({name, email, phone, active}:MemberProps) {
  return (
    <div className="grid grid-cols-4 w-full bg-white cursor-pointer pt-4">
      <div className="text-gray-600 text-sm border-b border-gray-200 pb-4 font-semibold ">
        {name}
      </div>
      <div className="text-gray-500 text-sm border-b border-gray-200 pb-4 font-medium">
        {email}
      </div>
      <div className="text-gray-500 text-sm border-b border-gray-200 pb-4 font-medium">
        {phone}
      </div>
      <div className="text-gray-500 text-sm border-b border-gray-200 pb-4 font-medium flex items-center gap-[10px] w-full">
        <div  style={active?{background:'#52a447'}:{background:'#F62817'}} className="h-[8px] w-[8px] rounded-full" />
        <div>{active?'Active':'Unactive'}</div>
        <XCircle className="ml-auto stroke-gray-400 hover:stroke-gray-500 duration-500" />
      </div>
    </div>
  );
}
